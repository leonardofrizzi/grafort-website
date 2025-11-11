<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let align: 'left' | 'center' = 'center';

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  let titleInView = false;
  let subtitleInView = false;
</script>

<div class="mb-12 {alignClass}">
  <div
    use:inview
    on:inview_change={(event) => {
      const { inView } = event.detail;
      if (inView) titleInView = true;
    }}
  >
    {#if titleInView}
      <div class="inline-block" in:fly={{ y: -20, duration: 600 }}>
        <h2 class="section-title mb-4">{title}</h2>
        <div class="h-1 w-24 bg-secondary mx-auto mb-6"></div>
      </div>
    {:else}
      <div class="inline-block opacity-0">
        <h2 class="section-title mb-4">{title}</h2>
        <div class="h-1 w-24 bg-secondary mx-auto mb-6"></div>
      </div>
    {/if}
  </div>

  {#if subtitle}
    <div
      use:inview
      on:inview_change={(event) => {
        const { inView } = event.detail;
        if (inView) {
          setTimeout(() => {
            subtitleInView = true;
          }, 200);
        }
      }}
    >
      {#if subtitleInView}
        <p class="section-subtitle" in:fly={{ y: -10, duration: 600 }}>{subtitle}</p>
      {:else}
        <p class="section-subtitle opacity-0">{subtitle}</p>
      {/if}
    </div>
  {/if}
</div>
