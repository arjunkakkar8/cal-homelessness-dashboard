<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: URL | null = null;
	const duration = 200;
</script>

{#key url?.href}
	<div
		in:fly={{ x: -5, duration: duration, delay: duration }}
		out:fly={{ x: 5, duration: duration }}
	>
		<slot />
	</div>
{/key}
