---
name: intro-and-motivation
description: Plan for Part 1 of the pitch — Background, the Gold Standard pillars, the data-stack illustrative example, and the bridge into Interpretable Blueprints. Substance only; styling/animation/visual treatment is deferred.
---

# Part 1 — Introduction & Motivation

Time budget: roughly 40–50% of the 10-minute talk. The job of Part 1 is to plant the right flag for a mixed academic / industry / business audience before the platform half begins.

---

## Slide 1 — Background: Vibe Coding

Over the past ~2 years, models and the agents built around them have become capable enough that fairly complex work can be done largely from prompts and design files, with humans involved mostly at planning and review time. This pattern is broadly known as **vibe coding**.

Notes:
- Tone: matter-of-fact, "as we all know in this room." Don't oversell vibe coding.
- Do **not** introduce spec-driven development (SDD) here. The *Specify* problem is planted implicitly by noting the human still does the high-leverage thinking up front. SDD lands much later, on Slide 4.

---

## Slide 2 — The Gold Standard: Specify · Adaptive Solve · Learn

Bridge: vibe coding shows what's possible when the model is strong. The gold standard of agentic problem-solving means doing three things well — and doing them together.

The three pillars (locked):

- **Specify** — turn ambiguous human intent + domain context + budgets into something the agent can actually act on.
  - Subsumes: intent + ontology resolution, providing context (domain knowledge, tribal knowledge, context engineering), budgets and quality targets.
  - Gap: today this is brittle prompting and ad-hoc context-stuffing; no shared, reusable ontology or budget contract.

- **Adaptive Solve** — shape the agent system to the task (scaffold, prompts, tools) and steer it toward a cost/quality target.
  - Subsumes: per-task scaffold/harness, prompts, tools, in-task steering, general problem-solving capability, cost/quality optimization.
  - Gap: scaffolds are hand-built and mostly static; per-task adaptation and in-flight steering are manual and expensive to iterate on.

- **Learn** — get durably better across tasks, not just within one.
  - Subsumes: durable cross-task learning, knowledge accumulation, refined components/canon.
  - Gap: most agents start cold every run; durable, structured cross-task learning is the open frontier.

Closing line: "These are the three pillars Tressoir attacks. The rest of the talk is how."

Notes:
- **Cost/quality is not a separate pillar.** It shows up as budgets/targets inside *Specify* and as optimize/re-evaluate inside *Adaptive Solve*.
- **Scope caveat (verbal only, not on slide):** Pillar 1 (Specify) — especially its UX-heavy, multi-user dimension — is addressed *to a lesser extent* in this talk. The focus is on Pillars 2 (Adaptive Solve) and 3 (Learn); Specify is touched mainly via ontology / IB context.

---

## Slide 3 — Illustrative Example: One Unified Agentic System Across the Data Stack

Frame: layer-anchored tour. Three layers (Interface · Application · Engine) plus a cross-cutting Learn beat. The slide's job is to plant the *flag* — what a single unified agentic system has to cover end-to-end. The database stack is the working example; the argument is general.

Opener (optional): "Let me make this concrete. Take the database stack — analyst at the top, application in the middle, engine below. A unified agentic system has to do real work at every layer."

**At the interface.** Analysts ask fuzzy natural-language queries. The system has to disambiguate them, bind them to the application's domain ontology, and surface the tribal knowledge that even expert humans rely on to know what was actually meant.
- Scope: pure *Specify* — meaning resolution only. No execution here.

**At execution time.** First the system has to know the application's own assumptions — what invariants hold, what shortcuts those license. Then a three-tier escalation:
1. Pure SQL with well-known optimizations should never even touch an agent.
2. Parameterized hybrid workloads — semantic predicates, LLM ops alongside SQL — should run from compiled, cost-aware plans.
3. An agent steps in only when something genuinely novel shows up: synthesize a new plan, or explore.

**The agent is the backstop, not the default.** Application-level assumptions inform planning at every tier.

**In the engine itself.** Half-a-million to a million lines of code, DuckDB-class. The system has to navigate, understand, and make deep edits while preserving the correctness and performance guarantees that trip up expert humans. And it has to bake the application's own assumptions — invariants, hot paths, schema constraints — directly into engine code, turning them into specialized fast paths a generic database can't match.

**Learn — across all of this.** From user feedback at the interface, from runtime metrics deep in the engine, from observations across every execution. Feedback that refines the ontology, refines the compiled workflows, refines agent decisions — and yes, refines the engine code itself.

**Punchline.** One unified agentic system that does all of this. Not five products glued together. That's the target. Truly unsolved today, including by us. The platform shown next is what we built to give us a real shot.

Notes:
- The "agent-as-backstop" framing is the implicit answer to "why not just throw Claude Code / Codex / Antigravity at this?" — no separate competitor slide needed.
- Application-level assumptions appear *both* at execution time (planner uses them) and in the engine (baked into code). The repetition is intentional — same idea threading up and down the stack.
- "Truly unsolved today, including by us" is part of the spoken pitch, not a slide footnote.

---

## Slide 4 — Interpretable Blueprints: Specifying & Evolving Agentic Systems

Sits at the start of Part 2 (the platform half) but functions as the bridge from Part 1's "what we want" into the "how" of the platform.

**Bridge.** As agentic systems take on more of the work we just walked through, they stop being a tool that *acts on* a project and start becoming **increasingly indistinguishable from the regular components of the system they're woven into**. They have their own intent, contracts, invariants, and failure modes. That means we have to be able to *specify and evolve them* with the same rigor we'd apply to any other production component — and that brings us to **Interpretable Blueprints (IB)**.

**The IB, half one: System Ontology.** Intent, structure, invariants, and the context contracts that an agent (or a meta-agent) needs to act faithfully. The ontology is **interpreted live** — read, traversed, and applied on the fly by agents per task.

**The IB, half two: Materialized Components.** Live interpretation buys adaptivity, but it costs you reuse, determinism, review, and optimization. So we **materialize** the patterns that have earned it: proven workflows, hardened prompts, vetted sub-agents, optimized scaffolding. The compiled cost-aware hybrid workflows from the previous slide are exactly this kind of materialized component. Ontology and materialized components are **bound together**, with feedback flowing in both directions.

**Meta-agent primitives.** On top of the IB sit **meta-agents**, with a deliberate primitive set: workflow construction, context assembly, canon capture, observation, feedback-driven refinement — and **direct invocation of materialized components**.

Two design choices distinguish this from a normal agent stack:

- **The IB is the agent's primary directive.** A meta-agent is, first and foremost, an *interpreter of the IB*. Its job is not "solve this task with the IB on the side" — it's to **jointly use and improve the IB while solving the task**. Task progress and IB evolution co-occur; every successful pattern, captured insight, or new component the agent produces feeds back in for the next task.

- **Primitives expose materialized components directly — bypassing the agent loop.** When a proven workflow already exists, the platform makes it trivial to call it as code, with no agent in the loop. This is the **agent-as-backstop** principle from the previous slide, lifted to the platform level: don't pay the cost of an agent loop for what's already optimized.

**Closing analogy.** What spec-driven development is to vibe coding, this — **Interpretable Blueprints plus meta-agent primitives** — is to agentic systems. Part 2 of the talk is the platform we built around it.

Notes:
- SDD is intentionally introduced *only* at the closing analogy — held back from Slide 1 and from this slide's bridge — so the analogy lands clean instead of being pre-announced.
- The two design choices on meta-agents directly mirror Slide 3's three-tier escalation (SQL → compiled hybrid → agent backstop), now expressed at the platform level.
