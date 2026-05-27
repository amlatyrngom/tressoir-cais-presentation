<script setup lang="ts">
import tressoirLogo from '../figures/Tressoir-Logo.png'
import mitLogo from '../figures/MIT-Logo.png'
import g5Logo from '../figures/G5-Logo-Transparant.png'
import OntologyDiagram from './OntologyDiagram.vue'
import SolvingDiagram from './SolvingDiagram.vue'
import LearningDiagram from './LearningDiagram.vue'
import SelfLearningFlowDiagram from './SelfLearningFlowDiagram.vue'

const evalPanels = [
  {
    title: 'Hybrid Offline/Online: Bird-Critic Flash',
    subtitle: '',
    rows: [
      { label: 'SQL-ACT (Claude 4.6 Opus)', value: 52.0, family: 'claude' },
      { label: 'Tressoir lite (Gemini 3 Flash)', value: 56.0, cost: '$0.28', family: 'gemini', tressoir: true },
    ],
  },
  {
    title: 'Static Offline: ScreenSpot-Pro',
    subtitle: '',
    rows: [
      { label: 'UI-Venus 72B', value: 61.9, family: 'other' },
      { label: 'Gemini 3 Flash', value: 69.1, family: 'gemini' },
      { label: 'Holo2 235B', value: 70.6, family: 'other' },
      { label: 'Gemini 3 Pro', value: 72.7, family: 'gemini' },
      { label: 'ZoomClick (UI-Venus)', value: 73.1, family: 'other' },
      { label: 'Holo2 Agentic', value: 78.5, family: 'other' },
      { label: 'Tressoir (Gemini 3 Flash)', value: 83.1, cost: '$0.05', family: 'gemini', tressoir: true },
      { label: 'OpenAI Scaffold (GPT 5.2 xHigh)', value: 86.3, family: 'openai' },
    ],
  },
  {
    title: 'Pure Online: SWE-Bench Pro Qute Subset',
    subtitle: '79 instances',
    rows: [
      { label: 'Tressoir max (Gemini 3 Flash)', value: 54.4, cost: '$1.66', family: 'gemini', tressoir: true },
      { label: 'SWE-Agent (Claude 4.6 Opus)', value: 57.0, cost: '$1.67', family: 'claude' },
      { label: 'Tressoir lite (Gemini 3 Flash)', value: 58.2, cost: '$1.07', family: 'gemini', tressoir: true },
      { label: 'Tressoir lite (Claude 4.6 Opus)', value: 70.9, cost: '$2.43', family: 'claude', tressoir: true },
      { label: 'Tressoir max (Claude 4.6 Opus)', value: 75.9, cost: '$6.04', family: 'claude', tressoir: true },
    ],
  },
]
</script>

