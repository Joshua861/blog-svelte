<script lang="ts">
	export let title: string;
	export let date: string;
	import Time from 'svelte-time';
</script>

<article>
	<h1 class="">{title}</h1>
	<p class="italic text-sm opacity-50 -translate-y-4"><Time timestamp={date} /></p>

	<slot />
</article>
