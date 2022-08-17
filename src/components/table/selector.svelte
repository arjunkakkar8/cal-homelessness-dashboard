<script lang="ts">
	import { table_mode } from '$stores/data';

	const setMode = (e) => {
		const value = e.target.textContent;
		if ($table_mode !== value) {
			$table_mode = value;
		}
	};
</script>

<div>
	Use this table to sort through the estimated
	<button class:active={$table_mode === 'counts'} on:click={setMode}>counts</button>
	or
	<button class:active={$table_mode === 'rates'} on:click={setMode}>rates</button>
	of housing insecurity in
	<strong>California</strong>
	counties.
</div>

<style lang="scss">
	div {
		@include label-large;
		grid-area: selector;
		max-width: 550px;
	}

	button {
		@include label-large;
		padding: 0 6px;
		color: $black;
		background-color: unset;
		border: 1px solid $overall;
		border-radius: 12px;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

		&.active {
			background-color: $overall;
			color: white;
		}
	}
</style>
