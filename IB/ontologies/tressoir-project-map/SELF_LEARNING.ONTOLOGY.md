---
name: self-learning-live-canon
description: Architecture and invariants for Tressoir self-learning, live canon, the Canon Learner, and the Self-Learning Optimizer. MUST BE FULLY CONSULTED for compaction capture, live canon, raw profile merging, self-learning uplift, optimizer workflows, and Canon Learner changes.
---

# Self-Learning Live Canon Ontology

## Overview / Architecture / Flow

Tressoir's self-learning system turns useful agent experience into durable project canon and user-gated IB improvements while preserving low-latency agent resume. The system has three complementary layers:

- **capture quickly** during compaction or trajectory analysis without blocking the agent;
- **merge carefully** through the shared Canon Learner, retaining only useful semi-general project knowledge;
- **optimize deliberately** through the user-gated Self-Learning Optimizer for deeper IB evolution such as skills, ontologies, subagent templates, SDK libs, prompts, and workflows.

Current storage is a shallow Layer 2 live-canon tree:

```text
agent trajectory
  ├─ compaction
  │   ├─ IB/working_area/PROFILE_LOG.toml      # raw profile/history preservation
  │   ├─ IB/kb/canon/LIVE_CANON_LOG.toml       # quick raw live-canon captures
  │   ├─ caller-chain notification             # immediate low-interruption update
  │   └─ background self-learning.fast-merge
  └─ trajectory analysis
      ├─ IB/kb/canon/LIVE_CANON_LOG.toml       # raw canon capture only
      ├─ caller-chain notification             # immediate low-interruption update
      └─ background self-learning.fast-merge
            └─ Canon Learner
                ├─ reads LIVE_CANON_LOG.toml
                ├─ writes curated live-canon tree under root lock
                │   ├─ LIVE_CANON.toml              # pinned root/index
                │   └─ <DOMAIN>.LIVE_CANON.toml     # shallow referenced domain files
                ├─ updates CANON_LEARNER_DENSE_STATE.md
                ├─ clears exact confirmed capture IDs from LIVE_CANON_LOG.toml
                └─ may run/schedule realignment fail-soft
```

### Capture path

Compaction is the main durable capture path, and trajectory analysis can emit live-canon captures through the same append/schedule helper:

1. Compaction builds a summary that includes a `<StructuredLiveCanon>` block and preserves raw compaction/profile data in `IB/working_area/PROFILE_LOG.toml`.
2. Compaction and trajectory analysis append parsed raw canon captures to `IB/kb/canon/LIVE_CANON_LOG.toml`.
3. The capture helper upcasts an immediate notification to callers using the capture `session_summary`.
4. If auto-merge scheduling is enabled, the helper schedules `self-learning.fast-merge` in the background.
5. Agent resume never waits for Canon Learner merge work to finish.

`self-learning.set-auto-merge-enabled(enabled, reason=None)` is process-local and non-persistent. Disabling it pauses only background fast-merge scheduling; raw captures, `LIVE_CANON_LOG.toml` writes, and caller notifications continue. Simple-tier agents skip profile/live-canon capture by default to avoid noisy low-confidence lessons.

### Merge path

`self-learning.fast-merge` consolidates pending raw captures into curated live canon:

1. Ensure `IB/kb/canon/LIVE_CANON.toml` exists.
2. Hold `LeaseLock(LIVE_CANON.toml)` across the curated-tree write.
3. Briefly lock `LIVE_CANON_LOG.toml` to read candidate capture IDs.
4. Ask the Canon Learner to merge useful candidates into the live-canon tree.
5. Validate and normalize the resulting tree.
6. Require `<ProcessedCaptureIds>[...]</ProcessedCaptureIds>` in the answer.
7. Briefly relock the raw log and remove only exact confirmed processed IDs.

Fast merge may route obvious candidates into existing referenced domain files. It should not perform broad taxonomy changes; those belong to realignment.

### Raw-profile merge path

`self-learning.merge-raw-profile` retrospectively inspects profile logs and syncs missed durable canon. It finds:

- `IB/working_area/PROFILE_LOG.toml`;
- `IB/kb/**/PROFILE_LOG*toml`.

The prompt instructs the Canon Learner to inspect context around `<StructuredLiveCanon>` sections rather than blindly extracting only the TOML-like body. Large raw-profile corpora may be chunked through parallel `llm.invoke(model_spec="advanced", save_path=...)` calls; those one-shot prompts must include the full `structure-canon-schema` content because they do not inherit the Canon Learner context.

