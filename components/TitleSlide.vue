<script setup lang="ts">
import tressoirLogo from '../figures/Tressoir-Logo.png'
import mitLogo from '../figures/MIT-Logo.png'
import g5Logo from '../figures/G5-Logo-Transparant.png'
</script>

<template>
  <div class="title-slide">
    <img class="tressoir-logo" :src="tressoirLogo" alt="Tressoir" />

    <div class="title-block">
      <h1 class="title">Tressoir</h1>
      <hr class="divider" />
      <p class="subtitle">
        Unifying Online, Offline, and HIL Design and Evolution<br />
        of Multi-Agent Systems via Interpretable Blueprints
      </p>
    </div>

    <p class="authors">
      <span class="presenter">Amadou Latyr Ngom</span>, Ziniu Wu, Jason Mohoney, James Moore, Alex Zhang, Samuel Madden, Tim Kraska
    </p>

    <div class="affiliations">
      <img class="mit-logo" :src="mitLogo" alt="MIT" />
      <img class="g5-logo" :src="g5Logo" alt="G5 Labs" />
    </div>
  </div>
</template>

<style scoped>
.title-slide {
  position: absolute;
  inset: 0;
  background: white;
  color: #1a1a1a;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1.5rem 1rem 1.5rem;
  box-sizing: border-box;
}

.tressoir-logo {
  position: absolute;
  top: 1.5rem;
  right: 1.75rem;
  width: 110px;
  height: auto;
}

.title-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
}

.title {
  font-size: 5.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1;
  margin: 0;
  text-align: center;
  color: #5d8392 !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.divider {
  width: 100%;
  border: none;
  border-top: 2px solid #4F7E5A;
  margin: 1.1rem 0 1.4rem 0;
}

.subtitle {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  margin: 0;
  max-width: 90%;
}

.authors {
  font-size: 1.05rem;
  text-align: center;
  margin: 1.8rem 0 1.4rem 0;
  line-height: 1.4;
  white-space: nowrap;
}

.presenter {
  font-weight: 400;
  text-decoration: underline;
}

.affiliations {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.mit-logo {
  width: 178px;
  height: auto;
}

.g5-logo {
  width: 70px;
  height: auto;
}
</style>