<template>
  <main class="poster-24x36">
    <header class="poster-title-band">
      <img class="poster-logo poster-tressoir-logo" :src="tressoirLogo" alt="Tressoir" />

      <div class="poster-title-copy">
        <h1>Tressoir</h1>
        <p>
          Unifying Online, Offline, and HIL Design and Evolution<br />
          of Multi-Agent Systems via Interpretable Blueprints
        </p>
        <p class="poster-authors">
          <span>Amadou Latyr Ngom</span>, Ziniu Wu, Jason Mohoney, James Moore, Alex Zhang, Samuel Madden, Tim Kraska
        </p>
      </div>

      <div class="poster-affiliations">
        <img class="poster-mit-logo" :src="mitLogo" alt="MIT" />
        <img class="poster-g5-logo" :src="g5Logo" alt="G5 Labs" />
      </div>
    </header>

    <section class="poster-columns">
      <section class="poster-column left-column" aria-label="Motivation and SDK foundation">
        <article class="poster-panel pillars-panel">
          <div class="poster-panel-heading">
            <p class="poster-eyebrow">Motivation + Pillars</p>
            <h2>Agentic systems are revolutionizing problem solving, but deep challenges remain.</h2>
          </div>

          <div class="pillar-slices">
            <section class="pillar-slice">
              <article class="pillar-card">
                <p class="card-kicker">Ontology Resolution</p>
                <ul class="poster-list">
                  <li>Disambiguated intent</li>
                  <li>Guardrails and invariants</li>
                  <li>Budget tradeoffs</li>
                  <li>Provenance and blast radius analysis</li>
                  <li>Necessary HIL escalations</li>
                </ul>
              </article>
              <div class="pillar-vdivider" aria-hidden="true"></div>
              <div class="pillar-diagram-frame">
                <OntologyDiagram />
              </div>
            </section>

            <section class="pillar-slice">
              <article class="pillar-card">
                <p class="card-kicker">Constrained Adaptive Solving</p>
                <ul class="poster-list">
                  <li>
                    <span>Contract-bound solving</span>
                    <em>Tradeoffs, invariants, checkpoints, ...</em>
                  </li>
                  <li>
                    <span>Holistic Adaptation</span>
                    <em>Scaffolds, models, tools, skills, ...</em>
                  </li>
                  <li>Live flexibility as needed</li>
                </ul>
              </article>
              <div class="pillar-vdivider" aria-hidden="true"></div>
              <div class="pillar-diagram-frame solving-frame">
                <SolvingDiagram />
              </div>
            </section>

            <section class="pillar-slice">
              <article class="pillar-card">
                <p class="card-kicker">Continual Learning</p>
                <ul class="poster-list">
                  <li>
                    <span>Accept Any Learning Signal</span>
                    <em>Metrics, HIL feedback, agent introspection</em>
                  </li>
                  <li>Improve Ontology Resolution</li>
                  <li>Improve Adaptive Solving</li>
                  <li>Improve Learning Itself</li>
                </ul>
              </article>
              <div class="pillar-vdivider" aria-hidden="true"></div>
              <div class="pillar-diagram-frame">
                <LearningDiagram />
              </div>
            </section>
          </div>
        </article>

        <article class="poster-panel unified-panel">
          <div class="poster-panel-heading compact-heading">
            <p class="poster-eyebrow">Unified Foundation</p>
            <h2>Tressoir - A Unified SDK And Representation</h2>
          </div>

          <div class="unified-cards">
            <article class="bridge-card">
              <p class="card-eyebrow">Representation</p>
              <h3>Interpretable Blueprint</h3>
              <ul class="poster-list">
                <li>
                  <span>System Ontology</span>
                  <em>Architecture, relationships, invariants, lessons, ...</em>
                  <em>More in our G5 system.</em>
                </li>
                <li>
                  <span>Materialized Components</span>
                  <em>Scaffolds, skills, ...</em>
                  <em>Offline optimizable.</em>
                </li>
              </ul>
              <p class="card-footer">Human / agent editable for improvement</p>
            </article>

            <article class="bridge-card">
              <p class="card-eyebrow">Execution</p>
              <h3>Composable SDK</h3>
              <ul class="poster-list">
                <li>Free-form, advanced orchestration</li>
                <li>Proven component optimization and reuse</li>
                <li>Introspection, metrics</li>
              </ul>
              <p class="card-footer">Same SDK for humans and meta agent interpreters</p>
            </article>
          </div>
        </article>

        <article class="poster-panel sdk-panel">
          <div class="poster-panel-heading compact-heading">
            <p class="poster-eyebrow">Quick SDK Overview</p>
            <h2>Single, Composable Function for Programmatic Tool Calling</h2>
          </div>

          <pre class="poster-signature"><code><span class="fn">sdk</span>(service_name, tool_name, args)</code></pre>

          <div class="pillar-slices">
            <section class="pillar-slice sdk-slice">
              <article class="pillar-card">
                <p class="card-kicker">SDK Design</p>
                <ul class="poster-list">
                  <li>
                    <span>Shared <code>sdk(...)</code> signature</span>
                    <em>Unifies builtins, MCPs, plugins, ...</em>
                  </li>
                  <li>Freely composable into complex patterns</li>
                  <li>Persistent across steps</li>
                  <li>
                    <span>Available in Python and Lua</span>
                    <em>Flexibility / security tradeoffs. Defaults to Lua.</em>
                  </li>
                  <li>
                    <span>Comprehensive builtin services</span>
                    <em><code>core</code>, <code>web</code>, <code>embed</code>, <code>editor</code>, <code>webview</code>, <code>llm</code>, <code>agent</code>, <code>self-learning</code></em>
                  </li>
                </ul>
              </article>

              <div class="pillar-vdivider" aria-hidden="true"></div>

              <div class="code-column">
                <h3>SDK Composition Examples</h3>
                <article class="code-card">
                  <p class="code-label">Step N: Parallel Search</p>
                  <pre><code>searches = <span class="fn">sdk</span>("core", "parallel_tool_calls", {
  calls = {
    {"web", "search", { query = "agent-native databases" }},
    {"mcp::papers", "search", { query = "HIL agents" }},
  },
})
results = unroll_helper(searches)
print(results)</code></pre>
                </article>
                <article class="code-card">
                  <p class="code-label">Step N+1: Select, Download, View</p>
                  <pre><code>relevant_idxs = { 2, 5, 8 }

for i = 1, #relevant_idxs do
  idx = relevant_idxs[i]
  path = <span class="fn">sdk</span>("web", "read", {
    url = results[idx].url,
    download_path = "/tmp/sdk-result-" .. idx .. ".pdf",
  })
  <span class="fn">sdk</span>("core", "multimodal_view", { path = path })
