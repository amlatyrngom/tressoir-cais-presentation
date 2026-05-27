<script setup>
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
</script>

<template>
  <div class="sdk-slide deck-slide">
    <header class="deck-slide-header sdk-header">
      <h1 class="deck-title">Quick SDK Overview</h1>

      <section class="call-hero" aria-label="Single SDK function signature">
        <p class="call-subtitle">Single, Composable Function for Programmatic Tool Calling</p>
        <pre class="signature-card"><code><span class="fn">sdk</span><span class="punct">(</span><span class="arg">service_name</span><span class="punct">,</span> <span class="arg">tool_name</span><span class="punct">,</span> <span class="arg">args</span><span class="punct">)</span></code></pre>
      </section>
    </header>

    <main class="sdk-body">
      <aside class="design-panel">
        <section class="design-card">
          <h2>SDK Design</h2>

          <ul class="decision-list">
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Shared <code>sdk(...)</code> signature</span>
                <span class="decision-subtext">Unifies builtins, MCPs, plugins, ...</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Freely composable into complex patterns</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Persistent across steps</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Available in Python and Lua</span>
                <span class="decision-subtext">Flexibility / security tradeoffs. Defaults to Lua.</span>
              </span>
            </li>
            <li class="decision-item">
              <span class="decision-dot"></span>
              <span class="decision-copy">
                <span>Comprehensive builtin services</span>
                <span class="decision-subtext"><code>core</code>, <code>web</code>, <code>embed</code>, <code>editor</code>, <code>webview</code>, <code>llm</code>, <code>agent</code>, <code>self-learning</code></span>
              </span>
            </li>
          </ul>
        </section>
      </aside>

      <div class="body-divider reveal-on-click" :class="{ visible: $clicks >= 1 }" aria-hidden="true"></div>

      <section class="snippet-column reveal-on-click" :class="{ visible: $clicks >= 1 }" aria-label="SDK code examples">
        <h2 class="column-title">SDK Composition Examples</h2>

        <article class="code-step">
          <p class="step-label">Step N: Parallel Search</p>
          <pre class="step-code"><code>searches = <span class="fn">sdk</span>(<span class="str">"core"</span>, <span class="str">"parallel_tool_calls"</span>, {
  calls = {
    {<span class="str">"web"</span>, <span class="str">"search"</span>, { query = <span class="str">"agent-native databases"</span> }},
    {<span class="str">"web"</span>, <span class="str">"search"</span>, { query = <span class="str">"semantic query optimization"</span> }},
    {<span class="str">"mcp::papers"</span>, <span class="str">"search"</span>, { query = <span class="str">"human-in-the-loop agents"</span> }},
  },
})

results = unroll_helper(searches)
print(results)</code></pre>
        </article>

        <article class="code-step second-step">
          <p class="step-label">Step N+1: Select, Download, View</p>
          <pre class="step-code"><code>relevant_idxs = { 2, 5, 8 }

<span class="kw">for</span> i = 1, #relevant_idxs <span class="kw">do</span>
  idx = relevant_idxs[i]
  result = results[idx]

  path = <span class="fn">sdk</span>(<span class="str">"web"</span>, <span class="str">"read"</span>, {
    url = result.url,
    download_path = <span class="str">"/tmp/sdk-result-"</span> .. idx .. <span class="str">".pdf"</span>,
  })

  <span class="fn">sdk</span>(<span class="str">"core"</span>, <span class="str">"multimodal_view"</span>, { path = path })
<span class="kw">end</span></code></pre>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.sdk-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 22%, rgba(93, 131, 146, 0.08), transparent 31%),
    radial-gradient(circle at 86% 82%, rgba(111, 148, 63, 0.1), transparent 34%),
    #ffffff;
}

.sdk-header {
  padding-bottom: 0.58rem;
  border-bottom: 1px solid rgba(93, 131, 146, 0.18);
}

.call-hero {
  display: grid;
  justify-items: center;
  margin-top: 0.68rem;
}

.call-subtitle {
  margin: 0 0 0.52rem 0;
  color: rgba(36, 52, 58, 0.85);
  font-size: var(--deck-subtitle-size);
  font-weight: 400 !important;
  font-style: italic;
  line-height: var(--deck-subtitle-line-height);
  text-align: center;
  opacity: 0.85;
}

.signature-card {
  margin: 0;
  padding: 0.52rem 1rem 0.58rem 1rem;
  border: 1.4px dashed rgba(93, 131, 146, 0.44);
  border-radius: 0.82rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.08), rgba(255, 255, 255, 0) 58%),
    rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 22px rgba(30, 54, 62, 0.1);
  color: #24343a;
  font-family: "Menlo", "Consolas", monospace;
  font-size: var(--deck-code-hero-size);
  font-weight: 800;
  line-height: var(--deck-code-hero-line-height);
  text-align: center;
  white-space: pre;
}

