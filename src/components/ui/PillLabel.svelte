<script lang="ts">
	export let bgColor: string;
	export let text: string;
</script>

<pill-label
	class="mx-auto inline-block rounded-full bg-opacity-50 px-4 py-1 text-sm dark:bg-opacity-60 {bgColor}"
>
	<p>{text}</p>
</pill-label>
