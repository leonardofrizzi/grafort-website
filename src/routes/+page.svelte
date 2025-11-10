<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { Button, Card, Section, SectionTitle } from '$lib/components';
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
      <Motion
        let:motion
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div use:motion class="max-w-4xl mx-auto flex flex-col items-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 leading-relaxed md:leading-loose text-center" style="font-family: 'Konexy', system-ui, sans-serif;">
            Serviços profissionais de pintura, manutenção e reformas
          </h1>
          <button
            class="relative bg-secondary text-white font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 flex items-center gap-2 overflow-hidden group hover:shadow-2xl hover:shadow-secondary/50 hover:scale-105"
          >
            <!-- Barra azul inferior -->
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <!-- Efeito de brilho/shine -->
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>

            <span class="relative z-10">Ver Nossos Serviços</span>
            <svg class="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </Motion>
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
      <Motion
        let:motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div
          use:motion
          class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <!-- Imagem -->
          <div class="relative h-48 overflow-hidden">
            <img
              src="/images/manutencao.jpg"
              alt="Manutenções Residenciais e Prediais"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <!-- Overlay com gradiente -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          <!-- Conteúdo -->
          <div class="relative p-6">
            <!-- Fitinha laranja animada -->
            <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <h3 class="font-heading text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
              Manutenções Residenciais e Prediais
            </h3>
            <p class="text-white/80 mb-4">
              Manutenção preventiva e corretiva para residências e prédios com equipe especializada.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Pequenos Reparos e Reformas -->
      <Motion
        let:motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          use:motion
          class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="/images/reparos.jpg"
              alt="Pequenos Reparos e Reformas"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          <div class="relative p-6">
            <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <h3 class="font-heading text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
              Pequenos Reparos e Reformas
            </h3>
            <p class="text-white/80 mb-4">
              Serviços de reparos e reformas rápidas com qualidade e preço justo.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Construção Civil -->
      <Motion
        let:motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          use:motion
          class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="/images/construcao.jpg"
              alt="Construção Civil"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          <div class="relative p-6">
            <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <h3 class="font-heading text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
              Construção Civil
            </h3>
            <p class="text-white/80 mb-4">
              Projetos completos de construção civil com gestão profissional e qualidade garantida.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Pintura -->
      <Motion
        let:motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div
          use:motion
          class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="/images/pintura.jpg"
              alt="Pintura"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          <div class="relative p-6">
            <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <h3 class="font-heading text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
              Pintura
            </h3>
            <p class="text-white/80 mb-4">
              Pintura residencial e comercial com acabamento impecável e materiais de primeira qualidade.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Hidráulica -->
      <Motion
        let:motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div
          use:motion
          class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="/images/hidraulica.jpg"
              alt="Hidráulica"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          <div class="relative p-6">
            <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <h3 class="font-heading text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
              Hidráulica
            </h3>
            <p class="text-white/80 mb-4">
              Instalação e reparo de sistemas hidráulicos com garantia e rapidez no atendimento.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Elétrica -->
      <Motion
        let:motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div
          use:motion
          class="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="/images/eletrica.jpg"
              alt="Elétrica"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          <div class="relative p-6">
            <span class="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <h3 class="font-heading text-2xl font-bold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
              Elétrica
            </h3>
            <p class="text-white/80 mb-4">
              Serviços elétricos residenciais e comerciais com segurança e eficiência garantidas.
            </p>
          </div>
        </div>
      </Motion>
    </div>

    <!-- Botão WhatsApp -->
    <Motion
      let:motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div use:motion class="mt-12 text-center">
        <button
          class="relative bg-secondary text-white font-sans font-semibold py-2.5 px-6 rounded-full transition-all duration-500 inline-flex items-center gap-2 overflow-hidden group hover:shadow-2xl hover:shadow-secondary/50 hover:scale-105"
        >
          <!-- Barra azul inferior -->
          <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

          <!-- Efeito de brilho/shine -->
          <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>

          <svg class="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span class="relative z-10">Solicitar Orçamento</span>
        </button>
      </div>
    </Motion>
  </Section>

  <!-- CTA Section -->
  <Section id="cta">
    <Motion
      let:motion
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        use:motion
        class="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white shadow-2xl"
      >
        <h2 class="font-heading text-4xl font-bold mb-4">Pronto para começar?</h2>
        <p class="text-xl mb-8 text-white/90">
          Entre em contato e receba um orçamento gratuito para seu projeto
        </p>
        <Button variant="secondary" size="lg">Falar com Especialista</Button>
      </div>
    </Motion>
  </Section>
</div>
