<script lang="ts">
	let hoverActive;
</script>

<div class="hover-container">
	<span
		class="marker"
		on:mouseenter={() => (hoverActive = true)}
		on:mouseleave={() => (hoverActive = false)}
	/>
	<div
		class="hover"
		class:active={hoverActive}
		on:mouseenter={() => (hoverActive = true)}
		on:mouseleave={() => (hoverActive = false)}
	>
		<slot />
	</div>
</div>

<style lang="scss">
	.hover-container {
		position: absolute;
		top: 0;
		right: 0;
		height: 0;
		width: 0;
		color: $black;
	}

	.marker {
		position: absolute;
		top: 0;
		right: 0;
		width: 0;
		height: 0;
		border-top: 10px solid var(--theme-color);
		border-right: 10px solid var(--theme-color);
		border-left: 10px solid transparent;
		border-bottom: 10px solid transparent;
		transition: border-color 0.2s ease-in-out;
	}

	.hover {
		position: absolute;
		width: 300px;
		top: 10px;
		right: 10px;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		padding: 12px;
		background-color: $white;
		border: 1px solid $black;
		pointer-events: none;
		z-index: 1000;
		max-height: 300px;
		overflow-y: scroll;

		&.active {
			opacity: 1;
			pointer-events: auto;
		}
	}
</style>
