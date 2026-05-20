---
name: project-map
description: General map of the Tressoir codebase -- where things are and what they do. MUST BE FULLY CONSULTED for repository layout, top-level subsystem ownership, runtime entrypoints, and cross-repo navigation.
metadata:
  pin: true
---

# Tressoir Project Map

## Overview / Architecture / Flow

Tressoir is a framework for advanced AI agents built around a ReAct loop, a typed SDK service system, and an Interpretable Blueprint (IB) for persistent project knowledge, tools, and configuration.

This pinned map is intentionally broad and current-state oriented. It should help agents answer "where does this live?" and "which subsystem owns this?" without duplicating deep subsystem detail that already belongs in child ontologies and live canon.

For deeper subsystem detail, consult:

- `IB/ontologies/project-map/SELF_LEARNING.ONTOLOGY.md` -- self-learning, live canon, profile/raw-log capture, the Canon Learner, and the Self-Learning Optimizer.
- `IB/ontologies/project-map/TRESSOIR_APP.ONTOLOGY.md` -- Node supervisor, daemon, browser frontend, session routing, embedded Browser/webview surfaces, and VS Code bridge architecture.

At a top level:

- `tressoir/` is the Python runtime: agents, executors, SDK runtime, IB service, benchmarks, and testing helpers.
- `tressoir_app/` is the Node/TypeScript/browser/editor side: daemon, supervisor, session routing, frontend, and VS Code bridge.
- `IB/` is this repository's own Interpretable Blueprint: ontologies, skills, live canon, and working-area state.

## Repository Layout

