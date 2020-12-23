<script>
  import Icon from './Icon.svelte';
</script>

<section class="skills">
  <article class="skill-group" title="HTML">
    <div class="icon" style="color: red">
      <Icon name="html" />
    </div>
    <span class="label" style="color: red">HTML</span>
  </article>

  <article class="skill-group" title="CSS">
    <div class="icon" style="color: var(--blue)">
      <Icon name="css" />
    </div>
    <span class="label" style="color: var(--blue)">CSS</span>
  </article>

  <article class="skill-group" title="JavaScript">
    <div class="icon" style="color: var(--accent)">
      <Icon name="js" />
    </div>
    <span class="label" style="color: var(--accent)">JavaScript</span>
  </article>

  <article class="skill-group" title="Svelte">
    <div class="icon" style="color: #FF3E00">
      <Icon name="svelte" />
    </div>
    <span class="label" style="color: #FF3E00">Svelte</span>
  </article>

  <article class="skill-group" title="DataViz">
    <div class="icon" style="color: var(--accent)">
      <Icon name="dataviz" />
    </div>
    <span class="label" style="color: var(--accent)">DataViz</span>
  </article>
</section>

<style>
  .icon {
    font-size: 3rem;
  }
  .label {
    font-family: var(--sans);
  }
  .skill-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skills {
    display: flex;
    justify-content: space-evenly;
    margin: 5rem 0;
  }
</style>
