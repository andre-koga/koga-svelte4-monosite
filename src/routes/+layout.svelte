<script lang="ts">
	// Styles
	import '../app.css';

	// Fonts
	import '@fontsource/unbounded';
	import '@fontsource/jetbrains-mono';
	import '@fontsource/inter';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import Footer from '$layout/Footer.svelte';
	import Header from '$layout/Header.svelte';

	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let circle = document.querySelector('.custom-cursor');
		window.addEventListener('mousemove', (event) => {
			gsap.to(circle, {
				duration: 0.3, // Adjust the duration for the delay effect
				x: event.clientX,
				y: event.clientY,
				ease: 'power1.out'
			});
		});
		let circle2 = document.querySelector('.custom-cursor2');
		window.addEventListener('mousemove', (event) => {
			gsap.to(circle2, {
				duration: 0.2, // Adjust the duration for the delay effect
				x: event.clientX,
				y: event.clientY,
				ease: 'power1.out'
			});
		});
	});
</script>

<div
	class="custom-cursor pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white p-4 mix-blend-exclusion sm:scale-100"
></div>
<div
	class="custom-cursor2 pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white p-3.5 mix-blend-exclusion sm:scale-100"
></div>
<div
	class:bg-light={$theme == 'light'}
	class:bg-dark={$theme == 'dark'}
	class="bg-light dark:bg-dark bg-lightbg font-jet text-lighttext dark:bg-darkbg dark:text-darktext"
>
	<main class="relative z-0 min-h-screen">
		<slot />
	</main>

	<Footer />
</div>
