<script lang="ts">
	// Icons
	import { Sun, Moon, Menu } from 'lucide-svelte';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import WebsiteIcon from '$ui/WebsiteIcon.svelte';

	// Function to toggle the theme
	function toggleTheme() {
		displayProjects = false;
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

<aside
	class="relative z-10 mx-6 mt-8 grid grid-cols-2 gap-4 overflow-hidden transition-all sm:mx-12 sm:grid-cols-4 md:mx-20 md:grid-cols-5 lg:grid-cols-6 {displayProjects
		? 'show-aside'
		: 'hide-aside'}"
>
	<div
		class="flex flex-col gap-3 rounded-xl border border-darkbg border-opacity-20 bg-lightbg p-4 dark:border-lightbg dark:border-opacity-20 dark:bg-darkbg"
	>
		<p class="font-bold">Projects</p>
		<projects class="flex flex-col items-start gap-1">
			<a
				style="background:linear-gradient(to right, #FFA981, #FF73AD, #FF54D0);"
				class="rounded-lg px-2 text-lighttext transition-transform hover:scale-95"
				href="https://th.andrekoga.com"
			>
				thoughts
			</a>
			<a
				style="background:linear-gradient(to right, #DC4C3B, #EF8E2D, #FFB830);"
				class="rounded-lg px-2 text-lighttext transition-transform hover:scale-95"
				href="https://nu.andrekoga.com"
			>
				numerus
			</a>
		</projects>
	</div>
	<div
		class="flex flex-col gap-3 rounded-xl border border-darkbg border-opacity-20 bg-lightbg p-4 dark:border-lightbg dark:border-opacity-20 dark:bg-darkbg"
	>
		<p class="font-bold">Links</p>
		<links class="flex flex-col gap-1 opacity-70">
			<a class="underline-offset-2 hover:underline" href="/resume"> resume </a>
			<a class="underline-offset-2 hover:underline" href="/contact"> contact </a>
			<a class="underline-offset-2 hover:underline" href="/about"> about </a>
		</links>
	</div>
</aside>

<gradient class="absolute left-0 top-0 h-6 w-full bg-lightbg dark:bg-darkbg"> </gradient>
<gradient
	class="absolute left-0 top-6 h-[40vh] w-full bg-gradient-to-b from-lightbg to-transparent dark:from-darkbg"
></gradient>

<style>
	.show-aside {
		@apply h-60 opacity-100;
		pointer-events: auto;
	}

	.hide-aside {
		@apply h-0 opacity-0;
		pointer-events: none;
	}
</style>
