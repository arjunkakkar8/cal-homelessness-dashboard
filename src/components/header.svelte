<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const navItems = [
		{
			name: 'Dashboard',
			path: ''
		},
		{
			name: 'Table',
			path: 'table'
		},
		{
			name: 'Methods',
			path: 'methods'
		},
		{
			name: 'About',
			path: 'about'
		}
	];
</script>

<nav>
	<div>
		<h1><a class="nav-title" href="{base}/">Housing Insecurity</a></h1>
		<ul>
			{#each navItems as item}
				<li>
					<a
						class:active={`${base}/${item.path}`.replace(/\/+$/, '') ===
							$page.url.pathname.replace(/\/+$/, '')}
						href="{base}/{item.path}"
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	nav {
		position: fixed;
		top: 0;
		width: 100%;
		height: $nav-height-mobile;
		border-bottom: 1px solid $gray;
		background-color: $white;
		z-index: 10000;

		@include tablet {
			height: $nav-height-desktop;
		}
	}

	div {
		display: flex;
		height: 100%;
		align-items: flex-end;
	}

	h1 {
		padding-left: 24px;
		margin: 0 16px 0 0;
		border-bottom: 6px solid var(--theme-color);
		transition: border-bottom-color 0.2s ease-in-out;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		margin: 0 0 8px;
		padding: 0;
	}

	.nav-title {
		@include display-small;
		color: $black;
		margin: 0;
	}

	a {
		@include heading-small;
		text-decoration: none;
		color: $gray;
		transition: color 0.2s ease-in-out;
		margin-left: 24px;

		&.active {
			color: $black;
		}
	}
</style>