```text
tressoir/  # repository root
├── tressoir/                      # Main Python package
│   ├── agent/                     # Agent loop, execution, compaction, model invocation
│   │   ├── agent.py               # Agent class and ReAct loop
│   │   ├── agent_config.py        # AgentConfig defaults: context/model/executor
│   │   ├── agent_state.py         # Trajectory state and caller relationships
│   │   ├── context_resolution.py  # Context presets/patterns/ceilings
│   │   ├── execution/             # Lua/Python/XML executors, compactor, trajectory analysis
│   │   └── models/                # LiteLLM helper, invoker abstraction, model config
│   │
│   ├── assets/                    # Package-level runtime/install assets; IB scaffolds do not create assets/
│   ├── benchmarks/                # Benchmark infrastructure: small_math_bench and SWE-Bench variants
│   ├── cli/                       # Python CLI: init-ib, auto-IB discovery, `python -m tressoir run`
│   ├── common/                    # Shared utilities, parsing, permissions helpers, LeaseLock
│   ├── ib_service/                # IB discovery, context rendering, SDK-lib loading, live canon
│   │   ├── ib_context.py          # Builds IB context, including live-canon summaries
│   │   ├── ib_discovery.py        # Component discovery from TRESSOIR.toml/default globs
│   │   ├── ib_sdk_service.py      # IB service: search_components, subagent templates, scaffolding
│   │   ├── live_canon.py          # Live-canon tree parsing, validation, visibility, context collection
│   │   └── builtin_ib/            # Built-in skills and SDK libraries
│   │       ├── skills/            # working-area, planning, ontology/SDK authoring, cleanup skills
│   │       └── sdk_libs/
│   │           ├── editor/        # Editor bridge SDK tools
│   │           ├── self_learning/ # Canon Learner and optimizer SDK tools/prompts
│   │           └── user_webview/  # Hidden embedded Browser/webview SDK tools
│   │
│   ├── interpreter/               # Curated Lua runtime and IPython subprocess helpers
│   │   ├── curated_lua_runtime.py # Lua runtime, HTTP/UDS SDK calls
│   │   ├── embedded_functions.py  # _TressoirSDK injected into IPython helpers
│   │   └── python_process.py      # IPython subprocess lifecycle
│   │
│   ├── sdk_builtin_services/      # Built-in SDK services: core, agent, llm, web
│   ├── sdk_runtime/               # SDK server/client/manager, permissions, editor bridge, MCP
│   ├── sdk_lib.py                 # Public API for LIB.py authors
│   ├── sandboxing/                # Docker/proxy helpers for isolation and benchmarks
│   └── testing/                   # TestSDKRuntime and lightweight test helpers
│
├── tressoir_app/                  # Node/TypeScript browser, daemon, supervisor, and bridge side
│   ├── supervisor/                # Public launcher, daemon, session runner, subprocess orchestration
│   │   ├── bin/tressoir-app.js    # Public Node launcher shim
│   │   └── src/
│   │       ├── index.ts           # Dispatches init-ib, daemon mode, internal session runner
│   │       ├── daemon.ts          # Daemon HTTP server, auth, session/editor/SDK gateways, Model Gateway
│   │       ├── daemon-store.ts    # SQLite daemon/session persistence and schema validation
│   │       ├── session-process.ts # Daemon-owned child supervisor lifecycle, sockets, logs, bridge tokens
│   │       ├── session-runner.ts  # Internal per-session supervisor runner
│   │       ├── session-transport-bridge.ts # Proxy transport bridge for daemon-managed sessions
│   │       ├── session-webview.ts # Embedded Browser/webview registry and routing helpers
│   │       ├── session-webview-gateway.ts # Browser content gateway, grants, and proxy/file serving
│   │       ├── session-webview-kernel.ts # Injected Browser kernel transport and operations
│   │       ├── isolation.ts       # Host/worktree/proxy isolation resolution
│   │       ├── isolation-bootstrap.ts # Isolation bootstrap helpers
│   │       ├── daemon-codex-oauth.ts # Daemon-owned OAuth / Model Gateway runtime
│   │       ├── api.ts             # Internal supervisor REST API and restart controls
│   │       ├── sdk-backend.ts     # Python SDK backend subsystem over TCP or Unix socket
│   │       ├── code-server.ts     # code-server editor subsystem over loopback TCP or Unix socket
│   │       └── vite-frontend.ts   # Direct/non-daemon session Vite frontend subsystem
│   │
│   ├── frontend/                  # React/Vite multi-surface frontend
│   │   ├── index.html             # Session frontend entry
│   │   ├── daemon.html            # Daemon dashboard entry
│   │   ├── vite.config.ts         # Multi-page build and proxy config
│   │   └── src/
│   │       ├── App.tsx            # Session app provider chain and shell
│   │       ├── daemon/            # Daemon dashboard, session modal/details, Model Gateway/OAuth UI
│   │       ├── contexts/          # Theme, connection, agent, permission, view, and webview state
│   │       ├── layout/            # AppShell, Drawer, BrowserPanel, BrowserDrawer, editor/session panels
│   │       ├── components/        # Agent chat, IB tabs, supervisor controls
│   │       ├── lib/               # Browser SDK client helpers, public base path, replay/projection
│   │       └── styles/            # Global and component CSS
│   │
│   ├── sdk-client/                # Packaged browser SDK client artifacts
│   └── bridge/                    # VS Code/code-server extension for editor bridge
│       ├── resources/             # Tressoir SVG icon
│       └── src/
│           ├── extension.ts       # Extension activation and bridge connection
│           ├── bridge.ts          # WebSocket bridge client
│           ├── builtinCommands.ts # Built-in editor commands
│           ├── pluginHost.ts      # EDITOR_LIB plugin discovery/execution
│           └── dirtyIndicator.ts  # Unsaved-file indicator
│
├── tests/                         # Python test suite
│   ├── agent/                     # Agent loop, compaction, model, trajectory tests
│   ├── benchmarks/                # Benchmark unit/integration tests
│   ├── cli/                       # CLI/runtime tests
│   ├── common/                    # Shared utility tests
│   ├── editor/                    # Editor bridge tests
│   ├── ib/                        # IB discovery/context/live-canon/self-learning tests
│   ├── interpreter/               # Lua/IPython interpreter tests
│   ├── sdk/                       # SDK runtime/service/permission tests
│   └── helpers/                   # Mock invokers and shared test fixtures
│
├── fixtures/                      # Docker/manual IB fixtures
├── IB/                            # This repository's own IB
│   ├── TRESSOIR.toml
│   ├── dev/                       # Self-development and isolation helpers
│   ├── editor/                    # Editor defaults
│   ├── kb/                        # Knowledge base; live-canon runtime files live under kb/canon/
│   ├── ontologies/project-map/    # Pinned project map plus child subsystem ontologies
│   ├── skills/                    # Project-specific skills
│   └── working_area/              # STATE, TASK, ARTIFACTS, TMP, PROFILE_LOG, WORKTREES
├── package.json                   # npm workspaces for tressoir_app/*
├── pyproject.toml                 # Python package config
├── install.sh                     # Installer/build helper
├── requirements*.txt              # Runtime/dev/headless dependencies
└── tressoir_app/*/package.json    # Node workspace manifests
```

## Interface / Schema / Vocabulary / Basic Usage

### Runtime entrypoints

- `npx tressoir --daemon` starts the public browser/session-management daemon.
- No-arg public `npx tressoir` and `npx tressoir-app` print daemon help instead of starting the removed standalone one-session app.
- `python -m tressoir run` remains the direct/headless Python runtime entrypoint.

### Agent runtime vocabulary

- Executors are `lua`, `python`, and `xml`.
- `SDKCommand` is the shared tool-call command across executors.
- `WaitForToolsAnswer` is the no-op wait primitive for answer-sensitive models.
- Lua additionally exposes `LuaCommand`, `AnswerCommand`, and `EmergencyResetLuaCommand` around the persistent curated Lua runtime.

### Service vocabulary

- Built-in SDK services include `core`, `agent`, `llm`, `web`, and `ib`.
- Built-in SDK libraries add project-facing services such as `editor`, `self-learning`, and hidden `user_webview`.
- `mcp::...` service names represent registered MCP servers.

### IB vocabulary

