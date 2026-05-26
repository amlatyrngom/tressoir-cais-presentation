<template>
  <div class="cap-flow">
    <!-- Top: thin layer strip -->
    <div class="layer-strip">
      <div class="layer-band layer-1">
        <div class="layer-tag">L1 · INTERFACE</div>
        <div class="layer-hint">analyst · NL queries</div>
      </div>
      <div class="layer-band layer-2">
        <div class="layer-tag">L2 · APPLICATION</div>
        <div class="layer-hint">app code · schema · evolving logic</div>
      </div>
      <div class="layer-band layer-3">
        <div class="layer-tag">L3 · ENGINE</div>
        <div class="layer-hint">1M LOC · DuckDB-class</div>
      </div>
    </div>

    <!-- Middle: pipeline -->
    <div class="pipeline">

      <!-- Tile 1: Intent + Context -->
      <div class="tile tile-specify" :style="layerStripe(['L1','L2'])">
        <div class="tile-header">
          <span class="tile-title">Intent + Context</span>
          <span class="tile-layers">L1·L2</span>
          <span class="tile-pillar pillar-specify">SPECIFY</span>
        </div>
        <div class="tile-body intent-body">
          <div class="bubble">
            "trending power-users<br/>after last release?"
          </div>
          <div class="resolve">↓ resolve</div>
          <div class="spec">
            <div><span class="k">subject:</span> power_users</div>
            <div><span class="k">metric:</span> engagement_trend</div>
            <div><span class="k">window:</span> post v2.3</div>
          </div>
        </div>
      </div>

      <div class="arrow">→</div>

      <!-- Tile 2: Hybrid Workflow -->
      <div class="tile tile-solve" :style="layerStripe(['L1','L2'])">
        <div class="tile-header">
          <span class="tile-title">Hybrid Workflow</span>
          <span class="tile-layers">L1·L2</span>
          <span class="tile-pillar pillar-solve">ADAPTIVE SOLVE</span>
        </div>
        <div class="tile-body hybrid-body">
          <div class="op op-sql">SCAN orders</div>
          <div class="op-arrow">↓</div>
          <div class="op op-sql">FILTER status=ok <span class="cost">$1e-4/row</span></div>
          <div class="op-arrow">↓</div>
          <div class="op op-llm">✦ EXTRACT note→category <span class="cost">$1e-3/row</span></div>
          <div class="op-arrow">↓</div>
          <div class="op op-sql">AGGREGATE</div>
        </div>
      </div>

      <div class="arrow">→</div>

      <!-- Tile 3: Agentic Orchestration -->
      <div class="tile tile-solve" :style="layerStripe(['L1','L2','L3'])">
        <div class="tile-header">
          <span class="tile-title">Agentic Orchestration</span>
          <span class="tile-layers">L1·L2·L3</span>
          <span class="tile-pillar pillar-solve">ADAPTIVE SOLVE</span>
        </div>
        <div class="tile-body agentic-body">
          <div class="agent-node">
            <span class="agent-label">AGENT</span>
            <span class="agent-react">↻ ReAct</span>
          </div>
          <div class="branches">
            <div class="branch">use<br/>compiled WF</div>
            <div class="branch">synthesize<br/>new WF</div>
            <div class="branch">free-form<br/>ReAct</div>
          </div>
          <div class="subagents">
            <span class="dot" v-for="n in 8" :key="n"></span>
          </div>
          <div class="subagents-label">sub-agents</div>
        </div>
      </div>

      <div class="arrow">→</div>

      <!-- Tile 4: Codebase Mastery -->
      <div class="tile tile-solve" :style="layerStripe(['L2','L3'])">
        <div class="tile-header">
          <span class="tile-title">Codebase Mastery</span>
          <span class="tile-layers">L2·L3</span>
          <span class="tile-pillar pillar-solve">ADAPTIVE SOLVE</span>
        </div>
        <div class="tile-body codebase-body">
          <div class="tree">
            <div>src/</div>
            <div>├── core.cpp <span class="diff">◀ Δ refactor</span></div>
            <div>├── plan.cpp</div>
            <div>└── …</div>
          </div>
          <div class="badges">
            <span class="badge">📦 1M LOC</span>
            <span class="badge">✓ guarantees preserved</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom: Learn loop -->
    <div class="learn-row">
      <svg class="loop-svg" viewBox="0 0 1000 60" preserveAspectRatio="none">
        <!-- curve from right side wrapping under back to left side -->
        <path d="M 970 5 C 970 60, 30 60, 30 5"
              stroke="#10b981" stroke-width="2.5" fill="none" stroke-dasharray="0" />
        <polygon points="30,2 38,12 22,12" fill="#10b981" />
        <circle cx="970" cy="5" r="3" fill="#10b981" />
      </svg>
      <div class="learn-card">
        <div class="learn-head">
          <span class="learn-icon">↻</span>
          <span class="learn-title">Stats + Feedback Learning</span>
          <span class="tile-pillar pillar-learn">LEARN</span>
        </div>
        <div class="learn-icons">
          <span class="lchip">📊 runtime stats</span>
          <span class="lchip">💬 user feedback</span>
          <span class="lchip">🧠 canon &amp; refined components</span>
          <span class="lchip">→ improves compiled workflows + spec</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Map a tile's "layers touched" list to a tinted top-stripe gradient.
function layerStripe(layers) {
  const colorOf = { L1: '#93c5fd', L2: '#fcd34d', L3: '#86efac' }
  // Build segments proportional to count of touched layers; stripe sits at top of tile.
  const stops = layers.map(l => colorOf[l]).join(', ')
  return {
    '--stripe': `linear-gradient(90deg, ${stops})`,
  }
}
</script>

