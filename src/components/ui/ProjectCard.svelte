<script lang="ts">
	export let project = {
		title: 'Project Title',
		description: 'Project Description',
		image: 'Project Image',
		link: 'Project Link'
	};
</script>

<a href={project.link}>
	<project-card
		class="container relative m-6 mx-auto flex aspect-video flex-col justify-end overflow-hidden rounded-lg bg-cover bg-center text-darktext"
		style="background-image: url({project.image});"
	>
		<gradient
			class="flex flex-col gap-2 bg-gradient-to-b from-transparent to-[#000000AA] p-6 pt-16 transition-all"
		>
			<h1 class="font-display text-lg sm:text-2xl md:text-4xl">
				{project.title}
			</h1>
			<p class="overflow-hidden text-ellipsis text-nowrap text-justify text-sm">
				{project.description}
			</p>
		</gradient>
	</project-card>
</a>
