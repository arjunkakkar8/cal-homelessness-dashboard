<script>
	import ModuleContainer from '$components/module-container.svelte';
	import { breakdown_data } from '$stores/data';
	import Bars from '$components/bars.svelte';
</script>

<ModuleContainer title="race breakdown">
	<div>
		<Bars mode="thick" data={$breakdown_data.estimated} heading="Housing Insecure" />
		<Bars data={$breakdown_data.doubledup} heading="Doubled Up" />
		<Bars data={$breakdown_data.total} heading="Total Population" />
	</div>
</ModuleContainer>

<style lang="scss">
	div {
		margin: 16px;
	}
</style>
