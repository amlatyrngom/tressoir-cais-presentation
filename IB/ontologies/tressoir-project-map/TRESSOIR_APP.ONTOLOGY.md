---
name: tressoir-app
description: Architecture and invariants for Tressoir's Node supervisor, daemon dashboard, session routing, frontend, and VS Code bridge. MUST BE FULLY CONSULTED for daemon, session supervisor, frontend, networking, socket transport, launcher, and bridge changes.
metadata:
  pin: false
---

# TRESSOIR_APP Ontology

## Overview / Architecture / Flow

`TRESSOIR_APP` covers the TypeScript/Node/browser/editor side of Tressoir under `tressoir_app/`:

- `tressoir_app/supervisor/` — public Node launcher, daemon, daemon persistence/API, session process coordinator, internal per-session supervisor, and subsystem orchestration.
- `tressoir_app/frontend/` — React/Vite daemon dashboard and React/Vite per-session UI.
- `tressoir_app/bridge/` — code-server / VS Code extension that connects editor commands to the Python SDK runtime.
- `tressoir_app/sdk-client/` — packaged browser SDK client artifacts.

The current product architecture is daemon-first:

```text
npx tressoir --daemon
  └─ daemon HTTP server (default 0.0.0.0:5172)
      ├─ token-gated daemon dashboard and /api/daemon/*
      ├─ SQLite daemon/session store under ~/.tressoir/daemons/<daemon-id>/
      ├─ daemon-owned frontend assets and /sessions/<slug>/ routes
      └─ SessionProcessCoordinator
          └─ internal session supervisor child
              ├─ Python SDK backend      # Unix socket in daemon-managed sessions
              ├─ code-server editor      # Unix socket in daemon-managed sessions
              ├─ supervisor API          # Unix socket in daemon-managed sessions
              └─ no per-session Vite     # daemon owns frontend route
```

Public standalone one-session Node app mode is removed. No-arg public `npx tressoir` / `npx tressoir-app` prints daemon help. Internal session-runner mode still exists for daemon child processes and is gated by `TRESSOIR_INTERNAL_SESSION_RUNNER=1`. Python direct/headless SDK compatibility remains outside the public Node browser path via `python -m tressoir run`.

### Daemon process

The daemon owns:

- the central browser-facing HTTP server;
- daemon token auth and unlock flow;
- daemon/session REST APIs;
- daemon Model Gateway / Codex OAuth APIs;
- SQLite daemon and session persistence;
- per-session log files;
- session lifecycle start/stop/kill/delete actions;
- same-origin session gateway routes under `/sessions/<slug>/...`;
- session Browser/webview routes under `/sessions/<slug>/webviews/...`;
- proxying/gatewaying to internal SDK/editor/supervisor API targets;
- daemon-routed editor bridge WebSocket endpoints.

Daemon persistent state is under:

```text
~/.tressoir/daemons/<daemon-id>/
  daemon.db
  daemon.pid
  logs/
    daemon.log
    sessions/<session-id>.log
```

Daemon startup writes recoverable access URLs to `logs/daemon.log` when token auth is enabled.

Subprocess lifecycle ownership is part of daemon correctness. Any daemon-started process tree must either stay under an owning daemon/session coordinator or be torn down on normal shutdown, restart/stop/kill actions, failed startup, failed port binding, and force-takeover paths. Wrapper commands that can spawn grandchildren should be owned as a process group on Unix-like systems where practical so cleanup reaches the whole tree rather than only the immediate wrapper process.

### Daemon-managed session

A daemon-managed session is a persisted `DaemonSessionRecord` plus runtime state. Session records carry user-facing fields such as title, slug, cwd, IB root, derived `workspaces`, `isolation`, and `launchTarget`; runtime state carries socket-backed endpoints, nullable public ports, supervisor PID, `transportState`, timestamps, and error state.

The daemon starts a child Node supervisor process with:

- `cwd` set to the session working directory;
- inherited environment, preserving venv/PATH behavior;
- `TRESSOIR_INTERNAL_SESSION_RUNNER=1`;
- `TRESSOIR_PARENT_DAEMON_PID=<daemon pid>`;
- `TRESSOIR_SESSION_SLUG=<slug>`;
- short Unix socket paths for SDK/editor/supervisor API;
- `TRESSOIR_BRIDGE_WS_URL` pointing to a daemon-routed bridge WebSocket with a per-session bridge token.

