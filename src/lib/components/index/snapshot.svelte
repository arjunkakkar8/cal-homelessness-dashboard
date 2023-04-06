<script>
	import ModuleContainer from '$lib/components/index/module-container.svelte';
	import Hover from '$lib/components/index/hover-static.svelte';
	import { snapshot_data, race, geography } from '$lib/stores/data';
	import { base } from '$app/paths';
	import { format } from 'd3-format';

	let doubledupInactive = false,
		pointintimeInactive = false;

	$: doubledupInactive = $snapshot_data.doubledup === 0;
	$: pointintimeInactive = $race !== 'all races';
</script>

<ModuleContainer title="snapshot">
	<div class="snapshot-grid">
		<div class="snapshot-container">
			<div>
				<h4>housing insecure estimate</h4>
				<div class="large">{format('.3s')($snapshot_data.estimate)}</div>
			</div>
			<div>
				<h4>rate of insecurity</h4>
				<div class="small">{format('.1%')($snapshot_data.estimate / $snapshot_data.total)}</div>
			</div>
			<div>
				<h4 class="narrow">total population</h4>
				<div class="small">{format('.3s')($snapshot_data.total)}</div>
			</div>
			<Hover>
				<h3>Housing Insecurity</h3>
				<p>
					Housing insecure estimates were created using the California Department of Education’s
					student homelessness counts. In {$geography === 'Statewide data'
						? 'California'
						: `${$geography} county`}, there were
					<strong>{format(',')($snapshot_data.students)}</strong>
					{$race === 'all races' ? 'total' : $race} homeless students, and we used a multiplier of
					<strong>{format('.3s')($snapshot_data.estimate / $snapshot_data.students)}</strong> to estimate
					the total housing insecure counts.
				</p>
				<p>
					<a href="{base}/methods">See methods</a> to learn more about how we calculate housing insecurity.
				</p>
			</Hover>
		</div>

		<div class="snapshot-container" class:inactive={doubledupInactive}>
			<Hover>
				<h3>Doubled Up</h3>
				<p>
					Individuals were identified as doubled up using the 5-year 2019 American Community Survey
					(ACS). While the ACS does not identify doubled up counts, we use the definition provided
					by researchers in <a href="https://doi.org/10.1080/10511482.2021.1981976" target="_blank"
						>this 2021 report</a
					>, which identified an individual as doubled up if they were “poor or near poor” and lived
					in a household where they did not share household costs and were not customarily under the
					responsibility of the head of household.
				</p>
				<p>
					<a href="{base}/methods">See methods</a> to learn more about how we calculated doubled up estimates.
				</p>
			</Hover>
			<div>
				<h4>doubled up estimate</h4>
				<div class="medium">
					{doubledupInactive ? 'NA' : format('.3s')($snapshot_data.doubledup)}
				</div>
			</div>
		</div>

		<div class="snapshot-container" class:inactive={pointintimeInactive}>
			<Hover>
				<h3>Point-in-time Counts</h3>
				<p>
					The Point-in-Time (PIT) count estimates the total number of sheltered and unsheltered
					people experiencing homelessness. These estimates are mandated by the U.S. Department of
					Housing and Urban Development (HUD) as a requirement for federal funding. California’s PIT
					counts are provided by the state’s 44 Continuum of Care (CoC) partners and are typically
					conducted annually in January. Due to Covid-19, many CoCs delayed their counts in 2022.
					You can learn more about HUD’s PIT counts <a
						href="https://www.hudexchange.info/trainings/courses/point-in-time-pit-count-standards-and-methodologies-training/"
						target="_blank">here</a
					>.
				</p>
				<p>
					The {$geography === 'Statewide data' ? 'California' : `${$geography} county`} counts were obtained
					from <a href={$snapshot_data.pit_source} target="_blank">here</a>. {$snapshot_data.pit_disclaimer}
				</p>
			</Hover>
			<div>
				<h4>Point in time count</h4>
				<div class="medium">{pointintimeInactive ? 'NA' : format('.3s')($snapshot_data.pit)}</div>
			</div>
		</div>
	</div>
</ModuleContainer>

<style lang="scss">
	.snapshot-grid {
		display: grid;
		height: 100%;
		grid-template-columns: 1.5fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'a b'
			'a c';
	}

	.snapshot-container {
		position: relative;
		padding: 16px;
		align-items: center;
		transition: color 0.2s ease-in-out;

		&.inactive {
			color: rgba($gray, 0.1);
		}

		&:nth-of-type(1) {
			margin-left: auto;
			grid-area: a;
			border-right: 1px solid $black;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				'a a'
				'b c';

			div {
				padding-top: 16px;

				&:nth-of-type(1) {
					grid-area: a;
					padding: 0;
				}
			}
		}

		&:nth-of-type(2) {
			grid-area: b;
			border-bottom: 1px solid $black;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&:nth-of-type(3) {
			grid-area: c;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	h4 {
		@include heading-xxxsmall;
		margin: 0 0 4px;
		color: $gray;
		max-width: 135px;

		&.narrow {
			max-width: 130px;
		}
	}

	.large {
		@include heading-xlarge;
		font-size: 96px;
		line-height: 96px;
		font-weight: 700;
	}

	.medium {
		@include heading-xlarge;
		font-size: 64px;
		line-height: 64px;
		font-weight: 700;
	}

	.small {
		@include heading-xlarge;
		line-height: 40px;
		font-weight: 700;
	}

	h3 {
		@include label-large;
		font-weight: 600;
		margin: 0 0 16px;
		border-bottom: 4px solid var(--theme-color);
		line-height: 16px;
		width: fit-content;
	}

	p {
		@include paragraph-small;
		margin: 0 0 8px;
	}

	a {
		color: $black;
	}
</style>
