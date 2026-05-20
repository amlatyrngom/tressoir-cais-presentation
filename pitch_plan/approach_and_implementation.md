# Background / Motivation
- Background-like statements:
    - As we all know in this room, over the last 2 years, models and the agents built around them have become increasingly capable, to the point where fairly complex work can be done primarily through prompts and design files with human involvement, if any, mostly at planning and review time. This pattern is known as vibe coding.
- However, the gold standard of agent-driven problem solving has yet to be achieved its goals are hard and sometimes in contradiction. From high-level to low-level:
    - Intent and Ontology Resolution: ....
    - Adaptivity to Specific Task: Scaffold/Harness, Prompts, Tools, etc.
    - General Problem Solving Capability.
    - Cost/Quality Frontier Choice: ...
    - Continual Learning in and across tasks.
    - Providing Context: Context engineering, Domain Expertise, Tribal Knowledge.

# Illustrative Example: Database Systems And Applications
This illustrative example should cover a wide breadth. We use DBMSs because they were the initial motivation. However, what we discuss here is general. How we would like to have a single agentic system capable of:
- Interpreting ambiguous user queries for text-2-sql workloads.
- Building libraries of optimized LLM/Agentic workflows for semantic queries.
- Baking general/application-specific logic into 500k-1M+ highly complex LOCs repositories, preserving advanced guarantees that trip up expert humans.
    - Distributing DuckDB - 
- Can automatically new research ideas from expert humans.
- Gets better the more it is used. In particular, a system built from the ground up by our agents (agent-native system) should be much easier to operate/extend than, say, Postgres.

# SDD For Agentic System
- Being able to do all of the above means that the agentic system itself becomes complex that simple prompts and design docs.
- Just like spec/ontology-driven development becomes necessary for complex project.
- We believe that it must 
