<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  export let hover = true;

  let isInView = false;
</script>

<div
  class="card transition-all duration-300 {hover ? 'hover:-translate-y-2 hover:shadow-2xl' : ''}"
  use:inview
  on:inview_change={(event) => {
    const { inView } = event.detail;
    isInView = inView;
  }}
>
  {#if isInView}
    <div in:fly={{ y: 20, duration: 500 }}>
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</div>
