---
name: pitch-content
description: The plan for my pitch for the presentation. The pitch itself is at [pitch.md](./pitch.md) and will be populated from what we decide in this plan. DO NOT modify this file or its children unless I say so. Unlike the pitch itself, this one is not what I'll say. It can be more detailed/brainstormy.
---

# General Approach to Presentation
The presentation is 10 minutes, probably without questions. This is going to be a motivation, definition, techniques, self-implementation heavy presentation (how tressoir mostl built itself), with light evaluation, followed by conclusions.
I am okay spending 40% just to intro and motivation, 40% on approach and brief time of evals. The intro and motivation in particular have to sell the idea+vision very well, and very credibly: for a technical audience with maybe some non-technical decision makers. This is the balance we are aiming for.


# Title Slide
Hello everyone, my name is Amadou, and I am a PhD student at MIT and today I'll talk about our system named Tressoir which aims to unify online and offline, human-in-the-loop agentic system design and evolution. 


# Part 1: Introduction / Motivation / Illustrative Example
[Intro And Motivation](./pitch_plan/intro_and_motivation.md)

# Part 2: Approach and Implementation
[Approach and Implementation](./pitch_plan/approach_and_implementation.md)

# Part 3: Evaluation and Conclusion
[Evaluation and Conclusion](./pitch_plan/evaluation_and_conclusion.md)


---
# Linearized Plan
---

# Slide 0 - Title Slide
Hello everyone, my name is Amadou, and I am a PhD student at MIT. Today I'll talk about our system named Tressoir which aims to unify online offline, human-in-the-loop design and evolution of agentic systems. This is work done with my colleagues at MIT and at G5 Labs.

(~50 words - ~20s)


# Slide 1 - Background -- The Agent Revolution
- As we all know in this room, over the past ~2 years, models and the agentic systems built around them have become increasingly capable.
- To the point where fairly complex work can be done largely from prompts and design files, with heavy human involvement, if any, mostly at planning and review time or when the model is stuck on a particularly complex problem.
- This pattern, in its extreme form, is broadly known as **vibe coding**.
- But even in its less extreme forms, it's a fundamental shift in how software engineering will occur going forward.

(~100 words ==> ~40s).

# Slide 2 - AI-Native Complex Software Is Still (Unaddressed/Unreacheable/A Dream/...)

**Beat 1: Prelude**
- However, we are still a long way from fully exploiting the potential of these agents to build truly agent native software as there are still many open, unsolved problems.
- We divide these problems into three categories which are ontology resolution, constrained adaptive solving, and continual learning.
(~50 words - 20 seconds)


**Beat 2: Ontology Resolution (HIL parts highlighted in analyst and in dbms expert from application-to-engine logic pushdown)**
- Firstly, ontology resolution is about resolving ambiguities, determining the invariants and policies that should be respected, setting the cost/quality/latency tradeoffs for different kinds of tasks based on their importance and frequency, providing strong provenance information that explains why any decision was made, what can be changed, and when to invoke a human expert.
- For example, in data systems, a new kind of optimization that agents enable is to push down repeated application workload patterns or research ideas (like a new storage index) as new code into the engine itself. This ontology resolution should help identify the blast radius of any change, the original motivation of any affected code, the properties like durability, isolation, security that can be selectively reinforced or relaxed in an application-dependent manner and produce a contract that if followed, leads to the desired state.

(~120 words - 45s)

**Beat 3: Constrained Adaptive Solving (Compiled Workflows, Hybrids, Free Form Agents highlighted)**
- Then, for constrained adaptive solving, based on the problem and on the target cost/quality/latency, shape the solution to the task at hand by specializing, ideally, the scaffolds, the skills, the tools, the context retrieval not just once at the beginning of a task, but continuously for very long horizon tasks where mid-task observations or live human steering can change the way a problem should be approached.
- Let's consider the two extremes in this DBMS example:
    - On the one hand, when answering repeated queries that follow a well-known template, it should be possible to detect a pattern, completely bypass agents, and directly invoke a precompiled workflow with reliable, well-known optimizations and guarantees.
    - On the opposite extreme, when integrating complex code, we want free-form, fully interactive agent orchestration where flexibility, quality and live adaptation from human input are far more important than strict cost and latency guarantees.
    - And in the middle of the spectrum, we can have hybrids between these two approaches.
(~160 words - 1 minute)

**Beat 4: Continual Learning (Statistics Collection, Human Feedback, In-Task Steering highlighted)**
The final pillar is continual learning.
- Here, the learning signals can come from high-level human feedback, low-level metrics, techniques and insights discovered by agents during a task, or even from previous attempts at learning that did or did not work.
- The system should be able to improve both its intent resolution, its adaptive solving (the scaffolds, tools, skills), and even the learning mechanism itself over an arbitrary time horizon from these signals.

(~65 words - 25 seconds)


# Slide 3 - Tressoir - A Unified SDK And Representation
- Tressoir's aim is to provide a solution to all of problems in one framework.
- We first propose a representation that we call the Interpretable Blueprint or IB that captures what it takes to specify such an agentic system end-to-end.
    - The IB pairs a system ontology with materialized components.
    - The ontology captures intents, entity relationships, architectural patterns, invariants, learned lessons and more beyond this paper like provenance tracking or role-based escalation which are the focus of our larger G5 system.
    - The materialized components are the proven scaffolds or libraries that are known to be reliably effective or have cost and latency guarantees.
    - Both are human/agent editable and reviewable.
