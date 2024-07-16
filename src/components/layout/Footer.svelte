<script lang="ts">
	import ScrollToTop from '$ui/ScrollToTop.svelte';
	import UnimportantLink from '$ui/UnimportantLink.svelte';
</script>

<ScrollToTop />

<footer
	class="flex h-screen flex-col justify-between bg-gradient-to-b from-stone-50 to-stone-200 px-4 pb-20 pt-40 sm:px-12 lg:px-20 dark:from-gray-950 dark:to-gray-800"
>
	<div>
		<p class="pb-8 text-center text-sm text-stone-300">the links don't work yet!</p>
		<p class="rounded-sm pb-6 font-display text-2xl font-bold">Other Resources</p>
		<div class="grid grid-cols-2 justify-start gap-4 sm:grid-cols-2 lg:mr-[50%] lg:grid-cols-3">
			<a href="/">Repository</a>
			<a href="/">Related Projects</a>
			<a href="/">Community</a>
			<a href="/">API Reference</a>
			<a href="/">Blog</a>
			<a href="/">Tools and Libraries</a>
		</div>
	</div>
	<div>
		<div
			class="my-6 rounded-lg bg-stone-200 p-8 text-justify font-text text-sm italic dark:bg-gray-800"
		>
			"The important thing is not to stop questioning. Curiosity has its own reason for existence."
			- Albert Einstein
		</div>
		<div class="bordered flex flex-wrap justify-around gap-4 py-8 text-sm">
			<UnimportantLink />
			<a href="/">Privacy</a>
			<a href="/">Security</a>
			<a href="/">Docs</a>
			<a href="/">Contact</a>
			<a href="/">Manage Cookies</a>
		</div>
		<p class="pt-4 text-center text-xs lowercase text-stone-500 dark:text-gray-400">
			Designed and developed by Koga himself.<br />Much love! (●'◡'●)
		</p>
	</div>
</footer>

<style>
	.bordered {
		background-image: radial-gradient(circle at 1px 1px, rgb(168 162 158) 1px, transparent 0);
		background-size: 12px;
		background-repeat: repeat-x;
	}
</style>
