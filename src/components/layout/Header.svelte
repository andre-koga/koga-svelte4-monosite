<script lang="ts">
	import WhiteFavicon from '$lib/assets/white-icon.svg';
	import Favicon from '$lib/assets/icon.svg';

	// Icons
	import { Sun, Moon, Menu, Home, MessageCircle, Sigma } from 'lucide-svelte';

	// Stores
	import { theme } from '$stores/themeStore.js';

	// Components
	import WebsiteIcon from '$ui/WebsiteIcon.svelte';
	import HeaderTab from '$ui/HeaderTab.svelte';

	// Function to toggle the theme
	function toggleTheme() {
		displayMenu = false;
		theme.update((current) => {
			const newTheme = current === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', newTheme);
			return newTheme;
		});
	}

	// Function to display the menu
	let displayMenu = false;
</script>

<!-- <tabs
	class="relative z-50 flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden bg-stone-200 px-2 py-1 lowercase dark:bg-gray-800"
>
	<HeaderTab url="/" title="home"><Home class="h-4 w-4" /></HeaderTab>
	<HeaderTab url="/thoughtx" title="thoughtx"><MessageCircle class="h-4 w-4" /></HeaderTab>
	<HeaderTab url="/numerus" title="numerus"><Sigma class="h-4 w-4" /></HeaderTab>
</tabs> -->

<header
	class="header sticky top-0 z-50 grid grid-cols-3 items-center justify-items-center gap-4 bg-lightbg p-4 dark:bg-darkbg"
>
	<!-- <button
		on:click={() => (displayMenu = !displayMenu)}
		class="place-self-start rounded-lg bg-darkbg p-1 transition-transform hover:scale-95 sm:p-1.5 dark:bg-lightbg {displayMenu
			? ''
			: 'bg-opacity-20 dark:bg-opacity-20'}"
		aria-label="Toggle menu"
	>
		<Menu class="h-5 w-5 {displayMenu ? 'text-darktext dark:text-lighttext' : ''}" />
	</button> -->

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
			class="bg-amber-400 p-1 text-lighttext transition-transform hover:scale-95 sm:p-1.5 dark:bg-indigo-800 dark:text-darktext"
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
			class="flex items-center bg-black px-2 text-white underline-offset-2 hover:underline"
			href="/contact"><p>contact</p></a
		>
	</nav>
</header>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<aside
	on:mouseleave={() => (displayMenu = false)}
	on:click={() => (displayMenu = false)}
	class="absolute z-10 mx-6 mt-4 grid grid-cols-2 gap-4 overflow-hidden transition-all sm:mx-12 sm:grid-cols-4 md:mx-20 md:grid-cols-5 lg:grid-cols-6 {displayMenu
		? 'show-aside'
		: 'hide-aside'}"
>
	<!-- <div
		class="flex flex-col gap-3 rounded-xl border border-darkbg border-opacity-20 bg-lightbg p-4 dark:border-lightbg dark:border-opacity-20 dark:bg-darkbg"
	>
		<p class="font-bold">Projects</p>
		<projects class="flex flex-col items-start gap-1">
			<a
				style="background:linear-gradient(to right, #FFA981, #FF73AD, #FF54D0);"
				class="rounded-lg px-2 text-lighttext transition-transform hover:scale-95"
				href="https://th.andrekoga.com"
			>
				thoughtx
			</a>
			<a
				style="background:linear-gradient(to right, #DC4C3B, #EF8E2D, #FFB830);"
				class="rounded-lg px-2 text-lighttext transition-transform hover:scale-95"
				href="https://nu.andrekoga.com"
			>
				numerus
			</a>
		</projects>
	</div> -->
	<div
		class="flex flex-col gap-3 rounded-xl border border-darkbg border-opacity-20 bg-lightbg p-4 dark:border-lightbg dark:border-opacity-20 dark:bg-darkbg"
	>
		<p class="font-bold">Links</p>
		<links class="flex flex-col gap-1 opacity-70">
			<a class="underline-offset-2 hover:underline" href="/resume"> resume </a>
			<a
				class="underline-offset-2 hover:underline"
				target="_blank"
				href="https://5hlun88awqk.typeform.com/to/qipNI8gu"
			>
				contact
			</a>
		</links>
	</div>
</aside>

<!-- <gradient class="absolute left-0 top-0 h-6 w-full bg-lightbg dark:bg-darkbg"> </gradient>
<gradient
	class="absolute left-0 top-6 h-[40vh] w-full bg-gradient-to-b from-lightbg to-transparent dark:from-darkbg"
></gradient> -->

<style>
	.show-aside {
		@apply opacity-100;
		pointer-events: auto;
	}

	.hide-aside {
		@apply opacity-0;
		pointer-events: none;
	}
</style>
