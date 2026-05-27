<script setup>
import { useSlideContext } from '@slidev/client'
import OntologyDiagram from './OntologyDiagram.vue'
import SolvingDiagram from './SolvingDiagram.vue'
import LearningDiagram from './LearningDiagram.vue'

const { $clicks } = useSlideContext()
</script>

<template>
  <div class="pillars-slide deck-slide">
    <header class="header deck-slide-header">
      <h1 class="deck-title">Agent-Native Software Is Still Challenging</h1>
      <div class="subtitle-row">
        <h2 class="strip-subtitle">The 3 Pillars of Agent-Native Software</h2>
      </div>
      <div class="strip-row">
        <svg class="bookend" viewBox="0 0 512 512" aria-hidden="true">
          <path fill="currentColor"
                d="M256 26.2L52 135h408zM73 153v14h366v-14zm16 32v206h30V185zm101.334 0v206h30V185zm101.332 0v206h30V185zM393 185v206h30V185zM73 409v30h366v-30zm-32 48v30h430v-30z"/>
        </svg>
        <div class="pillar-strip">
          <div class="pillar" :class="{ active: $clicks === 1, inactive: $clicks > 0 && $clicks !== 1 }">
            <span class="pillar-label">Ontology Resolution</span>
          </div>
          <div class="divider">›</div>
          <div class="pillar" :class="{ active: $clicks === 2, inactive: $clicks > 0 && $clicks !== 2 }">
            <span class="pillar-label">Constrained Adaptive Solving</span>
          </div>
          <div class="divider">›</div>
          <div class="pillar" :class="{ active: $clicks === 3, inactive: $clicks > 0 && $clicks !== 3 }">
            <span class="pillar-label">Continual Learning</span>
          </div>
        </div>
        <svg class="bookend" viewBox="0 0 512 512" aria-hidden="true">
          <path fill="currentColor"
                d="M256 26.2L52 135h408zM73 153v14h366v-14zm16 32v206h30V185zm101.334 0v206h30V185zm101.332 0v206h30V185zM393 185v206h30V185zM73 409v30h366v-30zm-32 48v30h430v-30z"/>
        </svg>
      </div>
    </header>
    <main class="body">
      <section class="pillar-body" aria-live="polite">
        <div class="card-column">
          <article v-if="$clicks === 1" class="resolution-card">
            <p class="card-kicker">Ontology Resolution</p>
            <ul class="decision-list">
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Disambiguated intent</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Guardrails and invariants</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Budget Tradeoffs</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Provenance and blast radius analysis</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Necessary HIL escalations</span>
              </li>
            </ul>
          </article>
          <article v-if="$clicks === 2" class="resolution-card">
            <p class="card-kicker">Constrained Adaptive Solving</p>
            <ul class="decision-list">
              <li class="decision-item decision-with-subtext">
                <span class="decision-dot"></span>
                <span class="decision-copy">
                  <span>Contract-bound solving</span>
                  <span class="decision-subtext">Tradeoffs, Invariants, Checkpoints, ...</span>
                </span>
              </li>
              <li class="decision-item decision-with-subtext">
                <span class="decision-dot"></span>
                <span class="decision-copy">
                  <span>Holistic Adaptation</span>
                  <span class="decision-subtext">Scaffolds, Models, Tools, Skills, ...</span>
                </span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Live flexibility as needed</span>
              </li>
            </ul>
          </article>
          <article v-if="$clicks === 3" class="resolution-card">
            <p class="card-kicker">Continual Learning</p>
            <ul class="decision-list">
              <li class="decision-item decision-with-subtext">
                <span class="decision-dot"></span>
                <span class="decision-copy">
                  <span>Accept Any Learning Signal</span>
                  <span class="decision-subtext">Low-level metrics, HIL feedback, agent introspection</span>
                </span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Improve Ontology Resolution</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Improve Adaptive Solving</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Improve Learning Itself</span>
              </li>
            </ul>
          </article>
        </div>
        <div v-if="$clicks >= 1 && $clicks <= 3" class="body-divider" aria-hidden="true"></div>
        <div class="diagram-column">
          <OntologyDiagram v-if="$clicks === 1" />
          <SolvingDiagram v-if="$clicks === 2" />
          <LearningDiagram v-if="$clicks === 3" />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Shared title/header styling lives in style.css; this component only owns
   the full-slide layout and the pillar visual. */

