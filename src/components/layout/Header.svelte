<script lang="ts">
	import WhiteFavicon from '$lib/assets/white-icon.svg';
	import Favicon from '$lib/assets/icon.svg';

	// Icons
	import { Sun, Moon } from 'lucide-svelte';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Function to toggle the theme
	function toggleTheme() {
		theme.update((current) => {
			const newTheme = current === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', newTheme);
			return newTheme;
		});
	}
</script>

<header
	class="header sticky top-0 z-50 grid grid-cols-3 items-center justify-items-center gap-4 bg-lightbg p-4 dark:bg-darkbg"
>
	<a class="justify-self-start px-2 uppercase" href="/">
		<p class="font-display text-xl text-lighttext sm:block dark:text-darktext">Andre</p>
	</a>
	<a href="/">
		<img src={Favicon} alt="Website's icon" class="block h-8 w-8 sm:h-9 sm:w-9 dark:hidden" />
		<img src={WhiteFavicon} alt="Website's icon" class="hidden h-8 w-8 sm:h-9 sm:w-9 dark:block" />
	</a>
	<a class="gap-4 justify-self-end px-2 uppercase" href="/"
		><p class="font-display text-xl text-lighttext sm:block dark:text-darktext">Koga</p></a
	>
	<nav
		class="col-span-3 flex items-stretch justify-start gap-4 place-self-start px-1 sm:px-2 md:px-4 lg:px-6"
	>
		<button
			on:click={toggleTheme}
			class="cursor-none bg-amber-400 p-1 text-lighttext transition-transform hover:scale-95 sm:p-1.5 dark:bg-indigo-800 dark:text-darktext"
			aria-label="Toggle theme"
		>
			<Sun class="block h-4 w-4 dark:hidden" />
			<Moon class="hidden h-4 w-4 dark:block" />
		</button>
		<a
			class="flex items-center bg-black px-2 text-white underline-offset-2 hover:underline"
			href="/resume"><p>resume</p></a
		>
		<a
			target="_blank"
			class="flex items-center bg-black px-2 text-white underline-offset-2 hover:underline"
			href="https://5hlun88awqk.typeform.com/to/qipNI8gu"><p>contact</p></a
		>
	</nav>
</header>
