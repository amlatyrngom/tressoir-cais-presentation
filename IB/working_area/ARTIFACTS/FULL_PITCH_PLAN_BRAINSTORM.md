---
name: full-pitch-plan-brainstorm
description: This is a the space where we do brainstorming until we move its content into the approved plans. I will rephrase the plan into my natural voice for the pitch. The "unformed intent" are hand-written by me and should not be edited unless I say so.
---

# Part 1 - Introduction and Motivation

## Background
### Unformed Intent 
- Background-like statements:
    - As we all know in this room, over the last 2 years, models and the agents built around them have become increasingly capable, to the point where fairly complex work can be done primarily through prompts and design files with human involvement, if any, mostly at planning and review time. This pattern is known as vibe coding.
- Maybe put up some news/blog items about vibecoding, etc, but just for visuals. Let's leave this out for later.
- Maybe mention for more structured approaches like SDD have been proposed to deal with the mess of vibe-coding. I am not sure if this shouldb 

### Formed Intent

**Slide 1 — Background**
- **Working title:** "Where We Are: Vibe Coding" (alternative: plain "Background").
- **Slide content (final visible):**
  - Headline beat: over the past ~2 years, models and the agents built around them have become capable enough that complex work can be done largely from prompts and design files, with humans involved mostly at planning and review time.
  - Label: this pattern is broadly known as **vibe coding**.
- **Animation:** static or single fade-in. Slide 1 is a runway, not a reveal.
- **Off-slide speaker notes:**
  - Tone: matter-of-fact, "as we all know in this room." Don't oversell vibe coding.
  - Do NOT introduce SDD or any "structured response" here. Plant the *Specify* problem implicitly by emphasizing that the human still does the high-leverage thinking up front.
  - Visual asset (deferred): possible news/blog clipping wallpaper as backdrop. Lock content first, decorate later.


## Limitations, and What'd Ideally Want
### Unformed Intent
- However, the gold standard of agent-driven problem solving has yet to be achieved its goals are hard and sometimes in contradiction. From high-level to low-level:
    - Intent and Ontology Resolution: ....
    - Adaptivity to Specific Task: Scaffold/Harness, Prompts, Tools, etc.
    - General Problem Solving Capability.
    - Cost/Quality Frontier Choice: ...
    - Continual Learning in and across tasks.
    - Providing Context: Context engineering, Domain Expertise, Tribal Knowledge.
- I want this slide to be nicely animated to. All of the above will be shown in their title-only concise form. As I speak and click next, each is nicely expanded in turn.
- Also help me finding a more fundamental classification with maybe fewer items, if possible.

### Formed Intent

**Slide 2 — The Gold Standard**
- **Working title (may edit):** "The Gold Standard: Specify · Adaptive Solve · Learn".
- **Classification (locked):** three pillars — **Specify**, **Adaptive Solve**, **Learn**. Cost/quality is *not* a separate pillar: it appears as budgets/targets inside Specify and as optimize/re-evaluate inside Adaptive Solve. General problem-solving capability lives inside Adaptive Solve (no longer ambient on Slide 1).
  - **Specify** subsumes: intent + ontology resolution, providing context (domain knowledge, tribal knowledge, context engineering), budgets/quality targets.
  - **Adaptive Solve** subsumes: per-task scaffold/harness, prompts, tools, in-task steering, general problem-solving capability, cost/quality optimization.
  - **Learn** subsumes: durable cross-task learning, knowledge accumulation, refined components/canon.
- **Slide content (final visible, animation-driven):**
  - **Bridge line (build 1):** "Vibe coding shows what's possible when the model is strong. The gold standard of agentic problem-solving means doing three things well — and doing them together."
  - **Pillar reveal (build 2):** the three pillar titles appear together, no descriptions yet — **Specify**, **Adaptive Solve**, **Learn**.
  - **Per-pillar expand/contract (builds 3, 4, 5):** each click expands one pillar to show *definition + gap*. The previously-expanded pillar contracts back to its title to keep the slide uncluttered.
    - **Specify** — turn ambiguous human intent + domain context + budgets into something the agent can actually act on. *Gap:* today this is brittle prompting and ad-hoc context-stuffing; no shared, reusable ontology or budget contract.
    - **Adaptive Solve** — shape the agent system to the task (scaffold, prompts, tools) and steer it toward a cost/quality target. *Gap:* scaffolds are hand-built and mostly static; per-task adaptation and in-flight steering are manual and expensive to iterate on.
    - **Learn** — get durably better across tasks, not just within one. *Gap:* most agents start cold every run; durable, structured cross-task learning is the open frontier.
  - **Close (build 6):** "These are the three pillars Tressoir attacks. The rest of the talk is how." → Part 2 transition.
