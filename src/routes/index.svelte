<script>
	import Selector from '$components/selector.svelte';
	import Map from '$components/map.svelte';
	import Breakdown from '$components/breakdown.svelte';
	import Snapshot from '$components/snapshot.svelte';
</script>

<div class="module-panel">
	<Selector />
	<Map />
	<Snapshot />
	<Breakdown />
</div>

<style lang="scss">
	.module-panel {
		display: grid;
		height: 100%;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr 1fr;
		grid-template-areas:
			'. selector'
			'map snapshot'
			'map race-breakdown';
		gap: 20px 32px;
		max-width: 1120px;
		margin: 0 auto;
		padding: 32px 32px 0;
	}
</style>
