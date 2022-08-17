<script lang="ts">
	import Definition from '$components/index/definition.svelte';
</script>

<div>
	A metric that aims to estimate
	<Definition term="homeless">
		<p>
			Federal, state, and local agencies use different definitions of homelessness, which affects
			eligibility and services available to individuals and families. The United States Department
			of Housing and Urban Development (HUD) definition of homeless is most consequential, given
			that it defines who is eligible for federally-funded homeless assistance programs.
		</p>
		<p>
			The HUD definition includes four categories of homelessness: literally homeless, imminent risk
			of homelessness, homeless under other federal statutes, or fleeing/attempting to flee domestic
			violence. You can find more information about HUD’s definition of homelessness <a
				href="https://www.hudexchange.info/news/huds-definition-of-homelessness-resources-and-guidance/"
				target="_blank"
				rel="noreferrer">here</a
			>.
		</p>
	</Definition>
	and
	<Definition term="doubled up">
		Doubled up refers to individuals sharing the housing of other persons due to loss of housing,
		economic hardship, or a similar reason. While there is no standard definition for doubled up,
		advocates and academics use it to refer to individuals who aren’t encompassed by homelessness in
		the traditional sense but lack stable and permanent housing.
	</Definition>
	populations in
	<strong>California</strong>
	using
	<a href="https://www.cde.ca.gov/ds/sg/homelessyouth.asp" target="_blank" rel="noreferrer"
		>student homelessness data</a
	>.
</div>

<style lang="scss">
	div {
		@include label-large;
		grid-area: explainer;

		a {
			color: $black;
		}
	}

	p {
		margin: 0 0 8px;
	}
</style>