The raw-profile workflow carries its own merge instructions and dense-state context. When domain placement becomes substantial it can consult the realignment workflow guidance, but it does not inject a copied realignment task block.

### Realignment path

`self-learning.realign-live-canon` realigns an oversized or drifted curated live-canon tree into the shallow root/index plus domain-file layout. It:

1. clamps thresholds below the minimum;
2. validates the current tree and sends metrics to the Canon Learner;
3. holds `LeaseLock(LIVE_CANON.toml)` for root and referenced file edits;
4. asks the Canon Learner to rebalance captures into coherent domains;
5. repairs once if validation fails;
6. validates parseable TOML, safe references, no recursive references, and missing-reference absence;
7. parses `<RealignedCanonFiles>[...]</RealignedCanonFiles>` and `<DeletedCanonFiles>[...]</DeletedCanonFiles>`.

Realignment always creates or updates `CANON_LEARNER_DENSE_STATE.md` with what changed, why it changed, and what future Canon Learner runs should remember.

Default authority is canon-only edits under `IB/kb/canon` plus Canon Learner dense memory and temp files. Broader read-only audits of code, docs, tests, `STATE.md`, and recent context are in scope when caller instructions or visible drift warrant it. Realignment does not edit source, tests, skills, or ontologies unless separately authorized.

Deletion is Canon Learner-owned and tightly bounded. The Canon Learner may delete old unreferenced live-canon domain files only under `IB/kb/canon`, never root/log/profile/dense-memory/arbitrary files, only after retained canon is migrated and the final root no longer references the file. The harness validates and reports declared deletions but does not delete candidates itself.

Fast merge can schedule realignment fail-soft when root visible canon exceeds the default threshold or enough consecutive fast merges have accumulated. Background realignment failure must not make compaction or fast merge fail.

### Context path

`IB/kb/canon/LIVE_CANON.toml` is the pinned root/index. It may have direct captures and `[[reference_canon]]` entries. Referenced files are shallow leaves with direct `[[capture]]` / `[[capture.canon]]` only; nested `[[reference_canon]]` inside referenced files is invalid for writers and ignored/fail-soft for readers.

`live_canon.py` centralizes live-canon parsing, safe reference resolution, recent-window visibility, and validation. `ib_context.py` renders live canon as navigational context:

- root and referenced file descriptions are shown once;
- visible captures preserve concise `session_summary`;
- one-liners are grouped by kind within each capture;
- raw-log captures render through the same path as curated captures;
- details are not force-included, and agents are told to use targeted grep over `IB/kb/canon/**/*.toml`.

Pinned/root/raw captures are visible as appropriate. Unpinned referenced captures use a recent-window rule: sort all captures by `datetime` when available, fall back to source order for undated captures, compute the recent prompt-character window over all captures, then filter out captures from already-visible pinned/root/raw paths. The final displayed capture list is globally ordered newest-to-oldest. One overflow capture is allowed so a single large fresh capture can still define the recent window.

### Self-call behavior

The Canon Learner and helper/subagents may compact and produce raw captures. This is serialized but not a deadlock because compaction schedules merge work without awaiting it, and any self-capture waits for the current curated-tree lock after the current merge completes. The Canon Learner should be conservative about retaining self-learning implementation minutiae.

### Layer 3 optimizer path

The Self-Learning Optimizer is a separate, user-gated Layer 3 agent for deeper IB evolution. It is exposed through hidden self-learning SDK tools that ensure or run a stable optimizer agent. The main optimizer id is `self-learning-optimizer`; slugged workstreams use `self-learning-optimizer-<normalized-slug>`. Optimizer prompts live within the self-learning SDK lib directory and programmatically reference editable Markdown workflow files such as `OPTIMIZER_SYSTEM_PROMPT.md`, `skills/PROJECT_TO_ONTOLOGY_TREE.SKILL.md`, `skills/LOCALIZED_AGENTIC_OPTIMIZATION.SKILL.md`, and `skills/USER_SPECIFIED_OPTIMIZATION.SKILL.md`.

The optimizer is not the Canon Learner. If optimizer work needs live-canon management and learning or realignment, it should call Canon Learner tools such as `self-learning.fast-merge`, `self-learning.merge-raw-profile`, or `self-learning.realign-live-canon` rather than reimplementing locks, validation, raw-log cleanup, or domain-file deletion rules. Self-learning workflow components use `metadata.default_shown: "false"`, `metadata.reveal_to_tags`, and contexts such as `["meta", "+ib-tag:self-learning"]` so ordinary agents are not flooded with specialized guidance.

