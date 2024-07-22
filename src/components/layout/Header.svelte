<script lang="ts">
	// Icons
	import { Sun, Moon, Menu } from 'lucide-svelte';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import WebsiteIcon from '$ui/WebsiteIcon.svelte';

	// Function to toggle the theme
	function toggleTheme() {
		theme.update((current) => {
			const newTheme = current === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', newTheme);
			return newTheme;
		});
	}

	// Function to display the projects
	let displayProjects = false;
</script>

<header class="header spacing relative z-10 grid grid-cols-3 place-items-center gap-4 lowercase">
	<button
		on:click={() => (displayProjects = !displayProjects)}
		class="place-self-start rounded-lg bg-darkbg bg-opacity-20 p-1 transition-transform hover:scale-95 sm:p-1.5 dark:bg-lightbg dark:bg-opacity-20"
		aria-label="Toggle menu"
	>
		<Menu class="h-5 w-5" />
	</button>
	<WebsiteIcon />
	<button
		on:click={toggleTheme}
		class="place-self-end rounded-lg bg-amber-400 p-1 text-lighttext transition-transform hover:scale-95 sm:p-1.5 dark:bg-indigo-800 dark:text-darktext"
		aria-label="Toggle theme"
	>
		<Sun class="block h-5 w-5 dark:hidden" />
		<Moon class="hidden h-5 w-5 dark:block" />
	</button>
</header>

<aside class="relative z-10 px-6 sm:px-12 md:px-20 {displayProjects ? 'show-aside' : 'hide-aside'}">
	hey!
</aside>

<gradient class="absolute left-0 top-0 h-6 w-full bg-lightbg dark:bg-darkbg"> </gradient>
<gradient
	class="absolute left-0 top-6 h-[40vh] w-full bg-gradient-to-b from-lightbg to-transparent dark:from-darkbg"
></gradient>

<style>
	.show-aside {
		opacity: 1;
		pointer-events: auto;
	}

	.hide-aside {
		opacity: 0;
		pointer-events: none;
	}
</style>
