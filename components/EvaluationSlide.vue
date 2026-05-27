<script setup lang="ts">
const panels = [
  {
    title: "Hybrid Offline/Online: Bird-Critic Flash",
    subtitle: "",
    rows: [
      { label: "SQL-ACT (Claude 4.6 Opus)", value: 52.0, family: "claude" },
      { label: "Tressoir lite (Gemini 3 Flash)", value: 56.0, cost: "$0.28", family: "gemini", tressoir: true },
    ],
  },
  {
    title: "Static Offline: ScreenSpot-Pro",
    subtitle: "",
    rows: [
      { label: "UI-Venus 72B", value: 61.9, family: "other" },
      { label: "Gemini 3 Flash", value: 69.1, family: "gemini" },
      { label: "Holo2 235B", value: 70.6, family: "other" },
      { label: "Gemini 3 Pro", value: 72.7, family: "gemini" },
      { label: "ZoomClick (UI-Venus)", value: 73.1, family: "other" },
      { label: "Holo2 Agentic", value: 78.5, family: "other" },
      { label: "Tressoir (Gemini 3 Flash)", value: 83.1, cost: "$0.05", family: "gemini", tressoir: true },
      { label: "OpenAI Scaffold (GPT 5.2 xHigh)", value: 86.3, family: "openai" },
    ],
  },
  {
    title: "Pure Online: SWE-Bench Pro Qute Subset",
    subtitle: "79 instances",
    rows: [
      { label: "Tressoir max (Gemini 3 Flash)", value: 54.4, cost: "$1.66", family: "gemini", tressoir: true },
      { label: "SWE-Agent (Claude 4.6 Opus)", value: 57.0, cost: "$1.67", family: "claude" },
      { label: "Tressoir lite (Gemini 3 Flash)", value: 58.2, cost: "$1.07", family: "gemini", tressoir: true },
      { label: "Tressoir lite (Claude 4.6 Opus)", value: 70.9, cost: "$2.43", family: "claude", tressoir: true },
      { label: "Tressoir max (Claude 4.6 Opus)", value: 75.9, cost: "$6.04", family: "claude", tressoir: true },
    ],
  }
]
</script>

<template>
  <div class="evaluation-slide deck-slide">
    <header class="deck-slide-header evaluation-header">
      <h1 class="deck-title">Evaluation</h1>
    </header>

    <main class="evaluation-body">
      <aside class="takeaways-panel">
        <article class="takeaways-card">
          <h2>Evaluation Takeaways</h2>

          <ul class="decision-list">
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Effective at offline / hybrid design</span>
                <span class="decision-subtext">ScreenSpot-Pro + Bird-Critic</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Effective at pure online orchestration</span>
                <span class="decision-subtext">SWE-Bench Pro without learning</span>
              </span>
            </li>
            <li class="decision-item decision-with-subtext">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Caveat: lacking realistic evaluation</span>
                <span class="decision-subtext">Days- or weeks-long tasks with periodic human input.</span>
                <span class="decision-subtext">Even hard SWE-Bench-like tasks take ~10-20 minutes.</span>
              </span>
            </li>
          </ul>
        </article>
      </aside>

      <div class="body-divider" aria-hidden="true"></div>

      <section class="results-panel" aria-label="Evaluation result panels">
        <article class="results-card">
          <div class="legend-row" aria-hidden="true">
            <span class="legend-item"><span class="legend-swatch gemini"></span>Gemini</span>
            <span class="legend-item"><span class="legend-swatch claude"></span>Claude</span>
            <span class="legend-item"><span class="legend-swatch openai"></span>OpenAI</span>
            <span class="legend-item"><span class="legend-swatch other"></span>Other</span>
            <span class="legend-item"><span class="legend-swatch tressoir-swatch"></span>Tressoir</span>
          </div>

          <section v-for="panel in panels" :key="panel.title" class="mini-panel">
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
    </main>
  </div>
</template>

<style scoped>
.evaluation-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 16% 18%, rgba(93, 131, 146, 0.06), transparent 31%),
    radial-gradient(circle at 86% 78%, rgba(111, 148, 63, 0.08), transparent 34%),
    #ffffff;
}

.evaluation-header {
  padding-bottom: 0.98rem;
}

