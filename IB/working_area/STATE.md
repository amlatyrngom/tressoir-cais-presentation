# Project State

Track decisions, progress, and constraints here.

## Key Workflow

Three-stage pipeline from raw idea to spoken pitch:

1. **Brainstorm (unformed → formed intent)**
   - File: `IB/working_area/ARTIFACTS/FULL_PITCH_PLAN_BRAINSTORM.md`.
   - User hand-writes `### Unformed Intent` blocks (rough thoughts, questions, asks).
   - Agent helps shape a sibling `### Formed Intent` block via discussion: tightening wording, proposing structures/classifications, answering questions.
   - **Do not edit `### Unformed Intent` blocks** unless the user explicitly asks.

2. **Transfer to plan (formed only, non-destructive)**
   - Targets: `pitch-plan.md` and its children under `pitch_plan/` (e.g. `intro_and_motivation.md`, `approach_and_implementation.md`, `evaluation_and_conclusion.md`).
   - Once a section's formed intent is approved, copy just that formed content into the appropriate target file (cleaned up, no unformed/brainstorm scaffolding). The brainstorm doc is left intact as a record.
   - **Do not modify `pitch-plan.md` or its children** unless the user explicitly asks (this is the user-owned plan surface).

3. **Linearize into pitch**
   - File: `pitch.md` (the spoken script).
   - User rephrases the approved plan into their own natural voice for the 10-minute talk. Agent assists only on request.

Time budget reminder: ~40% intro/motivation (Part 1 **may stretch to ~50%** to plant the right flag — the field is crowded and the audience mixes academy/industry/business), ~40% approach + platform, ~20% evals + conclusion (point to paper for full evals); if Part 1 hits 50%, compress Part 3 first, then Part 2.

**Agent interaction rule:** Always propose drafts/edits in chat first and wait for approval before writing to disk, unless the user explicitly says to write/apply directly. **Place the draft *inside* the `<AnswerCommand kind="interactive">` payload** — the user's frontend renders content there reliably; ad-hoc fenced blocks outside the AnswerCommand may not render well.

**Compaction-draft preservation rule:** When the agent is in the middle of iterating on a chat-only draft (e.g. proposed slide beats not yet written to disk) and a compaction is about to happen, preserve the **current draft verbatim** in the compaction context — not just a summary or the asks against it. Past compactions have caused unwanted re-drafts because only the asks survived; preserving the draft itself prevents this.

## Parked / Deferred

- **Slide 3 visual styling.** First attempt at a layered "capability flow" visual lives at `components/CapabilityFlow.vue` (referenced from `slides.md` as the slide-3 mock). Script is now locked but the *visual treatment* (cards / pipeline / minimalist text-with-layer-strip / hero illustration) is TBD. Revisit after Part 1's spoken script is fully nailed down.

## Decisions

- **Slidev skill installed**: Copied the official Slidev skill folder from
  `https://github.com/slidevjs/slidev/tree/main/skills/slidev` into
  `IB/skills/slidev/` (SKILL.md, README.md, and 52 reference files under `references/`).
- **Pinned**: SKILL.md frontmatter extended with `metadata.pin: "true"` so the
  Slidev skill is always visible to agents (it is central to this project).
- **External skill body preserved**: Kept the upstream content unchanged
  (frontmatter only modification) — per `skill-authoring` external compatibility
  guidance, externally sourced skills are accepted as-is.

## Slide Making Approach

- Current deck work is an **MVP delivery** over a mostly locked `pitch-plan.md`; slides may still split, merge, or shorten for timing, but the linear flow is mostly final.
- The Part 2 ordering is locked as **SDK -> IB -> Self-Learning**.
- Build solid, consistent, well-styled, well-animated slides without overbuilding: prefer clear workflow diagrams, human-agent interaction diagrams, and focused system sketches over full architecture renderings.
- Prefer available/offline-safe icons and simple Vue/SVG/CSS compositions. When one polished generated image would communicate better than many icons, provide a precise image-model prompt for that asset.

## Pillars Slide Styling

- Slide 2 starts with the three pillar strip visible and all pillars inactive; there is no dedicated visual prelude.
- Click 1 activates Intent/Ontology, click 2 activates Constrained Adaptive Solving, click 3 activates Continual Learning.
- When a pillar is active, non-active pillars are greyed out rather than cumulatively highlighted.
- Pillar icons/bookends should use the Tressoir green when active/styled, not remain pale grey.
- Body layout: left-hand side is a concise, well-styled explanatory card for the active pillar; right-hand side is the active pillar diagram. Whether RHS diagrams are always visible or revealed per click is TBD.
- Intent/Ontology diagram direction: Workload Patterns + Research Technique -> Agent-Native DBMS -> Correct, Optimized Code, with an expert/HIL icon shown as the human checkpoint/steering loop.
