<script>
	import ModuleContainer from '$components/module-container.svelte';
	import { breakdown_data } from '$stores/data';

	$: console.log($breakdown_data);
</script>

<ModuleContainer title="race breakdown" />
