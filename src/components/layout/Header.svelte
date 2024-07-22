<script lang="ts">
	// Icons
	import { Sun, Moon, Paintbrush, List } from 'lucide-svelte';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import WebsiteIcon from '$ui/WebsiteIcon.svelte';
	import HeaderPageLink from '$ui/HeaderPageLink.svelte';

	// Function to toggle the theme
	function toggleTheme() {
		theme.update((current) => {
			const newTheme = current === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', newTheme);
			return newTheme;
		});
	}
</script>

<header class="header spacing relative z-10 grid grid-cols-3 place-items-center gap-6 lowercase">
	<button
		on:click={toggleTheme}
		class="flex gap-1.5 justify-self-start rounded-lg bg-amber-400 px-1.5 py-1 text-lighttext transition-transform hover:scale-95 sm:col-span-1 sm:p-1.5 dark:bg-indigo-800 dark:text-darktext"
		aria-label="Toggle theme"
	>
		<Sun class="h-5 w-5 opacity-100 dark:opacity-40" />
		<Moon class="h-5 w-5 opacity-20 dark:opacity-100" />
	</button>
	<WebsiteIcon />
	<a
		href="/projects"
		style="background-image: linear-gradient(to right, #6ee7b7, #7dd3fc, #a5b4fc, #f0abfc, #fda4af);"
		class="flex gap-1.5 justify-self-end rounded-lg px-1.5 py-1 text-lighttext transition-transform hover:scale-95 sm:py-1.5"
	>
		<List class="h-5 w-5" />
		<Paintbrush class="h-5 w-5" />
	</a>
	<anchors-menu
		class="col-span-3 grid w-full grid-cols-2 gap-1.5 rounded-xl bg-darkbg bg-opacity-5 p-1.5 sm:flex sm:flex-wrap dark:bg-lightbg dark:bg-opacity-5"
	>
		ble
		<!-- put all h1's from this page in here -->
	</anchors-menu>
</header>

<gradient class="absolute left-0 top-0 h-6 w-full bg-lightbg dark:bg-darkbg"> </gradient>
<gradient
	class="absolute left-0 top-6 h-[40vh] w-full bg-gradient-to-b from-lightbg to-transparent dark:from-darkbg"
></gradient>
