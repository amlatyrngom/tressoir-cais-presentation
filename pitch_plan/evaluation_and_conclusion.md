---
name: evaluation-and-conclusion
description: Plan for Part 3 of the pitch — two evaluation slices (offline-designed blueprint on ScreenSpot-Pro; offline+online hybrid on Bird-Critic) and a brief summary slide that doubles as the close. Substance only; styling/animation/visual treatment is deferred.
---

# Part 3 — Evaluation & Conclusion

Time budget: roughly 20% of the 10-minute talk. Three slides; eval slides move fast and defer to the paper. SWE-Bench results (SWE-Bench Pro Qute and SWE-Bench-Live C/C++) are dropped from this 10-minute cut — they require too much caveating (no learning, higher costs from test-time scaling). The conclusion slide deliberately doubles as a brief summary; the verbal close is intentionally minimal.

| # | Slide | Role |
|---|---|---|
| 11 | Offline-Designed Blueprint: ScreenSpot-Pro | Eval framing + first slice (offline-only) |
| 12 | Hybrid: Bird-Critic | Second slice (offline + online) |
| 13 | Summary | Brief recap + verbal close |

---

## Slide 11 — Offline-Designed Blueprint: ScreenSpot-Pro

First eval slice. Carries the eval framing for the whole part.

**Eval framing.** *"Tressoir's value is that all of these aspects live in one system. We don't yet have an eval that exercises all of them at once — so we evaluate slices. Two slices today."*

**Setup.** ScreenSpot-Pro: large desktop screenshots, click-to-coordinate task. Hard at production scale — complex layouts, huge input space.

**Offline phase.** 5 sample instances (~0.3% of the benchmark), one day of asynchronous work. A Claude 4.5 Opus meta-agent ran rollouts, collected stats, and proposed candidate ontologies for human review. The blueprint that survived was strikingly simple: two rounds of progressive cropping, then box-based clicking — three agents (two croppers + one clicker), each with a short ontology and a helper tool.

**Result.** That blueprint, running on Gemini 3 Flash, hits 83.1% accuracy at $0.05 / instance — +14.0% over the same model called naively. Approaches the GPT-5.2 xHigh scaffold (86.3%) at a cheaper model, and outperforms open-source SOTA Holo2 Agentic (78.5%) and ZoomClick.

**The point.** *"This is Slide 4's materialized components in concrete form — a small offline phase produces a compiled, cheap, high-quality agentic system tailored to the model, running without the meta-agent in the loop."* (Slide 3 / Slide 4 agent-as-backstop callback.)

Notes:
- Exact numerical phrasing left for the spoken-pitch translation; the substance is +14% over the naive same-model baseline at $0.05 / instance, approaching frontier-scaffold performance with a cheaper model.
- "5 instances / ~0.3% / one day" emphasizes data + time efficiency of the offline phase.
- The Slide-4 callback is the connective tissue that makes the eval feel like part of the architectural argument, not disconnected numbers.

---

## Slide 12 — Hybrid: Bird-Critic

Second eval slice. Offline tool development + online adaptation.

**Setup.** Bird-Critic *flash* split (200 instances): text-to-SQL repair — DML corrections, DDL changes, performance optimizations.

**Offline phase (Claude 4.5 Sonnet meta-agent).** Tools first, agentic structure second:

- `pg_snapshot.sh` / `pg_restore.sh` for safe, reversible experimentation against the database.
- `psycopg2` and `psql` available for testing fixes.
- Benchmark guidelines, hand-edited to prevent leakage (we removed instance-specific heuristics the learning agent had started hard-coding).

**Online phase.** A single meta-agent on Gemini 3 Flash uses those tools.

**Result.** 56.0% — surpasses the verified SOTA SQL-ACT (Claude 4.6 Opus) at 52.0%. $0.28 / instance, 3.1 sub-agents on average.

**The point.** *"Tools + a recommended approach, developed offline, then handed to a cheaper model with online adaptation — that combination lifts Gemini 3 Flash past Claude 4.6 Opus-level performance. Offline + online is more than the sum of its parts."*

Notes:
- Headline contrast: SQL-ACT is a hand-built specialized system on a frontier model; Tressoir is a general-purpose platform with a 5-instance offline phase on a cheap model.
- Exact numerical phrasing left for spoken-pitch translation.

---

## Slide 13 — Summary

Not an empty thank-you slide. Doubles as brief summary + close.

Slide content (final visible):

- The gold standard is **Specify · Adaptive Solve · Learn** — and the three have to be done together.
- Deeply integrated, complex agentic systems need a unified, flexible-yet-optimizable approach.
- Tressoir's answer: **Interpretable Blueprints + powerful meta-agent primitives**.

Verbal close (off-slide): *"See the paper for more details. Thank you."*

Notes:
- Deliberately terse. No pointer block, no Q&A invite line — the verbal close handles it.
- The three bullets recap Part 1 (the pillars), Part 1's bridge to Part 2 (need for a unified approach), and Part 2 (the answer) in that order.
