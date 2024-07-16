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
	class="font-jet text-lighttext dark:bg-darkbg dark:text-darktext"
>
	<Header />

	<main class="relative z-0 min-h-screen">
		<slot />
	</main>

	<Footer />
</div>
