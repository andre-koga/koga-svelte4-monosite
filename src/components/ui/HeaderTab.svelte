<script lang="ts">
	import { page } from '$app/stores';

	export let url: string;
	export let title: string;
</script>

<a
	href={url}
	class="flex place-items-center gap-1 rounded-lg px-2 py-1.5 text-xs sm:pl-2 sm:pr-6 sm:text-sm {$page
		.url.pathname === url
		? 'active-link'
		: 'inactive-link'}"
>
	<slot></slot>
	<p>{title}</p>
</a>

<style>
	.active-link {
		@apply bg-lightbg dark:bg-darkbg;
	}

	.inactive-link {
		@apply bg-stone-200 hover:bg-stone-300 dark:border-opacity-5 dark:bg-gray-800 hover:dark:bg-gray-900;
	}
</style>
