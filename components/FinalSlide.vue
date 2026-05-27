<template>
  <div class="final-slide deck-slide">
    <header class="deck-slide-header final-header">
      <h1 class="deck-title">Conclusion</h1>
    </header>

    <main class="final-body">
      <section class="conclusion-block" aria-label="Conclusion bullets">
        <ul class="conclusion-list">
          <li>
            A unified framework for agent-native, complex software development.
          </li>
          <li>
            Powerful SDK + representation in the form of the IB.
          </li>
          <li>
            Already bootstraps itself. Other complex systems under development.
          </li>
        </ul>

        <p class="thanks">Thank you for listening.</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.final-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
}

.final-header {
  padding-bottom: 0.98rem;
}

.final-body {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 1.2rem 3rem 2.2rem 3rem;
}

.conclusion-block {
  width: 100%;
  max-width: 43rem;
}

.conclusion-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.conclusion-list li {
  position: relative;
  padding-left: 1.25rem;
  color: #24343a;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.32;
}

.conclusion-list li::before {
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

.thanks {
  margin: 2.1rem 0 0 0;
  color: #5d8392;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.1;
}
</style>