<style scoped>
.cap-flow {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 6px 4px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  color: #0f172a;
  height: 100%;
}

/* === Layer strip === */
.layer-strip {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #cbd5e1;
}
.layer-band {
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.layer-1 { background: linear-gradient(180deg, #eff6ff, #dbeafe); border-right: 1px solid #cbd5e1; }
.layer-2 { background: linear-gradient(180deg, #fefce8, #fef3c7); border-right: 1px solid #cbd5e1; }
.layer-3 { background: linear-gradient(180deg, #f0fdf4, #dcfce7); }
.layer-tag  { font-size: 11px; font-weight: 700; letter-spacing: .08em; }
.layer-hint { font-size: 10px; opacity: .7; }

/* === Pipeline === */
.pipeline {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  gap: 6px;
  align-items: stretch;
  flex: 1;
  min-height: 0;
}
.arrow {
  align-self: center;
  font-size: 28px;
  font-weight: 700;
  color: #475569;
  padding: 0 2px;
}

.tile {
  position: relative;
  border: 1.5px solid;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}
.tile::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--stripe);
}
.tile-specify { border-color: #93c5fd; }
.tile-solve   { border-color: #fcd34d; }

.tile-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 10px 6px;
  border-bottom: 1px solid #f1f5f9;
}
.tile-title  { font-size: 13px; font-weight: 700; flex: 1; }
.tile-layers { font-size: 9px; opacity: .55; letter-spacing: .04em; }
.tile-pillar {
  font-size: 8.5px;
  letter-spacing: .08em;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 999px;
}
.pillar-specify { background: #dbeafe; color: #1e3a8a; }
.pillar-solve   { background: #fef3c7; color: #78350f; }
.pillar-learn   { background: #dcfce7; color: #14532d; }

.tile-body {
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
  line-height: 1.25;
  min-height: 0;
}

/* Tile 1: Intent body */
.bubble {
  background: #eff6ff;
  border: 1px solid #93c5fd;
  border-radius: 12px 12px 12px 2px;
  padding: 6px 8px;
  font-style: italic;
  font-size: 10.5px;
  color: #1e3a8a;
}
.resolve { font-size: 9px; color: #64748b; text-align: center; }
.spec {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  background: #f8fafc;
  border: 1px dashed #94a3b8;
  border-radius: 6px;
  padding: 6px 8px;
  color: #1e293b;
}
.spec .k { color: #1e40af; font-weight: 600; }

/* Tile 2: Hybrid body */
.hybrid-body { gap: 2px; align-items: center; }
.op {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 9.5px;
  padding: 5px 8px;
  border-radius: 6px;
  width: 100%;
  text-align: center;
  position: relative;
}
.op-sql { background: #f1f5f9; border: 1px solid #cbd5e1; color: #0f172a; }
.op-llm {
  background: linear-gradient(135deg, #fde68a, #fbbf24);
  border: 1px solid #d97706;
  color: #78350f;
  font-weight: 600;
}
.op-arrow { font-size: 11px; color: #64748b; line-height: 1; }
.cost {
  font-size: 8.5px;
  opacity: .65;
  margin-left: 4px;
  font-weight: 500;
}

/* Tile 3: Agentic body */
.agentic-body { align-items: center; gap: 6px; }
.agent-node {
  background: linear-gradient(135deg, #fef3c7, #fcd34d);
  border: 1.5px solid #d97706;
  color: #78350f;
  border-radius: 8px;
  padding: 5px 12px;
  font-weight: 700;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}
.agent-react { font-size: 8.5px; font-weight: 500; opacity: .8; }
.branches {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  width: 100%;
}
.branch {
  background: #fffbeb;
  border: 1px dashed #d97706;
  border-radius: 5px;
  padding: 3px 4px;
  text-align: center;
  font-size: 8.5px;
  line-height: 1.15;
  color: #78350f;
}
.subagents {
  display: flex;
  gap: 3px;
  margin-top: 2px;
}
.dot {
  width: 6px; height: 6px;
  border-radius: 999px;
  background: #d97706;
  opacity: .65;
}
.subagents-label { font-size: 8.5px; opacity: .6; margin-top: -2px; }

/* Tile 4: Codebase body */
.tree {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 9.5px;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 6px 8px;
  color: #1e293b;
}
.diff { color: #b45309; font-weight: 600; }
.badges {
  display: flex; flex-wrap: wrap; gap: 4px;
  margin-top: auto;
}
.badge {
  font-size: 9px;
  padding: 3px 6px;
  border-radius: 4px;
  background: #f0fdf4;
  border: 1px solid #86efac;
  color: #14532d;
  font-weight: 600;
}

/* === Learn loop row === */
.learn-row {
  position: relative;
  margin-top: 6px;
}
.loop-svg {
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  height: 50px;
  pointer-events: none;
  opacity: .8;
}
.learn-card {
  position: relative;
  margin: 28px auto 0;
  width: 80%;
  border: 1.5px solid #10b981;
  background: #f0fdf4;
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.learn-head {
  display: flex; align-items: center; gap: 8px;
}
.learn-icon { font-size: 18px; color: #047857; }
.learn-title { font-weight: 700; font-size: 13px; color: #065f46; flex: 1; }
.learn-icons {
  display: flex; flex-wrap: wrap; gap: 6px;
  font-size: 10px;
}
.lchip {
  background: #ffffff;
  border: 1px solid #86efac;
  color: #065f46;
  padding: 2px 8px;
  border-radius: 999px;
}
</style>