end</code></pre>
                </article>
              </div>
            </section>
          </div>
        </article>
      </section>

      <section class="poster-column right-column" aria-label="Orchestration, IBs, evaluation, and conclusion">
        <article class="poster-panel agent-panel">
          <div class="poster-panel-heading compact-heading">
            <p class="poster-eyebrow">Agent/LLM Orchestration</p>
            <h2>Design Goal: Expose Sophisticated Coordination as Ordinary Code</h2>
          </div>

          <div class="pillar-slices">
            <section class="pillar-slice agent-slice">
              <article class="code-card signature-code-card">
                <p class="code-label">Key Signatures</p>
                <pre><code><span class="kw">service</span> <span class="svc">agent</span>:  <span class="comment"># advanced agent management</span>
    <span class="comment"># Create with configuration</span>
    <span class="fn">spawn</span>(<span class="param">task</span>, <span class="param">attachments</span>, <span class="param">context</span>, <span class="param">model_spec</span>)

    <span class="comment"># Synchronous and Asynchronous Run/Steering.</span>
    <span class="comment"># Programmatic auto-compaction</span>
    <span class="fn">compact_run</span>(<span class="param">agent_id</span>, <span class="param">injected_ctx</span>, <span class="param">rounds</span>, <span class="param">tokens</span>)
    <span class="fn">steer</span>(<span class="param">agent_id</span>, <span class="param">instructions</span>, <span class="param">attachments</span>, <span class="param">wake</span>)
    <span class="fn">broadcast</span>(<span class="param">agent_id</span>, <span class="param">instruction</span>, <span class="param">attachments</span>)

    <span class="comment"># Introspection</span>
    <span class="fn">analyze_trajectory</span>(<span class="param">agent_id</span>, <span class="param">purpose</span>)
    <span class="fn">stats</span>(<span class="param">agent_id</span>)

    <span class="comment"># Others Controls</span>
    <span class="fn">pause</span> <span class="pipe">|</span> <span class="fn">resume</span> <span class="pipe">|</span> <span class="fn">terminate</span> <span class="pipe">|</span> <span class="ellipsis">...</span></code></pre>
              </article>

              <div class="pillar-vdivider" aria-hidden="true"></div>

              <div class="code-column">
                <h3>Coordination Examples</h3>
                <article class="code-card">
                  <p class="code-label">Cost-Aware Graph Executor</p>
                  <pre><code>dag = build_task_graph(spec)  <span class="comment"># nodes + dependencies</span>

<span class="kw">def</span> <span class="fn">run_node</span>(n):
    subtask = dag.collect_deps(n) + dag.task(n)
    tier = n.model_spec <span class="kw">or</span> <span class="str">"fast"</span>  <span class="comment"># cost knob</span>

    out = <span class="fn">sdk</span>(<span class="str">"agent"</span>, <span class="str">"spawn_and_run"</span>, {
        <span class="str">"task"</span>: subtask,
        <span class="str">"model_spec"</span>: tier,
    })
    dag.mark_done(n, out)

<span class="kw">while</span> <span class="kw">not</span> dag.done():
    parallel_for(run_node, dag.get_ready())</code></pre>
                </article>
                <article class="code-card">
                  <p class="code-label">Parallel Sticky Review</p>
                  <pre><code><span class="comment"># Start of Task: spawn R parallel reviewers</span>
reviewers = [
    <span class="fn">sdk</span>(<span class="str">"agent"</span>, <span class="str">"spawn"</span>, {
        <span class="str">"task"</span>: review_task,
        <span class="str">"context"</span>: <span class="str">"meta"</span>,
    })
    <span class="kw">for</span> _ <span class="kw">in</span> range(R)
]

<span class="comment"># Milestone 1: ask R parallel reviews</span>
reviews = parallel_map(
    <span class="kw">lambda</span> r: <span class="fn">sdk</span>(<span class="str">"agent"</span>, <span class="str">"compact_run"</span>, {
        <span class="str">"agent_id"</span>: r.id,
        <span class="str">"injected_context"</span>: milestone_ctx,
    }), reviewers,
)

<span class="comment"># Milestone 2: reuse same reviewers ...</span></code></pre>
                </article>
              </div>
            </section>
          </div>
        </article>

        <article class="poster-panel ib-panel">
          <div class="poster-panel-heading compact-heading">
            <p class="poster-eyebrow">IB Layout + Self-Learning</p>
            <h2>IB Layout and Improvement Under the Hood</h2>
          </div>

          <div class="pillar-slices">
            <section class="pillar-slice ib-slice">
              <article class="code-card ontology-card">
                <p class="code-label">SELF_LEARNING.ONTOLOGY.md</p>
                <pre><code>---- semi-structured sections ----
<span class="md-heading">## Architecture/Vocabulary</span>
<span class="ellipsis">...</span>
<span class="md-heading">## Interface/Usage</span>
<span class="ellipsis">...</span>
---- structured sections ----
<span class="fence">```jsonc STRUCTURED_RELATED_SOURCES</span>
[
  <span class="str">"tressoir/ib_service/live_canon.py"</span>, <span class="comment">// context formation</span>
  <span class="str">"tressoir/agent/execution/"</span>,         <span class="comment">// analysis triggers</span>
  <span class="str">"builtin_ib/sdk_libs/self_learning/"</span>, <span class="comment">// materialized library</span>
  <span class="ellipsis">...</span>
]
<span class="fence">```</span>
<span class="fence">```toml STRUCTURED_CANON</span>
[[canon]]
<span class="key">kind</span> = <span class="str">"rule"</span>
<span class="key">oneliner</span> = <span class="str">"Compaction must not await smart merge work."</span>
<span class="key">details</span> = <span class="str">"""..."""</span>

[[canon]]
<span class="key">kind</span> = <span class="str">"technique"</span>
<span class="key">oneliner</span> = <span class="str">"`agent.stats(agent_id)` is the concise introspection ..."</span>
<span class="key">details</span> = <span class="str">"""..."""</span>

[[canon]]
<span class="key">kind</span> = <span class="str">"intent"</span>
<span class="key">oneliner</span> = <span class="str">"Layer 3 self-learning is a user-gated ..."</span>
<span class="key">details</span> = <span class="str">"""..."""</span>
<span class="ellipsis">...</span>
<span class="fence">```</span></code></pre>
              </article>

              <div class="pillar-vdivider" aria-hidden="true"></div>

              <div class="ib-side">
                <article class="code-card tree-card">
                  <p class="code-label">Materialized Components</p>
                  <pre><code>sdk_libs/self_learning/