Daemon create/update derives `workspaces` from session `cwd` plus `ibRoot`; callers do not supply arbitrary workspaces through the daemon session API. Runtime port fields are `null` for daemon-managed socket-backed services; socket-path fields carry actual internal endpoints.

### Internal session supervisor

`runSupervisor(config)` orchestrates session subsystems:

- SDK backend: Python `tressoir run` over TCP or Unix socket.
- code-server editor over loopback TCP or Unix socket.
- Vite frontend only for direct/non-daemon session mode.
- Supervisor API over TCP or Unix socket.

Daemon-managed sessions use socket environment variables and no per-session frontend. Direct/internal compatibility paths can still use TCP ports and Vite.

### Frontend surfaces

`@tressoir/frontend` is a multi-page React/Vite app:

- `index.html` / `src/main.tsx` -- session UI with chat, agents, editor, permissions, settings, replay, IB, and embedded Browser/webview surfaces.
- `daemon.html` / `src/daemon/main.tsx` -- daemon dashboard with token unlock, sessions list, create/edit modal, details, lifecycle actions, and Model Gateway/OAuth controls.
- shared layout/theme primitives -- `ThemeProvider`, `Drawer`, CSS tokens, and `IconStripBase`.

The daemon dashboard is separate from the session UI. It does not expose agent/chat/editor/IB/security surfaces; it manages daemon sessions and daemon status.

### Editor bridge

The VS Code/code-server extension is an editor bridge, not a session manager. Extension-owned session lifecycle UX is removed. The bridge connects to `/bridge/editor` through either:

- preferred daemon/session `TRESSOIR_BRIDGE_WS_URL` with per-session token;
- fallback `TRESSOIR_SDK_HOST` / `TRESSOIR_SDK_PORT` for direct TCP compatibility.

The extension exposes editor commands, plugin-hosted commands, and dirty-file indication.

## Interface / Schema / Vocabulary / Basic Usage

### Public launcher modes

```bash
npx tressoir --daemon
npx tressoir --daemon --host 127.0.0.1 --port 5172
npx tressoir --daemon --token auto
npx tressoir --daemon --token none
```

Current launcher rules:

- public Node launcher mode is daemon-only;
- no-arg `tressoir` / `tressoir-app` prints daemon help;
- `--port` in public daemon mode means daemon dashboard/API port;
- internal session-runner flags are not public standalone app mode;
- direct/headless Python SDK runtime remains `python -m tressoir run`.

### Daemon auth API

```text
GET  /api/daemon/auth/check
POST /api/daemon/auth/exchange
POST /api/daemon/auth/logout
```

Auth defaults to token mode `auto`. `--token none` is the explicit local/dev escape hatch. Token exchange sets an HttpOnly same-origin cookie. Bearer auth is accepted for daemon token and lease-token takeover paths. Query tokens are consumed and removed from URLs.

### Daemon management API

```text
GET    /api/daemon/status
POST   /api/daemon/shutdown

GET    /api/daemon/sessions
POST   /api/daemon/sessions
GET    /api/daemon/sessions/:id
PATCH  /api/daemon/sessions/:id
DELETE /api/daemon/sessions/:id

POST   /api/daemon/sessions/:id/start
POST   /api/daemon/sessions/:id/stop
POST   /api/daemon/sessions/:id/kill
GET    /api/daemon/sessions/:id/logs
```

Session responses include browser-facing helpers such as:

```ts
openPath:   `/sessions/<slug>/`
openUrl:    absolute daemon-origin URL when request origin is known
editorPath: `/sessions/<slug>/editor/`
logPath:    `~/.tressoir/daemons/<daemon-id>/logs/sessions/<session-id>.log`
logCommand: `tail -f "<logPath>"`
```

Detailed daemon dashboard session envelopes also surface `launchTarget`, `runtime.transportState`, socket-backed endpoint info, and log paths for status/detail UIs.

### Daemon Model Gateway and OAuth APIs

