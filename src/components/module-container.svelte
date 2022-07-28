<script lang="ts">
	export let title: string;
</script>

<div class="module-container" style={`grid-area: ${title.replace(' ', '-')}`}>
	<h2>{title}</h2>
	<div class="content-wrapper">
		<slot />
	</div>
</div>

<style lang="scss">
	.module-container {
		display: flex;
		flex-direction: column;
	}

	h2 {
		@include heading-xlarge;
		margin: 0;
		width: fit-content;
		border-bottom: 6px solid var(--theme-color);
		transition: border-bottom-color 0.2s ease-in-out;
	}

	.content-wrapper {
		flex-grow: 1;
		border: 1px solid $black;
		position: relative;
	}
</style>