.pillars-slide {
  display: flex;
  flex-direction: column;
}

.header {
  border-bottom: 1px solid #e5e7eb;
}

.subtitle-row {
  display: flex;
  justify-content: center;
  margin-top: var(--deck-title-body-gap);
  margin-bottom: 0.75rem;
}

.strip-subtitle {
  font-size: var(--deck-subtitle-size);
  font-weight: 400 !important;
  font-style: italic;
  margin: 0;
  line-height: var(--deck-subtitle-line-height);
  text-align: center;
  opacity: 0.85;
}

.strip-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.bookend {
  flex: 0 0 auto;
  width: 3.75rem;
  height: 3.75rem;
  color: #5d8392;
  opacity: 0.82;
}

.pillar-strip {
  display: flex;
  align-items: stretch;
  gap: 0.6rem;
  flex: 0 0 auto;
}

.pillar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: var(--pillar-width);
  box-sizing: border-box;
  padding: 0.6rem 1.08rem;
  border: 1.5px solid #d1d5db;
  border-radius: 0.55rem;
  background: #ffffff;
  color: #24343a;
  transform: scale(1);
  transition:
    border-color 0.4s ease-out,
    background 0.4s ease-out,
    color 0.4s ease-out,
    box-shadow 0.4s ease-out,
    transform 0.4s ease-out,
    opacity 0.4s ease-out;
  white-space: nowrap;
}

.pillar-ontology {
  --pillar-width: var(--deck-pillar-ontology-width);
}

.pillar-solving {
  --pillar-width: var(--deck-pillar-solving-width);
}

.pillar-learning {
  --pillar-width: var(--deck-pillar-learning-width);
}

.pillar.active {
  border-color: #5d8392;
  background: #ffffff;
  color: #5d8392;
  transform: none;
  box-shadow: 0 2px 12px rgba(93, 131, 146, 0.22);
}

.pillar.active .pillar-label {
  text-shadow: 0.018em 0 currentColor;
}

.pillar.inactive {
  opacity: 0.78;
  color: #24343a;
}

.pillar-label {
  font-size: var(--deck-pillar-label-size);
  line-height: var(--deck-pillar-label-line-height);
  font-weight: 500;
  white-space: nowrap;
}

.divider {
  align-self: center;
  color: #d1d5db;
  font-size: var(--deck-pillar-divider-size);
  user-select: none;
}

.body {
  flex: 1;
  padding: 1.75rem 3rem 2rem 3rem;
  overflow: hidden;
  display: flex;
}

.pillar-body {
  width: 100%;
  display: flex;
  gap: 1.45rem;
  align-items: center;
}

.card-column {
  position: relative;
  flex: 0 0 35%;
  max-width: 35%;
  display: flex;
  align-items: center;
}

.diagram-column {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}

.resolution-card {
  position: relative;
  width: 100%;
  align-self: center;
  padding: 1.35rem 1.35rem 1.2rem 1.35rem;
  border: 1.5px solid rgba(93, 131, 146, 0.32);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.11), rgba(255, 255, 255, 0) 42%),
    #ffffff;
  box-shadow: 0 14px 34px rgba(30, 54, 62, 0.12);
  overflow: hidden;
  animation: card-in 420ms ease-out both;
}

.body-divider {
  flex: 0 0 1px;
  align-self: center;
  height: 10.75rem;
  background: rgba(93, 131, 146, 0.28);
  animation: card-in 420ms ease-out both;
}

.resolution-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 0.42rem;
  background: #5d8392;
}

.card-kicker {
  margin: 0;
  color: #5d8392;
  font-size: var(--deck-card-kicker-size);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: var(--deck-card-kicker-line-height);
}

