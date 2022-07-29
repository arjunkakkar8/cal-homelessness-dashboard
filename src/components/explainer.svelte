<script lang="ts">
	import Definition from '$components/definition.svelte';
</script>

<div>
	A metric that aims to estimate
	<Definition term="homeless">
		As defined by the Department of Housing and Urban Development, people who are living in a place
		not meant for human habitation, in emergency shelter, in transitional housing, or are exiting an
		institution where they temporarily resided are considered homeless.
	</Definition>
	and
	<Definition term="doubled up">
		People who are living in a place not meant for human habitation, in emergency shelter, in
		transitional housing, or are exiting an institution where they temporarily resided.
	</Definition>
	populations in
	<strong>California</strong>
	using
	<a href="http://example.com" target="_blank" rel="noreferrer">student homelessness data</a>.
</div>

<style lang="scss">
	div {
		grid-area: explainer;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: 0.005em;

		a {
			color: $black;
		}
	}
</style>
