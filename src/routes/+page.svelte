<script lang="ts">
	// fonts
	import '@fontsource/ibm-plex-sans/200.css';
	import '@fontsource/ibm-plex-sans/400.css';

	// components
	import ProjectCard from '$ui/ProjectCard.svelte';
	import PillLabel from '$ui/PillLabel.svelte';

	let mainProject = {
		title: 'Flux Slides',
		description:
			'Git-based presentation tool focused on businesses. Typesetting, easy collaboration, easy management.',
		image: '/flux.png',
		link: 'https://flux-slides.vercel.app/'
	};

	// lucide down arrow
	import { ArrowDown } from 'lucide-svelte';

	// gsap and text effect from gsap
	import { gsap } from 'gsap/dist/gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	import Header from '$layout/Header.svelte';
	gsap.registerPlugin(TextPlugin);

	let adjectives = ['unique', 'unexpected', 'interesting', 'creative', 'innovative', 'hilarious'];

	// loop through all adjectives and animate them onMount
	onMount(() => {
		let cover = document.querySelector('.cover');
		let cover_tl = gsap.timeline({});
		cover_tl.to(cover, {
			duration: 1,
			opacity: 0,
			ease: 'power1.inOut'
		});

		let particleContainer = document.querySelector('.particle-container');

		function createParticle() {
			if (particleContainer == null) return;

			const particle = document.createElement('div');
			particle.className =
				'absolute -z-10 w-0.5 h-16 bg-gradient-to-b from-transparent to-black dark:to-white fadeInOut';
			particle.style.left = `${Math.random() * 100}vw`;
			particle.style.top = `-2vh`;
			console.log(particle.style.left, particle.style.top);
			particleContainer.appendChild(particle);

			setTimeout(() => {
				particle.remove();
			}, 1000); // Adjust the duration as needed
		}

		if (particleContainer) {
			console.log('particle container exists');
			setInterval(createParticle, 500);
			setInterval(createParticle, 493);
			setInterval(createParticle, 477);
		}

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

		// Animate the cube following the mouse
		let cube = document.querySelector('.cube-wrapper');
		window.addEventListener('mousemove', (event) => {
			let x = (event.clientX / window.innerWidth) * 2 - 1;
			let y = (event.clientY / window.innerHeight) * 2 - 1;
			gsap.to(cube, {
				duration: 0.5,
				// rotateX: y * 20,
				// rotateY: -x * 20,
				x: x * 25, // Adjust the multiplier to control the movement range
				y: y * 25, // Adjust the multiplier to control the movement range
				ease: 'power1.out'
			});
		});

		let text = document.querySelectorAll('.headline');
		window.addEventListener('mousemove', (event) => {
			let x = (event.clientX / window.innerWidth) * 2 - 1;
			let y = (event.clientY / window.innerHeight) * 2 - 1;
			gsap.to(text, {
				duration: 0.5,
				// rotateX: y * 20,
				// rotateY: -x * 20,
				x: x * 10, // Adjust the multiplier to control the movement range
				y: y * 10, // Adjust the multiplier to control the movement range
				ease: 'power1.out'
			});
		});

		let text2 = document.querySelectorAll('.headline2');
		window.addEventListener('mousemove', (event) => {
			let x = (event.clientX / window.innerWidth) * 2 - 1;
			let y = (event.clientY / window.innerHeight) * 2 - 1;
			gsap.to(text2, {
				duration: 0.5,
				// rotateX: y * 20,
				// rotateY: -x * 20,
				x: x * 40, // Adjust the multiplier to control the movement range
				y: y * 40, // Adjust the multiplier to control the movement range
				ease: 'power1.out'
			});
		});

		let pic_tl = gsap.timeline({ repeat: -1, yoyo: true });
		let pics = document.querySelectorAll('.pic');
		pics.forEach((pic) => {
			// make each picture show up and disappear
			pic_tl.from(pic, {
				opacity: 0
			});
			pic_tl.to(pic, {
				duration: 1,
				opacity: 1,
				ease: 'power1.inOut'
			});
		});
	});
</script>

<div
	class="cover pointer-events-none absolute left-0 top-0 z-50 h-screen w-full bg-white dark:bg-black"
></div>