- **Animation contract:**
  - Pillar titles persist across builds (always visible).
  - Only one pillar is expanded at a time; expanding a new one contracts the previous.
  - Close line appears alongside all three contracted titles, so the audience leaves the slide with the three words on screen.
- **Off-slide speaker notes:**
  - Pacing: pillar reveal → pause; per-pillar expansions ≈30–40s each; close ≈10s.
  - **Scope caveat (pitch only, not on slide):** acknowledge that Pillar 1 (Specify) — especially its UX-heavy, multi-user dimension — won't be the focus of this talk. The talk demonstrates progress mostly on Pillars 2 (Adaptive Solve) and 3 (Learn); Specify is addressed *to a lesser extent*, mainly via ontology/IB context.
  - Keep the gap lines crisp and verbal — no extra slide bullets sneaking in.

## Illustrative Example
### Unformed Intent
This illustrative example should cover a wide breadth. We use DBMSs because they were the initial motivation. However, what we discuss here is general. How we would like to have a single agentic system capable of:
- Interpreting ambiguous user queries for text-2-sql workloads.
- Building libraries of optimized LLM/Agentic workflows for semantic queries.
- Baking general/application-specific logic into 500k-1M+ highly complex LOCs repositories, preserving advanced guarantees that trip up expert humans.
    - Distributing DuckDB - 
- Can automatically new research ideas from expert humans.
- Gets better the more it is used. In particular, a system built from the ground up by our agents (agent-native system) should be much easier to operate/extend than, say, Postgres.

### Formed Intent

**Slide 3 — Illustrative Example: One Unified Agentic System Across the Data Stack**

- **Working title (TBD):** "One System, the Whole Data Stack" (alt: "What An Agent Has To Do, End-to-End").
- **Frame:** layer-anchored tour. Three layers (Interface · Application · Engine) plus a cross-cutting Learn beat. The slide's job is to plant the *flag* — what a single unified agentic system has to cover end-to-end.
- **Visual:** TBD. Each key layer and capability should be cleanly illustrated. Exact approach (cards / process flow / hero illustration / minimalist layered text) deferred until script is locked. A first attempt lives in `components/CapabilityFlow.vue` (parked).

**Spoken script (beats):**

- **Beat 1 (optional opener, ~10–15s):** "Let me make this concrete. Take the database stack — analyst at the top, application in the middle, engine below. A unified agentic system has to do real work at every layer."
  - May be dropped if the slide's layer strip + title already carry the framing.

- **Beat 2 — At the interface (~20s):** "At the interface, analysts ask fuzzy natural-language queries. The system has to disambiguate them, bind them to the application's domain ontology, and surface the tribal knowledge that even expert humans rely on to know what was actually meant."
  - *Scope:* pure Specify — meaning resolution only. No execution mentioned here.

- **Beat 3 — At execution time (~30s):** "At execution time, the system first has to know the application's own assumptions — what invariants hold, what shortcuts those license. Pure SQL with well-known optimizations should never even touch an agent. Parameterized hybrid workloads — semantic predicates, LLM ops alongside SQL — should run from compiled, cost-aware plans. An agent steps in only when something genuinely novel shows up: synthesize a new plan, or explore."
  - *Scope:* three-tier escalation — SQL → compiled hybrid workflow → agent. **Agent is the backstop, not the default.** Application-level assumptions inform planning at every tier.

- **Beat 4 — In the engine itself (~30s):** "In the engine itself — half-a-million to a million lines of code, DuckDB-class — the system has to navigate, understand, and make deep edits while preserving the correctness and performance guarantees that trip up expert humans. And it has to bake the application's own assumptions — invariants, hot paths, schema constraints — directly into engine code, turning them into specialized fast paths a generic database can't match."
  - *Scope:* 1M LOC mastery + application-level assumptions compiled into engine code, with correctness/perf guarantees preserved.