|-- <span class="file">SDK_LIB.md</span>
|-- <span class="file">LIB.py</span>
|-- <span class="file">canon_learning.py</span>
|-- <span class="file">optimizer.py</span>
|-- skills/
|   |-- <span class="file">FAST_MERGE.SKILL.md</span>
|   |-- <span class="file">REALIGN_LIVE_CANON.SKILL.md</span>
|   |-- <span class="file">LOCALIZED_AGENTIC_OPTIMIZATION.SKILL.md</span>
|   |-- <span class="ellipsis">...</span>
|   `-- prompt_templates/
|       |-- <span class="file">CANON_LEARNER_SYSTEM_PROMPT.md</span>
|       |-- <span class="file">OPTIMIZER_SYSTEM_PROMPT.md</span>
|       |-- <span class="file">RAW_PROFILE_MERGE_TASK.md</span>
|       `-- <span class="ellipsis">...</span>
`-- <span class="file">CANON_LEARNER_DENSE_STATE.md</span>  <span class="comment"># memory</span></code></pre>
                </article>

                <p class="g5-note">
                  G5 ontologies are much more expressive and UX-friendly.<br />
                  (Provenance, Multi-User Collab, Interactive HTML)
                </p>
              </div>
            </section>

            <section class="pillar-slice ib-slice ib-slice-memory">
              <SelfLearningFlowDiagram />

              <div class="pillar-vdivider" aria-hidden="true"></div>

              <div class="memory-side">
                <article class="code-card memory-card">
                  <p class="code-label">IB Learning Memory</p>
                  <pre><code>IB/kb/canon/
|-- <span class="file">AGENT_RUNTIME.LIVE_CANON.toml</span>
|-- <span class="file">BENCHMARK_OPERATIONS.LIVE_CANON.toml</span>
|-- <span class="file">CANON_LEARNER_DENSE_STATE.md</span>
|-- <span class="file">DAEMON_NETWORKING.LIVE_CANON.toml</span>
|-- <span class="file">FRONTEND_EDITOR_PERMISSIONS.LIVE_CANON.toml</span>
|-- <span class="file">GENERAL.LIVE_CANON.toml</span>
|-- <span class="file">IB_SELF_LEARNING.LIVE_CANON.toml</span>
|-- <span class="file">LIVE_CANON_LOG.toml</span>     <span class="comment"># Fast Log</span>
`-- <span class="file">LIVE_CANON.toml</span>          <span class="comment"># Root</span></code></pre>
                </article>

                <article class="memory-notes-card">
                  <ul class="memory-notes">
                    <li>Continuously reorganized tree + LRU.</li>
                    <li>Refreshable by learners.</li>
                    <li>Promoted to ontology/components when definitive.</li>
                  </ul>
                </article>
              </div>
            </section>
          </div>
        </article>

        <article class="poster-panel eval-panel">
          <div class="poster-panel-heading compact-heading">
            <p class="poster-eyebrow">Evaluation</p>
            <h2>Tressoir Is Effective at Designing Agentic Systems</h2>
          </div>

          <div class="pillar-slices">
            <section class="pillar-slice eval-slice">
              <article class="pillar-card takeaways-card">
                <p class="card-kicker">Evaluation Takeaways</p>
                <ul class="poster-list">
                  <li>
                    <span>Effective at offline / hybrid design</span>
                    <em>ScreenSpot-Pro + Bird-Critic</em>
                  </li>
                  <li>
                    <span>Effective at pure online orchestration</span>
                    <em>SWE-Bench Pro without learning</em>
                  </li>
                  <li>
                    <span>Caveat: lacking long-term settings</span>
                    <em>Weeks- or months-long tasks with periodic human input.</em>
                    <em>Even hard SWE-Bench-like tasks take ~10-20 minutes.</em>
                  </li>
                </ul>
              </article>

              <div class="pillar-vdivider" aria-hidden="true"></div>

              <article class="results-card">
                <div class="legend-row" aria-hidden="true">
                  <span class="legend-item"><span class="legend-swatch gemini"></span>Gemini</span>
                  <span class="legend-item"><span class="legend-swatch claude"></span>Claude</span>
                  <span class="legend-item"><span class="legend-swatch openai"></span>OpenAI</span>
                  <span class="legend-item"><span class="legend-swatch other"></span>Other</span>
                  <span class="legend-item"><span class="legend-swatch tressoir-swatch"></span>Tressoir</span>
                </div>

                <section v-for="panel in evalPanels" :key="panel.title" class="mini-panel">
                  <div class="panel-heading">
                    <h3>{{ panel.title }}</h3>
                    <p v-if="panel.subtitle">{{ panel.subtitle }}</p>
                  </div>

                  <div class="bar-list">
                    <div v-for="row in panel.rows" :key="row.label" class="bar-row">
                      <span class="bar-label">{{ row.label }}</span>
                      <div class="bar-track">
                        <span
                          class="bar-fill"
                          :class="[row.family, { tressoir: row.tressoir }]"
                          :style="{ width: `${row.value}%` }"
                        ></span>
                      </div>
                      <span class="bar-value">{{ row.value.toFixed(1) }}%<span v-if="row.cost"> · {{ row.cost }}</span></span>
                    </div>
                  </div>
                </section>
              </article>
            </section>
          </div>
        </article>
      </section>
    </section>
  </main>