.decision-list {
  list-style: none;
  margin: 0.95rem 0 0 0;
  padding: 0;
  display: grid;
  gap: 0.58rem;
}

.decision-item {
  display: flex;
  align-items: center;
  gap: 0.62rem;
  color: #24343a;
  font-size: var(--deck-card-list-size);
  font-weight: 500;
  line-height: var(--deck-card-list-line-height);
}

.decision-dot {
  width: 0.46rem;
  height: 0.46rem;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #5d8392;
  box-shadow: 0 0 0 4px rgba(93, 131, 146, 0.13);
}

.decision-with-subtext {
  align-items: flex-start;
}

.decision-with-subtext .decision-dot {
  margin-top: 0.38rem;
}

.decision-copy {
  display: grid;
  gap: 0.18rem;
}

.decision-subtext {
  color: rgba(36, 52, 58, 0.62);
  font-size: var(--deck-card-subtext-size);
  font-weight: 500;
  line-height: var(--deck-card-subtext-line-height);
}

.intent-diagram {
  position: relative;
  width: 100%;
  min-height: 9.5rem;
  display: grid;
  grid-template-columns: max-content minmax(1.6rem, 1fr) max-content minmax(1.6rem, 1fr) max-content;
  grid-template-rows: 1fr;
  align-items: center;
  animation: card-in 420ms ease-out both;
}

.input-stack {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 0.56rem;
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

.resolution-agent-node,
.orchestrator-node,
.learning-agent-node {
  border-color: rgba(111, 148, 63, 0.52);
  background: rgba(111, 148, 63, 0.12);
}

.resolution-agent-node .node-icon,
.orchestrator-node .node-icon,
.learning-agent-node .node-icon {
  color: #6f943f;
}

.resolution-agent-node .node-copy h4,
.orchestrator-node .node-copy h4,
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
  font-size: var(--deck-diagram-node-size);
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

.contract-icon {
  width: 1.22rem;
  height: 1.22rem;
}

.bot-badge,
.check-badge {
  position: absolute;
  right: -0.2rem;
  bottom: -0.16rem;
  width: 0.66rem;
  height: 0.66rem;
  padding: 0.08rem;
  color: #ffffff;
  background: #5d8392;
  border: 1.5px solid #ffffff;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(30, 54, 62, 0.18);
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

.learning-diagram {
  position: relative;
  width: 100%;
  min-height: 10.8rem;
  display: grid;
  grid-template-columns: max-content minmax(1.6rem, 1fr) max-content minmax(1.6rem, 1fr) max-content;
  grid-template-rows: 1fr;
  align-items: center;
  padding-bottom: 1.55rem;
  animation: card-in 420ms ease-out both;
}

.learning-agent-node {
  border-color: rgba(111, 148, 63, 0.52);
  background: rgba(111, 148, 63, 0.12);
}

.loop-badge {
  position: absolute;
  right: -0.2rem;
  bottom: -0.16rem;
  width: 0.66rem;
  height: 0.66rem;
  padding: 0.08rem;
  color: #ffffff;
  background: #6f943f;
  border: 1.5px solid #ffffff;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(30, 54, 62, 0.18);
}

.solving-diagram {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: minmax(5.1rem, auto) 1.1rem minmax(7.4rem, auto);
  gap: 0.72rem;
  min-height: 16.4rem;
  margin-top: -0.35rem;
  animation: card-in 420ms ease-out both;
}

.spectrum-lane {
  position: relative;
  border: 1px solid rgba(93, 131, 146, 0.22);
  border-radius: 0.9rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.08), rgba(255, 255, 255, 0) 46%),
    rgba(255, 255, 255, 0.92);
  box-shadow: 0 12px 30px rgba(30, 54, 62, 0.08);
}

.fast-lane {
  display: grid;
  align-content: center;
  min-height: 5.1rem;
  padding: 0.62rem 0.62rem 0.58rem 0.62rem;
}

.agent-lane {
  display: grid;
  align-content: center;
  min-height: 7.4rem;
  padding: 0.82rem 0.62rem 0.72rem 0.62rem;
}

