<script setup>
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
</script>

<template>
  <div class="pillars-slide deck-slide">
    <header class="header deck-slide-header">
      <h1 class="deck-title">Agent-Native Software Is Still A Dream</h1>
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
            <span class="pillar-label">Intent / Ontology Resolution</span>
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
            <p class="card-kicker">Intent / Ontology Resolution</p>
            <ul class="decision-list">
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Disambiguated intent</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Invariants + policies</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Cost / quality / latency budgets</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Provenance and blast radius</span>
              </li>
              <li class="decision-item">
                <span class="decision-dot"></span>
                <span>Necessary HIL checkpoints</span>
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
                  <span class="decision-subtext">Scaffolds, Tools, Skills, ...</span>
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
                  <span>Accept Any Learning Signals</span>
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
          <section v-if="$clicks === 1" class="intent-diagram" aria-label="Intent ontology resolution diagram">
            <div class="input-stack">
              <article class="diagram-node input-node">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M20 23h-8.14a4.2 4.2 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28a4.2 4.2 0 0 0 .43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8ZM8 10a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16-4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M8 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-4h4v4h-4Z"/>
                </svg>
                <div class="node-copy">
                  <h4>Workload Patterns</h4>
                </div>
              </article>

              <article class="diagram-node input-node">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M26 30H11a2 2 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2"/>
                  <path fill="currentColor" d="M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.006 5.006 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.006 5.006 0 0 1-5 5"/>
                </svg>
                <div class="node-copy">
                  <h4>Research Techniques</h4>
                </div>
              </article>

              <article class="diagram-node input-node">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="m25 10l1.593 3l3.407.414l-2.5 2.253L28 19l-3-1.875L22 19l.5-3.333l-2.5-2.253L23.5 13zm-3 20h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7ZM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"/>
                </svg>
                <div class="node-copy">
                  <h4>Domain Expert</h4>
                </div>
              </article>
            </div>

            <div class="flow-arrow input-arrow" aria-hidden="true"></div>

            <article class="diagram-node core-node resolution-agent-node">
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
              <div class="node-copy">
                <h4>Resolution Agents</h4>
              </div>
            </article>

            <div class="flow-arrow output-arrow" aria-hidden="true"></div>

            <article class="diagram-node output-node">
              <div class="compound-icon">
                <svg class="node-icon contract-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M26 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11.17L28 10.83V28a2 2 0 0 1-2 2M8 4v24h18V12h-8V4Zm12 1.41V10h4.59ZM11 16h12v2H11Zm0 5h12v2H11Zm0-10h5v2h-5Z"/>
                </svg>
                <svg class="check-badge" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/>
                  <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/>
                </svg>
              </div>
              <div class="node-copy">
                <h4>Integration Contract</h4>
              </div>
            </article>

          </section>
          <section v-if="$clicks === 2" class="solving-diagram" aria-label="Constrained adaptive solving spectrum">
            <article class="spectrum-lane fast-lane">
              <div class="lane-label">Fast Path: Minimal Overhead, Strong Guarantees</div>
              <div class="fast-flow">
                <article class="diagram-node spectrum-node query-node">
                  <div class="compound-icon">
                    <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="M16 2C9.4 2 4 4.7 4 8v16c0 3.3 5.4 6 12 6s12-2.7 12-6V8c0-3.3-5.4-6-12-6m0 2c5.9 0 10 2.1 10 4s-4.1 4-10 4S6 9.9 6 8s4.1-4 10-4M6 11.2C8.1 12.9 11.8 14 16 14s7.9-1.1 10-2.8V16c0 1.9-4.1 4-10 4S6 17.9 6 16Zm0 8C8.1 20.9 11.8 22 16 22s7.9-1.1 10-2.8V24c0 1.9-4.1 4-10 4S6 25.9 6 24Z"/>
                    </svg>
                    <svg class="search-badge" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"/>
                    </svg>
                  </div>
                  <div class="node-copy">
                    <h4>Repeated Semantic Query</h4>
                  </div>
                </article>

                <div class="short-arrow" aria-hidden="true"></div>

                <article class="plan-card">
                  <div class="plan-title">
                    <span class="plan-bolt" aria-hidden="true">
                      <svg viewBox="0 0 32 32">
                        <path fill="currentColor" d="M18 2L7 18h8l-1 12l11-17h-8z"/>
                      </svg>
                    </span>
                    <span>Pre-optimized Plan</span>
                  </div>
                  <div class="plan-steps">
                    <span><b>1</b>Lake Scan</span>
                    <span><b>2</b>Static Pre-filter</span>
                    <span><b>3</b>LLM Transform</span>
                    <span><b>4</b>Aggregation</span>
                  </div>
                </article>

                <div class="short-arrow" aria-hidden="true"></div>

                <article class="diagram-node spectrum-node answer-node">
                  <div class="compound-icon">
                    <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="M26 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11.17L28 10.83V28a2 2 0 0 1-2 2M8 4v24h18V12h-8V4Zm12 1.41V10h4.59ZM11 16h12v2H11Zm0 5h12v2H11Zm0-10h5v2h-5Z"/>
                    </svg>
                    <svg class="check-badge" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/>
                      <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/>
                    </svg>
                  </div>
                  <div class="node-copy">
                    <h4>Fast Answer</h4>
                  </div>
                </article>
              </div>
            </article>

            <div class="hybrid-label">... Hybrid Approaches ...</div>

            <article class="spectrum-lane agent-lane">
              <div class="lane-label">Orchestration Path: Flexible, Complex, HIL</div>
              <div class="orchestration-grid">
                <article class="diagram-node spectrum-node integration-node">
                  <div class="compound-icon">
                    <svg class="node-icon contract-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="M26 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11.17L28 10.83V28a2 2 0 0 1-2 2M8 4v24h18V12h-8V4Zm12 1.41V10h4.59ZM11 16h12v2H11Zm0 5h12v2H11Zm0-10h5v2h-5Z"/>
                    </svg>
                    <svg class="check-badge" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/>
                      <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/>
                    </svg>
                  </div>
                  <div class="node-copy">
                    <h4>Complex Integration</h4>
                  </div>
                </article>

                <div class="short-arrow orchestration-arrow" aria-hidden="true"></div>

                <div class="orchestrator-stack">
                  <article class="diagram-node expert-node">
                    <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <path fill="currentColor" d="m25 10l1.593 3l3.407.414l-2.5 2.253L28 19l-3-1.875L22 19l.5-3.333l-2.5-2.253L23.5 13zm-3 20h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7ZM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"/>
                    </svg>
                    <div class="node-copy">
                      <h4>Domain Expert</h4>
                    </div>
                  </article>
                  <div class="vertical-connector" aria-hidden="true"></div>
                  <article class="diagram-node orchestrator-node">
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
                    <div class="node-copy">
                      <h4>Meta Agent</h4>
                    </div>
                  </article>
                  <div class="cluster-connector" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="cluster-row">
                    <article class="agent-cluster researcher-cluster">
                      <span class="stack-card back-two"></span>
                      <span class="stack-card back-one"></span>
                      <div class="stack-card front">
                        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                          <path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"/>
                        </svg>
                        <span>Researchers</span>
                      </div>
                    </article>
                    <article class="agent-cluster implementer-cluster">
                      <span class="stack-card back-two"></span>
                      <span class="stack-card back-one"></span>
                      <div class="stack-card front">
                        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                          <path fill="currentColor" d="m12.6 23.4l-7.1-7.1l7.1-7.1L14 10.6l-5.7 5.7L14 22Zm6.8 0L18 22l5.7-5.7L18 10.6l1.4-1.4l7.1 7.1z"/>
                          <path fill="currentColor" d="m15.1 25.7l-1.9-.6l3.7-18.8l1.9.6z"/>
                        </svg>
                        <span>Implementers</span>
                      </div>
                    </article>
                    <article class="agent-cluster reviewer-cluster">
                      <span class="stack-card back-two"></span>
                      <span class="stack-card back-one"></span>
                      <div class="stack-card front">
                        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                          <path fill="currentColor" d="M16 30L8.6 26.1A11 11 0 0 1 3 16.4V5l13-3l13 3v11.4a11 11 0 0 1-5.6 9.7Zm0-25.95L5 6.59v9.81a9 9 0 0 0 4.58 7.94L16 27.72l6.42-3.38A9 9 0 0 0 27 16.4V6.59Z"/>
                          <path fill="currentColor" d="m14 20.6l-4.2-4.2l1.4-1.4l2.8 2.8l6.8-6.8l1.4 1.4z"/>
                        </svg>
                        <span>Reviewers</span>
                      </div>
                    </article>
                  </div>
                </div>

                <div class="short-arrow output-code-arrow" aria-hidden="true"></div>

                <article class="diagram-node spectrum-node code-change-node">
                  <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                    <path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13.2L28 10.8V28a2 2 0 0 1-2 2M6 4v24h20V12h-8V4Zm14 1.4V10h4.6ZM9 17h6v2H9Zm0 4h14v2H9Zm8-4h6v2h-6Z"/>
                  </svg>
                  <div class="node-copy">
                    <h4>Deep Code Changes</h4>
                  </div>
                </article>
              </div>
            </article>
          </section>
          <section v-if="$clicks === 3" class="learning-diagram" aria-label="Continual learning diagram">
            <div class="input-stack">
              <article class="diagram-node input-node">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M4 26h24v2H2V4h2Zm5-4H7v-7h2Zm5 0h-2V9h2Zm5 0h-2v-5h2Zm5 0h-2V6h2Zm-2.8-6.2l-3.5-3.4l-4.5 4.5l-3.9-3.9l1.4-1.4l2.5 2.5l4.5-4.5l4.9 4.8Z"/>
                </svg>
                <div class="node-copy">
                  <h4>Metrics</h4>
                </div>
              </article>

              <article class="diagram-node input-node">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M16 18a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5M4 30H2v-4a7.01 7.01 0 0 1 7-7h6v2H9a5.006 5.006 0 0 0-5 5Zm18.3-1.3l-4.5-4.5l1.4-1.4l3.1 3.1l6.5-6.5l1.4 1.4z"/>
                </svg>
                <div class="node-copy">
                  <h4>Feedback</h4>
                </div>
              </article>

              <article class="diagram-node input-node">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M12 28a6 6 0 0 1-5.9-5A6 6 0 0 1 7 11.2A7 7 0 0 1 20.4 8A6.5 6.5 0 0 1 26 18.2A5 5 0 0 1 22 27h-2v-2h2a3 3 0 0 0 2.3-4.9l-.8-1l1-.8A4.5 4.5 0 0 0 20 10h-1.3l-.3-1.2A5 5 0 0 0 8.8 12L9 13l-.9.5A4 4 0 0 0 8 20.6l1 .5l-.7 1A4 4 0 0 0 12 26Zm7.7-5.3l-1.4-1.4l2.3-2.3h-7.1a4.5 4.5 0 0 1 0-9H15v2h-1.5a2.5 2.5 0 0 0 0 5h7.1l-2.3-2.3l1.4-1.4l4.7 4.7z"/>
                </svg>
                <div class="node-copy">
                  <h4>Introspection</h4>
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
                <h4>Learning Agents</h4>
              </div>
            </article>

            <div class="flow-arrow output-arrow" aria-hidden="true"></div>

            <article class="diagram-node output-node">
              <div class="compound-icon">
                <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M28 6v16h-2V9.4L16.7 18.7a1 1 0 0 1-1.4 0L11 14.4l-7.3 7.3l-1.4-1.4l8-8a1 1 0 0 1 1.4 0l4.3 4.3L24.6 8H12V6Z"/>
                  <path fill="currentColor" d="M25 28H7a3 3 0 0 1-3-3v-2h2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3"/>
                </svg>
                <svg class="check-badge" viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/>
                  <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/>
                </svg>
              </div>
              <div class="node-copy">
                <h4>Improved Outcomes</h4>
              </div>
            </article>

          </section>

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
  font-size: 16px;
  font-weight: 400 !important;
  font-style: italic;
  margin: 0;
  line-height: 1.2;
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
  gap: 0.45rem;
  padding: 0.6rem 1.1rem;
  border: 1.5px solid #d1d5db;
  border-radius: 0.55rem;
  background: #f9fafb;
  color: #9ca3af;
  transform: scale(1);
  transition:
    border-color 0.4s ease-out,
    background 0.4s ease-out,
    color 0.4s ease-out,
    box-shadow 0.4s ease-out,
    transform 0.4s ease-out;
  white-space: nowrap;
}

