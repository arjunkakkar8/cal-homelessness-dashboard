<script>
	import { page } from '$app/stores';

	const navItems = [
		{
			name: 'Dashboard',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Methods',
			path: '/methods'
		}
	];
</script>

<nav>
	<div>
		<h1><a class="nav-title" href="/">Housing Insecurity</a></h1>
		<ul>
			{#each navItems as item}
				<li>
					<a class:active={item.path === $page.url.pathname} href={item.path}>
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
		height: $nav-height;
		border-bottom: 1px solid $gray;
		background-color: $white;
		z-index: 1000;
	}

	div {
		display: flex;
		height: 100%;
		align-items: flex-end;
	}

	h1 {
		padding-left: 24px;
		margin: 0 16px 0 0;
		border-bottom: 6px solid $blue-5;
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