.evaluation-body {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) 1px minmax(0, 1.28fr);
  gap: 1.18rem;
  align-items: center;
  padding: 1.2rem 3rem 1.36rem 3rem;
  overflow: hidden;
}

.takeaways-panel,
.results-panel {
  display: flex;
  align-items: center;
  min-width: 0;
}

.takeaways-card,
.results-card {
  position: relative;
  width: 100%;
  border: 1.5px solid rgba(93, 131, 146, 0.26);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.08), rgba(255, 255, 255, 0) 44%),
    rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 28px rgba(30, 54, 62, 0.08);
}

.takeaways-card {
  padding: 1.18rem 1.16rem 1.1rem 1.25rem;
  overflow: hidden;
}

.takeaways-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 0.42rem;
  background: #5d8392;
}

.takeaways-card h2 {
  margin: 0;
  color: #254854;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.08;
}

.decision-list {
  list-style: none;
  margin: 1.02rem 0 0 0;
  padding: 0;
  display: grid;
  gap: 0.62rem;
}

.decision-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: #24343a;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.18;
}

.decision-dot {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.27rem;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #5d8392;
  box-shadow: 0 0 0 4px rgba(93, 131, 146, 0.13);
}



.decision-copy {
  display: grid;
  gap: 0.19rem;
}

.decision-subtext {
  color: rgba(36, 52, 58, 0.62);
  font-size: 10.2px;
  font-weight: 500;
  line-height: 1.14;
}

.body-divider {
  align-self: center;
  width: 1px;
  height: 12.1rem;
  background: rgba(93, 131, 146, 0.28);
}

.results-card {
  padding: 0.72rem 0.8rem 0.7rem 0.8rem;
}

.legend-row {
  display: flex;
  justify-content: flex-end;
  gap: 0.72rem;
  margin-bottom: 0.45rem;
  color: rgba(36, 52, 58, 0.62);
  font-size: 7.4px;
  font-weight: 750;
}

.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.22rem;
}

.legend-swatch {
  width: 0.56rem;
  height: 0.38rem;
  border-radius: 0.1rem;
}

.mini-panel {
  border-top: 1px solid rgba(93, 131, 146, 0.14);
  padding-top: 0.36rem;
}

.mini-panel + .mini-panel {
  margin-top: 0.34rem;
}

.panel-heading {
  display: grid;
  gap: 0.06rem;
  margin-bottom: 0.28rem;
}

.panel-heading h3 {
  margin: 0;
  color: #254854;
  font-size: 10.7px;
  font-weight: 850;
  line-height: 1.05;
}

.panel-heading p {
  margin: 0;
  color: rgba(36, 52, 58, 0.52);
  font-size: 7.1px;
  font-weight: 650;
  line-height: 1;
}

.bar-list {
  display: grid;
  gap: 0.13rem;
}

.bar-row {
  display: grid;
  grid-template-columns: 8.55rem minmax(0, 1fr) 3.55rem;
  gap: 0.34rem;
  align-items: center;
  min-height: 0.73rem;
}

.bar-label {
  color: #25343a;
  font-size: 6.55px;
  font-weight: 700;
  line-height: 1;
  text-align: right;
  white-space: normal;
}

.bar-track {
  height: 0.43rem;
  border-radius: 999px;
  background: rgba(93, 131, 146, 0.09);
  overflow: hidden;
}

.bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.bar-value {
  color: rgba(36, 52, 58, 0.68);
  font-size: 6.55px;
  font-weight: 800;
  line-height: 1;
}

.gemini {
  background: #4285f4;
}

.claude {
  background: #f4a524;
}

.openai {
  background: #111111;
}

.other {
  background: #aaaaaa;
}

.tressoir {
  border: 1px solid #222222;
  background-image:
    repeating-linear-gradient(45deg, rgba(34, 34, 34, 0.38) 0 2px, transparent 2px 5px),
    linear-gradient(var(--bar-color), var(--bar-color));
}

.tressoir.gemini {
  --bar-color: #4285f4;
}

.tressoir.claude {
  --bar-color: #f4a524;
}

.tressoir.openai {
  --bar-color: #111111;
}

.tressoir.other {
  --bar-color: #aaaaaa;
}

.tressoir-swatch {
  border: 1px solid #222222;
  background:
    repeating-linear-gradient(45deg, rgba(34, 34, 34, 0.4) 0 2px, transparent 2px 5px),
    #cccccc;
}
</style>