- `IB/working_area/TASK.md` is user-managed task text.
- `IB/working_area/STATE.md` is durable current project state.
- `IB/working_area/ARTIFACTS/` and `IB/working_area/TMP/` hold working outputs and logs.
- `IB/working_area/WORKTREES/` holds self-development worktrees.
- `IB/kb/canon/` holds curated and raw live canon.

## Structured Canon

```toml STRUCTURED_CANON
[[canon]]
kind = "rule"
oneliner = "The public browser/session-management entrypoint is daemon-first `npx tressoir --daemon`, while direct/headless runtime stays `python -m tressoir run`."
details = """Public Node/browser usage goes through the daemon dashboard and same-origin session routes. No-arg public `tressoir` / `tressoir-app` prints daemon help, and the older standalone one-session Node app mode is not part of the current surface.
"""

[[canon]]
kind = "rule"
oneliner = "Agents use `lua`, `python`, or `xml`; `SDKCommand` is shared and `WaitForToolsAnswer` is the no-op wait primitive for answer-sensitive models."
details = """`lua` is the default execution backend. Lua additionally exposes `LuaCommand`, `AnswerCommand`, and `EmergencyResetLuaCommand`, while XML mode uses `SDKCommand`, `AnswerCommand`, and answer-sensitive `WaitForToolsAnswer`.
"""

[[canon]]
kind = "rule"
oneliner = "Daemon-managed browser access goes through same-origin `/sessions/<slug>/...` routes with socket-backed internals."
details = """The daemon owns browser-visible session routes, while daemon-managed SDK, editor, supervisor API, and Browser/webview plumbing use internal Unix sockets or transport bridges. Browser and SDK clients should preserve the routed HTTP/WebSocket surface rather than constructing public per-session port URLs.
"""

[[canon]]
kind = "rule"
oneliner = "Live canon lives under `IB/kb/canon/` with pinned `LIVE_CANON.toml`, raw `LIVE_CANON_LOG.toml`, referenced `*.LIVE_CANON.toml`, and `CANON_LEARNER_DENSE_STATE.md`."
details = """The root live-canon file is the curated pinned index. Referenced domain canon files stay shallow, `LIVE_CANON_LOG.toml` is the raw capture log, and `CANON_LEARNER_DENSE_STATE.md` is operational Canon Learner memory excluded from ordinary live-canon rendering.
"""

[[canon]]
kind = "technique"
oneliner = "Embedded Browser support is exposed through hidden `user_webview` tools backed by supervisor webview infrastructure and frontend Browser surfaces."
details = """The hidden `user_webview` SDK library gives agents controlled access to Browser/webview views. The Node side owns session webview routing, grants, and injected kernel behavior, while the frontend renders Browser drawer/panel surfaces and webview state.
"""

[[canon]]
kind = "rule"
oneliner = "The pinned project map should stay concise and defer subsystem depth to child ontologies and live canon."
details = """Use this ontology for top-level navigation and ownership. Detailed self-learning, daemon/networking, and embedded Browser behavior belongs in child ontologies and targeted live-canon files so the pinned context stays broad rather than noisy.
"""
```

## Structured Related Sources

```jsonc STRUCTURED_RELATED_SOURCES
[
  "tressoir/agent/", # Agent loop, models, context resolution, and trajectory ownership.
  "tressoir/agent/execution/", # Executor commands, compaction, trajectory analysis, and canon capture helpers.
  "tressoir/sdk_builtin_services/", # Built-in core/agent/llm/web service implementations.
  "tressoir/sdk_runtime/", # SDK server/client/manager, permissions, editor bridge, and MCP runtime.
  "tressoir/ib_service/", # IB discovery, context rendering, live-canon parsing, and builtin IB loading.
  "tressoir/ib_service/builtin_ib/sdk_libs/user_webview/", # Hidden embedded Browser/webview SDK library.
  "tressoir_app/supervisor/src/", # Daemon, session routing, isolation, transport bridge, Model Gateway, and webview runtime.
  "tressoir_app/frontend/src/", # Session UI, daemon dashboard, Browser/webview UI, and frontend contexts.
  "tressoir_app/bridge/src/", # VS Code/code-server bridge extension and editor commands.
  "IB/ontologies/project-map/SELF_LEARNING.ONTOLOGY.md", # Child ontology for self-learning and live-canon architecture.
  "IB/ontologies/project-map/TRESSOIR_APP.ONTOLOGY.md", # Child ontology for daemon/session/frontend/editor architecture.
  "IB/kb/canon/IB_SELF_LEARNING.LIVE_CANON.toml", # Durable self-learning canon and workflow lessons.
  "IB/kb/canon/DAEMON_NETWORKING.LIVE_CANON.toml" # Durable daemon/networking/isolation/webview canon.
]
```

## Future Work / Hardening

- Keep this pinned map focused on navigation and ownership as new subsystems land.
- Refresh it when top-level entrypoints, repository ownership, or major directory structure changes.
- Push deep behavioral detail into child ontologies or live canon instead of growing this file into a changelog.
