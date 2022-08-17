<script lang="ts">
	import { table_data, table_mode, table_sort } from '$stores/data';
	import { color_list } from '$stores/colors';
	import { format } from 'd3-format';
	import { flip } from 'svelte/animate';

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

	const getColor = (key) => {
		if (key === 'Total') {
			return `--element-color:${$color_list['all races'][1]}`;
		} else if ($color_list[key]) {
			return `--element-color:${$color_list[key][1]}`;
		} else {
			return '';
		}
	};

	const formatValue = (column, value) => {
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

	const setSort = (e) => {
		const value = e.target.textContent;
		console.log(e);
		if ($table_sort !== value) {
			$table_sort = value;
		}
	};

	$: console.log($table_data);
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
				{#each Object.keys(row) as key, i}
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
			padding-bottom: 20px;
		}
	}

	thead {
		@include heading-xxxsmall;
		color: $gray;

		th {
			padding: 0 12px;
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
		@include heading-xsmall;

		tr {
			transition: background-color 0.2s ease-in-out;

			&:nth-child(even) {
				background-color: $light-gray;
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
