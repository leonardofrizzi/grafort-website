<script lang="ts">
  let showPrivacyPolicy = $state(false);

  function togglePrivacyPolicy() {
    showPrivacyPolicy = !showPrivacyPolicy;
  }
</script>

<footer class="bg-gray-900 text-white pt-16 pb-8">
  <div class="container-custom px-4 md:px-8">
    <!-- Grid principal -->
    <div class="grid md:grid-cols-3 gap-12 mb-12">
      <!-- Logo e descrição -->
      <div>
        <img src="/images/grafort2.webp" alt="Grafort" class="h-12 mb-4" />
        <p class="text-gray-400 leading-relaxed">
          Serviços profissionais de qualidade para sua residência ou empresa. Atendimento em São José dos Campos e região.
        </p>
      </div>

      <!-- Links das seções -->
      <div>
        <h3 class="font-heading text-lg font-bold mb-4">Navegação</h3>
        <ul class="space-y-2">
          <li>
            <a href="#hero" class="text-gray-400 hover:text-secondary transition-colors duration-300">
              Início
            </a>
          </li>
          <li>
            <a href="#servicos" class="text-gray-400 hover:text-secondary transition-colors duration-300">
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" class="text-gray-400 hover:text-secondary transition-colors duration-300">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#diferenciais" class="text-gray-400 hover:text-secondary transition-colors duration-300">
              Diferenciais
            </a>
          </li>
          <li>
            <a href="#contato" class="text-gray-400 hover:text-secondary transition-colors duration-300">
              Contato
            </a>
          </li>
          <li>
            <a href="#faq" class="text-gray-400 hover:text-secondary transition-colors duration-300">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <!-- Contato -->
      <div>
        <h3 class="font-heading text-lg font-bold mb-4">Contato</h3>
        <ul class="space-y-3">
          <li>
            <a href="https://wa.me/5512991511797" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              (12) 99151-1797
            </a>
          </li>
          <li>
            <a href="mailto:grafortmanutencao@gmail.com" class="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              grafortmanutencao@gmail.com
            </a>
          </li>
          <li>
            <a href="https://instagram.com/grafort.manutencoes" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @grafort.manutencoes
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-800 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © 2025 Grafort. Todos os direitos reservados.
        </p>
        <button
          onclick={togglePrivacyPolicy}
          class="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm"
        >
          Política de Privacidade
        </button>
      </div>
    </div>
  </div>
</footer>

<!-- Modal Política de Privacidade -->
{#if showPrivacyPolicy}
  <div
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    onclick={togglePrivacyPolicy}
  >
    <div
      class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="flex justify-between items-start mb-6">
        <h2 class="font-heading text-2xl font-bold text-primary">Política de Privacidade</h2>
        <button
          onclick={togglePrivacyPolicy}
          class="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="space-y-4 text-gray-700">
        <section>
          <h3 class="font-bold text-lg mb-2">1. Informações Coletadas</h3>
          <p>Coletamos informações fornecidas voluntariamente por você ao entrar em contato conosco, incluindo nome, e-mail, telefone e detalhes sobre o serviço solicitado.</p>
        </section>

        <section>
          <h3 class="font-bold text-lg mb-2">2. Uso das Informações</h3>
          <p>As informações coletadas são utilizadas exclusivamente para:</p>
          <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Responder às suas solicitações de orçamento</li>
            <li>Prestar os serviços contratados</li>
            <li>Enviar comunicações relacionadas aos nossos serviços</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg mb-2">3. Proteção de Dados</h3>
          <p>Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
        </section>

        <section>
          <h3 class="font-bold text-lg mb-2">4. Compartilhamento de Informações</h3>
          <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem seu consentimento, exceto quando exigido por lei.</p>
        </section>

        <section>
          <h3 class="font-bold text-lg mb-2">5. Seus Direitos</h3>
          <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais a qualquer momento. Entre em contato conosco através dos canais disponíveis.</p>
        </section>

        <section>
          <h3 class="font-bold text-lg mb-2">6. Contato</h3>
          <p>Para questões sobre esta política de privacidade, entre em contato através do e-mail: grafortmanutencao@gmail.com</p>
        </section>
      </div>

      <div class="mt-8 flex justify-end">
        <button
          onclick={togglePrivacyPolicy}
          class="bg-secondary text-white py-2.5 px-6 rounded-full font-sans font-semibold hover:scale-105 transition-transform duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
{/if}
