<script>
	export let img;

	export let name;
</script>

<div class="bio">
	<div class="image-container">
		<img src={img} alt={name} />
	</div>
	<div>
		<h3>{name}</h3>
		<slot />
	</div>
</div>

<div class="clear-float" />

<style lang="scss">
	.bio {
		margin: 0 0 32px;

		@include tablet {
			display: flex;
		}
	}

	h3 {
		@include paragraph-large;
		margin: 0;
	}

	.image-container {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		overflow: hidden;
		flex-shrink: 0;
		margin-right: 16px;
		float: left;

		@include tablet {
			float: none;
			width: 200px;
			height: 200px;
			margin-right: 32px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
			float: left;
		}
	}

	.clear-float {
		clear: both;
	}
</style>
