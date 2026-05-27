<template>
  <section class="pillar-diagram learning-diagram" aria-label="Continual learning diagram">
    <div class="input-stack">
      <article class="diagram-node input-node">
        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M4 26h24v2H2V4h2Zm5-4H7v-7h2Zm5 0h-2V9h2Zm5 0h-2v-5h2Zm5 0h-2V6h2Zm-2.8-6.2l-3.5-3.4l-4.5 4.5l-3.9-3.9l1.4-1.4l2.5 2.5l4.5-4.5l4.9 4.8Z"/>
        </svg>
        <div class="node-copy"><h4>Metrics</h4></div>
      </article>

      <article class="diagram-node input-node">
        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M16 18a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5M4 30H2v-4a7.01 7.01 0 0 1 7-7h6v2H9a5.006 5.006 0 0 0-5 5Zm18.3-1.3l-4.5-4.5l1.4-1.4l3.1 3.1l6.5-6.5l1.4 1.4z"/>
        </svg>
        <div class="node-copy"><h4>Feedback</h4></div>
      </article>

      <article class="diagram-node input-node">
        <svg class="node-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M12 28a6 6 0 0 1-5.9-5A6 6 0 0 1 7 11.2A7 7 0 0 1 20.4 8A6.5 6.5 0 0 1 26 18.2A5 5 0 0 1 22 27h-2v-2h2a3 3 0 0 0 2.3-4.9l-.8-1l1-.8A4.5 4.5 0 0 0 20 10h-1.3l-.3-1.2A5 5 0 0 0 8.8 12L9 13l-.9.5A4 4 0 0 0 8 20.6l1 .5l-.7 1A4 4 0 0 0 12 26Zm7.7-5.3l-1.4-1.4l2.3-2.3h-7.1a4.5 4.5 0 0 1 0-9H15v2h-1.5a2.5 2.5 0 0 0 0 5h7.1l-2.3-2.3l1.4-1.4l4.7 4.7z"/>
        </svg>
        <div class="node-copy"><h4>Introspection</h4></div>
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
      <div class="node-copy"><h4>Learning Agents</h4></div>
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
      <div class="node-copy"><h4>Improved Outcomes</h4></div>
    </article>
  </section>
</template>
