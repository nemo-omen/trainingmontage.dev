<slot name="script" />

<section class="showoff">
  <slot name="markup" />
</section>

<style>
  .showoff {
    margin-top: clamp(1rem, 2vw, 1.5rem);
    border: 1px dashed var(--blue);
    padding: 1rem;
    text-align: center;
  }
  :global(.showoff *) {
    margin: 0;
    padding: 0;
    line-height: 1;
    margin: 0 auto;
  }
  :global(.showoff > * > * + *) {
    margin-top: 1rem !important;
    line-height: 1;
  }
</style>
