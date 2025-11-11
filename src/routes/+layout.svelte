<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Navbar, FloatingWhatsApp, Footer, CookieBanner } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<FloatingWhatsApp />
{@render children()}
<Footer />
<CookieBanner />
