<script setup>
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
</script>

<template>
  <div class="unified-slide deck-slide">
    <header class="deck-slide-header">
      <h1 class="deck-title">Tressoir - A Unified SDK And Representation</h1>
    </header>

    <main class="unified-body">
      <section class="bridge-stage" aria-label="Tressoir representation and SDK">
        <article
          class="bridge-card blueprint-card"
          :class="{ active: $clicks === 1 || $clicks >= 3 }"
        >
          <div class="card-topline">
            <div class="card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path fill="currentColor" d="M10 7h18l8 8v26H10Zm17 2.8V16h6.2ZM13 10v28h20V18h-8V10Z"/>
                <path fill="currentColor" d="M17 22h12v2H17Zm0 5h10v2H17Zm0 5h13v2H17Z"/>
                <circle cx="10" cy="11" r="2.2" fill="currentColor"/>
                <circle cx="39" cy="22" r="2.2" fill="currentColor"/>
                <circle cx="9" cy="35" r="2.2" fill="currentColor"/>
                <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 12.2l7 5.2M34.5 21.7l-5.8 3.2M11.3 33.4l6.8-3.4"/>
              </svg>
            </div>
            <div>
              <p class="eyebrow">Representation</p>
              <h2>Interpretable Blueprint</h2>
            </div>
          </div>

          <ul class="decision-list">
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>System Ontology</span>
                <span class="decision-subtext">Architecture, relationships, invariants, lessons, ...</span>
                <span class="decision-subtext">More in our G5 system.</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Materialized Components</span>
                <span class="decision-subtext">Scaffolds, skills, ...</span>
                <span class="decision-subtext">Offline optimizable.</span>
              </span>
            </li>
          </ul>

          <p class="card-footer">Human / agent editable for improvement</p>
        </article>

        <article
          class="bridge-card sdk-card"
          :class="{ active: $clicks === 2 || $clicks >= 3 }"
        >
          <div class="card-topline">
            <div class="card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path fill="currentColor" d="M7 10h34v25H7Zm3 4v18h28V14Z"/>
                <path fill="currentColor" d="m16.2 20.1l-3.4 3.4l3.4 3.4l-1.7 1.7l-5.1-5.1l5.1-5.1Zm15.6 0l3.4 3.4l-3.4 3.4l1.7 1.7l5.1-5.1l-5.1-5.1Zm-4.5-3.3l2.2.8l-5.1 13.6l-2.2-.8Z"/>
                <circle cx="13" cy="39" r="2.2" fill="currentColor"/>
                <circle cx="24" cy="39" r="2.2" fill="currentColor"/>
                <circle cx="35" cy="39" r="2.2" fill="currentColor"/>
                <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M13 35v4M24 35v4M35 35v4"/>
              </svg>
            </div>
            <div>
              <p class="eyebrow">Execution Surface</p>
              <h2>Composable SDK</h2>
            </div>
          </div>

          <ul class="decision-list">
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Free-form, Advanced Orchestration</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Proven Component Optimization and Reuse</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Introspection, Metrics</span>
              </span>
            </li>
          </ul>

          <p class="card-footer">Same SDK for humans and meta agent interpreters</p>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.unified-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 24%, rgba(93, 131, 146, 0.08), transparent 32%),
    radial-gradient(circle at 84% 80%, rgba(111, 148, 63, 0.1), transparent 34%),
    #ffffff;
}

.unified-body {
  flex: 1;
  display: flex;
  padding: 1.65rem 3rem 2rem 3rem;
  overflow: hidden;
}

.bridge-stage {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 1.45rem;
}

.bridge-card {
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 17.4rem;
  padding: 1.35rem 1.35rem 1.2rem 1.35rem;
  border: 1.5px solid rgba(93, 131, 146, 0.32);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.11), rgba(255, 255, 255, 0) 42%),
    #ffffff;
  box-shadow: 0 14px 34px rgba(30, 54, 62, 0.12);
  overflow: hidden;
  transition:
    border-color 300ms ease,
    box-shadow 300ms ease,
    transform 300ms ease,
    background 300ms ease;
}

.bridge-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 0.42rem;
  background: #5d8392;
  transition: background 300ms ease;
}

.bridge-card.active {
  transform: translateY(-0.18rem);
  border-color: rgba(111, 148, 63, 0.54);
  background:
    linear-gradient(135deg, rgba(111, 148, 63, 0.14), rgba(255, 255, 255, 0) 42%),
    #ffffff;
  box-shadow: 0 18px 44px rgba(57, 80, 34, 0.16);
}

.bridge-card.active::before {
  background: #6f943f;
}

.card-topline {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.card-icon {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 3.25rem;
  height: 3.25rem;
  border: 1.3px dashed rgba(93, 131, 146, 0.44);
  border-radius: 0.9rem;
  color: #5d8392;
  background: rgba(93, 131, 146, 0.08);
  transition:
    color 300ms ease,
    border-color 300ms ease,
    background 300ms ease,
    transform 300ms ease;
}

.card-icon svg {
  width: 2.15rem;
  height: 2.15rem;
}

.bridge-card.active .card-icon {
  color: #6f943f;
  border-color: rgba(111, 148, 63, 0.5);
  background: rgba(111, 148, 63, 0.13);
  transform: scale(1.03);
}

.eyebrow {
  margin: 0 0 0.2rem 0;
  color: #5d8392;
  font-size: var(--deck-card-eyebrow-size);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: var(--deck-card-eyebrow-line-height);
  text-transform: uppercase;
}

.bridge-card h2 {
  margin: 0;
  color: #254854;
  font-size: var(--deck-unified-card-heading-size);
  font-weight: 800;
  line-height: var(--deck-unified-card-heading-line-height);
}

.bridge-card.active h2 {
  color: #49632a;
}

.decision-list {
  list-style: none;
  margin: 1.18rem 0 0 0;
  padding: 0;
  display: grid;
  gap: 0.82rem;
}

.decision-item {
  display: flex;
  align-items: flex-start;
  gap: 0.62rem;
  color: #24343a;
  font-size: var(--deck-card-list-size);
  font-weight: 500;
  line-height: var(--deck-card-list-line-height);
}

.decision-dot {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.38rem;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #5d8392;
  box-shadow: 0 0 0 4px rgba(93, 131, 146, 0.13);
  transition:
    background 300ms ease,
    box-shadow 300ms ease;
}

.bridge-card.active .decision-dot {
  background: #6f943f;
  box-shadow: 0 0 0 4px rgba(111, 148, 63, 0.14);
}

.decision-copy {
  display: grid;
  gap: 0.2rem;
}

.decision-subtext {
  color: rgba(36, 52, 58, 0.62);
  font-size: var(--deck-card-subtext-size);
  font-weight: 500;
  line-height: var(--deck-card-subtext-line-height);
}

.card-footer {
  margin: auto 0 0 0;
  padding-top: 0.78rem;
  border-top: 1px solid rgba(93, 131, 146, 0.18);
  color: #5d8392;
  font-size: var(--deck-card-footer-size);
  font-weight: 700;
  line-height: var(--deck-card-footer-line-height);
}

.bridge-card.active .card-footer {
  color: #49632a;
}
</style>