.lane-label {
  position: absolute;
  top: -0.48rem;
  left: 0.86rem;
  padding: 0.08rem 0.42rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-size: var(--deck-example-label-size);
  font-weight: 800;
  letter-spacing: var(--deck-example-label-letter-spacing);
  line-height: var(--deck-example-label-line-height);
}

.hybrid-label {
  justify-self: center;
  align-self: center;
  position: relative;
  z-index: 2;
  margin: 0.04rem 0 0.18rem 0;
  padding: 0.08rem 0.48rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-size: var(--deck-example-label-size);
  font-weight: 800;
  letter-spacing: var(--deck-example-label-letter-spacing);
  line-height: var(--deck-example-label-line-height);
  box-shadow: 0 5px 14px rgba(30, 54, 62, 0.08);
}

.fast-flow {
  display: grid;
  grid-template-columns: minmax(7rem, max-content) minmax(0.55rem, 0.35fr) minmax(12rem, 1.55fr) minmax(0.55rem, 0.35fr) max-content;
  align-items: center;
  gap: 0.28rem;
}

.spectrum-node {
  min-width: max-content;
  justify-content: center;
}

.solving-diagram .diagram-node {
  gap: 0.28rem;
  padding: 0.25rem 0.42rem;
}

.solving-diagram .node-icon,
.solving-diagram .compound-icon {
  width: 0.98rem;
  height: 0.98rem;
}

.solving-diagram .node-copy h4 {
  font-size: var(--deck-diagram-node-compact-size);
}

.short-arrow {
  position: relative;
  min-width: 0.9rem;
  width: 100%;
  height: 2px;
  background: rgba(93, 131, 146, 0.55);
}

.short-arrow::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -1px;
  width: 0;
  height: 0;
  border-top: 0.24rem solid transparent;
  border-bottom: 0.24rem solid transparent;
  border-left: 0.36rem solid rgba(93, 131, 146, 0.72);
  transform: translateY(-50%);
}

.plan-card {
  min-width: 12rem;
  padding: 0.36rem 0.46rem 0.4rem 0.46rem;
  border: 1.4px dashed rgba(93, 131, 146, 0.44);
  border-radius: 0.72rem;
  background: rgba(93, 131, 146, 0.07);
}

.plan-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  color: #254854;
  font-size: var(--deck-diagram-plan-title-size);
  font-weight: 800;
  line-height: var(--deck-diagram-plan-title-line-height);
  white-space: nowrap;
}

.plan-bolt {
  display: grid;
  place-items: center;
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 999px;
  color: #6f943f;
  background: rgba(111, 148, 63, 0.16);
  border: 1px solid rgba(111, 148, 63, 0.34);
}

.plan-bolt svg {
  width: 0.68rem;
  height: 0.68rem;
}

.plan-steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.18rem;
  margin-top: 0.32rem;
}

.plan-steps span {
  display: flex;
  align-items: center;
  gap: 0.16rem;
  min-height: 1rem;
  padding: 0.12rem 0.2rem;
  border-radius: 0.38rem;
  background: #ffffff;
  border: 1px solid rgba(93, 131, 146, 0.22);
  color: #315764;
  font-size: var(--deck-diagram-plan-step-size);
  font-weight: 700;
  line-height: var(--deck-diagram-plan-step-line-height);
  white-space: nowrap;
}

.plan-steps b {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 0.74rem;
  height: 0.74rem;
  border-radius: 999px;
  background: rgba(93, 131, 146, 0.13);
  color: #5d8392;
  font-size: var(--deck-diagram-plan-index-size);
  line-height: var(--deck-diagram-node-line-height);
}

.search-badge {
  position: absolute;
  right: -0.2rem;
  bottom: -0.16rem;
  width: 0.66rem;
  height: 0.66rem;
  padding: 0.08rem;
  color: #ffffff;
  background: #5d8392;
  border: 1.5px solid #ffffff;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(30, 54, 62, 0.18);
}

