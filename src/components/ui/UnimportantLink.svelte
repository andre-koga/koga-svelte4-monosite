<script lang="ts">
	export let text: string;
	export let href: string;
	export let target: string;
</script>

<a class="rounded px-2 hover:bg-stone-300 dark:hover:bg-gray-700" {target} {href}>
	{text}
	<span class="underline"></span>
</a>

<style>
	a {
		position: relative;
		display: inline-block;
		text-decoration: none;
	}
	.underline {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: currentColor; /* Use the text color */
		transition: width 0.5s ease; /* Fallback for non-JS users */
	}
</style>