## Interface / Schema / Vocabulary / Basic Usage

### Vocabulary

- **StructuredLiveCanon**: The compacted structured canon capture emitted by compaction; includes `session_summary` plus canon items with `kind`, `oneliner`, and `details`.
- **Canon item**: A durable lesson following `structure-canon-schema`.
- **Live canon log**: `IB/kb/canon/LIVE_CANON_LOG.toml`, the raw immediate capture log.
- **Curated live-canon tree**: `IB/kb/canon/LIVE_CANON.toml` plus safe referenced `*.LIVE_CANON.toml` domain files.
- **Root live-canon index**: `IB/kb/canon/LIVE_CANON.toml`, pinned and protected by the curated-tree lease.
- **Canon Learner**: Persistent shared agent with canonical id `canon-learner`.
- **Canon Learner dense state**: `IB/kb/canon/CANON_LEARNER_DENSE_STATE.md`, operational memory for taxonomy and merge decisions; not ordinary live canon.
- **Self-Learning Optimizer**: User-gated Layer 3 agent with canonical id `self-learning-optimizer`; slugged workstreams use `self-learning-optimizer-<normalized-slug>`.
- **Auto-merge state**: Process-local switch controlling whether capture-driven background fast merges are scheduled automatically.
- **IB component scoping**: Prompt-context visibility metadata using `default_shown=false`, `reveal_to_tags`, and context tags such as `+ib-tag:self-learning`; not a security boundary.
- **LeaseLock**: Async file lock in `tressoir/common/lease_lock.py`.
- **Upcast notification**: Low-interruption caller-chain notification, not a global broadcast.

### SDK surfaces

- `self-learning.fast-merge(ib_path, new_capture=None, num_rounds=3, ...) -> dict`
  - Merges pending `IB/kb/canon/LIVE_CANON_LOG.toml` captures into the curated live-canon tree.
- `self-learning.merge-raw-profile(ib_path, num_rounds=5, additional_instructions=None) -> dict`
  - Retrospectively syncs useful canon from profile logs.
- `self-learning.realign-live-canon(ib_path, num_rounds=8, threshold=20000, reason=None, additional_instructions=None) -> dict`
  - Realigns curated live canon against current sources and the shallow referenced tree.
- `self-learning.set-auto-merge-enabled(enabled, reason=None) -> dict`
  - Process-local control for capture-driven background fast-merge scheduling; disabling it does not stop raw capture or caller notifications.
- `self-learning.ensure-canon-learner-agent() -> None`
  - Ensures the shared Canon Learner agent exists.
- `self-learning.prompt-canon-learner(instructions, blocking=False) -> dict`
  - Directly instructs the shared Canon Learner. Nonblocking mode returns after scheduling/acknowledgement and does not wait for lock acquisition, completion, or answer.
- `self-learning.ensure-optimizer-agent(slug=None) -> dict`
  - Lazily creates or reuses the main Self-Learning Optimizer or a slugged optimizer workstream.
- `self-learning.run-optimizer(task, slug=None, num_rounds=5, attachments=None) -> dict`
  - Ensures the optimizer and resumes it with a user-gated optimization task.
- `agent.stats(agent_id) -> dict`
  - Returns concise status/usage keys such as `agent_id`, `title`, running/paused/terminated state, `num_steps`, `num_compactions`, `token_counts`, `isolated_stats`, and more (sub-call stats, etc.) without trajectory or prompt content.
- `agent.broadcast_callers(agent_id, depth=None, source="notification", ...)`
  - Sends low-interruption caller-chain notifications.
- `llm.invoke(..., save_path=None)`
  - Supports chunked extraction with persisted intermediate outputs.

### Basic usage

```lua
local result = sdk("self-learning", "merge-raw-profile", {
  ib_path = "/path/to/IB",
  num_rounds = 8,
  additional_instructions = "Cleanup check: look for missed durable canon before profile-log truncation.",
})
print(result)
```

### Raw live-canon log schema

```toml
[[capture]]
source = "compaction.log"
capture_id = "uuid..."
datetime = "2026-..."
source_agent_id = "agent..."
source_model_spec = "advanced"
source_model_name = "..."
compaction_number = 3
session_summary = """\
Short description of what this canon capture contains.
"""

[[capture.canon]]
kind = "technique"
oneliner = "Short reusable summary."
details = """\
Useful supporting context.
"""
```

