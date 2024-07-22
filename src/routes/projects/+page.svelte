<script lang="ts">
	import ProjectCard from '$ui/ProjectCard.svelte';

	import { projectsList } from '$constants/header';
</script>

<div class="spacing mb-20 flex flex-col gap-4 lowercase">
	<h1 class="font-display text-2xl font-bold sm:text-3xl md:text-4xl">Projects</h1>
	<projects class="grid gap-8 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
		{#each projectsList as project}
			<ProjectCard {project} />
		{/each}
	</projects>
</div>
