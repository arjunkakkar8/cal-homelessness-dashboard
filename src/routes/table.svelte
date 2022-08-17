<script lang="ts">
	import Selector from '$components/table/selector.svelte';
	import Table from '$components/table/table.svelte';
</script>

<div class="module-panel">
	<Selector />
	<Table />
</div>

<style lang="scss">
	.module-panel {
		margin: 0 auto;
		padding: 32px;
		max-width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			'selector'
			'table';

		@include desktop {
			max-width: 1120px;
			height: 100vh;
			max-height: 800px;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr;
			grid-template-areas:
				'selector .'
				'table table';
		}
	}
</style>
