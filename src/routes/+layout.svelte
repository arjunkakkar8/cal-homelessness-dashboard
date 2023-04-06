<script lang="ts">
	export let data;

	import Header from '$lib/components/header.svelte';
	import PageTransition from '$lib/components/pageTransition.svelte';
	import { theme_color } from '$lib/stores/colors';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
		document.documentElement.style.setProperty('--theme-color', $theme_color);
	});

	$: if (mounted) document.documentElement.style.setProperty('--theme-color', $theme_color);
</script>

<svelte:head>
	<title>Housing Insecurity</title>
</svelte:head>

<Header />
<PageTransition url={data.url}>
	<slot />
</PageTransition>

<style lang="scss">
	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: 'fonts/NHaasGroteskDSPro-45Lt.otf';
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: 'fonts/NHaasGroteskDSPro-55Rg.otf';
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: 'fonts/NHaasGroteskDSPro-65Md.otf';
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: 'fonts/NHaasGroteskDSPro-75Bd.otf';
		font-weight: 700;
		font-style: normal;
	}
</style>
