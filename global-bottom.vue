<script setup>
import { onMounted } from 'vue'

const deckTitle = 'Tressoir CAIS Slides'
const iconVersion = 'tressoir-cais-v2'

function iconHref() {
  const href = new URL('tressoir.svg', document.baseURI || window.location.href)
  href.searchParams.set('v', iconVersion)
  return href.toString()
}

function syncBrowserHead() {
  if (typeof document === 'undefined') return

  document.title = deckTitle

  const href = iconHref()
  const iconLinks = Array.from(document.querySelectorAll('link[rel~="icon"]'))

  if (iconLinks.length === 0) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'icon')
    document.head.appendChild(link)
    iconLinks.push(link)
  }

  for (const link of iconLinks) {
    link.setAttribute('rel', 'icon')
    link.setAttribute('type', 'image/svg+xml')
    link.setAttribute('href', href)
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', deckTitle)
}

// Slidev dev keeps the initial HTML head from process start, so sync it at runtime too.
onMounted(syncBrowserHead)
</script>

<template>
  <div v-if="$nav.total > 1" class="deck-slide-number">{{ $nav.currentPage }} / {{ $nav.total }}</div>
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
