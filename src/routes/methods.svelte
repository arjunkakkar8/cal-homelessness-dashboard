<div class="methods-container">
	<section id="insecurity">
		<h2>Housing Insecurity Metric</h2>
		<p>
			We calculate the housing insecurity metric using county-level student homelessness counts
			collected and provided by the <a
				href="https://www.cde.ca.gov/ds/ad/dataquest.asp"
				target="_blank">California Department of Education</a
			>. These counts are disaggregated by race and ethnicity and serve as a foundation for the
			scale and racial and ethnic proportions of our housing insecurity counts. We apply a
			multiplier to our county-level counts, which takes the total for student homelessness for each
			racial group and scales them up to estimate the total housing insecure population.
		</p>
		<h3>Understanding student data</h3>
		<p>
			We access California's chronic absenteeism records for the 2019-20 school year through the
			<a href="https://www.cde.ca.gov/ds/ad/dataquest.asp" target="_blank">DataQuest Portal</a>.
			This data is available from K-12 for all public schools in California and disaggregates
			homeless status and race and ethnicity counts for all students and those categorized as
			<a href="https://www.cde.ca.gov/ta/ac/cm/chronabscal.asp" target="_blank"
				>“chronically absent”</a
			>. We use county-level counts since data at more granular geographies (school districts or
			schools) often has redacted data due to privacy concerns.
		</p>
		<h3>Understanding our multiplier</h3>
		<p>
			We calculate our multipliers using the 5-year 2019 American Community Survey (ACS). Using the
			<a
				href="https://nlihc.org/sites/default/files/Quantifying-Doubled-Up-Homelessness.pdf"
				target="_blank">methodology from Richard et al.</a
			>
			We identify and classify individuals from the 5-year 2019 ACS as
			<a href="#doubled-up">“doubled up”</a>. We disaggregate our doubled up population by
			race/ethnicity and age to identify the proportion of student-aged (5-18 years) doubled up
			individuals within each racial/ethnic group. These proportions serve as unique multipliers for
			each racial/ethnic group, which we apply to our homeless student counts to estimate all
			housing insecurity counts.
		</p>
		<p class="note">
			Note: The ACS doubled up population does not include sheltered and unsheltered homeless
			individuals. In California, homeless students are more likely to be doubled up than sheltered
			or unsheltered, so they are likely overrepresented in the multipliers used to calculate
			housing insecurity. This means that our housing insecurity courts likely underestimate the
			housing insecure and homeless population in California.
		</p>
		<p class="note">
			Additionally, we calculate each of our racial group multipliers using state-wide proportions.
			Therefore the estimates by county are only valid insofar as the age distribution of homeless
			individuals of different races for each county resembles the age distribution of homeless
			individuals by race for the entire state.
		</p>
	</section>
	<section id="doubled-up">
		<h2>Doubled Up Estimate</h2>
		<p>
			We calculate our doubled-up counts with the 5-year 2019 American Community Survey (ACS) using
			the methodology from Richard et al. Members of a household in the ACS are considered doubled
			up if they are poor or near poor (at or below 125% of a geographically adjusted poverty
			threshold) and meet any of the following criteria:
		</p>
		<ul>
			<li>
				<strong>Adult children and children-in-law</strong>: Who have children of their own, who are
				married, or who are single but living in an overcrowded situation (i.e., more than two
				people per bedroom)
			</li>
			<li>
				<strong>Grandchildren</strong>: Minor and adult grandchildren, excluding:
				<ul>
					<li>
						Minor grandchildren of the household head when the household head claims responsibility
						for their needs (asked directly by the American Community Survey).
					</li>
					<li>
						Minor grandchildren whose single parent lives at home and is under 18 (i.e., children of
						teenage dependents)
					</li>
				</ul>
			</li>
			<li>
				<strong>Other relatives</strong>: Parents/parents-in-law, siblings/siblings-in-law, cousins,
				aunts/uncles, and other unspecified relatives of the household head who are under the age of
				65, excluding:
				<ul>
					<li>
						Minor siblings of the household head when the minor’s parent is not present (so that the
						household head may assume responsibility for minor siblings).
					</li>
					<li>
						Single and childless adult siblings of the household head, when the household head is
						also single with no children— resembling a roommate situation.
					</li>
					<li>
						Parents/parents-in-law, siblings/siblings-in-law, cousins, aunts/uncles, and other
						unspecified relatives of the household head who are over age 65 and in an overcrowded
						situation
					</li>
				</ul>
			</li>
			<li>
				<strong>Nonrelatives</strong>: Individuals unrelated to the householder, including friends,
				visitors, and other nonrelatives, excluding:
				<ul>
					<li>
						An unmarried partner or their children, roommates/housemates, and roomers/boarders
					</li>
				</ul>
			</li>
		</ul>
		<p>
			We summarize doubled up counts for the whole state and at the county level, when available by
			the 2019 5-year ACS.
		</p>
	</section>
	<section id="pit">
		<h2>Point-in-Time Counts</h2>
		<p>
			We publicly sourced Point-in-Time (PIT) counts from the <a
				href="https://www.hudexchange.info/"
				target="_blank">HUD exchange website</a
			> and local California Continuum of care (CoC) partners, responsible for coordinating regional
			PIT surveys and submitting tabulated counts to HUD.
		</p>
		<p>
			HUD exchange archives PIT counts provided by every CoC as of 2019. CoCs are responsible for
			providing PIT survey tabulations to HUD every year but are only required to survey their total
			(sheltered and unsheltered) homeless population on even-numbered years. CoCs in large metro
			areas count their sheltered and unsheltered homeless populations yearly, but many in smaller
			and more rural areas do not. 2022 is an even-numbered year, meaning that all CoCs were
			obligated to collect their total sheltered and unsheltered counts in this year’s PIT survey.
			However, due to the pandemic, many CoCs were granted exemptions for either not counting
			unsheltered or delaying, or in some cases canceling, their 2022 PIT counts.
		</p>
		<p>
			For those that did not provide 2022 total PIT counts, we deferred to their 2020 PIT survey
			results, which provided their most up-to-date sheltered and unsheltered counts provided by the
			<a
				href="https://www.hudexchange.info/programs/coc/coc-homeless-populations-and-subpopulations-reports/?filter_Year=2020&filter_Scope=CoC&filter_State=CA&filter_CoC=&program=CoC&group=PopSub"
				target="_blank">CoC Homeless Populations and Subpopulations Reports</a
			>.
		</p>
	</section>
</div>

<style lang="scss">
	.methods-container {
		margin: 0 auto;
		padding: 32px;

		@include desktop {
			max-width: 1120px;
		}
	}

	h2 {
		@include heading-xlarge;
	}

	h3 {
		@include paragraph-large;
		margin: 32px 0 0;
	}

	p,
	li {
		@include paragraph;

		&.note {
			font-style: italic;
			font-size: 14px;
		}

		strong {
			font-weight: 600;
		}
	}

	a {
		color: rgba($black, 0.6);
	}
</style>
