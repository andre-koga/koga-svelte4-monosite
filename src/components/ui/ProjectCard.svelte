<script lang="ts">
	export let project = {
		title: 'Project Title',
		description: 'Project Description',
		image: 'Project Image',
		link: 'Project Link'
	};
</script>

<a href={project.link} class="transition-all hover:scale-[0.98]">
	<project-card
		class="relative flex aspect-video w-[75vw] flex-col justify-end rounded-lg bg-cover bg-center text-darktext"
		style="background-image: url({project.image});"
	>
		<gradient
			class="flex flex-col gap-2 bg-gradient-to-b from-transparent to-[#000000AA] p-6 pt-28 transition-all"
		>
			<p class="hidden overflow-hidden text-justify text-sm sm:block">
				{project.description}
			</p>
		</gradient>
	</project-card>
	<h1 class="mt-1 font-display text-lg sm:text-2xl md:text-4xl">
		{project.title}
	</h1>
</a>
