<script>
	// import up arrow from lucide
	import { ArrowUp } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let showButton = false;

	// Function to scroll to the top
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Setup scroll event listener
	onMount(() => {
		const handleScroll = () => {
			// Show button if scrolled more than 100px, otherwise hide
			showButton = window.scrollY > 100;
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup on component destroy
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<!-- Scroll to Top Button -->
<top-arrow
	class="scroll-to-top fixed bottom-6 left-6 z-50 hover:scale-90 sm:right-12 md:right-20 md:top-16 {showButton
		? 'show'
		: ''}"
>
	<button
		class="rounded-lg bg-darkbg p-1 text-darktext dark:bg-lightbg dark:text-lighttext"
		on:click={scrollToTop}
		aria-label="Scroll to top"
	>
		<ArrowUp class="h-5 w-5 sm:h-6 sm:w-6" />
	</button>
</top-arrow>

<style>
	.scroll-to-top {
		@apply pointer-events-none opacity-0 transition-all;
	}

	/* Show button when it should be visible */
	.scroll-to-top.show {
		@apply pointer-events-auto cursor-pointer opacity-100;
	}
</style>
