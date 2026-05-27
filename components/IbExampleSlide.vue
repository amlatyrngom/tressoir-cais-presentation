<template>
  <div class="ib-slide deck-slide">
    <header class="deck-slide-header ib-header">
      <h1 class="deck-title">IB Layout and Improvement Under the Hood</h1>
    </header>

    <main class="ib-body">
      <section class="ib-surface" aria-label="Interpretable blueprint surface">
        <article class="surface-card ontology-card">
          <p class="surface-label">SELF_LEARNING.ONTOLOGY.md</p>
          <div class="ontology-codebox">
            <div class="code-section-divider top-divider"><span>semi-structured sections</span></div>
            <pre class="code-block ontology-code"><code><span class="md-heading">## Architecture/Vocabulary</span>
<span class="ellipsis">...</span>
<span class="md-heading">## Interface/Usage</span>
<span class="ellipsis">...</span></code></pre>
            <div class="code-section-divider"><span>structured sections</span></div>
            <pre class="code-block ontology-code structured-code"><code><span class="fence">```jsonc STRUCTURED_RELATED_SOURCES</span>
[
  <span class="str">"tressoir/ib_service/live_canon.py"</span>, <span class="comment">// self-learning context formation</span>
  <span class="str">"tressoir/agent/execution/"</span>, <span class="comment">// analysis / compaction triggers</span>
  <span class="str">"builtin_ib/sdk_libs/self_learning/"</span>, <span class="comment">// learner materialized library</span>
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
          </div>
        </article>

        <aside class="ontology-note" aria-label="Ontology note">
          <p>
            <span>G5 ontologies are much more expressive and UX-friendly.</span>
            <span>(Provenance, Multi-User Collab, Interactive HTML)</span>
          </p>
        </aside>
      </section>

      <div class="body-divider" aria-hidden="true"></div>

      <section class="ib-right" aria-label="Materialized components and self-learning flow">
        <article class="surface-card materialized-card">
          <p class="surface-label">Materialized Components</p>
          <pre class="code-block tree-code"><code>sdk_libs/self_learning/
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

        <section class="learning-panel" aria-label="Self-learning flow">
        <div class="learning-diagram">
          <div class="input-stack">
            <article class="diagram-node input-node">
              <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M16 18a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5M4 30H2v-4a7.01 7.01 0 0 1 7-7h6v2H9a5.006 5.006 0 0 0-5 5Zm18.3-1.3l-4.5-4.5l1.4-1.4l3.1 3.1l6.5-6.5l1.4 1.4z"/>
              </svg>
              <div class="node-copy">
                <h4>Important User Input</h4>
              </div>
            </article>

            <article class="diagram-node input-node">
              <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 6h20v20H6Zm5 6h10v2H11Zm0 4h7v2h-7Zm0 4h10v2H11Z"/>
                <path fill="currentColor" d="m21.7 17.7l-1.4 1.4l1.9 1.9H17v2h5.2l-1.9 1.9l1.4 1.4l4.3-4.3z"/>
              </svg>
              <div class="node-copy">
                <h4>Compaction</h4>
              </div>
            </article>

            <article class="diagram-node input-node">
              <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M4 26h24v2H2V4h2Zm5-4H7v-7h2Zm5 0h-2V9h2Zm5 0h-2v-5h2Zm5 0h-2V6h2Zm-2.8-6.2l-3.5-3.4l-4.5 4.5l-3.9-3.9l1.4-1.4l2.5 2.5l4.5-4.5l4.9 4.8Z"/>
              </svg>
              <div class="node-copy">
                <h4>Traj Analysis</h4>
              </div>
            </article>

            <article class="diagram-node input-node">
              <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12.014 12.014 0 0 1-12 12"/>
                <path fill="currentColor" d="m14 21.4l-5-5l1.4-1.4l3.6 3.6l7.6-7.6l1.4 1.4z"/>
              </svg>
              <div class="node-copy">
                <h4>Task Completion</h4>
              </div>
            </article>
          </div>

          <div class="flow-arrow input-arrow" aria-hidden="true"></div>

          <article class="diagram-node core-node learning-agent-node">
            <div class="compound-icon">
              <svg class="node-icon chip-icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="8" y="8" width="16" height="16" rx="3"/>
                  <path d="M12 4v4M16 4v4M20 4v4M12 24v4M16 24v4M20 24v4M4 12h4M4 16h4M4 20h4M24 12h4M24 16h4M24 20h4"/>
                  <circle cx="13" cy="14" r="1.6"/>
                  <circle cx="19" cy="12" r="1.6"/>
                  <circle cx="18" cy="20" r="1.6"/>
                  <path d="M14.5 13.5l3-1M14.2 15.2l2.7 3.5"/>
                </g>
              </svg>
              <svg class="loop-badge" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M25.4 10.6A10 10 0 0 0 8.7 7.8L6.9 6H13v2H8.3l1.8 1.8A8 8 0 0 1 24 13h2a9.9 9.9 0 0 0-.6-2.4M6.6 21.4A10 10 0 0 0 23.3 24.2L25.1 26H19v-2h4.7l-1.8-1.8A8 8 0 0 1 8 19H6a9.9 9.9 0 0 0 .6 2.4"/>
              </svg>
            </div>
            <div class="node-copy">
              <h4>Self-Learning Agents</h4>
            </div>
          </article>

          <div class="flow-arrow output-arrow" aria-hidden="true"></div>

          <article class="diagram-node output-node">
            <div class="compound-icon">
              <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13.2L28 10.8V28a2 2 0 0 1-2 2M6 4v24h20V12h-8V4Zm14 1.4V10h4.6ZM9 17h6v2H9Zm0 4h14v2H9Zm8-4h6v2h-6Z"/>
              </svg>
              <svg class="check-badge" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/>
                <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/>
              </svg>
            </div>
            <div class="node-copy">
              <h4>Improved IB</h4>
            </div>
          </article>
        </div>
        </section>
      </section>
    </main>
  </div>
</template>

<style scoped>
.ib-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 14% 20%, rgba(93, 131, 146, 0.06), transparent 31%),
    radial-gradient(circle at 86% 78%, rgba(111, 148, 63, 0.07), transparent 34%),
    #ffffff;
}

.ib-header {
  padding-bottom: 0.98rem;
}

.ib-body {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) 1px minmax(0, 1.16fr);
  gap: 1.12rem;
  align-items: stretch;
  padding: 1.18rem 3rem 1.36rem 3rem;
  overflow: hidden;
}

.ib-surface {
  display: grid;
  gap: 0.66rem;
  align-content: center;
  min-width: 0;
  min-height: 0;
}

.ib-right {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 0.95rem;
  align-content: center;
  min-width: 0;
  min-height: 0;
}

.learning-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
}

.surface-card {
  position: relative;
  width: 100%;
  border: 1.5px solid rgba(93, 131, 146, 0.24);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.07), rgba(255, 255, 255, 0) 45%),
    rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 28px rgba(30, 54, 62, 0.08);
}

.surface-card {
  padding: 0.88rem 0.84rem 0.7rem 0.84rem;
}

.ontology-card {
  display: flex;
  flex-direction: column;
  align-self: center;
  min-height: 0;
}

.materialized-card {
  align-self: start;
}

.ontology-note {
  display: grid;
  justify-items: center;
  gap: 0.28rem;
  color: rgba(36, 52, 58, 0.72);
  text-align: center;
}

.ontology-note p {
  display: grid;
  gap: 0.12rem;
  margin: 0;
  font-size: var(--deck-ib-note-size);
  font-style: italic;
  font-weight: 500;
  line-height: var(--deck-ib-note-line-height);
}

.surface-label {
  position: absolute;
  top: -0.52rem;
  left: 0.88rem;
  margin: 0;
  padding: 0.09rem 0.46rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-family: "Menlo", "Consolas", monospace;
  font-size: var(--deck-example-label-size);
  font-weight: 800;
  letter-spacing: var(--deck-example-label-letter-spacing);
  box-shadow: 0 5px 14px rgba(30, 54, 62, 0.08);
  line-height: var(--deck-example-label-line-height);
}

.code-block {
  margin: 0;
  color: #25343a;
  font-family: "Menlo", "Consolas", monospace;
  font-weight: 600;
  white-space: pre;
}

.ontology-codebox {
  flex: 1;
  padding: 0.08rem 0 0 0;
}

.ontology-code {
  font-size: var(--deck-ontology-code-size);
  line-height: var(--deck-ontology-code-line-height);
}

.structured-code {
  padding-top: 0;
}

.code-section-divider {
  display: flex;
  align-items: center;
  gap: 0.42rem;
  margin: 0.2rem 0 0.18rem 0;
  color: rgba(93, 131, 146, 0.72);
  font-family: "Menlo", "Consolas", monospace;
  font-size: var(--deck-code-section-label-size);
  font-weight: 850;
  letter-spacing: var(--deck-code-section-label-letter-spacing);
  text-transform: uppercase;
}

.code-section-divider::before,
.code-section-divider::after {
  content: "";
  height: 1px;
  flex: 1 1 auto;
  background: rgba(93, 131, 146, 0.2);
}

.top-divider {
  margin-top: 0;
  margin-bottom: 0.18rem;
}

.tree-code {
  padding-top: 0.08rem;
  font-size: var(--deck-tree-code-size);
  line-height: var(--deck-tree-code-line-height);
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

.str {
  color: #49632a;
  font-weight: 700;
}

.comment {
  color: rgba(36, 52, 58, 0.48);
  font-style: italic;
  font-weight: 500;
}

.ellipsis {
  color: rgba(36, 52, 58, 0.5);
  font-weight: 900;
}

.body-divider {
  align-self: center;
  width: 1px;
  height: 12.1rem;
  background: rgba(93, 131, 146, 0.28);
}

.learning-diagram {
  position: relative;
  width: 100%;
  min-height: 10rem;
  display: grid;
  grid-template-columns: max-content minmax(1.3rem, 1fr) max-content minmax(1.3rem, 1fr) max-content;
  grid-template-rows: 1fr;
  align-items: center;
}

.input-stack {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 0.44rem;
}

.diagram-node {
  display: flex;
  align-items: center;
  gap: 0.38rem;
  min-height: 0;
  padding: 0.34rem 0.56rem;
  border: 1.4px dashed rgba(93, 131, 146, 0.48);
  border-radius: 999px;
  background: rgba(93, 131, 146, 0.08);
  box-shadow: 0 10px 26px rgba(30, 54, 62, 0.08);
}

.input-node {
  justify-content: flex-start;
}

.core-node {
  grid-column: 3;
  grid-row: 1;
  justify-self: center;
  width: auto;
  border-color: rgba(93, 131, 146, 0.5);
  background: rgba(93, 131, 146, 0.1);
}

.learning-agent-node {
  border-color: rgba(111, 148, 63, 0.52);
  background: rgba(111, 148, 63, 0.12);
}

.learning-agent-node .node-icon {
  color: #6f943f;
}

.learning-agent-node .node-copy h4 {
  color: #49632a;
}

.output-node {
  grid-column: 5;
  grid-row: 1;
  justify-self: center;
  border-color: rgba(93, 131, 146, 0.42);
}

.node-icon {
  flex: 0 0 auto;
  width: 1.22rem;
  height: 1.22rem;
  color: #5d8392;
}

.node-copy h4 {
  margin: 0;
  color: #254854;
  font-size: var(--deck-diagram-node-ib-size);
  font-weight: 700;
  line-height: var(--deck-diagram-node-line-height);
  white-space: nowrap;
}

.compound-icon {
  position: relative;
  flex: 0 0 auto;
  width: 1.22rem;
  height: 1.22rem;
}

.loop-badge,
.check-badge {
  position: absolute;
  right: -0.2rem;
  bottom: -0.16rem;
  width: 0.66rem;
  height: 0.66rem;
  padding: 0.08rem;
  color: #ffffff;
  border: 1.5px solid #ffffff;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(30, 54, 62, 0.18);
}

.loop-badge {
  background: #6f943f;
}

.check-badge {
  background: #5d8392;
}

.flow-arrow {
  position: relative;
  width: 100%;
  height: 2px;
  align-self: center;
  background: rgba(93, 131, 146, 0.62);
}

.flow-arrow::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -1px;
  width: 0;
  height: 0;
  border-top: 0.28rem solid transparent;
  border-bottom: 0.28rem solid transparent;
  border-left: 0.42rem solid rgba(93, 131, 146, 0.72);
  transform: translateY(-50%);
}

.input-arrow {
  grid-column: 2;
  grid-row: 1;
}

.output-arrow {
  grid-column: 4;
  grid-row: 1;
}
</style>
