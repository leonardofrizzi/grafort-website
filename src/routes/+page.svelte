<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { Button, Card, Section, SectionTitle } from '$lib/components';

  let servicesInView = $state<boolean[]>([false, false, false, false, false, false]);
  let buttonInView = $state(false);
  let aboutInView = $state(false);
  let differentialsInView = $state(false);
  let contactInView = $state(false);
  let contactCardsInView = $state<boolean[]>([false, false, false]);
  let faqInView = $state(false);
  let faqItems = $state<boolean[]>([false, false, false, false, false]);
</script>

<div class="min-h-screen">
  <!-- Hero Section com Vídeo -->
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Vídeo de fundo -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    <!-- Overlay escuro com blur -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    <!-- Conteúdo centralizado -->
    <div class="relative z-10 container-custom px-4 md:px-8 text-center">
        <div class="max-w-4xl mx-auto flex flex-col items-center" in:fly={{ y: 30, duration: 800, delay: 200 }}>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 leading-relaxed md:leading-loose text-center" style="font-family: 'Konexy', system-ui, sans-serif;">
            Serviços profissionais de pintura, manutenção e reformas
          </h1>
          <a
            href="#services"
            class="relative bg-secondary text-white font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 flex items-center gap-2 overflow-hidden group md:hover:shadow-2xl md:hover:shadow-secondary/50 md:hover:scale-105"
          >
            <!-- Barra azul inferior -->
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <!-- Efeito de brilho/shine -->
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] md:group-hover:translate-x-[200%] transition-transform duration-700"></span>

            <span class="relative z-10">Ver Nossos Serviços</span>
            <svg class="relative z-10 w-5 h-5 transition-transform duration-500 md:group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
    </div>
  </section>

  <!-- Services Section -->
  <Section id="services" background="gray">
    <SectionTitle
      title="Nossos Serviços"
      subtitle="Soluções completas para todas as necessidades da sua casa ou empresa"
    />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Manutenções Residenciais e Prediais -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) servicesInView[0] = true;
        }}
      >
        {#if servicesInView[0]}
          <div
            in:fly={{ y: 50, duration: 600, delay: 100 }}
            class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
          >
            <!-- Imagem -->
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/1.webp"
                alt="Manutenções Residenciais e Prediais"
                class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <!-- Overlay com gradiente -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 md:group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <!-- Conteúdo -->
            <div class="relative p-6 flex-1 flex flex-col">
              <!-- Fitinha laranja animada -->
              <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

              <h3 class="font-heading text-2xl font-bold mb-3 text-white md:group-hover:text-secondary transition-colors duration-300">
                Manutenções Residenciais, Prediais e Industriais
              </h3>
              <p class="text-white/80 mb-4">
                Manutenção preventiva e corretiva para residências, prédios e indústrias com equipe especializada e equipamentos adequados para cada necessidade.
              </p>
            </div>
          </div>
        {/if}
      </div>

      <!-- Pequenos Reparos e Reformas -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) servicesInView[1] = true;
        }}
      >
        {#if servicesInView[1]}
          <div
            in:fly={{ y: 50, duration: 600, delay: 200 }}
            class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/2.webp"
                alt="Pequenos Reparos e Reformas"
                class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 md:group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div class="relative p-6 flex-1 flex flex-col">
              <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

              <h3 class="font-heading text-2xl font-bold mb-3 text-white md:group-hover:text-secondary transition-colors duration-300">
                Pequenos Reparos e Reformas
              </h3>
              <p class="text-white/80 mb-4">
                Serviços de reparos e reformas rápidas com qualidade e preço justo.
              </p>
            </div>
          </div>
        {/if}
      </div>

      <!-- Construção Civil -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) servicesInView[2] = true;
        }}
      >
        {#if servicesInView[2]}
          <div
            in:fly={{ y: 50, duration: 600, delay: 300 }}
            class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/3.webp"
                alt="Construção Civil"
                class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 md:group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div class="relative p-6 flex-1 flex flex-col">
              <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

              <h3 class="font-heading text-2xl font-bold mb-3 text-white md:group-hover:text-secondary transition-colors duration-300">
                Construção Civil
              </h3>
              <p class="text-white/80 mb-4">
                Projetos completos de construção civil com gestão profissional e qualidade garantida.
              </p>
            </div>
          </div>
        {/if}
      </div>

      <!-- Pintura -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) servicesInView[3] = true;
        }}
      >
        {#if servicesInView[3]}
          <div
            in:fly={{ y: 50, duration: 600, delay: 400 }}
            class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/4.webp"
                alt="Pintura"
                class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 md:group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div class="relative p-6 flex-1 flex flex-col">
              <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

              <h3 class="font-heading text-2xl font-bold mb-3 text-white md:group-hover:text-secondary transition-colors duration-300">
                Pintura
              </h3>
              <p class="text-white/80 mb-4">
                Pintura residencial e comercial com acabamento impecável e materiais de primeira qualidade.
              </p>
            </div>
          </div>
        {/if}
      </div>

      <!-- Hidráulica -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) servicesInView[4] = true;
        }}
      >
        {#if servicesInView[4]}
          <div
            in:fly={{ y: 50, duration: 600, delay: 500 }}
            class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/5.webp"
                alt="Hidráulica"
                class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 md:group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div class="relative p-6 flex-1 flex flex-col">
              <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

              <h3 class="font-heading text-2xl font-bold mb-3 text-white md:group-hover:text-secondary transition-colors duration-300">
                Hidráulica
              </h3>
              <p class="text-white/80 mb-4">
                Instalação e reparo de sistemas hidráulicos com garantia e rapidez no atendimento.
              </p>
            </div>
          </div>
        {/if}
      </div>

      <!-- Elétrica -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) servicesInView[5] = true;
        }}
      >
        {#if servicesInView[5]}
          <div
            in:fly={{ y: 50, duration: 600, delay: 600 }}
            class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/6.webp"
                alt="Elétrica"
                class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 md:group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div class="relative p-6 flex-1 flex flex-col">
              <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

              <h3 class="font-heading text-2xl font-bold mb-3 text-white md:group-hover:text-secondary transition-colors duration-300">
                Elétrica
              </h3>
              <p class="text-white/80 mb-4">
                Serviços elétricos residenciais e comerciais com segurança e eficiência garantidas.
              </p>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Botão WhatsApp -->
    <div
      class="mt-12 text-center"
      use:inview
      on:inview_change={(event) => {
        const { inView } = event.detail;
        if (inView) buttonInView = true;
      }}
    >
      {#if buttonInView}
        <div in:fly={{ y: 20, duration: 500, delay: 700 }}>
          <button
            class="relative bg-secondary text-white font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 inline-flex items-center gap-2 overflow-hidden group md:hover:shadow-2xl md:hover:shadow-secondary/50 md:hover:scale-105"
          >
            <!-- Barra azul inferior -->
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <!-- Efeito de brilho/shine -->
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] md:group-hover:translate-x-[200%] transition-transform duration-700"></span>

            <svg class="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span class="relative z-10">Solicitar Orçamento</span>
          </button>
        </div>
      {/if}
    </div>
  </Section>

  <!-- Sobre Nós Section -->
  <section id="about" class="relative py-20 bg-primary overflow-hidden">
    <!-- Pattern como marca d'água -->
    <div class="absolute inset-0 opacity-5">
      <img
        src="/images/pattern.webp"
        alt="Pattern"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="relative z-10 container-custom px-4 md:px-8">
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) aboutInView = true;
        }}
      >
        {#if aboutInView}
          <div
            in:fly={{ y: 30, duration: 600 }}
            class="grid md:grid-cols-2 gap-12 items-center"
          >
            <!-- Texto à esquerda -->
            <div class="text-white">
              <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Sobre Nós
              </h2>
              <div class="h-1 w-24 bg-secondary mb-8"></div>

              <p class="text-lg mb-6 text-white/90 leading-relaxed">
                Com <span class="text-secondary font-bold">mais de 35 anos de experiência</span> no mercado, a Grafort consolidou-se como referência em serviços de manutenção, reformas e construção civil em São José dos Campos e região.
              </p>

              <p class="text-lg mb-6 text-white/90 leading-relaxed">
                Nossa trajetória é marcada pelo compromisso com a excelência, profissionalismo e a satisfação total de nossos clientes. Contamos com uma equipe altamente qualificada e treinada para atender desde pequenos reparos até grandes projetos de construção.
              </p>

              <p class="text-lg mb-8 text-white/90 leading-relaxed">
                Trabalhamos com equipamentos modernos, materiais de primeira qualidade e seguimos rigorosos padrões de segurança. Nossa missão é transformar cada projeto em uma experiência positiva, entregando resultados que superam expectativas.
              </p>

              <button
                class="relative bg-secondary text-white font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 flex items-center gap-2 overflow-hidden group md:hover:shadow-2xl md:hover:shadow-secondary/50 md:hover:scale-105"
              >
                <!-- Barra azul inferior -->
                <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

                <!-- Efeito de brilho/shine -->
                <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] md:group-hover:translate-x-[200%] transition-transform duration-700"></span>

                <svg class="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span class="relative z-10">Entre em Contato</span>
              </button>
            </div>

            <!-- Imagem à direita -->
            <div class="relative">
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/sobre.webp"
                  alt="Sobre a Grafort"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Decoração -->
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10"></div>
              <div class="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Diferenciais Section -->
  <Section id="diferenciais" background="white">
    <SectionTitle
      title="Nossos Diferenciais"
      subtitle="O que nos torna únicos no mercado"
    />

    <div
      use:inview
      on:inview_change={(event) => {
        const { inView } = event.detail;
        if (inView) differentialsInView = true;
      }}
    >
      {#if differentialsInView}
        <div
          in:fly={{ y: 30, duration: 600 }}
          class="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <!-- Grid de diferenciais -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Diferencial 1 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-heading text-xl font-bold text-white mb-2">Qualidade Garantida</h3>
                <p class="text-white/80 leading-relaxed">Compromisso com a excelência em cada projeto executado</p>
              </div>
            </div>

            <!-- Diferencial 2 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-heading text-xl font-bold text-white mb-2">Pontualidade</h3>
                <p class="text-white/80 leading-relaxed">Cumprimento rigoroso de prazos estabelecidos</p>
              </div>
            </div>

            <!-- Diferencial 3 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-heading text-xl font-bold text-white mb-2">Equipe Especializada</h3>
                <p class="text-white/80 leading-relaxed">Profissionais qualificados e experientes</p>
              </div>
            </div>

            <!-- Diferencial 4 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-heading text-xl font-bold text-white mb-2">Preço Justo</h3>
                <p class="text-white/80 leading-relaxed">Orçamentos transparentes e competitivos</p>
              </div>
            </div>

            <!-- Diferencial 5 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-heading text-xl font-bold text-white mb-2">Documentação Completa</h3>
                <p class="text-white/80 leading-relaxed">Contratos e garantias por escrito</p>
              </div>
            </div>

            <!-- Diferencial 6 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div>
                <h3 class="font-heading text-xl font-bold text-white mb-2">Satisfação do Cliente</h3>
                <p class="text-white/80 leading-relaxed">Atendimento personalizado e pós-obra</p>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <!-- WhatsApp Button -->
    <div class="flex justify-center mt-12">
      <a
        href="https://wa.me/5512991511797"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative inline-flex items-center gap-3 bg-secondary text-white py-2.5 px-6 rounded-full font-sans font-semibold transition-all duration-300 md:hover:scale-105 active:scale-95 shadow-lg md:hover:shadow-xl overflow-hidden"
      >
        <!-- Efeito de brilho no hover -->
        <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] md:group-hover:translate-x-[100%] transition-transform duration-700"></span>

        <!-- Ícone WhatsApp -->
        <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        <!-- Texto -->
        <span class="relative z-10">Entre em Contato</span>

        <!-- Barra azul no bottom -->
        <span class="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>
    </div>
  </Section>

  <!-- Contato Section -->
  <Section id="contato" background="white">
    <div
      use:inview
      on:inview_change={(event) => {
        const { inView } = event.detail;
        if (inView) contactInView = true;
      }}
    >
      {#if contactInView}
        <div in:fly={{ y: 30, duration: 600 }} class="text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Entre em Contato
          </h2>
          <div class="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Receba um orçamento gratuito! Entre em contato pelos nossos canais de atendimento
          </p>
        </div>
      {/if}
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- WhatsApp Card -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) contactCardsInView[0] = true;
        }}
      >
        {#if contactCardsInView[0]}
          <a
            href="https://wa.me/5512991511797"
            target="_blank"
            rel="noopener noreferrer"
            in:fly={{ y: 30, duration: 600, delay: 100 }}
            class="group bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-center text-white shadow-lg md:hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 cursor-pointer block"
          >
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <h3 class="font-heading text-2xl font-bold mb-3">WhatsApp</h3>
            <p class="text-white/90 mb-4">Atendimento rápido e direto</p>
            <p class="text-xl font-semibold">(12) 99151-1797</p>
          </a>
        {/if}
      </div>

      <!-- Email Card -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) contactCardsInView[1] = true;
        }}
      >
        {#if contactCardsInView[1]}
          <a
            href="mailto:grafortmanutencao@gmail.com"
            in:fly={{ y: 30, duration: 600, delay: 200 }}
            class="group bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-center text-white shadow-lg md:hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 cursor-pointer block"
          >
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-heading text-2xl font-bold mb-3">E-mail</h3>
            <p class="text-white/90 mb-4">Envie sua mensagem</p>
            <p class="text-xl font-semibold break-all">grafortmanutencao@gmail.com</p>
          </a>
        {/if}
      </div>

      <!-- Instagram Card -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) contactCardsInView[2] = true;
        }}
      >
        {#if contactCardsInView[2]}
          <a
            href="https://instagram.com/grafort.manutencoes"
            target="_blank"
            rel="noopener noreferrer"
            in:fly={{ y: 30, duration: 600, delay: 300 }}
            class="group bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-center text-white shadow-lg md:hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 cursor-pointer block"
          >
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 class="font-heading text-2xl font-bold mb-3">Instagram</h3>
            <p class="text-white/90 mb-4">Acompanhe nossos projetos</p>
            <p class="text-xl font-semibold">@grafort.manutencoes</p>
          </a>
        {/if}
      </div>
    </div>
  </Section>

  <!-- FAQ Section -->
  <Section id="faq" background="white">
    <div
      use:inview
      on:inview_change={(event) => {
        const { inView } = event.detail;
        if (inView) faqInView = true;
      }}
    >
      {#if faqInView}
        <div in:fly={{ y: 30, duration: 600 }} class="text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Perguntas Frequentes
          </h2>
          <div class="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>
      {/if}
    </div>

    <div class="space-y-4">
      <!-- FAQ Item 1 -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) faqItems[0] = true;
        }}
      >
        {#if faqItems[0]}
          <details
            in:fly={{ x: -30, duration: 600, delay: 100 }}
            class="group bg-primary/5 rounded-xl overflow-hidden border border-primary/10"
          >
            <summary class="cursor-pointer p-6 font-heading text-xl font-bold text-primary hover:bg-primary/10 transition-colors duration-300 flex justify-between items-center">
              <span>Vocês atendem emergências e urgências?</span>
              <svg class="w-6 h-6 text-secondary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-700 leading-relaxed">
              Sim! Atendemos emergências com rapidez. Problemas urgentes como vazamentos, quedas de energia ou reparos emergenciais são priorizados. Entre em contato pelo WhatsApp e faremos o possível para atender o mais rápido possível.
            </div>
          </details>
        {/if}
      </div>

      <!-- FAQ Item 2 -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) faqItems[1] = true;
        }}
      >
        {#if faqItems[1]}
          <details
            in:fly={{ x: -30, duration: 600, delay: 200 }}
            class="group bg-primary/5 rounded-xl overflow-hidden border border-primary/10"
          >
            <summary class="cursor-pointer p-6 font-heading text-xl font-bold text-primary hover:bg-primary/10 transition-colors duration-300 flex justify-between items-center">
              <span>Como funciona o orçamento?</span>
              <svg class="w-6 h-6 text-secondary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-700 leading-relaxed">
              O orçamento é 100% gratuito e sem compromisso! Entre em contato, agendamos uma visita técnica para avaliar o serviço necessário e em seguida você recebe um orçamento detalhado com valores, prazos e escopo do trabalho.
            </div>
          </details>
        {/if}
      </div>

      <!-- FAQ Item 3 -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) faqItems[2] = true;
        }}
      >
        {#if faqItems[2]}
          <details
            in:fly={{ x: -30, duration: 600, delay: 300 }}
            class="group bg-primary/5 rounded-xl overflow-hidden border border-primary/10"
          >
            <summary class="cursor-pointer p-6 font-heading text-xl font-bold text-primary hover:bg-primary/10 transition-colors duration-300 flex justify-between items-center">
              <span>Quais regiões vocês atendem?</span>
              <svg class="w-6 h-6 text-secondary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-700 leading-relaxed">
              Atendemos São José dos Campos e região. Para localidades mais distantes, consulte a disponibilidade através dos nossos canais de atendimento.
            </div>
          </details>
        {/if}
      </div>

      <!-- FAQ Item 4 -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) faqItems[3] = true;
        }}
      >
        {#if faqItems[3]}
          <details
            in:fly={{ x: -30, duration: 600, delay: 400 }}
            class="group bg-primary/5 rounded-xl overflow-hidden border border-primary/10"
          >
            <summary class="cursor-pointer p-6 font-heading text-xl font-bold text-primary hover:bg-primary/10 transition-colors duration-300 flex justify-between items-center">
              <span>Vocês fornecem garantia dos serviços?</span>
              <svg class="w-6 h-6 text-secondary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-700 leading-relaxed">
              Sim! Todos os nossos serviços possuem garantia. O tempo de garantia varia de acordo com o tipo de serviço realizado e é sempre documentado em contrato para sua segurança.
            </div>
          </details>
        {/if}
      </div>

      <!-- FAQ Item 5 -->
      <div
        use:inview
        on:inview_change={(event) => {
          const { inView } = event.detail;
          if (inView) faqItems[4] = true;
        }}
      >
        {#if faqItems[4]}
          <details
            in:fly={{ x: -30, duration: 600, delay: 500 }}
            class="group bg-primary/5 rounded-xl overflow-hidden border border-primary/10"
          >
            <summary class="cursor-pointer p-6 font-heading text-xl font-bold text-primary hover:bg-primary/10 transition-colors duration-300 flex justify-between items-center">
              <span>Preciso fornecer os materiais?</span>
              <svg class="w-6 h-6 text-secondary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-700 leading-relaxed">
              Não é necessário. Trabalhamos com fornecedores parceiros e podemos incluir todos os materiais no orçamento. Porém, se preferir fornecer seus próprios materiais, também aceitamos.
            </div>
          </details>
        {/if}
      </div>
    </div>
  </Section>
</div>
