# Task

Describe the current task here. This file is user-written - the agent reads it but does not autonomously modify it.

# Slide Correction
- "Agent-Native" Slide:
    - Intent/Ontology pluralize "checkpoint" and "technique".
    - The middle thin should appear with the per pillar content, not be there apriori.
- 

# Slide Making
We are working on an MVP delivery.
- The pitch plan in /Users/amlatyr/Code/tressoir_projects/tressoir-cais-presentation/pitch-plan.md is mostly locked. We might split slides or not, or shorted if running out of time, but the linear flow is mostly final. (the sdk -> ib -> self-learning is also locked now).
- We'll make solid, well-styled, well-animated slides, but not as fancy as we could theoretically make it. E.g., we won't make a full DBMS architecture diagram, but will make agent workflow diagrams when possible, human-agent interaction, etc.
- Use available icons (like the pillar icon) as much as possible, and also give me well-written prompts to pass to an image model when a well-made can trump a bunch of icons.


## Pillars Slide Styling
Let's follow this general styling:
1. When pillar (2) is active, (1) and (3) are both greyed out. When (3) is active, (1) and (2) are greyed out. BTW, make the pillar icons green too.
2. The slide will have on the LHS a card showing what the pillar is about. E.g., the Resolved Operating Contract stuff.
3. On the RHS there is a diagram. Whether the RHS diagram is always revealed is TBD.
There is no dedicated "prelude". It starts with pillars displayed but all inactive. My first click will reveal the intent ontology section.
Note this down in state.

### Intent/Ontology
The card shows what I list in my pitch in concised, well-styled form of course.
I'll say this:
- For example, in data systems, a new kind of optimization that agents enable is to push down repeated workload patterns or new research ideas (like a new storage index) as new code into the engine itself per application. ... from here, mostly same as the pitch plan ...
The diagram will show:
- Workload Patterns, Research Technique --> Agent-Native DMBS --> Correct, Optimized Code. With an expert icon for HIL below the agent-native DBMS.

Workload patterns and Research Technique (Arxiv, ...) come from the left. Agent-Native DBMS is at the center. Correct, Optimized Code on the right. Human Icon (with text saying HIL Steering/Checkpoints) below.

Propose an ASCII diagram before we write this down.

### Constrained Adaptive Solving
Give me proposal for this.
Let's follow the same pattern.
- Card on the left will mention things like:
    - Contract-bound solving.
    - "Holistic Adaptation" with Scaffolds, Tools, Skills as sub bullet points.
    - Live Steering
    - ...
- Two diagrams on the right to show the spectrum.
    - Repeated semantic queries --> lightning flash icon somewhere --> pre-compiled scaffold (no agent overhead, strong guarantees).
    - Complex Integration --> Agent Orchestration (meta agents, parallel research subagents, implementers, reviewers) with Domain Expert in the loop --> 100k+ code changes.
- Keep the diagrams simple but expressive:
    - The pre-compiled scaffold should show something like a Lake Scan, Static Pre-filter, LLM Transform, Aggregation.
    - The orchestration should show meta agents on top, point to 3 clusters of agents (researchers, implementers, reviewers). The clusters have the "shifted ordered icons/cards" pattern (e.g icon 1 is fully shown, icon 2 behind block 1 and only its top and left edge appearch, same with icon 3)

Strong.
Let's now work on the RHS like this.
Fast path:
- Title should directly say: "Fast Path: Minimal overhead, Strong Guarantees"
- The plan should an actual plan with some linear order. Order them in some efficient manner. 
- Remove the "no agent ....  guarantee ... " Should give you space. In the plan have the lightning icon (with a color that fits the green) + pre-optimized plan.
- Also generally move this up to give more space to the one below.
- The final deliverable of the fast path is a "Fast Answer". So "Repeated Semantic Query" -> pre-optimized plan -> Fast Answer.

