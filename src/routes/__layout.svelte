<script lang="ts">
	import Header from '$components/header.svelte';
	import { theme_color } from '$stores/colors';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	$: if (mounted) document.documentElement.style.setProperty('--theme-color', $theme_color);
</script>

<Header />
<slot />
