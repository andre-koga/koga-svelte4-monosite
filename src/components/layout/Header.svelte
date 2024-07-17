<script lang="ts">
	// Icons
	import { Sun, Moon, Hammer, Heart } from 'lucide-svelte';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import WebsiteIcon from '$ui/WebsiteIcon.svelte';
	import HeaderPageLink from '$ui/HeaderPageLink.svelte';
	import ScrollToTop from '$ui/ScrollToTop.svelte';

	// Content
	import { pageLinks } from '$constants/header';
	// import { projectLinks } from '$constants/header';
	// import HeaderProjectLink from '$ui/HeaderProjectLink.svelte';

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
	class="header relative z-10 grid grid-cols-3 place-items-center gap-6 px-6 pt-12 lowercase sm:gap-8 sm:px-12 md:px-20 md:pt-16"
>
	<a
		href="/projects"
		style="background-image: linear-gradient(to right, #6ee7b7, #7dd3fc, #a5b4fc, #f0abfc, #fda4af);"
		class="flex gap-1.5 place-self-center justify-self-start rounded-lg px-1.5 py-1 text-lighttext transition-transform hover:scale-95 sm:py-1.5"
	>
		<Hammer class="h-5 w-5" /><Heart class="h-5 w-5" />
	</a>
	<WebsiteIcon />
	<button
		on:click={toggleTheme}
		class="flex gap-1.5 place-self-center justify-self-end rounded-lg bg-darkbg px-1.5 py-1 text-darktext transition-transform hover:scale-95 sm:p-1.5 dark:bg-amber-400 dark:text-lighttext"
		aria-label="Toggle theme"
	>
		<Sun class="h-5 w-5 opacity-40 dark:opacity-100" />
		<Moon class="h-5 w-5 opacity-100 dark:opacity-20" />
	</button>
	<pages-menu
		class="col-span-3 grid w-full grid-cols-2 gap-1.5 rounded-xl bg-darkbg bg-opacity-5 p-1.5 sm:flex sm:flex-wrap dark:bg-lightbg dark:bg-opacity-5"
	>
		{#each pageLinks as { href, text }, i}
			<HeaderPageLink {href} {text} />
		{/each}
	</pages-menu>
</header>

<!-- Big screen only -->
<!-- <pc-header
	class="header opacity-1 relative z-10 hidden items-center gap-8 p-12 lowercase sm:flex md:justify-between"
>
	<left-nav class="flex flex-grow gap-4">
		{#each pageLinks as { href, text }, i}
			<HeaderPageLink href={href} text={text} />
		{/each}
	</left-nav>
	<right-nav class="flex flex-grow place-content-end gap-4">
		<button
			on:click={toggleProjects}
			style="background-image: linear-gradient(to right, #6ee7b7, #7dd3fc, #a5b4fc, #f0abfc, #fda4af);"
			class="flex gap-1.5 rounded-lg px-1.5 py-1 text-lighttext transition-transform hover:scale-95"
			aria-label="Toggle projects"
		>
			<Hammer class="h-4 w-4" /><Heart class="h-4 w-4" />
		</button>
		<button
			on:click={toggleTheme}
			class="rounded-lg bg-darkbg p-1 text-darktext transition-transform hover:scale-95 dark:bg-lightbg dark:text-lighttext"
			aria-label="Toggle theme"
		>
			{#if $theme === 'light'}
				<Moon class="h-4 w-4" />
			{:else}
				<Sun class="h-4 w-4" />
			{/if}
		</button>
	</right-nav>
</pc-header> -->

<gradient class="absolute left-0 top-0 h-6 w-full bg-lightbg dark:bg-darkbg"> </gradient>
<gradient
	class="absolute left-0 top-6 h-[40vh] w-full bg-gradient-to-b from-lightbg to-transparent dark:from-darkbg"
></gradient>