Orchestration Path: Complex, HIL
- Complex Integration should re-use the same icon as the integraton contract.
- The per-agent text is currently overflowing.
- The Domain expert lives with the agent as an interactive entity. The 100k+ is the final deliverable.
- I propose you increase the vertical spacing to have the  expert on top of the meta agent.

### Continual Learning
Card Content:
- Accept Any Learning Signals.
    - Subtext: Low-level metrics, HIL feedback, agent introspection.
- Improve Ontology Resolution.
- Improve Adaptive Solving.
- Improve Learning Itself.

Diagram Example (similar to intent/ontology):
- Left: Metrics, Feedback, Introspection
- Center: Learning Agents
- Right: Improved Outcomes

## Slide: Tressoir - A Unified SDK And Representation
Let's move on this slide now.
Keep our MVP (strong, slick visuals but still fairly simple) in mind.
How do you propose we approach this.
My initial thinking is a 2 card approach with the highlight moving as I speak.
The speaking and following slides can do the heavy lifting; this should briefly mention the main hits.

- The current slide does something loads well on a regular tab, but not on the webview iframe. The pillar slide had no such issues.
- The slide has many issues:
    - Remove the subtitle "One framework ..."
    - Remove the weird grid background.
    - Remove the weird connector icon and "inter"
    - The highlighting need not grey out the other card. Just emphasize the one.
    - Remove the "Rich enough ..." and the "Expressive enough ..." subtexts.
    - Except for the titles, make the cards look more like the ones from the Pillar slide. (e.g., no dedicated card per-bullet point. Easy to subtext the individual bullets). We'll refine the bullet points laters.

IB Card Bullet Points and Subtext:
- System Ontology
    - Architecture, relationships, invariants, lessons, ...
    - More in our G5 system.
- Materialized Components.
    - Scaffolds, skills, ...
    - Offline optimizable.
"Human/agent editable for improvement" is a post bullet point "footer".

SDK Car bullet points and subtext.
- Free-form, Advanced Orchestration.
- Proven Component Optimization and Reuse.
- Introspection, Metrics.

"Same sdk for humans and meta agents" footer.

Remove the "specify -> evolv..... global footer entirely"

## Quick SDK Overview Slide
Ok let's work on the presentation
- Firstly, remove the animation entirely, this is going to be a static slide for now, unless we have a good reason otherwise.
- The start by move the unified call up into the center (like the pillars slide). I don't think we'll have the 2-card style, but let's see.
    - Make it more "code-like". It looks like a regular text right now.
    - Subtitle it (over the signature): "Single, Composable Function for Programmatic Tool Calling"
- Push the rest of the slide down until get the header right.


- Ok now swap the two cards first.
    - Then, the RHS side is no longer a card, but just a code snippets.
    - It now shows two distinct steps:
    - Step N: perform web searches and print the results and store in global var (without _G/local). print(idx, result). Can you also avoid ipairs if possible., just #results should be fine right?
    - Step N+1: make a relevant_idxs = {...} array, iterate, download, and call multimodal view the loop.
    - If possible, the snippet titles (Step N, Step N+1) should look like the "Fast Path: ..." title from before, and the inside is code without the window boundaries.
- LHS Bullet Content:
    - Shared `sdk(...)` signature
        Subtext: Unifies builtins, MCPs, plugins, ...
    - Freely Composable into complex patterns.
    - Persistent Across Steps
    - Available in Python and Lua
        Subtext: Flexibility/Security tradeoffs. Defaults to Lua


## Agent/LLM Orchestration
(/Users/amlatyr/Code/tressoir_projects/tressoir-cais-presentation/IB/ontologies/tressoir-project-map/paper_latex_source/02_approach.tex
contains a graph example pseudocode in python. as well as more complete  Reuse it)

