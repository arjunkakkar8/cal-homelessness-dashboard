<script>
	import { fly } from 'svelte/transition';

	export let refresh = '';
	const duration = 200;
</script>

{#key refresh}
	<div
		in:fly={{ x: -5, duration: duration, delay: duration }}
		out:fly={{ x: 5, duration: duration }}
	>
		<slot />
	</div>
{/key}
