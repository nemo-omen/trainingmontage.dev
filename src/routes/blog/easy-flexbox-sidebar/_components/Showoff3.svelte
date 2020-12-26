<section class="outer">
  <section class="inner">
    <article class="showoff">
      <header class="demo-header">
        <h4 class="demo-label">Header</h4>
      </header>
      <section class="main-content">
        <div class="demo-content">
          <h4 class="demo-label">Content</h4>
        </div>
        <aside class="demo-sidebar">
          <h4 class="demo-label">Sidebar</h4>
        </aside>
      </section>
      <footer class="demo-footer">
        <h4 class="demo-label">Footer</h4>
      </footer>
    </article>
  </section>
</section>

<style>
  .outer {
    margin-top: var(--spacer);
    position: relative;
    background-color: var(--dark-gray);
  }
  .outer:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc(calc(9 / 16) * 100%);
  }
  .outer > .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
  }
  .showoff {
    padding: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    display: flex;
    height: 100%;
  }
  .demo-sidebar {
    background-color: var(--accent-dark);
    padding: 0.5rem;
    width: 30%;
    min-width: 30%;
    order: 1;
  }
  .demo-content {
    background-color: var(--accent);
    padding: 0.5rem;
    width: 70%;
    max-width: 70%;
    order: 2;
  }
  .demo-header,
  .demo-footer {
    background-color: var(--blue);
    padding: 0.5rem;
  }
  .demo-label {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
</style>
