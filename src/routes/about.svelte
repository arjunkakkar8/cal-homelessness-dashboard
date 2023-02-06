<script>
	import Bio from '$components/bio.svelte';
</script>

<div class="about-container">
	<section id="insecurity">
		<Bio name="Arjun Kakkar" img="images/arjun-compressed.webp">
			<p>
				Arjun is a Data Viz Developer at The DataFace where he builds interactive graphics and
				immersive experiences for companies and non-profit organizations. Combining his training in
				math and storytelling work in journalism, Arjun creates research driven cutting-edge data
				projects for the web.
			</p>
			<p>
				Prior to his work at The DataFace, Arjun has held positions as an Interactive Developer and
				Designer at Wonderful, POLITICO and NJ Advance Media.
			</p>
			<p>He holds a Bachelor’s Degree in Mathematics from Williams College.</p>
		</Bio>
		<Bio name="Gabriella Carmona" img="images/gabby-compressed.webp">
			<p>
				Gabriella is a Master’s student of Urban and Regional Planning at the UCLA Luskin School of
				Public Affairs. She is driven by a passion for combating social and economic injustice —
				from supporting civic leaders in adopting policies that prioritize quality of life, to
				democratizing data that bring to light disparities and empowering everyday citizens with
				practical solutions for inclusion and equity.
			</p>
			<p>
				While pursuing her studies, she serves as a Policy Analyst at the UCLA Latino Policy and
				Politics Institute, developing policy tools and research that help stakeholders participate
				in crucial policy conversations. Previously, she was a Senior Policy Associate at New
				American Economy (NAE), a bipartisan research and advocacy organization dedicated to
				immigration reform. At NAE, she used research to provide direct technical support to local
				governments committed to developing community-based solutions to improve local economic,
				political, and social infrastructure.
			</p>
			<p>
				She holds a Bachelor’s Degree in History and Political Science from Williams College and was
				an undergraduate Mellon Mays Fellow.
			</p>
		</Bio>
	</section>
</div>

<style lang="scss">
	.about-container {
		margin: 0 auto;
		padding: 32px;

		@include desktop {
			max-width: 1120px;
		}
	}

	h2 {
		@include heading-xlarge;
	}

	p {
		@include paragraph;

		strong {
			font-weight: 600;
		}
	}
</style>
