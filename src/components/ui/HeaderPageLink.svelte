<script lang="ts">
	export let href: string;
	export let text: string;
	export let gradient: string[] | null;
</script>

{#if gradient}
	<a
		style="background-image: linear-gradient(to right, {gradient.join(', ')});"
		class="rounded-lg px-1.5 py-0.5 text-center uppercase text-lighttext transition-transform hover:scale-95 sm:px-2.5 md:px-3.5"
		{href}>{text}</a
	>
{:else}
	<a
		class="rounded-lg bg-darkbg bg-opacity-15 px-1.5 py-0.5 text-center lowercase transition-transform hover:scale-95 sm:px-2.5 md:px-3.5 dark:bg-lightbg dark:bg-opacity-15"
		{href}>{text}</a
	>
{/if}
