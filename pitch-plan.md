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
- This is a fundamental shift in how software engineering will occur going forward.

(~100 words ==> 00:40).

# Slide 2 - AI-Native Complex Software Is Still (Unaddressed/Unreacheable/A Dream/...)

**Beat 1: Prelude**
- However, building agent-native software is still a difficult endeavor with many challenging problems.
- For the sake of this presentation, we divide these problems into three categories which are ontology resolution, constrained adaptive solving, and continual learning.
(~50 words - 00:20)


**Beat 2: Ontology Resolution (HIL parts highlighted in analyst and in dbms expert from application-to-engine logic pushdown)**
- Ontology resolution is the process of trying to produce an unambiguous plan or contract that, if followed, leads to the desired state with the correct functionality, guardrails, tradeoffs, provenance tracking and human escalation policies.
- For example, in data systems, a new kind of optimization that agents enable is to integrate or push down repeated application workload patterns or research ideas (like a new storage index) as new code into the engine itself. This ontology resolution should help identify the blast radius of such changes, trace the original motivation of the affected code to know which of its properties like security or durability that should be preserved, reinforced or relaxed in an application-dependent manner to produce a resolved integration plan.

(~120 words - 00:45)

**Beat 3: Constrained Adaptive Solving (Compiled Workflows, Hybrids, Free Form Agents highlighted)**
- Then, for constrained adaptive solving, based on the problem and its constraints, we want to fully adapt the scaffolds, the skills, the tools, the context management to the task at hand.
- Let's consider the two extremes in our data system example:
    - On the one hand, when answering repeated natural language queries that follow a well-known template, it should be possible to detect a pattern, completely bypass sophisticated agent orchestration, and directly invoke an offline-designed precompiled workflow with well-known optimizations and guarantees.
    - On the opposite extreme, when integrating complex code like a new indexing technique, we actually want this sophisticated, online, interactive, agent orchestration with specialized parallel subagents that take different responsibilities where costs and latencies can be less predictable as long as the task is done well.
    - And in the middle of the spectrum of the spectrum between these two extremes, there can be many hybrid approaches.
(~140 words - 0:55)

**Beat 4: Continual Learning (Statistics Collection, Human Feedback, In-Task Steering highlighted)**
The final pillar is continual learning.
- Here, the learning signals can come from high-level human feedback, low-level metrics, techniques and insights discovered by agents during a task, or even from previous attempts at learning that did or did not work.
- The system should be able to improve both its ontology resolution, its adaptive solving (the scaffolds, tools, skills), and even the learning mechanism itself over an arbitrary time horizon from these signals.

(~74 words - 30 seconds)


# Slide 3 - Tressoir - A Unified SDK And Representation
- Tressoir's aim is to provide a solution to these 3 problems in one framework.
- We first propose a representation that we call the Interpretable Blueprint or IB that captures what it takes to specify such an agentic system end-to-end.
    - The IB pairs a system ontology with materialized components.
    - The ontology captures entity relationships, architectural patterns, invariants, learned lessons and more beyond this paper in our larger G5 system.
    - The materialized components are proven scaffolds or libraries that are known to be reliably effective or have cost and latency guarantees.
    - Both are human/agent editable and reviewable.
- Then, in addition to the IB, we have an SDK that can allow powerful meta agents (which we call interpreters) to interpret this IB and orchestrate, either dynamic interactive agents, materialized components or hybrids of the two, and have access the introspection and statistics needed for adaptive solving and continual learning.
- Taken together, these let an agentic system continuously specify, evolve, and execute itself — with human involvement wherever needed.

(~180 words, 1 minute + ~15 seconds)

CHECKPOINT: ~04:50.

 
# Slide 4 - Quick SDK Overview
- Let's start with the SDK to ground the conversation.
- Tressoir agents like all agents perform actions by generating structured commands that the harness executes.
- In Tressoir, all tools from the built-in ones like the bash, to external MCP servers or custom plugins are available to the agent through a single function with this signature `sdk(service name, tool name, args)` freely composable with other tools and data structures inside or across steps into the patterns shown here, meaning a variable defined in one step can be referred to much later.
- This composable tool calling occurs either using python or lua which is easer to sandbox to guarantee that the agent only performs allowed operations.
- The builtin services are listed here; we can't go into the details. For the sake of this talk, let's expand on the `agent` and `llm` services.

