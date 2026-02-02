<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Button from './Button.svelte';

  let isOpen = $state(false);
  let scrolled = $state(false);
  let show = $state(false);

  onMount(() => {
    show = true;

    // Detecta scroll para mudar estilo da navbar
    window.addEventListener('scroll', () => {
      scrolled = window.scrollY > 50;
    });
  });

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];
</script>

{#if show}
  <nav
    in:fly={{ y: -100, duration: 600 }}
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out {scrolled && !isOpen
      ? 'py-3'
      : (scrolled && isOpen) || isOpen
        ? 'py-0'
        : 'py-6'}"
  >
    <div
      class="transition-[background-color,box-shadow,padding,max-width,margin] duration-500 ease-in-out {isOpen
        ? 'max-w-7xl mx-auto bg-primary shadow-2xl px-6 py-3'
        : scrolled
          ? 'max-w-7xl mx-4 md:mx-auto bg-primary rounded-full shadow-2xl px-6 py-3'
          : 'max-w-7xl mx-auto bg-transparent px-4 md:px-8 py-3'}"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#hero" class="flex items-center py-2">
          <img
            src={scrolled ? "/images/grafort2.webp" : "/images/grafort.webp"}
            alt="Grafort Logo"
            class="h-8 w-auto transition-all duration-300"
          />
        </a>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          {#each menuItems as item}
            <a
              href={item.href}
              class="font-heading font-medium transition-all duration-300 {scrolled
                ? 'text-white hover:text-white/80'
                : 'text-white hover:text-white/80'}"
            >
              {item.label}
            </a>
          {/each}
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden md:block">
          <a
            href="https://wa.me/5519971691038"
            target="_blank"
            rel="noopener noreferrer"
            class="relative bg-white text-primary font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 flex items-center gap-2 overflow-hidden group md:hover:shadow-2xl md:hover:shadow-white/30 md:hover:scale-105"
          >
            <!-- Barra laranja inferior -->
            <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <!-- Efeito de brilho/shine -->
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] md:group-hover:translate-x-[200%] transition-transform duration-700"></span>

            <svg class="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span class="relative z-10">Solicitar Orçamento</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 transition-colors duration-300 text-white"
          onclick={() => (isOpen = !isOpen)}
          aria-label="Toggle menu"
        >
          {#if !isOpen}
            <!-- Hamburger Icon -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {:else}
            <!-- Close Icon -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {/if}
        </button>
      </div>

      <!-- Mobile Menu -->
      {#if isOpen}
          <div class="md:hidden pt-4 pb-2 space-y-3" in:fly={{ y: -20, duration: 300 }}>
            {#each menuItems as item}
              <a
                href={item.href}
                class="block py-2 font-heading font-medium transition-colors duration-200 {scrolled
                  ? 'text-white hover:text-white/80'
                  : 'text-white hover:text-white/80'}"
                onclick={() => (isOpen = false)}
              >
                {item.label}
              </a>
            {/each}
            <div class="pt-2">
              <a
                href="https://wa.me/5519971691038"
                target="_blank"
                rel="noopener noreferrer"
                class="relative w-full bg-white text-primary font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden group"
              >
                <!-- Barra laranja inferior -->
                <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 transition-transform duration-500 origin-left"></span>

                <!-- Efeito de brilho/shine -->
                <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] transition-transform duration-700"></span>

                <svg class="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span class="relative z-10">Solicitar Orçamento</span>
              </a>
            </div>
          </div>
      {/if}
    </div>
  </nav>
{/if}

