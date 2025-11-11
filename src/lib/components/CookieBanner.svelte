<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let showBanner = $state(false);

  onMount(() => {
    // Verifica se o usuário já aceitou/recusou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Mostra o banner após 1 segundo
      setTimeout(() => {
        showBanner = true;
      }, 1000);
    }
  });

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    showBanner = false;
  }

  function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    showBanner = false;
  }
</script>

{#if showBanner}
  <div
    in:fly={{ y: 100, duration: 600 }}
    class="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-4 border-secondary"
  >
    <div class="container-custom mx-auto px-4 md:px-8 py-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Texto -->
        <div class="flex-1 text-center md:text-left">
          <p class="text-gray-800 text-sm md:text-base leading-relaxed">
            <span class="font-bold text-primary">🍪 Este site usa cookies</span>
            <br class="md:hidden" />
            <span class="text-gray-600">
              para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
              <button
                onclick={() => {
                  // Abre modal de política de privacidade do footer
                  document.querySelector('footer button')?.click();
                }}
                class="text-secondary hover:underline font-semibold"
              >
                Política de Privacidade
              </button>.
            </span>
          </p>
        </div>

        <!-- Botões -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <button
            onclick={rejectCookies}
            class="px-5 py-2.5 rounded-full font-sans font-semibold text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 border-2 border-gray-300 hover:border-gray-400"
          >
            Recusar
          </button>
          <button
            onclick={acceptCookies}
            class="relative px-6 py-2.5 rounded-full font-sans font-semibold text-sm bg-secondary text-white overflow-hidden group hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <!-- Efeito de brilho -->
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span class="relative z-10">Aceitar Cookies</span>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
