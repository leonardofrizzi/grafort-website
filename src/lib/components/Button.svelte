<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled = false;

  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
    outline: 'btn-secondary',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const className = `${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} transition-transform`;
</script>

{#if href}
  <a {href} class={className}>
    <slot />
  </a>
{:else}
  <button {type} {disabled} class={className} on:click>
    <slot />
  </button>
{/if}
