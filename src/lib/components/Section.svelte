<script lang="ts">
  export let id: string | undefined = undefined;
  export let background: 'white' | 'gray' = 'white';

  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
</script>

<section {id} class="section {bgClass}">
  <div class="container-custom">
    <slot />
  </div>
</section>