Let's now do this slide.
Header: just say "Design Goal: Expose Sophisticated Coordination Ordinary Code"
LHS says (can occupy ~50% this time)
"Key Signatures".
Should follow the fake service definition language we use in the paper with nice syntax highlighting.
```
service agent: # Enables advanced agent management
    # ...
    spawn(...)
    compact_run(...)
    steer(...)
    broadcast(...)

    # Others <not part of slide: CAN BE in one line with ... elision>
    pause() | re

service llm:
    ...
```
The comments can be concise, I'll do the speaking for details.

The RHS should contain two (not complete codes)
- The cost-aware graph pseudocode.
- A parallel sticky review with code like:
```
# Start of Task: Spawn R parallel Reviewers
...
# Milestone: Ask R parallel reviews
...
```


```toml
[[canon]]
kind = "rule"
oneliner = "Compaction must not await smart merge work."
details = """..."""

[[canon]]
kind = "technique"
oneliner = "`agent.stats(agent_id)` is the concise introspection surface for optimizer/meta agents."
details = """..."""
```

# Evaluation Slide and Final Slide
Ok let's move on to the Evaluation slide and final slide together. The final slide should be easy to layout.
Take this, bring it over here, and adapt it.
/Users/amlatyr/Code/tressoir_writing/code/plot_results.py

RHS:
(c), (d), (a) in that order.
For (a) do not include the ablations.

LHS:
"Evaluation Takeways"
- Effective at offline/hybrid design.
- Effective at pure online orchestration without learning.
- Caveat: Lacking Realistic Evaluation
    Subtext: 
        - days- or weeks-long tasks with periodic human input.
        - Even hard SWEB-like tasks take ~10-20 minutes.


Propose a layout.

# Edits
Check the git diff in pitch_plan.md to know how to update the speaker notes.


OK refactor the font sizes into a unified place where I can easily tweak them.
I especially want:
- The background/conclusion list font sizes.
- The header text like "The 3 Pillars..." or "Single, Composable ..."
- The pillar font sizes for "Ontology Resolution", etc.
- The card titles, list and subtext:
    - Both pillar cards, and the unified slide cards.
- The diagram "pills" like "Workload Patterns".
- Etc.
Clearly comment what each does. Make this intuitive.


- SDK OVerview slide (5/9).
    - Move vertical divider by 10% and give card more space.
    - On RHS: Add a centered title "SDK Composition Examples"
- Slide 6/9:
    - Move stats signature into its own line.
    - On RHS: Add a centered title "Coordination Examples"
- Eval slide:
    - Unbold the evaluation list items; should look like the SDK items.
    - Also move its divider by 10%.


- Add slide numbering on the bottom right. (E.g., 1/9, etc)


IB Example Slide:
- Add a note below the example ontology.
    - Tressoir ontologies are an MVP prototype.
    - G5 Ontologies are much more expressive and UX-friendly.
    - <G5 Logo>
    - All centered below

Remove the footer "Tressoir ontologes ...". Keep the G5 one.
Add a parenthesis below that line (Provenance, Multi-User, Interactive HTML). Also centered.


Let's now move the diagram to a dedicated row (like how the pillars have dedicated rows).
LHS is the diagram.
RHS is the following file tree:
mac ~/Code/tressoir/IB/working_area/WORKTREES/worktree1 % ls IB/kb/canon
AGENT_RUNTIME.LIVE_CANON.toml
BENCHMARK_OPERATIONS.LIVE_CANON.toml
CANON_LEARNER_DENSE_STATE.md
DAEMON_NETWORKING.LIVE_CANON.toml
FRONTEND_EDITOR_PERMISSIONS.LIVE_CANON.toml
GENERAL.LIVE_CANON.toml
IB_SELF_LEARNING.LIVE_CANON.toml
LIVE_CANON_LOG.toml
LIVE_CANON.toml


Some subtitle text should should say.
IB Learning Memory is a continuously reorganized tree with LRU context pinning.
LRU artificially reorderable by learner agents.
Eventually promoted to IB ontologies when definitive.