<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	import '@fontsource/bricolage-grotesque/300.css';
	import { onMount } from 'svelte';
	import Inner from '$lib/assets/inner.svg';
	import DarkInner from '$lib/assets/dark-inner.svg';

	/**
	 * @type {gsap.TweenTarget}
	 */
	let asciiPre = Array(25).fill(null);
	let disableAscii = false;
	let ascii = [
		'@@@@@@@@@@@@@@@@@,,&@@@@@@@@@@@@@@@@@@@@@',
		'@@@@@@@@@@@@@/.........@@@@@@@.........,@',
		'@@@@@@@@@@@@............@@@@.............',
		'@@@@@@@@@@*.............@@@@.............',
		'@@@@@@@@@...............@@@@@............',
		'@@@@@@@,................@@@@@@@.......&@@',
		'@@@@@@..................@@@@@@@@@@@@@@@@@',
		'@@@@,...................@@@@@@@@@@@@@@@@@',
		'@@@.....................@@@@@@.........,@',
		'@,......................@@@@,............',
		'........................@@@@.............',
		'@......................(@@@@@............',
		'@@....................@@@@@@@@@........@@'
	];

	// onMount(() => {
	// 	gsap.from(h1, { duration: 1, y: -100, autoAlpha: 0 });
	// 	gsap.to(h1, { duration: 1, y: 0, autoAlpha: 1 });
	// });
	onMount(() => {
		// startTimeline(process.env.NODE_ENV === 'development');

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.section-2',
				pin: true, // pin the trigger element while active
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: '+=500', // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				snap: {
					snapTo: 'labels', // snap to the closest label in the timeline
					duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
					delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
					ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
				}
			}
		});

		// add animations and labels to the timeline
		tl.addLabel('start')
			.from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
			.addLabel('color')
			.from('.box', { backgroundColor: '#28a92b' })
			.addLabel('spin')
			.to('.box', { rotation: 360 })
			.addLabel('end');
	});

	let jobs = [
		['game designer', '#ef4444'],
		['web developer', '#f59e0b'],
		['problem solver', '#84cc16'],
		['creative thinker', '#14b8a6'],
		['(🐶😺) lover', '#8b5cf6']
	];

	function startTimeline(skip = false) {
		let tl = gsap.timeline({
			onComplete: tlDone
		});
		tl.to('.asciiQuote', {
			duration: 1,
			opacity: 1
		});
		// delay 1s for the next animation
		tl.to('.asciiQuote', {
			duration: 1.5,
			opacity: 1
		});
		for (let i = 0; i < ascii.length; i++) {
			tl.to(asciiPre[i], {
				duration: 0.2,
				text: 'loading',
				color: 'red'
			});
			tl.to(asciiPre[i], {
				duration: 0.15,
				text: ascii[i],
				color: 'white'
			});
		}
		tl.to('.header', {
			duration: 0,
			opacity: 0,
			y: '10%'
		});
		tl.to('.hero-name', {
			duration: 0,
			opacity: 0,
			y: '10%'
		});
		tl.to('.hero-name-2', {
			duration: 0,
			opacity: 0,
			y: '10%'
		});
		tl.to('.asciiSection', {
			delay: 0.4,
			duration: 0.8,
			y: '-100%'
		});

		tl.to('.header', {
			duration: 0.5,
			opacity: 1,
			y: '0%'
		});
		tl.to(
			'.hero-name',
			{
				duration: 0.5,
				opacity: 1,
				y: '0%'
			},
			'<0.3'
		);
		tl.to(
			'.hero-name-2',
			{
				duration: 0.5,
				opacity: 1,
				y: '0%'
			},
			'<0.3'
		);
		tl.progress(skip ? 0.9 : 0);
	}

	function tlDone() {
		disableAscii = true;

		let tl2 = gsap.timeline({
			defaults: { duration: 2 },
			repeat: -1
		});

		jobs.forEach((job) => {
			tl2.to('.hero-jobs', {
				text: job[0],
				color: job[1]
			});
			tl2.to('.hero-jobs', {
				delay: 2,
				text: ''
			});
		});
	}
</script>

<!-- <section
	class="asciiSection fixed -m min-h-screen w-screen l-0 t-0 bg-black text-white z-20 flex flex-col place-content-center items-center"
	style:pointer-events={disableAscii ? 'auto' : 'none'}
>
	<div class="m-2 text-sm sm:text-base text-center text-gray-500">
		<p class="asciiQuote opacity-0">for every question there are many answers</p>
		<br />
		{#each ascii as line, i}
			<p bind:this={asciiPre[i]} class="text-black"></p>
		{/each}
		<br />
		<p class="asciiQuote opacity-0">for every answer there are more questions</p>
		<br />
	</div>
</section> -->

<div>
	<section
		class="relative flex min-h-[70vh] flex-col place-content-center items-center sm:min-h-[90vh]"
	>
		<img
			class="absolute bottom-1/2 right-1/2 hidden aspect-square h-[65vmin] translate-x-1/2 translate-y-1/2 sm:h-[60vmin] md:h-[50vh] dark:block"
			src={DarkInner}
			alt="Inner icon"
		/>
		<img
			class="absolute bottom-1/2 right-1/2 block aspect-square h-[65vmin] translate-x-1/2 translate-y-1/2 sm:h-[60vmin] md:h-[50vh] dark:hidden"
			src={Inner}
			alt="Inner icon"
		/>
		<!-- <img
		class="z-[6] absolute right-[20%] bottom-[25%] translate-x-1/2 translate-y-1/2"
		bind:this={rose}
		src={Rose}
		alt="Rose decor"
		/>
		<img
		class="boomerang z-[6] absolute right-[75%] bottom-[55%] translate-x-1/2 translate-y-1/2"
		bind:this={boomerang}
		src={Boomerang}
		alt="Boomerang decor"
		/> -->
		<h1
			class="hero-name mx-[4vw] text-center font-display text-[16vw] leading-[0.9] opacity-0 md:text-nowrap md:font-light"
		>
			Andre Koga
		</h1>
		<br />
		<h2
			class="hero-name-2 mx-[4vw] text-center font-display text-[8vw] leading-[0.9] opacity-0 md:text-nowrap md:font-light"
		>
			a.k.a. <span class="hero-jobs text-black dark:text-white"></span>
		</h2>
	</section>
	<section class="section-2 -m flex min-h-screen place-content-center items-center">
		<div class="box rounded-lg bg-red-500">hey im a box!</div>
	</section>
</div>

<!-- <style>
	.hidden-text {
		visibility: hidden;
		opacity: 0;
		transition:
			opacity 0.5s,
			visibility 0.5s;
	}
	.visible-text {
		visibility: visible;
		opacity: 1;
		transition:
			opacity 0.5s,
			visibility 0.5s;
	}
</style> -->