</template>

<style scoped>
.poster-24x36 {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: var(--poster-title-band-height) 1fr;
  gap: var(--poster-section-gap);
  box-sizing: border-box;
  padding: var(--poster-page-pad-y) var(--poster-page-pad-x);
  overflow: hidden;
  background:
    radial-gradient(circle at 8% 4%, rgba(93, 131, 146, 0.12), transparent 25%),
    radial-gradient(circle at 92% 98%, rgba(79, 126, 90, 0.11), transparent 28%),
    #ffffff;
  color: #24343a;
  font-family: var(--deck-title-font);
}

.poster-title-band {
  position: relative;
  display: grid;
  grid-template-columns: 220px 1fr 260px;
  align-items: center;
  min-height: 0;
  border-bottom: 3px solid rgba(79, 126, 90, 0.76);
}

.poster-tressoir-logo {
  width: var(--poster-tressoir-logo-width);
  justify-self: start;
}

.poster-title-copy {
  display: grid;
  justify-items: center;
  text-align: center;
}

.poster-title-copy h1 {
  margin: 0;
  color: #5d8392 !important;
  font-size: var(--poster-title-size);
  font-weight: 600;
  line-height: var(--poster-title-line-height);
  letter-spacing: 0.005em;
}

.poster-title-copy p {
  margin: 18px 0 0 0;
  font-size: var(--poster-subtitle-size);
  font-weight: 400;
  line-height: var(--poster-subtitle-line-height);
}

.poster-authors {
  margin-top: 22px !important;
  font-size: var(--poster-authors-size) !important;
  line-height: var(--poster-authors-line-height) !important;
  white-space: nowrap;
}

.poster-authors span {
  font-weight: inherit;
}

.poster-affiliations {
  display: grid;
  justify-items: center;
  gap: 24px;
}

.poster-mit-logo {
  width: var(--poster-mit-logo-width);
}

.poster-g5-logo {
  width: var(--poster-g5-logo-width);
}

.poster-columns {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--poster-column-gap);
  min-height: 0;
}

.poster-columns::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: rgba(93, 131, 146, 0.22);
  pointer-events: none;
}

.poster-column {
  display: grid;
  min-height: 0;
  gap: var(--poster-panel-gap);
}

.left-column {
  grid-template-rows: 1.55fr 0.65fr 1fr;
}

.right-column {
  /* Conclusion removed — its 0.34fr was reabsorbed into the eval row
     so the eval panel can host all 3 sub-panels with 8 ScreenSpot rows.
     Total stays 3.08fr. */
  grid-template-rows: 0.81fr 1.01fr 1.26fr;
}

.poster-panel {
  min-height: 0;
  overflow: hidden;
  /* Refinement 1: flat panels — no outer rounded box, border, or shadow.
     Heading sits directly on the poster surface; content hangs underneath. */
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  padding: 0;
}

.poster-panel-heading {
  margin-bottom: var(--poster-heading-gap);
}

.compact-heading {
  margin-bottom: var(--poster-heading-gap-compact);
}

.poster-eyebrow {
  margin: 0 0 8px 0;
  color: #5d8392;
  font-size: var(--poster-eyebrow-size);
  font-weight: 800;
  line-height: var(--poster-eyebrow-line-height);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.poster-panel h2 {
  margin: 0;
  color: #254854;
  font-size: var(--poster-panel-title-size);
  font-style: italic;
  font-weight: 500;
  line-height: var(--poster-panel-title-line-height);
}

.poster-panel h3,
.card-kicker {
  margin: 0;
  color: #254854;
  font-size: var(--poster-card-title-size);
  font-weight: 800;
  line-height: var(--poster-card-title-line-height);
}

.card-kicker {
  color: #5d8392;
  margin-bottom: 12px;
}

.poster-list {
  display: grid;
  gap: var(--poster-list-gap);
  margin: 0;
  padding: 0;
  list-style: none;
  color: #24343a;
  font-size: var(--poster-list-size);
  font-weight: 500;
  line-height: var(--poster-list-line-height);
}

.poster-list li {
  position: relative;
  padding-left: calc(var(--poster-dot-size) + 18px);
}

.poster-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.36em;
  width: var(--poster-dot-size);
  height: var(--poster-dot-size);
  border-radius: 999px;
  background: #5d8392;
  box-shadow: 0 0 0 10px rgba(93, 131, 146, 0.12);
}

.poster-list em {
  display: block;
  margin-top: 3px;
  color: rgba(36, 52, 58, 0.62);
  font-size: var(--poster-subtext-size);
  font-style: normal;
  font-weight: 500;
  line-height: var(--poster-subtext-line-height);
}

.pillar-slices {
  display: grid;
  gap: var(--poster-pillar-gap);
  min-height: 0;
}