- Then, in addition to the IB, we have an SDK that can allow powerful meta agents (which we call interpreters) to interpret this IB and orchestrate, on-the-fly with human steering of course, either free-form agents, materialized components or hybrids of the two, and have access the introspection and statistics needed for adaptive solving and continual learning.
- Taken together, these let an agentic system continuously specify, evolve, and execute itself — with human involvement wherever needed.

(~180 words, 1 minute + ~15 seconds)

CHECKPOINT: ~5 minutes.

 
# Slide 4 - Quick SDK Overview
- Let's start with the SDK to ground the conversation.
- Our agents like all agents perform actions by generating structured commands that the harness executes.
- All tools from the built-in ones, to external MCP servers or custom plugin libraries are available to the agent through a single function with this signature `sdk(service name, tool name, args)` freely composable with other tools through programmatic tool calling, meaning the agent can write arbitrary control flow, define variables or helper functions in one step and use them many steps later.
- This composable tool calling occurs either using python which is hard to sandbox without containers or lua which is easy to sandbox to guarantee that the agent only performs allowed operations.
- The builtin services are listed here; we don't need to get into the details (most of them are what you'd expect like io/web search/etc). One of them BTW, is hosting this presentation right now. But for the sake of this talk, let's expand on the `agent` and `llm` services.


Listed services (slides only)
include `core` (io, multimodal viewing, pattern matching, shell, background calls, parallel calls), `web`, `embed`, `ib`, and `editor`, `webview` (currently hosting this talk; agent operatable; the UI is work in progress), and most important for this talk `llm`/`agent`.

(~165 words - 1 minute)

# Slide 5 - Agent/LLM Orchestration
- The `agent` and `llm` services are what allow both meta agents and human operators to orchestrate other agents or LLM calls either on the fly while solving a task or through materialized components.
- Because they are exposed through the composable `sdk` function, performing complex worflows like parallel graph traversal with cost-aware subagents, parallel research and synthesis, is just the regular kind of code that modern agents are already skilled at writing. We can therefore capture the whole spectrum of adaptive solving through regular function and data structure composition.
- Let's zoom into a few important tidbits (again, I am skipping details).
    - `spawn` allows the meta agent to spawn agents with a task and multimodal attachments various configurations that control quality, costs, visible context.
    - `compact_run` and `steer` are both forms of mid-flight steering where one synchronously waits for an answer, and the other doesn't. `broadcast` is like `steer` but for many agents. 
    - `analyze_trajectory`/`stats` enable introspection and statistics which we'll discuss later.
(~170 words - 1 minute)


# Slide 6 - What an IB Looks Like - Bootstrapping Example
- That's the SDK, let's move on to the representation.
- Since Tressoir is meant to be general, our first  litmus test was that once the core SDK and agent service were built, the framework must exclusively construct itself using its own principles otherwise we cannot claim generality. This is similar to programming languages boostrapping themselves after their initial version is compiled using another language or direct assembly.
- It means I can show you examples from the framework itself. The following  is from the self-learning subsystem, which is responsible for accumulating lessons from human input, agent introspection and statistics profiles.
- You can see a few things from here:
    - The ontology has a semi-structured section about architecture, vocabulary, etc.
    - And two structured sections: one containing related sources which forms a graph to enable bidirectional syncing so when either the ontology, the code, or tests are updated we know where to propagate to keep things in sync.
    - Another section contains parseable invariants, techniques, insights, intents so we know what to check for violations accross these related sources and also what techniques to reuse when building components related to this ontology.
    - It has materialized components in the form code with agents using the SDK, prompts, skills, and its own free-form memory for self-improvement.
- The way it works without getting into the details is that:
    - When trajectory analysis, "intent/expertise-bearing" user input, compaction, task completion or the subsystem extracts lessons and statistics and stores into a tree with an LRU mechanism which is used to augment agent contexts, selectively broadcast lessons  but is not automatically promoted into the ontology.

(270 words - 1min 40seconds)

# Slide 7 - Evaluation
(Flash the results)
- For the evaluation, I'll point you to the paper. The key takeaway is that Tressoir is effective both at free-form problem solving and at designing other agentic systems that solve a problem.
    - For example, on bird-critic, from just 5 samples, we can use Sonnet 4.5 offline with HIL to design tools and prompts that boost Gemini 3 Flash above Opus 4.6.
    - Same with screenspot-pro, and swe-like benchmarks.
- However, what we could not formally benchmark are agentic tasks that genuinely take days or weeks to solve with periodic human involvement. There is no good solution for how to benchmark this in a practical manner (maybe oracle agents? simulated time dilation?).
(~100 words, 40-45s)

# Slide 8 - Conclusion
That's the end of my talk. Thank you for listening.
(<5s)

(Slides only)
- In conclusion, we presented Tressoir which aims to be a unified framework to address these pillars...
- Powerful SDK + Representation in the form of the IB.
- Can boostrap itself. Being actively used to develop a complex cloud-native data system.