```text
GET  /api/daemon/oauth/codex
POST /api/daemon/oauth/codex/connect
POST /api/daemon/oauth/codex/stop
POST /api/daemon/oauth/codex/test-chat

GET  /api/daemon/model-gateway/config
PUT  /api/daemon/model-gateway/config
POST /api/daemon/model-gateway/codex-helper
```

These daemon-owned routes back the dashboard's Model Gateway/OAuth modal and smoke chat rather than a per-session configuration surface.

### Session gateway routes

```text
/sessions/<slug>/
/sessions/<slug>/editor/...
/sessions/<slug>/webviews/...
/sessions/<slug>/api/supervisor/...
/sessions/<slug>/ping
/sessions/<slug>/api/config
/sessions/<slug>/service/...
/sessions/<slug>/service_stream/...
/sessions/<slug>/bridge/editor
```

All browser session routes are daemon-auth-gated before proxying, except bridge WebSocket authentication can use a per-session bridge token. The browser sees ordinary HTTP/WebSocket routes; Unix sockets are internal transport. Browser/webview control and event APIs remain session-supervisor routes under `/api/supervisor/webviews/...`, while user-visible frame/content paths route through daemon-owned session paths.

### Internal supervisor API

```text
GET  /api/supervisor/status
GET  /api/supervisor/config
POST /api/supervisor/start/:subsystem
POST /api/supervisor/stop/:subsystem
POST /api/supervisor/restart/:subsystem
POST /api/supervisor/restart-supervisor
POST /api/supervisor/shutdown
POST /api/supervisor/workspaces
```

Subsystem status includes `port: number | null` and `transport: "tcp" | "unix"`. Daemon-routed Settings keeps SDK/editor/full-supervisor restart controls while hiding the daemon-owned frontend subsystem row.

### Persistence data model

`daemon-store.ts` owns SQLite schema and migrations. Important tables include:

```text
daemon_meta
leases
sessions
session_runtime
```

Session records include stable IDs, title, cwd, IB root, derived workspaces, isolation, launchTarget, slug, status, and timestamps. Runtime records include supervisor PID, nullable ports, socket paths, `transportState`, timestamps, and error messages. Obsolete `port_offset` is migration-only and is not part of the current schema/API/UI.

### Bridge command model

Bridge command levels:

- built-in editor commands such as `open_file`, `highlight_range`, `show_diff`, `get_open_files`, `get_active_file`, `get_selection`, `update_workspaces`, and `clear_highlights`;
- plugin-hosted commands from `EDITOR_LIB.ts` / `EDITOR_LIB.js`;
- VS Code command passthrough;
- eval in extension host with `vscode` and `require` when necessary.

`BridgeClient` uses connection generation IDs so stale WebSocket handlers cannot clear newer connections.

## Structured Canon

