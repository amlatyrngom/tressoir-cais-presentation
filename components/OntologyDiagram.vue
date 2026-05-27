<template>
  <section class="pillar-diagram intent-diagram" aria-label="Ontology resolution diagram">
    <div class="input-stack">
      <article class="diagram-node input-node">
        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M20 23h-8.14a4.2 4.2 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28a4.2 4.2 0 0 0 .43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8ZM8 10a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16-4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M8 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-4h4v4h-4Z"/>
        </svg>
        <div class="node-copy"><h4>Workload Patterns</h4></div>
      </article>

      <article class="diagram-node input-node">
        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M26 30H11a2 2 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2"/>
          <path fill="currentColor" d="M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.006 5.006 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.006 5.006 0 0 1-5 5"/>
        </svg>
        <div class="node-copy"><h4>Research Techniques</h4></div>
      </article>

      <article class="diagram-node input-node">
        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="m25 10l1.593 3l3.407.414l-2.5 2.253L28 19l-3-1.875L22 19l.5-3.333l-2.5-2.253L23.5 13zm-3 20h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7ZM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"/>
        </svg>
        <div class="node-copy"><h4>Domain Expert</h4></div>
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
      <div class="node-copy"><h4>Resolution Agents</h4></div>
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
      <div class="node-copy"><h4>Integration Contract</h4></div>
    </article>
  </section>
</template>
