<script>
	import Time from 'svelte-time';

	export let title;
	export let date;
</script>

<svelte:head>
	<title>{title} - Josh's blog</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	<p class="italic text-sm opacity-50 -translate-y-4"><Time timestamp={date} /></p>

	<slot />
</article>