- **Beat 5 — Learn across all of this (~20s):** "And learn. From user feedback at the interface, from runtime metrics deep in the engine, from observations across every execution. Feedback that refines the ontology, refines the compiled workflows, refines agent decisions — and yes, refines the engine code itself."
  - *Scope:* cross-cutting; feedback flows up and down the stack; a single mechanism touches every layer.

- **Beat 6 — Punchline (~10s):** "One unified agentic system that does all of this. Not five products glued together. That's the target. Truly unsolved today, including by us. The platform I'll show you next is what we built to give us a real shot."

**Per-layer / per-capability gist (for the slide content, however it's eventually visualized):**

- **Interface:** fuzzy NL → ontology + tribal knowledge → meaning.
- **Application / execution:** application-level assumptions · SQL → compiled hybrid → agent (backstop only).
- **Engine:** 1M LOC mastery · bake app assumptions into code · correctness/perf guarantees preserved.
- **Learn:** user feedback + runtime metrics → refines ontology, compiled workflows, agent decisions, engine code.
- **Closing line:** "One unified agentic system. End-to-end."

**Off-slide speaker notes:**
- Honest "truly unsolved today, including by us" caveat lands inside Beat 6 — it's part of the spoken pitch, not a slide footnote.
- The agent-as-backstop framing in Beat 3 is the implicit answer to "why not just throw Claude Code / Codex / Antigravity at this?" — no separate competitor slide needed.
- Application-level assumptions appear in *both* Beat 3 (planner uses them) and Beat 4 (engine bakes them in). Repetition is intentional — same idea threading up and down the stack.
- Word budget: ~350–400 words across all beats, fitting ~2.5 minutes inside Part 1's stretched 50% allowance.

## Ontology-Driven Development For Agentic System
### Unformed Intent
- Being able to do all of the above means that the agentic system itself becomes enough, and integrated into the target project enough, that it becomes necessary to incorporate it within the SDD/ontology driven process.
- Mention that for efficiency and reliability agent-specs have to contain materialized components (see paper).
...

### Formed Intent
**Slide 4 — Interpretable Blueprints — Specifying & Evolving Agentic Systems**
Working title; may shorten to "Interpretable Blueprints" on the slide.
Sits at the start of Part 2 (the platform half). ~90s spoken target.

**Beat 1 — Bridge: agentic systems become *part of* the system.**
As agentic systems take on more of the work we just walked through, they stop being a tool that *acts on* a project and start becoming **increasingly indistinguishable from the regular components of the system they're woven into**. They have their own intent, contracts, invariants, and failure modes. That means we have to be able to *specify and evolve them* with the same rigor we'd apply to any other production component — and that brings us to Interpretable Blueprints.

**Beat 2 — The IB, half one: System Ontology.**
The first half of an Interpretable Blueprint is a **System Ontology**: intent, structure, invariants, and the context contracts that an agent (or a meta-agent) needs to act faithfully. The ontology is **interpreted live** — read, traversed, and applied on the fly by agents per task.

**Beat 3 — The IB, half two: Materialized Components.**
Live interpretation buys adaptivity, but it costs you reuse, determinism, review, and optimization. So we **materialize** the patterns that have earned it: proven workflows, hardened prompts, vetted sub-agents, optimized scaffolding. The compiled cost-aware hybrid workflows from the previous slide are exactly this kind of materialized component. Ontology and materialized components are **bound together**, and feedback flows in both directions.
*(Spoken target: ~20–22s, ~55–65 words.)*

**Beat 4 — Meta-agent primitives.**
On top of the IB sit **meta-agents**, with a deliberate primitive set: workflow construction, context assembly, canon capture, observation, feedback-driven refinement — and **direct invocation of materialized components**.

Two design choices distinguish this from a normal agent stack:
- **(a) The IB is the agent's primary directive.** A meta-agent is, first and foremost, an *interpreter of the IB*. Its job is not "solve this task with the IB on the side" — it's to **jointly use and improve the IB while solving the task**. Task progress and IB evolution co-occur; every successful pattern, captured insight, or new component the agent produces feeds back in for the next task.
- **(b) Primitives expose materialized components directly — bypassing the agent loop.** When a proven workflow already exists, the platform makes it trivial to call it as code, with no agent in the loop. This is the **agent-as-backstop** principle from the previous slide, lifted to the platform level: don't pay the cost of an agent loop for what's already optimized.

**Beat 5 — Closing analogy + tee-up to the platform.**
**What spec-driven development is to vibe coding, this — Interpretable Blueprints plus meta-agent primitives — is to agentic systems.** Part 2 of the talk is the platform we built around it.

**Off-slide speaker notes:**
- SDD is intentionally introduced *only* at Beat 5 (held back from Slide 1 and Beat 1 here) so the analogy lands clean instead of being pre-announced.
- Beats 4(a) and 4(b) mirror Slide 3's three-tier escalation (SQL → compiled hybrid → agent backstop) at the platform level — same architectural value (don't pay agent tax for what's already optimized).
- Visual treatment for this slide is TBD; lock script first, iterate visuals later (per STATE.md `## Parked / Deferred`).


# Part 2 - Approach And Implementation
## Part Outline - Unformed Itent
- Here, you'll need to read both section 2 of the paper, first half of Section 4, and the self-learning ontology which we did not mention as much in the paper, but need to present here.

Let's begin with presentation ordering. I am hesitating between:
- Toolkit, IB, Self-Learning, Bootstraping, Mini-Demo, IB-example:
  - I want to show Tressoir's own IB to ground the fact the platform uses its own philosophy to develop itself.

## Part Outline - Formed Intent

5-slide structure for Part 2 (~3.5–4 min budget). Most are short; one is the longer set-piece.

| # | Slide | ~Time | Role |
|---|---|---|---|
| 5 | SDK Overview (Lua, core, shell, services-as-uniform-surface) | ~30s | Declutter / set vocabulary |
| 6 | `agent` and `llm` services — control + adaptivity | ~60–70s | The Pillar-2 (Adaptive Solve) meat |
| 7 | Complex coordination as ordinary code | ~30s | Visual tease, no walkthrough |
| 8 | Self-Learning + IB-example (Tressoir's own self-learning ontology) | ~90–100s | The set-piece (Pillar 3 + bootstrap) |
| 9 | A real session (static screenshot, poster-session redirect) | ~20–30s | Soft landing into Part 3 |

Notes on the structure:
- Toolkit is split across Slides 5–7 (overview / agent+llm meat / coordination tease) so each slide can be light. Audience should leave with a *feel* for "agentic systems are built as ordinary code" without dense walk-throughs.
- The DuckDB-Arrow case study from paper Section 4.3 is **dropped** — no time in a 10-min cut.
- Bootstrap is **not a dedicated slide** — it's woven into Slide 8 because Tressoir's own self-learning ontology naturally illustrates IB structure *and* shows the platform developing itself.
- Live demo is **deferred to the afternoon poster session**; Slide 9 is a static screenshot + redirect, with an optional meta line about the talk itself being viewed through a Tressoir webview.

## Slide 5 — SDK Overview
### Formed Intent

**Slide 5 — How Agents Act: One Uniform Surface**
~30s spoken target. Dense-but-quick declutter slide.

**Beats:**
- Every action an agent takes is a `sdk(service, tool, args)` call. **One shape across everything**: built-in services (`core`, `web`, `embed`), MCP servers, in-process libraries declared in the IB, IB skills/subagents/workflows, and arbitrary APIs.
- Default execution is **Lua** in a curated runtime — sandboxable but flexible. (`SDKCommand` and `IPythonCommand` cover the more constrained / more flexible ends of the spectrum.)
- Quick name-drops: `core` ships shell, file-edit, search, parallel tool calls. `web` for search/read. `llm` for one-shot model invocation. The IB shapes what the agent actually sees — the toolkit isn't hard-coded.
- **Progressive disclosure** at scale: a short overview lives in the system prompt, full docs are searchable on demand.

**Off-slide speaker notes:**
- Goal: by the end of this slide, audience has the vocabulary "agents call typed SDK tools through a uniform surface, in Lua by default." No deep dive — just clear the runway for Slides 6 and 7.
- Visual treatment TBD; likely one short snippet (`sdk("core", "shell", {…})`) plus a service-catalog strip. Lock script first, iterate visuals later.

## Slide 6 — The `agent` and `llm` Services
### Formed Intent

**Slide 6 — Adaptive Multi-Agent Systems, In Plain Code**
~60–70s spoken target. The meat of Part 2; carries Pillar 2 (Adaptive Solve).

**Beat 1 — The `agent` service is the leverage point.**
Far beyond `spawn`, the `agent` service exposes a deliberate control surface:
- **Programmatic compaction** — agents write code that inspects their own runtime state and emit a dense progress summary. Far denser than natural-language summarization; meta-agents can also inject context on resume to steer through simple synchronous primitives.
- **Trajectory introspection** — `analyze_trajectory(agent_id, purpose)` returns a structured analysis. Powers both live steering and the offline task profiles that feed self-learning.
- **Mid-flight steering** — `compact_run`, `pause`, `resume`, `subscribe`, event-driven primitives. **Human steering uses the same surface as meta-agents** — the HIL frontend is just another caller of the SDK.
- **Model-spec abstraction** — `advanced` / `fast` / `simple` / multimodal variants. A cost/quality knob at every call site, portable across providers.

**Beat 2 — The `llm` service is the cheap complement.**
Direct LLM invocation without an agentic loop. Paired with `agent`, this is what lets you actually *build* the optimized cost-aware LLM/agentic workflows from Slide 3 — semantic predicates, hybrid SQL+LLM plans, batch processing, agent-as-judge — as ordinary code, with cost/quality knobs at every call.

**Beat 3 — The differentiator (verbal, careful claim).**
*"I'm not aware of another system that exposes this combined level of control — introspection, programmatic compaction, mid-flight steering, event-driven primitives — and sophistication — multi-agent scaffolds, hybrid LLM/agentic workflows, cost-aware orchestration — through ordinary code, with no specialized framework or DSL."*

**Off-slide speaker notes:**
- This is the slide that earns Pillar 2 (Adaptive Solve). The "control" and "sophistication" framing is the load-bearing claim.
- The differentiator line is a verbal claim, not a slide bullet. May soften to "we believe this combination is novel" / "few if any other systems" if more conservative.
- Visual treatment TBD; possibly a small annotated catalog of `agent.*` and `llm.*` calls, or one snippet that uses `compact_run` + `analyze_trajectory` + `llm.invoke` together. Lock script first.

## Slide 7 — Complex Coordination as Ordinary Code
### Formed Intent

**Slide 7 — Any Pattern Expressible in Code Is Available**
~30s spoken target. Visual tease — **do not walk through the code**.

**Beats:**
- Show one short snippet (paper Listing 4 style): a parallel DAG over sub-agents in ~10 lines, with `model_spec` cost control per node.
- Verbal one-liner: *"Pipelines, map-reduce, hierarchical decomposition, retry-with-fallback, voting ensembles — same shape, plain library calls, no specialized protocol."*
- Land the *feel*: "oh — that's just regular code." Then move on.

**Off-slide speaker notes:**
- The slide's job is to make the audience *feel* the simplicity, not understand the snippet line by line. Spoken pitch never reads the code.
- Visual treatment TBD; the snippet should be visually clean — large enough to read at a glance, but the spoken pitch never reads it.
- Could share a single snippet between Slides 6 and 7 if pressed for time, but keep them separate by default so each lands.

## Slide 8 — Example IB: The Self-Learning Library
### Formed Intent

**Slide 8 — What an IB Looks Like: Files + Parseable Links + Parseable Contracts**
~50–60s spoken target. Flag-planting slide for the academic audience.

**Beat 1 — The IB is files, parseable links, and parseable contracts.**
The layout looks like ordinary OS artifacts — folders and files. What makes it an IB is what's *inside* the files:
- **Parseable links** — `STRUCTURED_RELATED_SOURCES`, a JSONC list of pointers to other files in the system (sibling ontologies, source code, skills, tests). These links naturally form a graph across the project.
- **Parseable contracts** — `STRUCTURED_CANON`, a TOML block of declared invariants, techniques, intent, and rules attached to that node.
- Plus structured frontmatter (`pin`, `reveal_to_tags`, `MUST BE CONSULTED`) that controls when and how a node is surfaced to agents.

So an IB component is a regular file *enriched with* parseable links and parseable contracts. Readable to humans, parseable by agents, no DSL.

**Beat 2 — Two ontologies, two contracts.** *(internal first)*
The self-learning library has two ontology documents serving complementary roles:
- **`SELF_LEARNING.ONTOLOGY.md` (internal implementation contract)** — declares architecture, flow, schema, and vocabulary. Its `STRUCTURED_CANON` block declares invariants and techniques such as:
  - *"Compaction must not await smart merge work."* — operational invariant.
  - *"`agent.stats(agent_id)` is the concise introspection surface for optimizer/meta agents."* — technique that hints at how meta-agents can introspect and optimize other agents.

  Its `STRUCTURED_RELATED_SOURCES` block links directly to the source files that implement the contract (`compactor.py`, `traj_analyzer.py`, `canon_aux.py`, etc.).
- **`SDK_LIB.md` (public usage contract)** — declares purpose, tools with signatures, the two named meta-agents (*Canon Learner*, *Self-Learning Optimizer*), and references the scoped skills. This is what callers see.

**Beat 3 — The materialized side, parseably linked.**
The same graph reaches out from these ontologies to scoped skills (Fast Merge, Realign spectrum, Localized Optimization, …), Python implementations (`canon_learning.py`, `optimizer.py`), and prompt templates. Each materialized file has its own frontmatter declaring when to pin it and whom it is revealed to. Same graph, executable nodes.

**Beat 4 — Unstructured external sources, alongside the structured graph.**
*"And alongside the structured graph, the IB can also house raw, unstructured external sources under `IB/kb/` — papers, references, design docs, raw notes — for agents to search during task execution."*

**Beat 5 — Closing flag-plant.**
*"Regular files + semi-structured parseable links + parseable contracts. That's what an IB is. Readable to humans, parseable by agents, no DSL — and it's the IB Tressoir uses to learn about itself."* → Slide 9.

**Off-slide speaker notes:**
- Don't read the file tree out loud. Show it in the slide; talk through the *idea*.
- The two STRUCTURED_CANON snippets in Beat 2 are deliberately chosen: the first plants a strong-invariant feel; the second teases meta-agent introspection (and previews Slide 9's deep-optimize beat).
- The "graph" framing is for the academic audience; advisor-flagged. Avoid stronger phrasing like "knowledge-graph-with-executable-leaves" — too marketing-flavored, raises skeptic guards.
- Visual treatment TBD; lock script first.

## Slide 9 — Self-Learning Mechanism
### Formed Intent

**Slide 9 — Self-Learning: Trigger → Merge+Promote → Realign → Deep-Optimize**
~75–90s spoken target. The technique slide; carries Pillar 3 (Learn).

**Beat 1 — The pipeline.**
Four stages, all sharing learner-specific memory:

`trigger → merge + promote → realign → deep-optimize`

Plus a persistent **learner-specific memory** (`CANON_LEARNER_DENSE_STATE.md`) threading through every stage — operational state across runs (recurring merge rules, decisions about realignment, etc.).

**Beat 2 — Triggers (non-blocking).**
Self-learning fires on:
- **Compaction** (any long-horizon agent)
- **Trajectory analysis** (post-task introspection — same `analyze_trajectory` from Slide 6)
- **Task termination** (capture durable lessons)
- **Intent/expertise-bearing user prompts** *(heuristic — measuring this well is an open problem)*

Captures land in a raw log; **agents resume immediately**.

**Beat 3 — Merge + Promote (the implicit LRU, the load-bearer).**
The Canon Learner merges raw captures into curated canon. At runtime, the **context builder surfaces recent curated canon into agent system prompts** — bringing important context to the foreground *without polluting the prompt with stale, always-on knowledge*. When a new raw capture duplicates an existing curated item, the Canon Learner just **touches its timestamp** — implicitly promoting it. **An implicit LRU over the curated graph, projecting the freshest relevant nodes into the next agent's system prompt.**

**Beat 4 — Realign (agent-driven).**
Periodic restructuring of the curated tree — small cleanup → medium hygiene → broad source-sync. **Agent-driven**: the Canon Learner alone, no expensive experimentation. Today shallow Layer-2 (root index + domain leaves); the natural direction is a richer graph.

**Beat 5 — Deep-Optimize (introspection + experimentation).**
A separate optimizer evolves the IB's *components* — skills, prompts, ontologies, subagent templates, SDK libs, workflows. This is the stage where the system uses **introspection primitives** (`analyze_trajectory`, `agent.stats`, …) and **statistical experimentation** — rollouts, A/B tests, candidate generation — to improve materialized components themselves. Realign is cheap and agent-driven; deep-optimize is the more expensive path that earns its keep when broader experimentation is warranted.

**Closer:**
*"All of this — capture, merge+promote, realign, optimize — is itself just an IB. Self-learning, defined and evolved as an interpretable blueprint."*

**Off-slide speaker notes:**
- "Implicit LRU" is the punchy handle; keep it in the spoken pitch.
- Realign vs Deep-Optimize distinction does real work: realign is cheap restructuring, deep-optimize is the *substantive* optimization layer that uses agent introspection + experimentation. The split is principled, not just a safety gate.
- The `agent.stats` / `analyze_trajectory` callback ties Slide 9's Beat 5 directly back to Slide 6's introspection primitives — shows Pillar 2 and Pillar 3 sharing infrastructure.
- Visual treatment TBD; the natural visual is the four-stage horizontal pipeline + a learner-memory ribbon threading through. This slide gets visual priority once content is locked.

## Slide 10 — A Real Session (Defer to Poster)
### Formed Intent

**Slide 10 — Tressoir, Live (Poster Session)**
~20–30s spoken target. Soft landing into Part 3.

**Beats:**
- Show one static screenshot — agent tree + HIL chat + IB browser side-by-side, ideally.
- Verbal meta-line *(contingent on delivery setup):* *"This very presentation is being viewed through a Tressoir webview — the platform showing you the platform."* — drop if the actual delivery isn't a Tressoir webview.
- *"For a hands-on look, come to the poster session this afternoon."*
- Tee-up to Part 3: *"Now — how does this hold up in evaluation?"*

**Off-slide speaker notes:**
- Live demo deliberately deferred to the poster session — minimizes risk in a 10-min cut.
- Webview meta-line is a high-payoff one-liner *only if* delivery is actually rendered through Tressoir. Mark contingent.
- Visual: which screenshot is TBD — agent tree + HIL chat + IB browser side-by-side is the current default (most legible at a glance).


# Part 3 - Evaluation And Conclusion
## Overview - Unformed Intent
Here I broadly for this part.
The evaluation slides will move fast, with a reference to the paper.
Read the eval secion

State that evaluating a system whose selling point is that learns over days of its own actions and of human feedback is hard; so we don't yet have a comprehensive evaluation of every aspect; only specific parts.

- We'll start with the screenspot pro which shows an example of a compiled workflow that leads to 13-14+% improvement at low cost.
- Then the hybrid on where tools + recommended approach design a-priori help Gemini 3 Flash exceed Opus 4.6.
- As a temporary decision let's not show the SWE ones yet. They require too much caveating about how they have no learning due, cost more due to test-time scaling, blablabla. I'll see if I come up with a new eval along this line for the presentation, but let's not count on it at all.

Then transition to a conclusion slide. Let's follow the recommendation of not having an empty, thank-you-only conclusion slide; but one that doubles as brief summary + thank you.


## Overview - Formed Intent

3-slide structure for Part 3 (~1.5–2 min budget). Move fast; defer to paper.

| # | Slide | Role |
|---|---|---|
| 11 | Offline-Designed Blueprint: ScreenSpot-Pro | Eval framing + first slice (offline-only) |
| 12 | Hybrid: Bird-Critic | Second slice (offline + online) |
| 13 | Summary | Brief recap + verbal close |

Notes on the structure:
- SWE results (SWE-Bench Pro Qute, SWE-Bench-Live C/C++) are **dropped from this 10-minute cut** — they require too much caveating (no learning, higher costs from test-time scaling, etc.). May revisit if a sharper eval emerges before the talk; not counting on it.
- Conclusion slide deliberately doubles as **brief summary + thank-you**, not an empty thank-you slide. Verbal close is intentionally minimal — "see paper, thank you."
- Eval framing on Slide 11 sets expectations once for the whole part; Slide 13 doesn't re-state the caveat.

## Slide 11 — Offline-Designed Blueprint: ScreenSpot-Pro
### Formed Intent

**Slide 11 — Offline-Designed Blueprint: ScreenSpot-Pro**
First eval slice. Carries the eval framing for the whole Part.

**Eval framing.**
*"Tressoir's value is that all of these aspects live in one system. We don't yet have an eval that exercises all of them at once — so we evaluate slices. Two slices today."*

**Setup.**
ScreenSpot-Pro: large desktop screenshots, click-to-coordinate task. Hard at production scale — complex layouts, huge input space.

**Offline phase.**
5 sample instances (~0.3% of the benchmark), one day of asynchronous work. A Claude 4.5 Opus meta-agent ran rollouts, collected stats, and proposed candidate ontologies for human review. The blueprint that survived was strikingly simple: two rounds of progressive cropping, then box-based clicking — three agents (two croppers + one clicker), each with a short ontology and a helper tool.

**Result.**
That blueprint, running on Gemini 3 Flash, hits 83.1% accuracy at $0.05 / instance — +14.0% over the same model called naively. Approaches the GPT-5.2 xHigh scaffold (86.3%) at a cheaper model, and outperforms open-source SOTA Holo2 Agentic (78.5%) and ZoomClick.

**The point.**
*"This is Slide 4's materialized components in concrete form — a small offline phase produces a compiled, cheap, high-quality agentic system tailored to the model, running without the meta-agent in the loop."* (Slide-3/Slide-4 agent-as-backstop callback.)

**Off-slide speaker notes:**
- Exact numerical phrasing left for the spoken-pitch translation; the substance is +14% over the naive same-model baseline at $0.05/instance, approaching frontier-scaffold performance with a cheaper model.
- "5 instances / ~0.3% / one day" emphasizes the data + time efficiency of the offline phase.
- The Slide-4 callback ("materialized components in concrete form") is the connective tissue that makes the eval feel like part of the architectural argument, not disconnected numbers.

## Slide 12 — Hybrid: Bird-Critic
### Formed Intent

**Slide 12 — Hybrid: Bird-Critic**
Second eval slice. Offline tool development + online adaptation.

**Setup.**
Bird-Critic *flash* split (200 instances): text-to-SQL repair — DML corrections, DDL changes, performance optimizations.

**Offline phase (Claude 4.5 Sonnet meta-agent).**
Tools first, agentic structure second:
- `pg_snapshot.sh` / `pg_restore.sh` for safe, reversible experimentation against the database.
- `psycopg2` and `psql` available for testing fixes.
- Benchmark guidelines, hand-edited to prevent leakage (we removed instance-specific heuristics the learning agent had started hard-coding).

**Online phase.**
A single meta-agent on Gemini 3 Flash uses those tools.

**Result.**
56.0% — surpasses the verified SOTA SQL-ACT (Claude 4.6 Opus) at 52.0%. $0.28 / instance, 3.1 sub-agents on average.

**The point.**
*"Tools + a recommended approach, developed offline, then handed to a cheaper model with online adaptation — that combination lifts Gemini 3 Flash past Claude 4.6 Opus-level performance. Offline + online is more than the sum of its parts."*

**Off-slide speaker notes:**
- Headline contrast: SQL-ACT is a hand-built specialized system on a frontier model; Tressoir is a general-purpose platform with a 5-instance offline phase on a cheap model.
- Exact numerical phrasing left for spoken-pitch translation.

## Slide 13 — Summary
### Formed Intent

**Slide 13 — Summary**
Not an empty thank-you slide. Doubles as brief summary + close.

**Slide content (final visible):**
- The gold standard is **Specify · Adaptive Solve · Learn** — and the three have to be done together.
- Deeply integrated, complex agentic systems need a unified, flexible-yet-optimizable approach.
- Tressoir's answer: **Interpretable Blueprints + powerful meta-agent primitives**.

**Verbal close (off-slide):**
*"See the paper for more details. Thank you."*

**Off-slide speaker notes:**
- Deliberately terse. No pointer block, no Q&A invite line — verbal close handles it.
- The three bullets recap Part 1 (pillars), Part 1's bridge to Part 2 (need for unified approach), and Part 2 (the answer) in that order.