.pillar-slice {
  display: grid;
  /* Card column width is the knob; divider auto-sized (2px); diagram
     gets the remainder. To slide the divider left, reduce
     --poster-pillar-card-width. */
  grid-template-columns: var(--poster-pillar-card-width, 36%) auto minmax(0, 1fr);
  align-items: center;
  gap: 40px;
  min-height: 0;
  /* Refinement 1: flat slices — only horizontal separators between pairs. */
  padding: 32px 12px;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.pillar-slice + .pillar-slice {
  border-top: 2px solid rgba(93, 131, 146, 0.22);
}

/* Slide-styled card for the motivation panel: white surface,
   green left bar accent, soft shadow, kicker in the deck blue. */
.pillar-card {
  position: relative;
  min-height: 0;
  padding: 28px 30px 26px 36px;
  border: 1.5px solid rgba(93, 131, 146, 0.32);
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.11), rgba(255, 255, 255, 0) 42%),
    #ffffff;
  box-shadow: 0 16px 38px rgba(30, 54, 62, 0.12);
  overflow: hidden;
}

.pillar-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 8px;
  background: #5d8392;
}

/* Vertical divider between card and diagram (replaces .mini-divider). */
.pillar-vdivider {
  width: 2px;
  align-self: stretch;
  margin: 14px 0;
  background: rgba(93, 131, 146, 0.25);
}

/* Frame around an embedded pillar diagram component.
   Slide diagrams use rem units so they auto-scale with the
   poster's root font-size. The frame just centers them and lets
   the diagram set its own intrinsic width.

   Note: overflow is intentionally `visible` here so that
   absolutely-positioned ornaments (e.g. SolvingDiagram's
   "Fast Path" / "Orchestration Path" lane labels at top: -0.48rem,
   pill shadows, badge anchors) are not clipped. If a diagram
   is wider than its column, reduce its scale or move the
   `--poster-pillar-card-width` knob left rather than re-enabling
   clipping. */
.pillar-diagram-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  width: 100%;
  overflow: visible;
  font-size: var(--poster-pillar-diagram-scale, 14px);
}

.pillar-diagram-frame.solving-frame {
  font-size: var(--poster-pillar-diagram-solving-scale, 11px);
}

/* SDK panel slice: card on left, examples on right.
   Reuses .pillar-slice geometry but with its own width knob,
   since code examples need more horizontal room than diagrams. */
.sdk-slice {
  grid-template-columns:
    var(--poster-sdk-card-width, 38%) auto minmax(0, 1fr);
  padding: 20px 12px;
}

/* Agent panel slice: signature code-card on left, example code-cards on right.
   Slightly wider card knob than SDK because LHS is a tall code block.
   Tighter padding than .sdk-slice because the re-synced examples are tall. */
.agent-slice {
  grid-template-columns:
    var(--poster-agent-card-width, 42%) auto minmax(0, 1fr);
  padding: 10px 12px;
}

/* IB panel slice: ontology code-card on left, materialized + flow + g5-note on right. */
.ib-slice {
  grid-template-columns:
    var(--poster-ib-card-width, 46%) auto minmax(0, 1fr);
  padding: 10px 12px;
}

.mini-card {
  min-height: 0;
}

.mini-divider {
  width: 2px;
  height: 82%;
  background: rgba(93, 131, 146, 0.25);
}

.mini-diagram,
.self-learning-flow {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-width: 0;
}

.node-stack {
  display: grid;
  gap: 10px;
}

.node-stack span,
.core-node,
.output-node {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 16px;
  border: 2px dashed rgba(93, 131, 146, 0.35);
  border-radius: 999px;
  background: #ffffff;
  color: #254854;
  font-size: var(--poster-diagram-label-size);
  font-weight: 800;
  line-height: var(--poster-diagram-label-line-height);
  white-space: nowrap;
}

.core-node {
  border-style: solid;
  background: rgba(93, 131, 146, 0.1);
}

.output-node {
  border-color: rgba(79, 126, 90, 0.42);
  color: #4f7e5a;
}

.flow-arrow {
  width: 42px;
  height: 2px;
  background: rgba(93, 131, 146, 0.42);
  position: relative;
}

.flow-arrow::after {
  content: "";
  position: absolute;
  right: -2px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-top: 2px solid rgba(93, 131, 146, 0.58);
  border-right: 2px solid rgba(93, 131, 146, 0.58);
  transform: translateY(-50%) rotate(45deg);
}

.solving-diagram {
  grid-auto-flow: row;
  grid-auto-rows: auto;
  gap: 10px;
}

.lane {
  display: grid;
  gap: 5px;
  padding: 14px 18px;
  border: 2px solid rgba(93, 131, 146, 0.18);
  border-radius: 22px;
  background: #ffffff;
}

.lane b,
.hybrid-tag {
  color: #5d8392;
  font-size: var(--poster-example-label-size);
  font-weight: 850;
  line-height: 1.05;
}

.lane span {
  color: #254854;
  font-size: var(--poster-diagram-label-size);
  font-weight: 750;
  line-height: 1.08;
}

.hybrid-tag {
  text-align: center;
  font-style: italic;
  opacity: 0.82;
}

.unified-cards,
.sdk-grid,
.agent-grid,
.ib-grid,
.eval-grid {
  display: grid;
  gap: var(--poster-inner-gap);
  min-height: 0;
}

