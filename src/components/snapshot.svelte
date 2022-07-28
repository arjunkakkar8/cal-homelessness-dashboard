<script>
	import ModuleContainer from '$components/module-container.svelte';
	import { snapshot_data } from '$stores/data';

	$: console.log($snapshot_data);
</script>

<ModuleContainer title="snapshot" />