(~145 words - 0:55)
CHECKPOINT: 5:45

# Slide 5 - Agent/LLM Orchestration
- The `agent` and `llm` services provide primitives that allow both meta agents and human operators to manage fleets of agents and LLM calls with different cost/quality configurations,  multimodal capabilities, token budgets, and enable steering these agents on the fly, doing auto-compaction when necessary and providing introspection for accumulated lessons and statistics.
- Because they are exposed through the composable `sdk` function, performing complex agentic patterns like parallel graph traversal with cost-aware subagents, or advanced interactive planning, solving, testing and review with parallel subagents look just the regular kind of code with regular functions and regular data structures modern agents are already trained and skilled at writing.
- This is what we call sophisticated coordination as ordinary code and is the primary design goal of our SDK.
(~120 words - 00:50)
CHECKPOINT: 6:35


# Slide 6 - What an IB Looks Like - Bootstrapping Example
- Then, for the representation, since Tressoir is meant to be general, our first litmus test was that once the core SDK and agent services were built, the framework should exclusively construct or boostrap itself using its own principles otherwise we cannot claim generality.
- It means I can show you a blueprint example from the framework itself. This is from the self-learning subsystem, which is responsible for accumulating lessons from human input, agent introspection, task profiles and the improving the IB from them, and can even broadcast lessons to agents. I'll go through it at a high-level.
    - The ontology has semi-structured sections about architecture, vocabulary, interface, usage contract.
    - And two structured sections: one containing related sources which forms a graph to enable bidirectional syncing so when either the ontology, the code, or tests are updated we know where to propagate to keep things in sync.
    - Another section contains parseable invariants, techniques, insights so we know what potential pitfalls to check for across these related sources and also what techniques to reuse when building components related to this ontology.
    - You can see here the materialized components in the form code with subagents internally using the SDK with prompt templates, builtin skills for various kinds of learning, and its own free-form memory for self-improvement.
- So this a faily comprehensive blueprint from Tressoir itself that shows various aspects of the representation.

(250 words - 1min 40seconds)
CHECKPOINT: 8:15

# Slide 7 - Evaluation
- Finally, for the evaluation, the key takeaway is that Tressoir is effective at designing agentic systems that solve a wide spectrum of problems.
    - For example, on bird-critic (which is like a SQL fixing benchmark), from just 5 few-shot samples, we can use Sonnet 4.5 offline with HIL to design tools and guidelines that boost Gemini 3 Flash above Opus 4.6.
    - Same with screenspot-pro where a scaffold designed by Opus 4.6 helps gemini 3 flash rises above gemini 3 pro, and most baselines is only slightly behind OpenAI's scaffold with gpt 5.2 on extra high reasoning.
    - And even in cases with no a-priori design phase like SWE-bench pro, the SDK can trivially enable parallel test-time scaling, with increased costs for people willing to spend more for higher accuracy.
- I'll conclude this slide by saying that these benchmarks are not really the kind of evaluation we're looking for. The customers we speak to in our G5 project have software developed over months or years, with multiple developers or multiple teams collaborating, and strict guardrails over what the developers and their agents can and cannot. There, the ontology becomes far more important than in these benchmarks which mostly exercise the SDK and the materialized components, so we need a new evaluation for this.

(~212 words, 1:30)
CHECKPOINT: 9:45

# Slide 8 - Conclusion
- This is the last slide. I've presented Tressoir, our framework for agent-native complex software development pairing a powerful representation and an SDK.
- Thank you for listening.
(~28 words, ~15s)
CHECKPOINT: 10:00

(Slides only)
- In conclusion, we presented Tressoir which aims to be a unified framework to address these pillars...
- Powerful SDK + Representation in the form of the IB.
- Can boostrap itself.
    - Being actively used to develop a complex agent-native cloud data system.
