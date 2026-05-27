<template>
  <section class="pillar-diagram solving-diagram" aria-label="Constrained adaptive solving spectrum">
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
          <div class="node-copy"><h4>Repeated NL Query</h4></div>
        </article>

        <div class="short-arrow" aria-hidden="true"></div>

        <article class="plan-card">
          <div class="plan-title">
            <span class="plan-bolt" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path fill="currentColor" d="M18 2L7 18h8l-1 12l11-17h-8z"/></svg>
            </span>
            <span>Pre-optimized Plan</span>
          </div>
          <div class="plan-steps">
            <span><b>1</b>Lake Scan</span>
            <span><b>2</b>Static Pre-filter</span>
            <span><b>3</b>Cheap LM Map</span>
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
          <div class="node-copy"><h4>Fast Answer</h4></div>
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
          <div class="node-copy"><h4>Complex Integration</h4></div>
        </article>

        <div class="short-arrow orchestration-arrow" aria-hidden="true"></div>

        <div class="orchestrator-stack">
          <article class="diagram-node expert-node">
            <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
              <path fill="currentColor" d="m25 10l1.593 3l3.407.414l-2.5 2.253L28 19l-3-1.875L22 19l.5-3.333l-2.5-2.253L23.5 13zm-3 20h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7ZM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"/>
            </svg>
            <div class="node-copy"><h4>Domain Expert</h4></div>
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
            <div class="node-copy"><h4>Meta Agents</h4></div>
          </article>
          <div class="cluster-connector" aria-hidden="true">
            <span></span><span></span><span></span>
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
          <div class="node-copy"><h4>Deep Code Changes</h4></div>
        </article>
      </div>
    </article>
  </section>
</template>
