<script lang="ts">
	import { geography, race, geography_options, race_options } from '$stores/data';

	let geo_width: number, race_width: number;

	$: if (!$race_options.includes($race)) {
		race.set('all races');
	}
</script>

<div>
	<span>
		<label for="geo-select">Geography</label>
		<span class="placeholder" bind:clientWidth={geo_width}>{$geography}</span>
		<select id="geo-select" bind:value={$geography} style={`width:${geo_width + 8}px`}>
			{#each $geography_options as option}
				<option value={option}>
					{option}
				</option>
			{/each}
		</select>
	</span>

	<span>for</span>

	<span>
		<label for="race-select">Race</label>
		<span class="placeholder" bind:clientWidth={race_width}>{$race}</span>
		<select id="race-select" bind:value={$race} style={`width:${race_width + 8}px`}>
			{#each $race_options as option}
				<option value={option}>
					{option}
				</option>
			{/each}
		</select>
	</span>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: flex-end;
		grid-area: selector;

		span {
			&:not(:last-of-type) {
				margin-right: 10px;
			}

			&:nth-of-type(2) {
				margin-bottom: 2.5px;
			}
		}
	}

	span {
		@include heading-small;
		display: flex;
		flex-direction: column;

		.placeholder {
			position: absolute !important;
			width: fit-content;
			z-index: -100;
			opacity: 0;
		}
	}

	select {
		@include heading-small;
		background: none;
		border: none;
		appearance: none;
		border-bottom: 1px dashed $blue-5;
		cursor: pointer;
		transition: width 0.2s ease-in-out;
	}

	option {
		font-size: 16px;
		padding-left: -10px;
	}

	label {
		@include heading-xxxsmall;
		color: $gray;
	}
</style>
