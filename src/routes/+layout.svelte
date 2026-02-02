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
	<title>Grafort - Manutenção, Reformas e Construção Civil</title>
	<meta name="description" content="Grafort: 35 anos de experiência em manutenção residencial, predial e industrial, reformas, construção civil, pintura, hidráulica e elétrica. Atendemos São José dos Campos, Jacareí, Taubaté e região do Vale do Paraíba. Orçamento grátis!" />
	<meta name="keywords" content="manutenção São José dos Campos, reformas São José dos Campos, construção civil São José dos Campos, pintura São José dos Campos, hidráulica São José dos Campos, elétrica São José dos Campos, manutenção Jacareí, reformas Jacareí, manutenção Taubaté, reformas Taubaté, manutenção residencial Vale do Paraíba, manutenção predial Vale do Paraíba, manutenção industrial São José, pequenos reparos São José dos Campos, pedreiro São José dos Campos, eletricista São José dos Campos, encanador São José dos Campos, pintor São José dos Campos, empresa de manutenção São José dos Campos, serviços gerais São José dos Campos, manutenção predial Jacareí, reformas residenciais Taubaté, construção Vale do Paraíba" />
	<meta name="author" content="Grafort Manutenções" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<meta name="geo.region" content="BR-SP" />
	<meta name="geo.placename" content="São José dos Campos" />
	<meta name="geo.position" content="-23.223701;-45.900501" />
	<meta name="ICBM" content="-23.223701, -45.900501" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://grafort.com.br/" />
	<meta property="og:title" content="Grafort - Manutenção e Reformas | São José dos Campos, Jacareí e Taubaté" />
	<meta property="og:description" content="35 anos de experiência em manutenção residencial, predial e industrial. Atendemos São José dos Campos, Jacareí, Taubaté e Vale do Paraíba. Orçamento grátis pelo WhatsApp!" />
	<meta property="og:image" content="/images/grafort2.webp" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Grafort Manutenções" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://grafort.com.br/" />
	<meta property="twitter:title" content="Grafort - Manutenção e Reformas | São José dos Campos, Jacareí e Taubaté" />
	<meta property="twitter:description" content="35 anos de experiência em manutenção residencial, predial e industrial. Atendemos São José dos Campos, Jacareí, Taubaté e Vale do Paraíba." />
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
		"alternateName": "Grafort",
		"image": "/images/grafort2.webp",
		"@id": "https://grafort.com.br",
		"url": "https://grafort.com.br",
		"telephone": "+5519971691038",
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
		"areaServed": [
			{
				"@type": "City",
				"name": "São José dos Campos",
				"@id": "https://www.wikidata.org/wiki/Q171617"
			},
			{
				"@type": "City",
				"name": "Jacareí"
			},
			{
				"@type": "City",
				"name": "Taubaté"
			},
			{
				"@type": "City",
				"name": "Caçapava"
			},
			{
				"@type": "City",
				"name": "Pindamonhangaba"
			},
			{
				"@type": "Region",
				"name": "Vale do Paraíba"
			}
		],
		"description": "Com 35 anos de experiência, a Grafort é especializada em manutenção residencial, predial e industrial, pequenos reparos, reformas, construção civil, pintura, hidráulica e elétrica em São José dos Campos, Jacareí, Taubaté e região do Vale do Paraíba.",
		"knowsAbout": [
			"Manutenção Residencial",
			"Manutenção Predial",
			"Manutenção Industrial",
			"Reformas",
			"Construção Civil",
			"Pintura Residencial",
			"Pintura Comercial",
			"Hidráulica",
			"Elétrica",
			"Pequenos Reparos"
		],
		"slogan": "35 anos de experiência em manutenção e reformas",
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Serviços de Manutenção e Reformas",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Manutenção Residencial, Predial e Industrial",
						"description": "Manutenção preventiva e corretiva para residências, prédios e indústrias"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Pequenos Reparos e Reformas",
						"description": "Serviços de reparos e reformas rápidas com qualidade e preço justo"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Construção Civil",
						"description": "Projetos completos de construção civil com gestão profissional"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Pintura",
						"description": "Pintura residencial e comercial com acabamento impecável"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Hidráulica",
						"description": "Instalação e reparo de sistemas hidráulicos"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Elétrica",
						"description": "Serviços elétricos residenciais e comerciais com segurança"
					}
				}
			]
		}
	}
	</script>
</svelte:head>

<Navbar />
<FloatingWhatsApp />
{@render children()}
<Footer />
<CookieBanner />
