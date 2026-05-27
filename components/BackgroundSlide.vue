<template>
  <div class="background-slide deck-slide">
    <header class="deck-slide-header background-header">
      <h1 class="deck-title">Background — The Agent Revolution</h1>
    </header>

    <main class="background-body">
      <section class="background-block" aria-label="Background bullets">
        <ul class="background-list">
          <li>Rapid model and agent capability gains.</li>
          <li>Complex work largely feasible from prompts &amp; design files.</li>
          <li>Humans involvement at planning and review, or at genuinely hard blockers.</li>
          <li>A shift in how software gets built.</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
.background-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
}

.background-header {
  padding-bottom: 0.98rem;
}

.background-body {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 1.2rem 3rem 2.2rem 3rem;
}

.background-block {
  width: 100%;
  max-width: 46rem;
}

.background-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.background-list li {
  position: relative;
  padding-left: 1.25rem;
  color: #24343a;
  font-size: var(--deck-simple-list-size);
  font-weight: 500;
  line-height: var(--deck-simple-list-line-height);
}

.background-list li::before {
  content: "";
  position: absolute;
  top: 0.58em;
  left: 0;
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 999px;
  background: #5d8392;
  box-shadow: 0 0 0 4px rgba(93, 131, 146, 0.12);
}
</style>