.pillar.active {
  border-color: #5d8392;
  background: #ffffff;
  color: #5d8392;
  transform: scale(1.04);
  box-shadow: 0 2px 12px rgba(93, 131, 146, 0.22);
}

.pillar.inactive {
  opacity: 0.42;
  filter: grayscale(1);
}

.pillar-label {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  white-space: nowrap;
}

.divider {
  align-self: center;
  color: #d1d5db;
  font-size: 1.15rem;
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
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.2;
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
  font-size: 14px;
  font-weight: 500;
  line-height: 1.22;
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

.decision-copy {
  display: grid;
  gap: 0.18rem;
}

.decision-subtext {
  color: rgba(36, 52, 58, 0.62);
  font-size: 11px;
  font-weight: 500;
  line-height: 1.15;
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
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
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
  grid-template-rows: minmax(5.1rem, auto) auto minmax(7.4rem, auto);
  gap: 0.48rem;
  min-height: 16rem;
  margin-top: -0.5rem;
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
  font-size: 8.7px;
  font-weight: 800;
  letter-spacing: 0.035em;
}

.hybrid-label {
  justify-self: center;
  padding: 0.08rem 0.48rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-size: 8.7px;
  font-weight: 800;
  letter-spacing: 0.035em;
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
  font-size: 9.4px;
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
  font-size: 9.7px;
  font-weight: 800;
  line-height: 1.05;
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
  font-size: 7.6px;
  font-weight: 700;
  line-height: 1.05;
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
  font-size: 6.7px;
  line-height: 1;
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
  font-size: 7.65px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
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
  font-size: 10px;
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
