<script lang="ts">
	export let term: string;

	let hoverActive: boolean = false;
	const activateHover = () => (hoverActive = true);
	const deactivateHover = () => (hoverActive = false);
</script>

<span on:mouseenter={activateHover} on:mouseleave={deactivateHover}>
	{term}
	<div
		class="definition-hover"
		class:active={hoverActive}
		on:mouseenter={activateHover}
		on:mouseleave={deactivateHover}
	>
		<slot />
	</div>
</span>

<style lang="scss">
	span {
		position: relative;
		border: 1px dashed var(--theme-color);
		border-radius: 8px;
		padding-left: 4px;
		margin-right: 4px;
		cursor: pointer;
	}

	.definition-hover {
		width: 300px;
		position: absolute;
		top: 100%;
		left: 50%;
		margin-top: 2px;
		transform: translate(-50%);
		background-color: $white;
		border: 1px solid $black;
		padding: 12px;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		pointer-events: none;
		z-index: 1000;
		@include paragraph-small;

		&.active {
			opacity: 1;
			pointer-events: auto;
		}
	}
</style>
