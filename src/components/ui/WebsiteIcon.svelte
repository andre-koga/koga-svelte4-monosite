<script lang="ts">
	import WhiteFavicon from '$lib/assets/white-icon.svg';
	import Favicon from '$lib/assets/icon.svg';
</script>

<a
	class="flex items-center uppercase gap-4 px-2 mix-blend-difference transition-transform hover:scale-95"
	href="/"
>
	<p class="hidden font-display text-xl text-lighttext sm:block dark:text-darktext">Andre</p>
	<img src={Favicon} alt="Website's icon" class="block h-8 w-8 sm:h-9 sm:w-9 dark:hidden" />
	<img src={WhiteFavicon} alt="Website's icon" class="hidden h-8 w-8 sm:h-9 sm:w-9 dark:block" />
	<p class="hidden font-display text-xl text-lighttext sm:block dark:text-darktext">Koga</p>
</a>
