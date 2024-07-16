<script lang="ts">
	export let href: string;
	export let text: string;
	export let title: string;
	export let gradient: string[];
</script>

<a
	{title}
	style="background-image: linear-gradient(to right, {gradient.join(', ')});"
	class="rounded-lg px-2 text-base uppercase text-black transition-transform hover:scale-95"
	{href}>{text}</a
>
