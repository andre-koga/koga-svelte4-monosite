<script lang="ts">
	// Styles
	import '../app.css';

	// Fonts
	import '@fontsource/bricolage-grotesque';
	import '@fontsource/bricolage-grotesque/500.css';
	import '@fontsource/jetbrains-mono';
	import '@fontsource/inter';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import Footer from '$layout/Footer.svelte';
	import Header from '$layout/Header.svelte';
</script>

<div
	class:bg-light={$theme == 'light'}
	class:bg-dark={$theme == 'dark'}
	class="bg-lightbg font-jet text-lighttext dark:bg-darkbg dark:text-darktext"
>
	<Header />

	<main class="relative z-0 min-h-screen">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.bg-light {
		background-position: center;
		background-image: radial-gradient(
			circle at 2px 2px,
			rgba(000, 000, 000, 0.2) 2px,
			transparent 0
		);
		background-size: 14.14vmin 10vmin;
	}

	.bg-dark {
		background-position: center;
		background-image: radial-gradient(
			circle at 2px 2px,
			rgba(255, 255, 255, 0.2) 2px,
			transparent 0
		);
		background-size: 14.14vmin 10vmin;
	}
</style>