```toml STRUCTURED_CANON
[[canon]]
kind = "rule"
oneliner = "The public Node launcher is daemon-only."
details = """\
`npx tressoir --daemon` is the public browser/session-management entry point. No-arg public `tressoir` / `tressoir-app` prints daemon help, and public standalone one-session Node app mode is not part of the current product surface.
"""

[[canon]]
kind = "rule"
oneliner = "Internal session-runner mode requires daemon child-process gating."
details = """\
The per-session supervisor runner remains available for daemon-managed sessions, but public direct launches are rejected unless the appropriate internal environment such as `TRESSOIR_INTERNAL_SESSION_RUNNER=1` is present.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon token auth defaults to enabled, with `--token none` as the explicit local/dev escape hatch."
details = """\
Daemon auth modes include auto-generated tokens, custom tokens, and explicit no-auth local/dev mode. The unlock flow exchanges a token for an HttpOnly same-origin cookie and removes query tokens from browser URLs.
"""

[[canon]]
kind = "rule"
oneliner = "Every Tressoir-started process must have an owner and bounded cleanup path."
details = """\
Daemon, session, frontend-dev, editor, SDK, proxy, and helper subprocesses must not be left orphaned after normal shutdown, failed startup, failed port binding, restart, stop, kill, or force-takeover paths. When a launched command can create child/grandchild processes, spawn it as an owned process group on Unix-like systems where practical and signal the group rather than only the immediate wrapper. Cleanup should use SIGTERM, bounded wait, then SIGKILL as needed; durable lease/runtime state should be released or marked only after cleanup decisions are made. Regression checks for daemon/session lifecycle changes should include failure/collision cases that verify no relevant process tree remains.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon-managed browser access goes through same-origin daemon routes, not public per-session service ports."
details = """\
The daemon owns `/sessions/<slug>/`, editor routes, Browser/webview frame/content routes, SDK browser paths, supervisor API proxying, and bridge WebSocket gatewaying. Browser clients should not construct public SDK/editor/API/Vite port URLs for daemon-managed sessions.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon-managed internal services use nullable ports plus socket paths."
details = """\
For daemon-managed sessions, runtime records and subsystem status use `port: null` for socket-backed SDK, editor/code-server, supervisor API, and daemon-owned frontend routing. Socket path fields carry actual internal endpoints.
"""

[[canon]]
kind = "technique"
oneliner = "Use short `/tmp/tressoir-sockets/<hash>/` paths for daemon-managed Unix sockets."
details = """\
SDK, editor, and supervisor API sockets must stay below platform Unix-socket path-length limits. Session process coordination should create short deterministic socket directories under `/tmp/tressoir-sockets/`.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon-owned frontend routing must preserve SDK backend cwd and inherited environment."
details = """\
SessionProcessCoordinator spawns the child supervisor with `cwd: session.cwd` and inherited environment so SDK backend execution keeps the expected project directory and activated venv behavior. Frontend routing changes must not move SDK execution into the daemon process.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon-managed code-server is browser-served through Tressoir editor gateway routes."
details = """\
Code-server should be internally socket/loopback-bound with `--auth none` because Tressoir owns browser auth. Browser access goes through authenticated routes such as `/sessions/<slug>/editor/`, with raw WebSocket tunneling and origin rewriting where needed.
"""

[[canon]]
kind = "technique"
oneliner = "The bridge extension uses `TRESSOIR_BRIDGE_WS_URL` with a per-session bridge token for daemon-managed sessions."
details = """\
The VS Code extension initiates an ordinary WebSocket connection to `/bridge/editor`. Socket-backed daemon sessions keep the extension transport simple by passing a daemon-routed bridge URL with a per-session token rather than making the extension speak native Unix sockets.
"""

[[canon]]
kind = "rule"
oneliner = "The VS Code bridge preserves editor commands and dirty-file indication, not extension-owned session lifecycle UX."
details = """\
The daemon is the owner of session lifecycle and dashboard UX. The bridge package focuses on extension activation, WebSocket bridge connection, built-in editor commands, plugin-hosted commands, and dirty-file status.
"""

[[canon]]
kind = "technique"
oneliner = "Use shared frontend shell primitives rather than reimplementing daemon dashboard chrome."
details = """\
The daemon dashboard should reuse `ThemeProvider`, Catppuccin CSS tokens, `Drawer`, and the context-free `IconStripBase`. Session-specific `IconStrip` wraps the base with session controls; daemon shell supplies daemon-relevant settings/theme/connection controls.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon session API derives `workspaces` from `cwd` and `ibRoot` rather than taking caller-supplied workspace lists."
details = """\
`daemon-store.ts` normalizes workspaces with `defaultSessionWorkspaces(...)`. The create/edit modal asks for title, slug, cwd, IB root, and isolation; derived workspaces and internal transport paths belong in details/status surfaces instead of daemon session form input.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon session records center `isolation` and `launchTarget`, while runtime state carries `transportState` for live transport health."
details = """\
Session persistence separates user-facing session configuration from runtime routing and bridge health. Proxy/worktree locality, external-path virtualization, and bridge status should be described through `launchTarget` and `transportState` rather than stale container/bootstrapper terminology.
"""

[[canon]]
kind = "rule"
oneliner = "Session Browser/webview surfaces use same-origin daemon and supervisor routes."
details = """\
User-visible Browser/webview frames resolve under daemon session routes such as `/sessions/<slug>/webviews/...`, while the session supervisor owns `/api/supervisor/webviews/...` control and event endpoints. Deep grant/kernel/proxy mechanics belong in daemon networking canon, but routing must remain same-origin and session-scoped.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon-routed session Settings keeps SDK/editor/full-supervisor restart controls and hides the daemon-owned frontend subsystem."
details = """\
Socket-backed services can still be restarted. `SupervisorControls` should remain available for SDK backend, code editor, and full supervisor restart paths, while the frontend subsystem row is hidden because the daemon owns the frontend surface.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon session schema/API/UI do not expose `portOffset`."
details = """\
`portOffset` is removed from current daemon session schema, API types, create/edit modal, details UI, and session-process construction. Obsolete stored `port_offset` is migration-only.
"""

[[canon]]
kind = "technique"
oneliner = "Daemon dashboard asset/API paths are proxy-base aware."
details = """\
When opened through code-server `/proxy/<daemon-port>/`, daemon dashboard assets and API calls must stay under that proxy base. Frontend helpers such as `daemonBase.ts` and daemon frontend HTML rewriting keep assets, logo paths, API calls, and session links base-aware.
"""
```

