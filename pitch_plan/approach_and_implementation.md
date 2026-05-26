---
name: approach-and-implementation
description: Plan for Part 2 of the pitch — the SDK surface, the agent + llm services, coordination as ordinary code, an example IB (Tressoir's self-learning library), the self-learning mechanism, and a soft landing into evals via the live-session screenshot. Substance only; styling/animation/visual treatment is deferred.
---

# Part 2 — Approach & Implementation

Time budget: roughly ~40% of the 10-minute talk. Five slides; most are short, with one longer technique set-piece (Self-Learning). Bootstrap is woven into the example IB rather than getting its own slide. The DuckDB-Arrow case study from the paper is dropped in this 10-minute cut.

| # | Slide | Role |
|---|---|---|
| 5 | SDK Overview | Declutter / set vocabulary |
| 6 | The `agent` and `llm` services | The Pillar-2 (Adaptive Solve) meat |
| 7 | Complex coordination as ordinary code | Visual tease, no walkthrough |
| 8 | Example IB: the Self-Learning Library | Flag-planting on what an IB *is* |
| 9 | Self-Learning Mechanism | The technique slide; carries Pillar 3 (Learn) |
| 10 | A real session (poster redirect) | Soft landing into Part 3 |

---

## Slide 5 — How Agents Act: One Uniform Surface

Quick declutter slide. The audience should leave with the vocabulary "agents call typed SDK tools through a uniform surface, in Lua by default" — no deep dive.

- Every action an agent takes is a `sdk(service, tool, args)` call. **One shape across everything**: built-in services (`core`, `web`, `embed`), MCP servers, in-process libraries declared in the IB, IB skills / subagents / workflows, and arbitrary APIs.
- Default execution is **Lua** in a curated runtime — sandboxable but flexible. (`SDKCommand` and `IPythonCommand` cover the more constrained / more flexible ends of the spectrum.)
- Quick name-drops: `core` ships shell, file-edit, search, parallel tool calls. `web` for search/read. `llm` for one-shot model invocation. The IB shapes what the agent actually sees — the toolkit is not hard-coded.
- **Progressive disclosure** at scale: a short overview lives in the system prompt; full docs are searchable on demand.

Notes:
- Goal is to clear the runway for Slides 6 and 7 — set vocabulary, then move on.

---

## Slide 6 — Adaptive Multi-Agent Systems, In Plain Code

The meat of Part 2. This slide carries Pillar 2 (Adaptive Solve).

**The `agent` service is the leverage point.** Far beyond `spawn`, the `agent` service exposes a deliberate control surface:

- **Programmatic compaction** — agents write code that inspects their own runtime state and emit a dense progress summary. Far denser than natural-language summarization; meta-agents can also inject context on resume to steer through simple synchronous primitives.
- **Trajectory introspection** — `analyze_trajectory(agent_id, purpose)` returns a structured analysis. Powers both live steering and the offline task profiles that feed self-learning.
- **Mid-flight steering** — `compact_run`, `pause`, `resume`, `subscribe`, event-driven primitives. **Human steering uses the same surface as meta-agents** — the HIL frontend is just another caller of the SDK.
- **Model-spec abstraction** — `advanced` / `fast` / `simple` / multimodal variants. A cost/quality knob at every call site, portable across providers.

**The `llm` service is the cheap complement.** Direct LLM invocation without an agentic loop. Paired with `agent`, this is what lets you actually *build* the optimized cost-aware LLM/agentic workflows from Slide 3 — semantic predicates, hybrid SQL+LLM plans, batch processing, agent-as-judge — as ordinary code, with cost/quality knobs at every call.

**Differentiator (verbal claim, careful wording).** *"I'm not aware of another system that exposes this combined level of control — introspection, programmatic compaction, mid-flight steering, event-driven primitives — and sophistication — multi-agent scaffolds, hybrid LLM/agentic workflows, cost-aware orchestration — through ordinary code, with no specialized framework or DSL."*

Notes:
- This is the slide that earns Pillar 2. The "control + sophistication" framing is the load-bearing claim.
- The differentiator line is verbal, not a slide bullet. Soften to "we believe this combination is novel" / "few if any other systems" if a more conservative tone is needed.

---

## Slide 7 — Any Pattern Expressible in Code Is Available

Visual tease. Show — don't walk through.

- One short snippet (paper Listing 4 style): a parallel DAG over sub-agents in roughly ten lines, with `model_spec` cost control per node.
- Verbal one-liner: *"Pipelines, map-reduce, hierarchical decomposition, retry-with-fallback, voting ensembles — same shape, plain library calls, no specialized protocol."*
- Land the *feel*: "oh — that's just regular code." Then move on.

Notes:
- The slide's job is to make the audience *feel* the simplicity, not understand the snippet line by line. The spoken pitch never reads the code.
- Could share a single snippet between Slides 6 and 7 if pressed for time, but keep them separate by default so each lands.

---

## Slide 8 — What an IB Looks Like: Files + Parseable Links + Parseable Contracts

Flag-planting slide for the academic audience. Tressoir's own self-learning library is the worked example, which simultaneously shows the platform developing itself.

**The IB is files, parseable links, and parseable contracts.** The layout looks like ordinary OS artifacts — folders and files. What makes it an IB is what's *inside* the files:

- **Parseable links** — `STRUCTURED_RELATED_SOURCES`, a JSONC list of pointers to other files in the system (sibling ontologies, source code, skills, tests). These links naturally form a graph across the project.
- **Parseable contracts** — `STRUCTURED_CANON`, a TOML block of declared invariants, techniques, intent, and rules attached to that node.
- Plus structured frontmatter (`pin`, `reveal_to_tags`, `MUST BE CONSULTED`) that controls when and how a node is surfaced to agents.

So an IB component is a regular file *enriched with* parseable links and parseable contracts. Readable to humans, parseable by agents, no DSL.

**Two ontologies, two contracts (internal first).** The self-learning library has two ontology documents serving complementary roles:

- **`SELF_LEARNING.ONTOLOGY.md` (internal implementation contract)** — declares architecture, flow, schema, and vocabulary. Its `STRUCTURED_CANON` block declares invariants and techniques such as:
  - *"Compaction must not await smart merge work."* — operational invariant.
  - *"`agent.stats(agent_id)` is the concise introspection surface for optimizer/meta agents."* — technique that hints at how meta-agents can introspect and optimize other agents.

  Its `STRUCTURED_RELATED_SOURCES` block links directly to the source files that implement the contract (`compactor.py`, `traj_analyzer.py`, `canon_aux.py`, …).

- **`SDK_LIB.md` (public usage contract)** — declares purpose, tools with signatures, the two named meta-agents (*Canon Learner*, *Self-Learning Optimizer*), and references the scoped skills. This is what callers see.

**The materialized side, parseably linked.** The same graph reaches out from these ontologies to scoped skills (Fast Merge, Realign spectrum, Localized Optimization, …), Python implementations (`canon_learning.py`, `optimizer.py`), and prompt templates. Each materialized file has its own frontmatter declaring when to pin it and whom it is revealed to. Same graph, executable nodes.

**Unstructured external sources, alongside the structured graph.** *"And alongside the structured graph, the IB can also house raw, unstructured external sources under `IB/kb/` — papers, references, design docs, raw notes — for agents to search during task execution."*

**Closing flag-plant.** *"Regular files + semi-structured parseable links + parseable contracts. That's what an IB is. Readable to humans, parseable by agents, no DSL — and it's the IB Tressoir uses to learn about itself."* → Slide 9.

Notes:
- Don't read the file tree out loud. Show it; talk through the *idea*.
- The two `STRUCTURED_CANON` snippets in the second beat are deliberately chosen: the first plants a strong-invariant feel; the second teases meta-agent introspection (and previews Slide 9's deep-optimize beat).
- The "graph" framing is for the academic audience (advisor-flagged). Avoid stronger phrasing like "knowledge-graph-with-executable-leaves" — too marketing-flavored, raises skeptic guards.

---

## Slide 9 — Self-Learning: Trigger → Merge+Promote → Realign → Deep-Optimize

The technique slide; carries Pillar 3 (Learn).

**The pipeline.** Four stages, all sharing a persistent learner-specific memory:

`trigger → merge + promote → realign → deep-optimize`

A persistent **learner-specific memory** (`CANON_LEARNER_DENSE_STATE.md`) threads through every stage — operational state across runs (recurring merge rules, decisions about realignment, etc.).

**Triggers (non-blocking).** Self-learning fires on:

- **Compaction** (any long-horizon agent)
- **Trajectory analysis** (post-task introspection — same `analyze_trajectory` from Slide 6)
- **Task termination** (capture durable lessons)
- **Intent/expertise-bearing user prompts** *(heuristic — measuring this well is an open problem)*

Captures land in a raw log; **agents resume immediately**.

**Merge + Promote (the implicit LRU, the load-bearer).** The Canon Learner merges raw captures into curated canon. At runtime, the **context builder surfaces recent curated canon into agent system prompts** — bringing important context to the foreground *without polluting the prompt with stale, always-on knowledge*. When a new raw capture duplicates an existing curated item, the Canon Learner just **touches its timestamp** — implicitly promoting it. **An implicit LRU over the curated graph, projecting the freshest relevant nodes into the next agent's system prompt.**

**Realign (agent-driven).** Periodic restructuring of the curated tree — small cleanup → medium hygiene → broad source-sync. **Agent-driven**: the Canon Learner alone, no expensive experimentation. Today shallow Layer-2 (root index + domain leaves); the natural direction is a richer graph.

**Deep-Optimize (introspection + experimentation).** A separate optimizer evolves the IB's *components* — skills, prompts, ontologies, subagent templates, SDK libs, workflows. This is the stage where the system uses **introspection primitives** (`analyze_trajectory`, `agent.stats`, …) and **statistical experimentation** — rollouts, A/B tests, candidate generation — to improve materialized components themselves. Realign is cheap and agent-driven; deep-optimize is the more expensive path that earns its keep when broader experimentation is warranted.

**Closer.** *"All of this — capture, merge+promote, realign, optimize — is itself just an IB. Self-learning, defined and evolved as an interpretable blueprint."*

Notes:
- "Implicit LRU" is the punchy handle; keep it in the spoken pitch.
- The realign vs. deep-optimize split is principled, not just a safety gate: realign is cheap restructuring; deep-optimize is the *substantive* optimization layer that uses agent introspection plus experimentation.
- The `agent.stats` / `analyze_trajectory` callback ties this slide directly back to Slide 6's introspection primitives — Pillars 2 and 3 share infrastructure.

---

## Slide 10 — Tressoir, Live (Poster Session)

Soft landing into Part 3. Live demo deliberately deferred to the poster session — this minimizes risk in a 10-minute cut.

- One static screenshot — agent tree + HIL chat + IB browser side-by-side, ideally.
- Verbal meta-line *(contingent on delivery setup)*: *"This very presentation is being viewed through a Tressoir webview — the platform showing you the platform."* Drop if the actual delivery isn't a Tressoir webview.
- *"For a hands-on look, come to the poster session this afternoon."*
- Tee-up to Part 3: *"Now — how does this hold up in evaluation?"*

Notes:
- The webview meta-line is a high-payoff one-liner *only if* delivery is actually rendered through Tressoir. Mark it contingent until delivery is confirmed.
