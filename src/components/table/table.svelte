<script lang="ts">
	import { table_data, table_mode, table_sort } from '$stores/data';
	import { color_list } from '$stores/colors';
	import { format } from 'd3-format';
	import { flip } from 'svelte/animate';
	import type { DomEvent } from 'leaflet';

	const headers = [
		'County',
		'Population',
		'Total',
		'White',
		'Latino',
		'Black',
		'AAPI',
		'AIAN',
		'Two or More'
	];

	const getColor = (key: typeof headers[number]) => {
		if (key === 'Total') {
			return `--element-color:${$color_list['all races'][1]}`;
		} else if ($color_list[key as keyof typeof $color_list]) {
			return `--element-color:${$color_list[key as keyof typeof $color_list][1]}`;
		} else {
			return '';
		}
	};

	const formatValue = (column: typeof headers[number], value: number) => {
		switch (column) {
			case 'County':
				return value;
			case 'Population':
				return format('.2s')(value);
			default:
				if ($table_mode === 'counts') {
					return format('.2s')(value);
				} else {
					return format('.1%')(value);
				}
		}
	};

	const setSort = (e: MouseEvent) => {
		const el = e.target as HTMLButtonElement;

		if (el?.textContent && $table_sort !== el.textContent) {
			$table_sort = el.textContent;
		}
	};
</script>

<table>
	<thead>
		<tr class="table-title">
			<th colspan="2" />
			<th colspan="7">Housing Insecure Estimates</th>
		</tr>
		<tr>
			{#each headers as header}
				<th>
					{#if header !== 'County'}
						<button
							on:click={setSort}
							class:active={$table_sort === header}
							style={getColor(header)}
						>
							{header}
						</button>
					{:else}
						{header}
					{/if}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each $table_data as row (row.County)}
			<tr animate:flip={{ duration: (d) => 20 * Math.sqrt(d) }}>
				{#each Object.keys(row) as _, i}
					<td>
						{formatValue(headers[i], row[headers[i]])}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		display: block;
		width: 100%;
		grid-area: table;
		border-collapse: collapse;
		overflow-x: auto;
		white-space: nowrap;

		@include desktop {
			display: table;
			max-width: 100%;
		}
	}

	.table-title {
		th {
			padding: 20px 0;
		}
	}

	thead {
		@include heading-xxxsmall;
		color: $gray;
		position: sticky;
		top: $nav-height-mobile;
		background-color: $white;
		z-index: 5;

		@include desktop {
			top: $nav-height-desktop;
		}

		th {
			padding: 0 12px 12px;
		}
	}

	button {
		@include heading-xxxsmall;
		padding: 4px 6px;
		color: $gray;
		background-color: unset;
		border: 1px solid var(--element-color, $gray);
		border-radius: 12px;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

		&.active {
			background-color: var(--element-color, $gray);
			color: white;
		}
	}

	tbody {
		@include paragraph-large;

		tr {
			transition: background-color 0.2s ease-in-out;

			&:nth-child(even) {
				background-color: $light-gray;
			}

			&:nth-child(odd) {
				background-color: $white;
			}

			td {
				padding: 16px 12px;
			}

			td:not(:first-of-type) {
				text-align: center;
			}

			td:nth-of-type(2) {
				border-right: 1px solid $black;
			}
		}
	}
</style>