<div class="mb-20">
	<first-section
		class="relative flex h-[85vh] flex-col justify-center overflow-hidden text-center font-display text-5xl font-extralight uppercase sm:text-6xl md:text-7xl lg:text-8xl"
	>
		<div class="particle-container absolute h-screen w-screen"></div>
		<div class="cube-wrapper absolute bottom-[calc(42.5vh-100px)] right-[calc(50vw-100px)]">
			<div class="cube">
				<!-- Creating 6 divs for each face of the cube -->
				<div class="box box1 bg-gradient-to-br from-red-500 to-yellow-500"></div>
				<div class="box box2 bg-gradient-to-br from-orange-500 to-indigo-500"></div>

				<div class="box box3 bg-gradient-to-br from-green-500 to-sky-500"></div>

				<div class="box box4 bg-gradient-to-br from-blue-500 to-pink-500"></div>

				<div class="box box5 bg-gradient-to-br from-yellow-500 to-fuchsia-500"></div>

				<div class="box box6 bg-gradient-to-br from-lime-500 to-blue-500"></div>
			</div>
		</div>
		<h1 class="headline -z-10">the most</h1>
		<h1 class="headline2 adjective z-10 my-16 scale-110">.....</h1>
		<h1 class="headline -z-10">projects</h1>
	</first-section>
	<div class="wobble-motion h-[15vh] text-center">
		<PillLabel bgColor="bg-sky-300" text="curious? scroll down" />
		<ArrowDown class="mx-auto mt-3" />
	</div>

	<Header />

	<second-section
		class="relative mx-4 my-24 flex min-h-[80vh] flex-col justify-between overflow-hidden sm:mx-12"
	>
		<h1 class="dark:text-shadow text-right text-5xl sm:text-8xl">
			Exploration<br />is my middle<br />name
		</h1>
		<img class="pic pic-1 w-60 rotate-2" src="/pic-1.png" alt="me" />
		<img class="pic pic-2 w-60 -rotate-2" src="/pic-2.png" alt="me" />
		<img class="pic pic-3 h-60 rotate-[4deg]" src="/pic-3.png" alt="me" />
		<img class="pic pic-4 h-64" src="/pic-4.jpg" alt="me" />
		<img class="pic pic-6 w-64 rotate-3" src="/pic-6.png" alt="me" />
		<img class="pic pic-5 h-64 -rotate-6" src="/pic-5.png" alt="me" />
		<h2 class="text-shadow w-1/2 text-xl font-extralight sm:text-2xl">
			Software engineer exceptional at problem-solving and unorthodox thinking, working for people
			all over the world.
		</h2>
	</second-section>
	<third-section class="relative mx-20 my-24 flex h-[40vh] items-center">
		<h2 class="text-justify text-xl font-extralight sm:text-2xl">
			I've won international hackathons, built startups, and worked in multiple projects with great
			individuals.<br /><b>What will we make today?</b>
		</h2>
	</third-section>

	<section class="block">
		<!-- <image
		class="mx-auto w-1/2"
		src="https://cdn.dribbble.com/userupload/12147043/file/original-d42100b50612a622f75874f1b327f414.png?crop=0x0-3201x2401&resize=400x300&vertical=center"
		alt="Telefonica"
	/> -->
		<p class="mb-4 px-6 font-display text-xl sm:px-12 sm:text-2xl md:px-20 lg:text-3xl">Projects</p>
		<projects class="flex gap-8 overflow-x-auto overflow-y-hidden px-6 pb-4 sm:px-12 md:px-20">
			<ProjectCard project={mainProject} />
		</projects>
	</section>
</div>

<style>
	.pic {
		@apply absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2;
	}
	.cube {
		width: 200px;
		height: 200px;
		transform-style: preserve-3d;
		animation: rotate 10s forwards linear infinite;
	}
	.box {
		@apply border-2 border-white;
		width: 100%;
		height: 100%;
		position: absolute;
		opacity: 0.8;
	}
	.box1 {
		transform: translateZ(100px);
	}

	.box2 {
		transform: rotateY(90deg) translateX(100px);
		transform-origin: right;
	}

	.box3 {
		transform: rotateY(180deg) translateZ(100px);
	}

	.box4 {
		transform: rotateY(-90deg) translateX(-100px);
		transform-origin: left;
	}

	.box5 {
		transform: rotateX(-90deg) translateY(-100px);
		transform-origin: top;
	}

	.box6 {
		transform: rotateX(90deg) translateY(100px);
		transform-origin: bottom;
	}

	@keyframes rotate {
		0% {
			transform: rotateY(0deg) rotateZ(0deg) rotateX(0deg);
		}
		100% {
			transform: rotateY(360deg) rotateZ(360deg);
		}
	}

	.text-shadow {
		text-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
	}
</style>