.orchestration-grid {
  display: grid;
  grid-template-columns: max-content minmax(0.72rem, 0.45fr) minmax(15rem, 1fr) minmax(0.72rem, 0.45fr) max-content;
  align-items: center;
  gap: 0.28rem 0.34rem;
}

.integration-node {
  grid-column: 1;
}

.orchestration-arrow {
  grid-column: 2;
}

.orchestrator-stack {
  position: relative;
  grid-column: 3;
  display: grid;
  justify-items: center;
  gap: 0.16rem;
  min-width: 15rem;
}

.expert-node {
  background: rgba(93, 131, 146, 0.08);
}

.vertical-connector {
  width: 2px;
  height: 0.62rem;
  background: rgba(93, 131, 146, 0.44);
}

.orchestrator-node {
  position: relative;
  z-index: 2;
  background: rgba(93, 131, 146, 0.11);
  border-color: rgba(93, 131, 146, 0.52);
}

.cluster-connector {
  position: relative;
  width: 12.3rem;
  height: 0.92rem;
  margin-top: 0.06rem;
}

.cluster-connector::before {
  content: "";
  position: absolute;
  top: 0.1rem;
  left: 1.15rem;
  right: 1.15rem;
  height: 1.4px;
  background: rgba(93, 131, 146, 0.42);
}

.cluster-connector::after {
  content: "";
  position: absolute;
  top: -0.22rem;
  left: 50%;
  width: 1.4px;
  height: 0.32rem;
  background: rgba(93, 131, 146, 0.42);
  transform: translateX(-50%);
}

.cluster-connector span {
  position: absolute;
  top: 0.1rem;
  width: 1.4px;
  height: 0.66rem;
  background: rgba(93, 131, 146, 0.42);
}

.cluster-connector span:nth-child(1) {
  left: 1.15rem;
}

.cluster-connector span:nth-child(2) {
  left: 50%;
  transform: translateX(-50%);
}

.cluster-connector span:nth-child(3) {
  right: 1.15rem;
}

.cluster-connector span::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -0.18rem;
  width: 0;
  height: 0;
  border-left: 0.16rem solid transparent;
  border-right: 0.16rem solid transparent;
  border-top: 0.24rem solid rgba(93, 131, 146, 0.58);
  transform: translateX(-50%);
}

.cluster-row {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.34rem;
  align-items: center;
  justify-content: center;
}

.agent-cluster {
  position: relative;
  width: 4.85rem;
  height: 2.02rem;
}

.implementer-cluster {
  width: 5.35rem;
}

.reviewer-cluster {
  width: 4.45rem;
}

.stack-card {
  position: absolute;
  border: 1px solid rgba(93, 131, 146, 0.32);
  border-radius: 0.52rem;
  background: #ffffff;
}

.stack-card.back-two {
  inset: 0.02rem 0.38rem 0.38rem 0.02rem;
  opacity: 0.32;
}

.stack-card.back-one {
  inset: 0.18rem 0.18rem 0.2rem 0.2rem;
  opacity: 0.58;
}

.stack-card.front {
  inset: 0.34rem 0 0 0.38rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.12rem;
  padding: 0.2rem 0.2rem;
  background: rgba(93, 131, 146, 0.08);
  box-shadow: 0 8px 17px rgba(30, 54, 62, 0.08);
}

.stack-card.front span {
  min-width: 0;
  color: #254854;
  font-size: var(--deck-diagram-stack-label-size);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: var(--deck-diagram-node-line-height);
  white-space: nowrap;
}

.stack-card.front .node-icon {
  width: 0.82rem;
  height: 0.82rem;
}

.output-code-arrow {
  grid-column: 4;
  align-self: center;
}

.orchestration-arrow {
  margin-left: 0;
  margin-right: -0.56rem;
  width: calc(100% + 0.56rem);
}

.output-code-arrow {
  margin-left: -0.56rem;
  margin-right: 0;
  width: calc(100% + 0.56rem);
}

.code-change-node {
  grid-column: 5;
  justify-self: end;
}

.code-change-node .node-copy h4 {
  font-size: var(--deck-diagram-node-output-size);
}


@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(0.45rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
