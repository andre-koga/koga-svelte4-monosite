<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, TextPlugin);
	}

	let linkElement: HTMLElement | null;

	onMount(() => {
		if (!linkElement) return;

		const underline = linkElement.querySelector('.underline');

		linkElement.addEventListener('mouseenter', () => {
			gsap.to(underline, { width: '100%', duration: 0.5 });
		});

		linkElement.addEventListener('mouseleave', () => {
			gsap.to(underline, { width: 0, duration: 0.5 });
		});
	});
</script>

<a class="rounded px-2 hover:bg-stone-300 dark:hover:bg-gray-700" href="/">
	Terms
	<span class="underline"></span>
</a>

<style>
	a {
		position: relative;
		display: inline-block;
		text-decoration: none;
	}
	.underline {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: currentColor; /* Use the text color */
		transition: width 0.5s ease; /* Fallback for non-JS users */
	}
</style>
