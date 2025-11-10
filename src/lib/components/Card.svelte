<script lang="ts">
  import { Motion } from 'svelte-motion';

  export let hover = true;
</script>

<Motion
  let:motion
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={hover ? { y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)' } : {}}
>
  <div class="card" use:motion>
    <slot />
  </div>
</Motion>