### Curated live-canon tree schema

```toml
# IB/kb/canon/LIVE_CANON.toml
pin = true

[[reference_canon]]
file = "IB_SELF_LEARNING.LIVE_CANON.toml"
description = "Domain description and retrieval guidance."

[[capture]]
session_summary = """\
Optional direct root capture.
"""

[[capture.canon]]
kind = "rule"
oneliner = "Short durable rule."
details = """\
Supporting context.
"""
```

```toml
# IB/kb/canon/IB_SELF_LEARNING.LIVE_CANON.toml
[[capture]]
session_summary = """\
Domain-specific session context.
"""

[[capture.canon]]
kind = "technique"
oneliner = "Domain-specific reusable lesson."
details = """\
Supporting context.
"""
```

Referenced domain files must not contain `[[reference_canon]]`.

### Cleanup workflow

Before truncating profile logs, run or ask about `self-learning.merge-raw-profile` with an explicit cleanup check for missed durable canon. Ask the user before deleting or truncating `PROFILE_LOG*toml` files. `TASK.md` remains user-managed.

## Structured Canon

```toml STRUCTURED_CANON
[[canon]]
kind = "rule"
oneliner = "Compaction must not await smart merge work."
details = """\
Compaction writes durable raw profile and live-canon log entries, upcasts an immediate notification, schedules self-learning.fast-merge in the background when auto-merge is enabled, and resumes. Agent resume latency must not depend on the Canon Learner completing.
"""

[[canon]]
kind = "technique"
oneliner = "`TrajectoryAnalyzer.analyze_trajectory` shares the live-canon append/schedule path without writing `PROFILE_LOG.toml`."
details = """\
Trajectory analysis can emit `<StructuredLiveCanon>` output and then call the shared canon append/schedule helper. This reuses `LIVE_CANON_LOG.toml` and caller-notification behavior but skips the compaction-specific working-area profile-log write.
"""

[[canon]]
kind = "rule"
oneliner = "`self-learning.set-auto-merge-enabled` is process-local and pauses only background fast-merge scheduling."
details = """\
Disabling auto-merge does not stop `LIVE_CANON_LOG.toml` writes, caller upcast notifications, or manual self-learning tools such as `fast-merge`, `merge-raw-profile`, and `realign-live-canon`. The setting is non-persistent process-local control for capture-driven scheduling only.
"""

[[canon]]
kind = "rule"
oneliner = "Curated live-canon writes hold the root `LIVE_CANON.toml` lease across the shallow tree."
details = """\
`LIVE_CANON.toml` is the root/index and lock anchor for curated tree writes. Canon Learner operations hold `LeaseLock(LIVE_CANON.toml)` while writing root and referenced domain files, and use sibling temp files plus atomic replace so readers see complete parseable TOML.
"""

[[canon]]
kind = "rule"
oneliner = "Raw log cleanup removes only exact confirmed capture IDs."
details = """\
Raw captures use `capture_id` as the durable processing delimiter. The Canon Learner answer must include `<ProcessedCaptureIds>[...]</ProcessedCaptureIds>`, and the harness removes only those exact IDs from `LIVE_CANON_LOG.toml` under a short raw-log lock.
"""

[[canon]]
kind = "rule"
oneliner = "The live-canon tree is shallow: root references domain files, and domain files contain direct captures only."
details = """\
`LIVE_CANON.toml` may include `[[reference_canon]]` entries pointing to safe files inside the same live-canon directory. Referenced files must not recursively declare `[[reference_canon]]`; writer-side validation rejects nested references and unsafe/missing referenced files.
"""

[[canon]]
kind = "technique"
oneliner = "`tressoir/ib_service/live_canon.py` centralizes live-canon parsing, visibility, and validation."
details = """\
Tree parsing, safe reference resolution, prompt-visible capture collection, recent-window handling, and validation belong in `live_canon.py` rather than being duplicated across `ib_context.py` and the self-learning merge harness.
"""

[[canon]]
kind = "rule"
oneliner = "`CANON_LEARNER_DENSE_STATE.md` is operational Canon Learner memory excluded from ordinary live-canon rendering."
details = """\
`canon_learning.py` creates and updates `IB/kb/canon/CANON_LEARNER_DENSE_STATE.md` for taxonomy, recurring merge decisions, cleanup state, and open questions. It is not a normal live-canon capture file and should not render into default live-canon context.
"""

[[canon]]
kind = "rule"
oneliner = "Live-canon context is compact and navigational, not a full detail dump."
details = """\
IB context should show root/reference paths and capture `session_summary` groups with kind-grouped one-liners. Details remain in TOML files for targeted `rgrep`/`rg`/`grep` retrieval over `IB/kb/canon/**/*.toml`.
"""

[[canon]]
kind = "rule"
oneliner = "Unpinned referenced live-canon visibility computes the recent window before filtering already-visible paths."
details = """\
The recency budget is computed over all captures sorted by `datetime` when available, with source-order fallback for undated captures. Captures from already-visible root/raw/pinned files are filtered after selection so older unpinned captures do not fill unused budget incorrectly. Rendered captures are then displayed in one global newest-to-oldest order. One overflow capture is allowed for a large fresh capture.
"""

[[canon]]
kind = "technique"
oneliner = "Raw-profile merge inspects context around structured captures and can chunk large corpora with schema-injected `llm.invoke` calls."
details = """\
`merge-raw-profile` should not extract only the TOML inside `<StructuredLiveCanon>` blindly. For large profiles, parallel `llm.invoke` extraction prompts should include nearby task context, the full `structure-canon-schema` skill content, and `save_path` outputs for later consolidation. The raw-profile workflow carries its own task template and may consult realignment guidance when broader placement judgment is needed, but it does not inject a copied realignment task block.
"""

[[canon]]
kind = "rule"
oneliner = "Realignment is explicit or scheduled fail-soft and does not make compaction fail."
details = """\
Manual `self-learning.realign-live-canon` and post-fast-merge scheduled realignment use the shared Canon Learner and validation/repair path. Background realignment failures are logged/warned but must not fail compaction or ordinary fast merge.
"""

[[canon]]
kind = "rule"
oneliner = "`self-learning.realign-live-canon` must create or update Canon Learner dense memory during realignment."
details = """\
The realignment workflow passes dense-state path and compaction-needed status into the task template, and every realignment run should briefly record what changed, why it changed, and what future Canon Learner runs should remember.
"""

[[canon]]
kind = "rule"
oneliner = "Live-canon domain-file deletion is Canon Learner-owned and tightly bounded."
details = """\
The Canon Learner may delete old unreferenced live-canon domain files only under strict prompt boundaries: the file is under `IB/kb/canon`, is a live-canon domain file, is not root/log/profile/dense-memory/arbitrary user content, is no longer referenced, and retained canon was migrated. The harness validates and reports declared deletions but does not delete candidates itself.
"""

[[canon]]
kind = "rule"
oneliner = "`structure-canon-schema` is injected into compaction/self-learning prompts when canon is authored or reviewed."
details = """\
The schema skill is not broadly pinned into every agent prompt. `compactor.py` and self-learning `canon_learning.py` inject the full skill content for compaction, fast merge, raw-profile merge, realignment, and one-shot extraction prompts that author/review canon.
"""

[[canon]]
kind = "rule"
oneliner = "Do not globally broadcast live-canon updates."
details = """\
Live-canon notifications propagate up the caller chain with `agent.broadcast_callers` and default to low-interruption behavior. Unrelated agents should not be interrupted by global broadcasts.
"""

[[canon]]
kind = "intent"
oneliner = "Layer 3 self-learning is a user-gated Self-Learning Optimizer separate from the live-canon Canon Learner."
details = """\
The Canon Learner maintains live canon. Deeper IB evolution that proposes or applies skills, ontologies, subagent templates, SDK libs, prompts, or workflows belongs to the Self-Learning Optimizer exposed through `ensure-optimizer-agent` and `run-optimizer`. Optimizer work that needs live-canon management and learning should call Canon Learner tools instead of reimplementing lock/write protocols.
"""

[[canon]]
kind = "technique"
oneliner = "Optimizer-only IB workflow files use scoped component visibility."
details = """\
Specialized optimizer workflow components should use `metadata.default_shown: "false"` and `metadata.reveal_to_tags: ["self-learning"]`. Canon Learner and optimizer agents use meta context plus `+ib-tag:self-learning` to reveal those files, while ordinary agents avoid the extra prompt noise.
"""

[[canon]]
kind = "rule"
oneliner = "IB component scoping is prompt visibility only."
details = """\
`default_shown=false` suppresses ordinary auto-rendered IB context unless a matching `+ib-tag:<tag>` is present. It must not be treated as a security boundary: explicit `ib.search_components`, `ib.list_components`, and allowed file reads should still find scoped/default-hidden components.
"""

[[canon]]
kind = "technique"
oneliner = "`agent.stats(agent_id)` is the concise introspection surface for optimizer/meta agents."
details = """\
Use `agent.stats` for operational status and usage metadata such as `agent_id`, `title`, running/paused/terminated state, `num_steps`, `num_compactions`, `token_counts`, `isolated_stats`, and more (sub-call stats, etc.). It should not expose full trajectories, snapshots, raw prompts, or command transcripts.
"""
```