## Structured Related Sources

```jsonc STRUCTURED_RELATED_SOURCES
[
  "tressoir_app/supervisor/bin/tressoir-app.js", # Public Node launcher shim and daemon-only public entry behavior.
  "tressoir_app/supervisor/src/daemon.ts", # Daemon HTTP server, auth, session routes, logs API, and Model Gateway/OAuth APIs.
  "tressoir_app/supervisor/src/daemon-store.ts", # Session schema, derived workspaces, launchTarget validation, and runtime persistence.
  "tressoir_app/supervisor/src/isolation.ts", # Host/worktree/proxy isolation normalization and defaultSessionWorkspaces.
  "tressoir_app/supervisor/src/session-process.ts", # Child supervisor lifecycle, socket paths, logs, and bridge tokens.
  "tressoir_app/supervisor/src/session-runner.ts", # Per-session supervisor runtime and Browser/webview registry wiring.
  "tressoir_app/supervisor/src/api.ts", # Internal supervisor APIs, workspaces, and Browser/webview control routes.
  "tressoir_app/supervisor/src/session-webview.ts", # Browser/webview registry and frame-path resolution.
  "tressoir_app/supervisor/src/session-webview-gateway.ts", # Browser content gateway and webview upgrades.
  "tressoir_app/frontend/daemon.html", # Daemon dashboard Vite entry.
  "tressoir_app/frontend/index.html", # Session frontend Vite entry.
  "tressoir_app/frontend/vite.config.ts", # Multi-page build and proxy/base configuration.
  "tressoir_app/frontend/src/daemon/", # Dashboard UI, session modal/details, Model Gateway/OAuth modal, and tests.
  "tressoir_app/frontend/src/daemon/daemonApi.ts", # Browser-facing daemon session, logs, OAuth, and Model Gateway API types/calls.
  "tressoir_app/frontend/src/contexts/WebviewContext.tsx", # Session Browser/webview state and event wiring.
  "tressoir_app/frontend/src/layout/", # Shared shell primitives plus BrowserPanel/BrowserDrawer and session layout.
  "tressoir_app/frontend/src/components/SupervisorControls.tsx", # Restart controls and frontend-subsystem hiding.
  "tressoir_app/bridge/src/", # VS Code extension activation, bridge client, built-in editor commands, plugin host, and tests.
  "tressoir_app/supervisor/src/daemon-coordination.test.ts", # Daemon/session lifecycle tests.
  "tressoir_app/frontend/src/daemon/__tests__/DaemonApp.test.tsx", # Dashboard session and Model Gateway UI tests.
  "IB/kb/canon/DAEMON_NETWORKING.LIVE_CANON.toml", # Durable daemon/networking/isolation/webview canon.
  "IB/kb/canon/FRONTEND_EDITOR_PERMISSIONS.LIVE_CANON.toml" # Durable frontend/editor/permission canon.
]
```

## Future Work / Hardening

- Keep daemon/session frontend tests and Playwright smoke coverage current for auth, routed sessions, editor gateway, settings controls, long path display, and dashboard create/edit flows.
- If packaging changes, keep daemon frontend asset serving explicit so stale/missing builds fail clearly.
- Preserve direct/headless Python SDK compatibility whenever daemon/browser routing changes.
- Continue treating hostile-network transport security as a deployment concern distinct from token-gated HTTP proxy blocking.
