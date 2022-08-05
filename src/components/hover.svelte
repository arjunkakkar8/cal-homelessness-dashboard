<script lang="ts">
	export let hoverActive;

	let hover, container;
	let mouse = { x: 0, y: 0 };

	const onMouseMove = (e: any) => {
		const containerDims = container.getBoundingClientRect();
		const hoverDims = hover.getBoundingClientRect();

		let x = e.clientX - containerDims.left,
			y = e.clientY - containerDims.top + 20;

		x -= (x * hoverDims.width) / containerDims.width;

		mouse.x = x;
		mouse.y = y;
	};
</script>

<div class="hover-container" on:mousemove={onMouseMove} bind:this={container}>
	<slot name="content" />
	<div
		class="hover"
		class:active={hoverActive}
		bind:this={hover}
		style={`top:${mouse.y}px;left:${mouse.x}px;`}
	>
		<slot name="hover" />
	</div>
</div>

<style lang="scss">
	.hover-container {
		height: 100%;
		width: 100%;
	}

	.hover {
		position: absolute;
		top: 0;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		padding: 12px;
		background-color: $white;
		border: 1px solid $black;
		z-index: 1000;

		&.active {
			opacity: 1;
		}
	}
</style>
