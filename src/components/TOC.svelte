<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  export let tocList;
</script>

<section class="table-of-contents">
  <h4 class="toc-heading">Table of Contents</h4>
  <ul class="toc-list">
    {#each tocList as tocItem}
      <li
        class="toc-item"
        style="padding-left: {tocItem.level > 2 ? (tocItem.level / 2) * 0.5 : 0}rem">
        <a href="{$page.path}#{tocItem.id}">{tocItem.title}</a>
      </li>
    {/each}
    <li class="toc-item top-link">
      <a href="{$page.path}#top">Back to Top</a>
    </li>
  </ul>
</section>

<style>
  .table-of-contents {
    /* padding: 2rem 0; */
    margin: 0 auto;
    position: -webkit-sticky;
    position: sticky;
    top: var(--main-padding);
  }
  .toc-heading {
    font-size: 1.875rem;
    font-weight: 400;
  }
  .toc-list {
    padding: 1rem 2rem 0 0;
    margin: 0;
  }
  .toc-item {
    list-style-type: none;
    margin: 0;
    padding: 0.25rem 0 0 0;
    font-size: 1.25rem;
    font-family: var(--sans);
    font-weight: 400;
  }

  .top-link {
    margin-top: 1rem;
  }
  @media (min-width: 1024px) {
    .table-of-contents {
      position: -webkit-sticky;
      position: sticky;
      top: 20px;
    }
  }
</style>
