<script>
	import ModuleContainer from '$components/module-container.svelte';
	import Hover from '$components/hover-static.svelte';
	import { snapshot_data, race } from '$stores/data';
	import { format } from 'd3-format';

	let doubledupInactive = false,
		pointintimeInactive = false;

	$: {
		console.log($snapshot_data);
	}
	$: doubledupInactive = $snapshot_data.doubledup === 0;
	$: pointintimeInactive = $race !== 'all races';
</script>

<ModuleContainer title="snapshot">
	<div class="snapshot-grid">
		<div class="snapshot-container">
			<div>
				<h4>housing insecure estimate</h4>
				<div class="large">{format('.2s')($snapshot_data.estimate)}</div>
			</div>
			<div>
				<h4>rate of insecurity</h4>
				<div class="small">{format('.1%')($snapshot_data.estimate / $snapshot_data.total)}</div>
			</div>
			<div>
				<h4 class="narrow">total population</h4>
				<div class="small">{format('.2s')($snapshot_data.total)}</div>
			</div>
			<Hover />
		</div>

		<div class="snapshot-container" class:inactive={doubledupInactive}>
			<Hover />
			<div>
				<h4>doubled up estimate</h4>
				<div class="medium">
					{doubledupInactive ? 'NA' : format('.2s')($snapshot_data.doubledup)}
				</div>
			</div>
		</div>

		<div class="snapshot-container" class:inactive={pointintimeInactive}>
			<Hover />
			<div>
				<h4>Point in time count</h4>
				<div class="medium">{format('.2s')($snapshot_data.pit)}</div>
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
			//opacity: 0.2;
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
</style>
