<script context="module">
	export const load = async ({ url }) => ({
		props: {
			refresh: url
		}
	});
</script>

<script lang="ts">
	import Header from '$components/header.svelte';
	import PageTransition from '$components/pageTransition.svelte';
	import { theme_color } from '$stores/colors';
	import { onMount } from 'svelte';

	export let refresh;

	onMount(() => {
		document.documentElement.style.setProperty('--theme-color', $theme_color);
	});
</script>

<svelte:head>
	<title>Housing Insecurity</title>
</svelte:head>

<Header />
<PageTransition {refresh}>
	<slot />
</PageTransition>

<style lang="scss">
	@function asset($file) {
		@return url($asset-base-path + '/' + $file);
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: asset('fonts/NHaasGroteskDSPro-45Lt.otf');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: asset('fonts/NHaasGroteskDSPro-55Rg.otf');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: asset('fonts/NHaasGroteskDSPro-65Md.otf');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'NHaasGroteskDSPro';
		src: asset('fonts/NHaasGroteskDSPro-75Bd.otf');
		font-weight: 700;
		font-style: normal;
	}
</style>
