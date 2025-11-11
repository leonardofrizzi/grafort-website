<script lang="ts">
	import '../app.css';
	import { Navbar, FloatingWhatsApp, Footer, CookieBanner } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" type="image/webp" href="/images/favicon.webp" />
	<link rel="apple-touch-icon" href="/images/favicon.webp" />

	<!-- SEO Meta Tags -->
	<title>Grafort - Serviços Profissionais de Manutenção e Reformas em São José dos Campos</title>
	<meta name="description" content="Grafort oferece serviços especializados em manutenção residencial e predial, pequenos reparos, reformas, construção civil, pintura, hidráulica e elétrica em São José dos Campos e região. Atendimento rápido para emergências com equipe qualificada." />
	<meta name="keywords" content="manutenção residencial, manutenção predial, reformas, construção civil, pintura, hidráulica, elétrica, reparos, São José dos Campos, emergência, manutenção preventiva" />
	<meta name="author" content="Grafort Manutenções" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://grafort.com.br/" />
	<meta property="og:title" content="Grafort - Serviços Profissionais de Manutenção e Reformas" />
	<meta property="og:description" content="Serviços especializados em manutenção, reformas e construção civil em São José dos Campos. Atendimento rápido para emergências com equipe qualificada." />
	<meta property="og:image" content="/images/grafort2.webp" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Grafort" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://grafort.com.br/" />
	<meta property="twitter:title" content="Grafort - Serviços Profissionais de Manutenção e Reformas" />
	<meta property="twitter:description" content="Serviços especializados em manutenção, reformas e construção civil em São José dos Campos. Atendimento rápido para emergências." />
	<meta property="twitter:image" content="/images/grafort2.webp" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://grafort.com.br/" />

	<!-- Theme Color -->
	<meta name="theme-color" content="#0e263f" />
	<meta name="msapplication-TileColor" content="#0e263f" />

	<!-- Structured Data / JSON-LD -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Grafort Manutenções",
		"image": "/images/grafort2.webp",
		"@id": "https://grafort.com.br",
		"url": "https://grafort.com.br",
		"telephone": "+5512991511797",
		"email": "grafortmanutencao@gmail.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "São José dos Campos",
			"addressRegion": "SP",
			"addressCountry": "BR"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": -23.223701,
			"longitude": -45.900501
		},
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			"opens": "08:00",
			"closes": "18:00"
		},
		"sameAs": [
			"https://instagram.com/grafort.manutencoes"
		],
		"priceRange": "$$",
		"areaServed": {
			"@type": "City",
			"name": "São José dos Campos"
		},
		"description": "Serviços especializados em manutenção residencial e predial, pequenos reparos, reformas, construção civil, pintura, hidráulica e elétrica em São José dos Campos e região."
	}
	</script>
</svelte:head>

<Navbar />
<FloatingWhatsApp />
{@render children()}
<Footer />
<CookieBanner />
