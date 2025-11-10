<script lang="ts">
  import { Motion } from 'svelte-motion';

  export let title: string;
  export let subtitle: string | undefined = undefined;
  export let align: 'left' | 'center' = 'center';

  const alignClass = align === 'center' ? 'text-center' : 'text-left';
</script>

<div class="mb-12 {alignClass}">
  <Motion
    let:motion
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div use:motion class="inline-block">
      <h2 class="section-title mb-4">{title}</h2>
      <div class="h-1 w-24 bg-secondary mx-auto mb-6"></div>
    </div>
  </Motion>

  {#if subtitle}
    <Motion
      let:motion
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p class="section-subtitle" use:motion>{subtitle}</p>
    </Motion>
  {/if}
</div>
