<template>
  <div class="self-learning-flow-diagram">
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
</template>

<style scoped>
.self-learning-flow-diagram {
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
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.1;
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