.unified-cards {
  grid-template-columns: 1fr 1fr;
}

.bridge-card,
.code-card,
.takeaways-card {
  min-height: 0;
  border: 2px solid rgba(93, 131, 146, 0.22);
  border-radius: 28px;
  background: #ffffff;
  padding: 24px 26px;
  box-shadow: 0 12px 30px rgba(34, 60, 70, 0.07);
}

/* Bridge cards in the Unified Foundation panel must align their
   footers across the row regardless of body length. Make each card
   a flex column and let `.card-footer { margin-top: auto }` push the
   footer rule to the bottom of the card. The list keeps an explicit
   bottom margin so even in the tallest card (no leftover space for
   `auto` to fill) there's still breathing room above the rule line. */
.bridge-card {
  display: flex;
  flex-direction: column;
}

.bridge-card .poster-list {
  margin-bottom: 26px;
}

.bridge-card .card-footer {
  margin-top: auto;
}

.card-eyebrow {
  margin: 0 0 7px 0;
  color: #5d8392;
  font-size: var(--poster-card-eyebrow-size);
  font-weight: 850;
  letter-spacing: 0.1em;
  line-height: 1.1;
  text-transform: uppercase;
}

.bridge-card h3 {
  margin-bottom: 20px;
}

.card-footer {
  margin: 22px 0 0 0;
  padding-top: 16px;
  border-top: 2px solid rgba(93, 131, 146, 0.16);
  color: #5d8392;
  font-size: var(--poster-footer-size);
  font-weight: 750;
  line-height: var(--poster-footer-line-height);
}

.poster-signature {
  margin: 0 0 20px 0;
  padding: 18px 22px;
  border: 2px dashed rgba(93, 131, 146, 0.38);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  color: #24343a;
  font-family: "Menlo", "Consolas", monospace;
  font-size: var(--poster-code-hero-size);
  font-weight: 800;
  line-height: 1;
  text-align: center;
}

.sdk-grid,
.agent-grid,
.eval-grid {
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
}

.code-column {
  display: grid;
  gap: 16px;
  min-height: 0;
  min-width: 0;
}

.code-column .code-card {
  min-width: 0;
}

.code-column .code-card pre {
  min-width: 0;
  overflow-wrap: break-word;
}

/* Agent panel: tighter code font so the re-synced canonical
   examples fit the row allocation (slice padding handled above). */
.agent-slice .code-card pre,
.agent-slice .signature-code-card pre {
  font-size: var(--poster-agent-code-size, 11.5px);
  line-height: var(--poster-agent-code-line-height, 1.32);
}

.code-column h3 {
  margin: 0;
  color: rgba(36, 52, 58, 0.82);
  font-size: var(--poster-column-title-size);
  font-style: italic;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
}

.code-card {
  position: relative;
  padding-top: 32px;
}

.code-label {
  position: absolute;
  top: -15px;
  left: 24px;
  margin: 0;
  padding: 7px 12px;
  border: 2px solid rgba(93, 131, 146, 0.23);
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-size: var(--poster-example-label-size);
  font-weight: 850;
  letter-spacing: 0.03em;
  line-height: 1.05;
  box-shadow: 0 6px 16px rgba(30, 54, 62, 0.08);
}

pre,
code {
  font-family: "Menlo", "Consolas", monospace;
}

.code-card pre {
  margin: 0;
  color: #25343a;
  font-size: var(--poster-code-size);
  font-weight: 600;
  line-height: var(--poster-code-line-height);
  white-space: pre-wrap;
}

.fn {
  color: #4f7e5a;
  font-weight: 900;
}

.kw {
  color: #5d8392;
  font-weight: 800;
}

.svc {
  color: #49632a;
  font-weight: 800;
}

.str {
  color: #49632a;
  font-weight: 700;
}

.md-heading,
.file {
  color: #254854;
  font-weight: 900;
}

.fence {
  color: #5d8392;
  font-weight: 850;
}

.key {
  color: #254854;
  font-weight: 800;
}

.param {
  color: #254854;
  font-weight: 650;
}

.pipe,
.ellipsis {
  color: rgba(36, 52, 58, 0.5);
  font-weight: 700;
}

.comment {
  color: rgba(36, 52, 58, 0.48);
  font-style: italic;
  font-weight: 500;
}

.ib-grid {
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
}

.ib-side {
  display: grid;
  grid-template-rows: auto auto;
  gap: 18px;
  min-height: 0;
  min-width: 0;
}

.ib-side > * {
  min-width: 0;
}

/* IB slice 2: SelfLearningFlowDiagram (LHS, wider) + memory-side (RHS, stacked cards). */
.ib-slice-memory {
  grid-template-columns:
    var(--poster-ib-memory-diagram-width, 56%) auto minmax(0, 1fr);
}

.memory-side {
  display: grid;
  grid-template-rows: auto auto;
  gap: 18px;
  min-width: 0;
  min-height: 0;
}

.memory-side > * {
  min-width: 0;
}

.memory-notes-card {
  padding: 14px 22px 16px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 22px rgba(36, 52, 58, 0.08);
}

