<script lang="ts">
	// fonts
	import '@fontsource/bricolage-grotesque/300.css';
	import '@fontsource/bricolage-grotesque/600.css';

	// components
	import ProjectCard from '$ui/ProjectCard.svelte';
	import PillLabel from '$ui/PillLabel.svelte';

	let mainProject = {
		title: 'Thoughtx',
		description:
			'Community-driven platform for sharing poems, stories, and thoughts. A place where you can read, write, and connect with others.',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s',
		link: '/'
	};

	// lucide down arrow
	import { ArrowDown } from 'lucide-svelte';

	// gsap and text effect from gsap
	import { gsap } from 'gsap/dist/gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	gsap.registerPlugin(TextPlugin);

	let adjectives = [
		'unique',
		'unexpected',
		'interesting',
		'creative',
		'innovative',
		'hilarious',
		'mind-blowing'
	];

	// loop through all adjectives and animate them onMount
	onMount(() => {
		let adjective = document.querySelector('.adjective');
		let adjective_tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

		adjectives.forEach((word) => {
			adjective_tl.to(adjective, {
				delay: 0.5,
				duration: 1,
				text: word
			});
			adjective_tl.to(adjective, {
				delay: 1.5,
				duration: 0.5,
				text: '.....'
			});
		});

		// animate the wobble-motion going up and down and repeat
		let wobble = document.querySelector('.wobble-motion');
		let wobble_tl = gsap.timeline({ repeat: -1, yoyo: true });

		wobble_tl.to(wobble, {
			duration: 1,
			y: 10,
			ease: 'power1.inOut'
		});
	});
</script>

<div class="mb-20">
	<first-section class="spacing flex h-[75vh] flex-col justify-evenly">
		<h1
			class="mx-4 text-center font-display text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl"
		>
			some of the most
			<br />
			<span
				class="adjective rounded-full border-2 border-darkbg bg-lightbg px-6 text-4xl leading-[2] sm:text-6xl sm:leading-[2] md:text-7xl md:leading-[2] dark:border-lightbg dark:bg-darkbg"
				>.....</span
			>
			<br />
			projects live here.
		</h1>
		<div class="wobble-motion text-center">
			<PillLabel bgColor="bg-sky-300" text="curious? scroll down" />
			<ArrowDown class="mx-auto mt-3" />
		</div>
	</first-section>

	<second-section class="block">
		<!-- <image
		class="mx-auto w-1/2"
		src="https://cdn.dribbble.com/userupload/12147043/file/original-d42100b50612a622f75874f1b327f414.png?crop=0x0-3201x2401&resize=400x300&vertical=center"
		alt="Telefonica"
	/> -->
		<p class="mb-4 px-6 font-display text-xl sm:px-12 sm:text-2xl md:px-20 lg:text-3xl">Projects</p>
		<projects class="flex gap-8 overflow-x-auto overflow-y-hidden px-6 pb-4 sm:px-12 md:px-20">
			<ProjectCard project={mainProject} />
			<ProjectCard project={mainProject} />
			<ProjectCard project={mainProject} />
			<ProjectCard project={mainProject} />
		</projects>
	</second-section>
</div>
