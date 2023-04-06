<script>
	import Explainer from '$lib/components/index/explainer.svelte';
	import Selector from '$lib/components/index/selector.svelte';
	import Map from '$lib/components/index/map.svelte';
	import Breakdown from '$lib/components/index/breakdown.svelte';
	import Snapshot from '$lib/components/index/snapshot.svelte';
</script>

<div class="module-panel">
	<Explainer />
	<Selector />
	<Map />
	<Snapshot />
	<Breakdown />
</div>

<style lang="scss">
	.module-panel {
		margin: 0 auto;
		padding: 32px;
		max-width: 500px;
		display: grid;
		gap: 20px 32px;
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			'explainer'
			'selector'
			'map'
			'snapshot'
			'race-breakdown';


		@include desktop {
			max-width: 1120px;
			height: 100vh;
			max-height: 800px;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr 1fr;
			grid-template-areas:
				'explainer selector'
				'map snapshot'
				'map race-breakdown';
		}
	}
</style>