.fn {
  color: #5d8392;
  font-weight: 900;
}

.arg {
  color: inherit;
}

.punct {
  color: rgba(36, 52, 58, 0.66);
}

.sdk-body {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) 1px minmax(0, 1.32fr);
  gap: 1.08rem;
  align-items: center;
  padding: 0.95rem 3rem 0.82rem 3rem;
  overflow: hidden;
}

.design-panel {
  display: flex;
  align-items: center;
  min-width: 0;
}

.design-card {
  position: relative;
  width: 100%;
  padding: 1.15rem 1.25rem 1.05rem 1.25rem;
  border: 1.5px solid rgba(93, 131, 146, 0.32);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.11), rgba(255, 255, 255, 0) 42%),
    #ffffff;
  box-shadow: 0 14px 34px rgba(30, 54, 62, 0.12);
  overflow: hidden;
}

.design-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 0.42rem;
  background: #5d8392;
}

.design-card h2 {
  margin: 0;
  color: #254854;
  font-size: var(--deck-card-heading-size);
  font-weight: 800;
  line-height: var(--deck-card-heading-line-height);
}

.decision-list {
  list-style: none;
  margin: 1.02rem 0 0 0;
  padding: 0;
  display: grid;
  gap: 0.66rem;
}

.decision-item {
  display: flex;
  align-items: flex-start;
  gap: 0.58rem;
  color: #24343a;
  font-size: var(--deck-card-list-compact-size);
  font-weight: 500;
  line-height: var(--deck-card-list-compact-line-height);
}

.decision-dot {
  width: 0.44rem;
  height: 0.44rem;
  margin-top: 0.36rem;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #5d8392;
  box-shadow: 0 0 0 4px rgba(93, 131, 146, 0.13);
}

.decision-copy {
  display: grid;
  gap: 0.18rem;
}

.decision-copy code {
  color: #254854;
  font-family: "Menlo", "Consolas", monospace;
  font-size: var(--deck-inline-code-scale);
  font-weight: 800;
}

.decision-subtext {
  color: rgba(36, 52, 58, 0.62);
  font-size: var(--deck-card-subtext-compact-size);
  font-weight: 500;
  line-height: var(--deck-card-subtext-compact-line-height);
}

.body-divider {
  align-self: center;
  width: 1px;
  height: 10.75rem;
  background: rgba(93, 131, 146, 0.28);
}

.snippet-column {
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 0.46rem;
  align-content: center;
  min-width: 0;
}

.reveal-on-click {
  opacity: 0;
  transform: translateY(0.22rem);
  transition: opacity 260ms ease-out, transform 260ms ease-out;
  pointer-events: none;
}

.reveal-on-click.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.body-divider.reveal-on-click {
  transform: none;
}

.column-title {
  margin: 0 0 -0.08rem 0;
  color: rgba(36, 52, 58, 0.85);
  font-size: var(--deck-example-column-title-size) !important;
  font-style: italic;
  font-weight: var(--deck-example-column-title-weight) !important;
  line-height: var(--deck-example-column-title-line-height);
  text-align: center;
}

.code-step {
  position: relative;
  min-width: 0;
  padding: 0.62rem 0.68rem 0.48rem 0.68rem;
  border: 1px solid rgba(93, 131, 146, 0.22);
  border-radius: 0.9rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.08), rgba(255, 255, 255, 0) 46%),
    rgba(255, 255, 255, 0.9);
  box-shadow: 0 12px 30px rgba(30, 54, 62, 0.08);
}

.step-label {
  position: absolute;
  top: -0.5rem;
  left: 0.86rem;
  margin: 0;
  padding: 0.08rem 0.42rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-size: var(--deck-example-label-size);
  font-weight: 800;
  letter-spacing: var(--deck-example-label-letter-spacing);
  line-height: var(--deck-example-label-line-height);
  box-shadow: 0 5px 14px rgba(30, 54, 62, 0.08);
}

.step-code {
  margin: 0;
  padding: 0.22rem 0 0 0;
  color: #25343a;
  font-family: "Menlo", "Consolas", monospace;
  font-size: var(--deck-code-body-size);
  font-weight: 600;
  line-height: var(--deck-code-body-line-height);
  white-space: pre;
}

.kw {
  color: #5d8392;
  font-weight: 800;
}

.str {
  color: #49632a;
}
</style>
