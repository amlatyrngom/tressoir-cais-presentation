<template>
  <div class="orchestration-slide deck-slide">
    <header class="deck-slide-header orchestration-header">
      <h1 class="deck-title">Agent/LLM Orchestration</h1>
      <p class="goal-subtitle">Design Goal: Expose Sophisticated Coordination as Ordinary Code</p>
    </header>

    <main class="orchestration-body">
      <section class="signature-panel" aria-label="Key SDK signatures">
        <article class="signature-card">
          <h2>Key Signatures</h2>

          <pre class="code-block signature-code"><code><span class="kw">service</span> <span class="svc">agent</span>:  <span class="comment"># advanced agent management</span>
    <span class="comment"># Create with configuration</span>
    <span class="fn">spawn</span>(<span class="param">task</span>, <span class="param">attachments</span>, <span class="param">context</span>, <span class="param">model_spec</span>)

    <span class="comment"># Synchronous and Asynchronous Run/Steering.</span>
    <span class="fn">compact_run</span>(<span class="param">agent_id</span>, <span class="param">injected_ctx</span>, <span class="param">rounds</span>, <span class="param">tokens</span>)
    <span class="fn">steer</span>(<span class="param">agent_id</span>, <span class="param">instructions</span>, <span class="param">attachments</span>, <span class="param">wake</span>)
    <span class="fn">broadcast</span>(<span class="param">agent_id</span>, <span class="param">instruction</span>, <span class="param">attachments</span>)

    <span class="comment"># Introspection</span>
    <span class="fn">analyze_trajectory</span>(<span class="param">agent_id</span>, <span class="param">purpose</span>) <span class="pipe">|</span> <span class="fn">stats</span>(<span class="param">agent_id</span>)

    <span class="comment"># Others Controls</span>
    <span class="fn">pause</span> <span class="pipe">|</span> <span class="fn">resume</span> <span class="pipe">|</span> <span class="fn">terminate</span> <span class="pipe">|</span> <span class="ellipsis">...</span></code></pre>
        </article>
      </section>

      <div class="body-divider" aria-hidden="true"></div>

      <section class="example-column" aria-label="Coordination examples">
        <article class="code-card">
          <p class="card-label">Cost-Aware Graph Executor</p>
          <pre class="code-block example-code"><code>dag = build_task_graph(spec)  <span class="comment"># nodes + dependencies</span>

<span class="kw">def</span> <span class="fn">run_node</span>(n):
    subtask = dag.collect_deps(n) + dag.task(n)
    tier = n.model_spec or <span class="str">"fast"</span>  <span class="comment"># cost knob</span>

    out = <span class="fn">sdk</span>(<span class="str">"agent"</span>, <span class="str">"spawn_and_run"</span>, {
        <span class="str">"task"</span>: subtask,
        <span class="str">"model_spec"</span>: tier,
    })
    dag.mark_done(n, out)

<span class="kw">while</span> <span class="kw">not</span> dag.done():
    parallel_for(run_node, dag.get_ready())</code></pre>
        </article>

        <article class="code-card">
          <p class="card-label">Parallel Sticky Review</p>
          <pre class="code-block example-code"><code><span class="comment"># Start of Task: spawn R parallel reviewers</span>
reviewers = [
    <span class="fn">sdk</span>(<span class="str">"agent"</span>, <span class="str">"spawn"</span>, {
        <span class="str">"task"</span>: review_task,
        <span class="str">"context"</span>: <span class="str">"meta"</span>,
    })
    <span class="kw">for</span> _ <span class="kw">in</span> range(R)
]

<span class="comment"># Milestone 1: ask R parallel reviews</span>
reviews = parallel_map(
    <span class="kw">lambda</span> r: <span class="fn">sdk</span>(<span class="str">"agent"</span>, <span class="str">"compact_run"</span>, {
        <span class="str">"agent_id"</span>: r.id,
        <span class="str">"injected_context"</span>: milestone_ctx,
    }), reviewers,
)

<span class="comment"># Milestone 2: reuse same reviewers ...</span></code></pre>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.orchestration-slide {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(circle at 16% 18%, rgba(93, 131, 146, 0.08), transparent 31%),
    radial-gradient(circle at 84% 78%, rgba(111, 148, 63, 0.1), transparent 34%),
    #ffffff;
}

.orchestration-header {
  padding-bottom: 0.98rem;
  border-bottom: 1px solid rgba(93, 131, 146, 0.18);
}

.goal-subtitle {
  margin: 0.72rem 0 0 0;
  color: rgba(36, 52, 58, 0.85);
  font-size: 16px;
  font-weight: 400 !important;
  font-style: italic;
  line-height: 1.2;
  text-align: center;
  opacity: 0.85;
}

.orchestration-body {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.16fr) 1px minmax(0, 1.08fr);
  gap: 1.18rem;
  align-items: center;
  padding: 1.35rem 3rem 1.55rem 3rem;
  overflow: hidden;
}

.signature-panel {
  display: flex;
  align-items: center;
  min-width: 0;
}

.signature-card,
.code-card {
  position: relative;
  width: 100%;
  border: 1.5px solid rgba(93, 131, 146, 0.28);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(93, 131, 146, 0.1), rgba(255, 255, 255, 0) 44%),
    rgba(255, 255, 255, 0.94);
  box-shadow: 0 14px 34px rgba(30, 54, 62, 0.1);
}

.signature-card {
  padding: 1.22rem 1.15rem 1.1rem 1.26rem;
  overflow: hidden;
}

.signature-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 0.42rem;
  background: #5d8392;
}

.signature-card h2 {
  margin: 0 0 0.88rem 0;
  color: #254854;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.08;
}

.body-divider {
  align-self: center;
  width: 1px;
  height: 12.1rem;
  background: rgba(93, 131, 146, 0.28);
}

.example-column {
  display: grid;
  grid-template-rows: auto auto;
  gap: 0.82rem;
  align-content: center;
  min-width: 0;
}

.code-card {
  padding: 0.78rem 0.72rem 0.58rem 0.72rem;
}

.card-label {
  position: absolute;
  top: -0.52rem;
  left: 0.88rem;
  margin: 0;
  padding: 0.09rem 0.46rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5d8392;
  font-size: 8.7px;
  font-weight: 800;
  letter-spacing: 0.035em;
  box-shadow: 0 5px 14px rgba(30, 54, 62, 0.08);
}

.code-block {
  margin: 0;
  color: #25343a;
  font-family: "Menlo", "Consolas", monospace;
  font-weight: 600;
  white-space: pre;
}

.signature-code {
  font-size: 9.6px;
  line-height: 1.42;
}

.example-code {
  padding-top: 0.16rem;
  font-size: 7.25px;
  line-height: 1.2;
}

.kw {
  color: #5d8392;
  font-weight: 800;
}

.svc {
  color: #49632a;
  font-weight: 800;
}

.fn {
  color: #5d8392;
  font-weight: 900;
}

.param {
  color: #254854;
  font-weight: 650;
}

.pipe,
.ellipsis {
  color: rgba(36, 52, 58, 0.5);
  font-weight: 700;
}

.comment {
  color: rgba(36, 52, 58, 0.48);
  font-style: italic;
  font-weight: 500;
}

.str {
  color: #49632a;
  font-weight: 700;
}
</style>
