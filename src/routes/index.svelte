<script>
	import Explainer from '$components/explainer.svelte';
	import Selector from '$components/selector.svelte';
	import Map from '$components/map.svelte';
	import Breakdown from '$components/breakdown.svelte';
	import Snapshot from '$components/snapshot.svelte';
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
		display: grid;
		gap: 20px 32px;
		margin: 0 auto;
		padding: 32px;
		max-width: 500px;
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			'explainer'
			'selector'
			'map'
			'snapshot'
			'race-breakdown';

		@include desktop {
			height: 100vh;
			max-height: 800px;
			max-width: 1120px;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr 1fr;
			grid-template-areas:
			'explainer selector'
			'map snapshot'
			'map race-breakdown';
		}
	}
</style>
