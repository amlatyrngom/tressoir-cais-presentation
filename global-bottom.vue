<template>
  <div class="deck-slide-number">{{ $nav.currentPage }} / {{ $nav.total }}</div>
</template>

<style scoped>
.deck-slide-number {
  position: fixed;
  right: var(--deck-slide-number-right);
  bottom: var(--deck-slide-number-bottom);
  z-index: 80;
  color: rgba(36, 52, 58, 0.58);
  font-family: var(--deck-title-font);
  font-size: var(--deck-slide-number-size);
  font-weight: 600;
  line-height: var(--deck-slide-number-line-height);
  pointer-events: none;
}
</style>