.memory-notes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 4px;
}
.memory-notes li {
  position: relative;
  padding-left: 16px;
  color: #24343a;
  font-size: var(--poster-subtext-size);
  font-style: italic;
  font-weight: 500;
  line-height: 1.32;
}
.memory-notes li::before {
  content: "\2022";
  position: absolute;
  left: 0;
  top: 0;
  color: #5d8392;
}

.ontology-card pre {
  font-size: var(--poster-ontology-code-size);
  line-height: var(--poster-ontology-code-line-height);
}

.tree-card pre {
  font-size: var(--poster-tree-code-size);
  line-height: var(--poster-tree-code-line-height);
}

.self-learning-flow {
  padding: 20px 18px;
  border: 2px solid rgba(93, 131, 146, 0.18);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.82);
}

.self-learning-flow .node-stack span {
  min-height: 28px;
  padding: 0 11px;
  font-size: var(--poster-diagram-small-size);
}

.self-learning-flow .core-node,
.self-learning-flow .output-node {
  min-height: 34px;
  padding: 0 13px;
  font-size: var(--poster-diagram-small-size);
}

.self-learning-flow .flow-arrow {
  width: 32px;
}

.g5-note {
  margin: 0;
  color: rgba(36, 52, 58, 0.72);
  font-size: var(--poster-note-size);
  font-style: italic;
  font-weight: 500;
  line-height: var(--poster-note-line-height);
  text-align: center;
}

/* Eval panel slice: takeaways pillar-card on left, single results-card on right. */
.eval-slice {
  grid-template-columns:
    var(--poster-eval-card-width, 40%) auto minmax(0, 1fr);
  padding: 10px 12px;
}

/* Single results-card containing legend + 3 mini-panels. */
.results-card {
  position: relative;
  width: 100%;
  border: 1.5px solid rgba(93, 131, 146, 0.26);
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.08), rgba(255, 255, 255, 0) 44%),
    rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 28px rgba(30, 54, 62, 0.08);
  padding: 18px 20px;
}

.results-card .legend-row {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-bottom: 8px;
  color: rgba(36, 52, 58, 0.62);
  font-size: var(--poster-chart-legend-size);
  font-weight: 750;
}

.results-card .legend-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.results-card .legend-swatch {
  width: 12px;
  height: 8px;
  border-radius: 2px;
}

.results-card .mini-panel {
  border-top: 1px solid rgba(93, 131, 146, 0.14);
  padding-top: 8px;
}

.results-card .mini-panel + .mini-panel {
  margin-top: 8px;
}

.results-card .panel-heading {
  display: grid;
  gap: 1px;
  margin-bottom: 6px;
}

.results-card .panel-heading h3 {
  margin: 0;
  color: #254854;
  font-size: var(--poster-chart-title-size);
  font-weight: 850;
  line-height: 1.1;
}

.results-card .panel-heading p {
  margin: 0;
  color: rgba(36, 52, 58, 0.52);
  font-size: var(--poster-chart-subtitle-size);
  font-weight: 650;
  line-height: 1.1;
}

.results-card .bar-list {
  display: grid;
  gap: 3px;
}

.results-card .bar-row {
  display: grid;
  grid-template-columns: minmax(0, 200px) minmax(0, 1fr) 90px;
  gap: 9px;
  align-items: center;
  min-height: 14px;
}

.results-card .bar-label {
  color: #25343a;
  font-size: var(--poster-chart-label-size);
  font-weight: 700;
  line-height: 1.12;
  text-align: right;
}

.results-card .bar-track {
  height: 9px;
  border-radius: 999px;
  background: rgba(93, 131, 146, 0.09);
  overflow: hidden;
}

.results-card .bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.results-card .bar-value {
  color: rgba(36, 52, 58, 0.68);
  font-size: var(--poster-chart-value-size);
  font-weight: 800;
  line-height: 1.12;
}

/* Family colors — match EvaluationSlide.vue palette. */
.results-card .bar-fill.gemini,
.results-card .legend-swatch.gemini {
  background: #4285f4;
}

.results-card .bar-fill.claude,
.results-card .legend-swatch.claude {
  background: #f4a524;
}

.results-card .bar-fill.openai,
.results-card .legend-swatch.openai {
  background: #111111;
}

.results-card .bar-fill.other,
.results-card .legend-swatch.other {
  background: #aaaaaa;
}

/* Tressoir bars: family color underneath + diagonal hatch overlay. */
.results-card .bar-fill.tressoir {
  border: 1px solid #222222;
  background-image:
    repeating-linear-gradient(45deg, rgba(34, 34, 34, 0.38) 0 2px, transparent 2px 5px),
    linear-gradient(var(--bar-color), var(--bar-color));
}

.results-card .bar-fill.tressoir.gemini { --bar-color: #4285f4; }
.results-card .bar-fill.tressoir.claude { --bar-color: #f4a524; }
.results-card .bar-fill.tressoir.openai { --bar-color: #111111; }
.results-card .bar-fill.tressoir.other  { --bar-color: #aaaaaa; }

.results-card .legend-swatch.tressoir-swatch {
  border: 1px solid #222222;
  background:
    repeating-linear-gradient(45deg, rgba(34, 34, 34, 0.4) 0 2px, transparent 2px 5px),
    #cccccc;
}


</style>