## Structured Related Sources

```jsonc STRUCTURED_RELATED_SOURCES
[
  "tressoir/agent/execution/compactor.py", # StructuredLiveCanon extraction, PROFILE_LOG/LIVE_CANON_LOG writes, caller notification, background fast-merge scheduling.
  "tressoir/agent/execution/traj_analyzer.py", # Trajectory-analysis canon extraction and shared live-canon append path.
  "tressoir/agent/execution/canon_aux.py", # Capture helpers, PROFILE_LOG/LIVE_CANON_LOG writes, caller notifications, and auto-merge control.
  "tressoir/agent/", # Agent state/config/model-spec surfaces relevant to compaction, caller relationships, and simple-tier capture behavior.
  "tressoir/common/lease_lock.py", # Async lease lock implementation for coordinated profile/log/canon writes.
  "tressoir/ib_service/live_canon.py", # Central live-canon tree parser, context collector, recent-window logic, and validator.
  "tressoir/ib_service/ib_context.py", # Prompt/context rendering for visible live canon.
  "tressoir/ib_service/ib_sdk_service.py", # IB load and live-canon scaffolding behavior.
  "tressoir/ib_service/builtin_ib/skills/ib-structure/", # structure-canon-schema plus ontology/SDK authoring skills that govern canon/schema quality.
  "tressoir/ib_service/builtin_ib/sdk_libs/self_learning/LIB.py", # Public self-learning SDK tool registration, including set-auto-merge-enabled.
  "tressoir/ib_service/builtin_ib/sdk_libs/self_learning/canon_learning.py", # Canon Learner merge, raw-profile, realignment, and dense-memory harness.
  "tressoir/ib_service/builtin_ib/sdk_libs/self_learning/optimizer.py", # Layer 3 Self-Learning Optimizer harness.
  "tressoir/ib_service/builtin_ib/sdk_libs/self_learning/skills/", # Canon Learner and optimizer workflow skills, including realignment authority guidance.
  "tressoir/ib_service/builtin_ib/sdk_libs/self_learning/skills/prompt_templates/", # Task templates for fast merge, raw-profile merge, prompt-canon-learner, and realignment.
  "tressoir/sdk_builtin_services/sdk_agent_service.py", # Caller notifications, compact_run, and agent.stats surfaces used by self-learning/meta agents.
  "tressoir/sdk_builtin_services/sdk_llm_service.py", # llm.invoke save_path support for chunked raw-profile extraction.
  "tests/agent/unit/test_agent_compact.py", # Compaction raw-log and scheduling tests.
  "tests/ib/unit/test_context_integration.py", # Live-canon context rendering tests.
  "tests/ib/unit/test_self_learning/", # Self-learning SDK-lib integration tests covering fast/raw/realignment behavior.
  "tests/sdk/unit/test_sdk_context_builder.py", # SDK/IB context rendering tests.
  "IB/kb/canon/", # Root live-canon index, raw log, dense state, and referenced domain canon files.
  "IB/working_area/PROFILE_LOG.toml" # Raw compaction/profile history.
]
```

## Future Work / Hardening

- Deepen predefined optimizer workflows and evaluation patterns as real user-gated optimization tasks exercise them.
- Refine the predefined optimizer tasks with more specific techniques, examples, decision rules, sanity checks, and experiment/evaluation patterns after they have been exercised on real ontology-tree, localized prompt/scaffold, and user-specified optimization work.
- Consider queue/backpressure observability for serialized Canon Learner/realignment work if background jobs lag in multi-session use.
- Consider stricter machine auditing of Canon Learner-declared deleted files if deletion review needs to be enforced beyond prompt boundaries.
- Keep included/builtin IB live-canon behavior explicit if included-IB canon sources become first-class.
