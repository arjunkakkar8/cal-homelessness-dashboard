<script lang="ts">
	import ModuleContainer from '$components/module-container.svelte';
	import Hover from '$components/hover.svelte';
	import Bars from '$components/bars.svelte';
	import { breakdown_data } from '$stores/data';
	import { color_list } from '$stores/colors';
	import { format } from 'd3-format';

	let activeRace = '',
		hoverActive;

	let label = '',
		num1 = '',
		num2 = '',
		num3 = '',
		color = '';

	$: hoverActive = activeRace !== '';
	$: if (hoverActive) {
		label = activeRace;
		color = $color_list[activeRace][1];
		num1 = format('.1%')($breakdown_data.estimated[activeRace]);
		num2 = format('.1%')($breakdown_data.doubledup[activeRace]);
		num3 = format('.1%')($breakdown_data.total[activeRace]);
	}
</script>

<ModuleContainer title="race breakdown">
	<Hover {hoverActive}>
		<span slot="content">
			<div class="content-container">
				<div class="bars-container">
					<Bars
						mode="thick"
						data={$breakdown_data.estimated}
						heading="Housing Insecure"
						bind:activeRace
					/>
					<Bars data={$breakdown_data.doubledup} heading="Doubled Up" bind:activeRace />
					<Bars data={$breakdown_data.total} heading="Total Population" bind:activeRace />
				</div>
				<div class="legend-container">
					{#each Object.keys($color_list) as legendItem}
						{#if legendItem !== 'all races'}
							<h4 class="legend-item" style={`background-color:${$color_list[legendItem][1]};`}>{legendItem}</h4>
						{/if}
					{/each}
				</div>
			</div>
		</span>
		<span slot="hover">
			<h3 style={`border-bottom-color:${color};`}>{label}</h3>
			<div class="hover-wrapper">
				<div>
					<p>{num1}</p>
					<h4>of Housing Insecure</h4>
				</div>
				<div>
					<p>{num2}</p>
					<h4>of Doubled Up</h4>
				</div>
				<div>
					<p>{num3}</p>
					<h4>of Total Population</h4>
				</div>
			</div>
		</span>
	</Hover>
</ModuleContainer>

<style lang="scss">
	.content-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		width: 100%;
	}

	.bars-container {
		padding: 16px;
		flex-grow: 1;
	}

	.hover-wrapper {
		display: flex;

		div:not(:last-of-type) {
			margin-right: 12px;
		}

		div {
			width: fit-content;
		}
	}

	h3 {
		@include label-large;
		font-weight: 600;
		margin: 0 0 16px;
		border-bottom: 4px solid var(--theme-color);
		line-height: 16px;
		width: fit-content;
	}

	h4 {
		@include heading-xxxsmall;
		color: $gray;
		width: 100px;
		margin: 0;
	}

	p {
		@include heading-xsmall;
		margin: 0 0 4px;
	}

	.legend-container{
		display: flex;
		padding: 16px;
	}

	.legend-item{
		color: $white;
		flex-grow: 1;
		width: unset;
		text-align: center;
		outline: 1.5px solid $white;
		height: 20px;
		line-height: 20px;
	}
</style>
