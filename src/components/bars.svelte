<script>
	import { color_list } from '$stores/colors';
	export let data;
	export let mode;
	export let heading;
	export let activeRace;
</script>

<h4>{heading}</h4>
<div class="bar-container" style={`height:${mode === 'thick' ? 50 : 20}px`}>
	{#each Object.keys(data) as key}
		<div
			class="bar"
			class:highlighted={activeRace === key}
			style={`background-color:${$color_list[key][1]}; width:${data[key] * 100}%`}
			on:mouseover={() => (activeRace = key)}
			on:mouseout={() => (activeRace = '')}
		/>
	{/each}
</div>

<style lang="scss">
	h4 {
		margin: 0;
		@include heading-xxxsmall;
		color: $gray;
	}

	.bar-container {
		width: 100%;
		position: relative;
		background-color: $light-gray;
		display: flex;
		margin-bottom: 16px;
	}

	.bar {
		height: 100%;
		transition: width 0.5s ease-in-out;
		outline: 1.5px solid $white;
		transition: outline-color 0.2s ease-in-out;

		&.highlighted {
			z-index: 5;
			outline-color: $black;
		}
	}
</style>
