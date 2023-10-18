<script type="text/javascript">
	export let title;
	export let date;
	import Time from 'svelte-time';
</script>

<article>
	<h1 class="">{title}</h1>
	<p class="italic text-sm -translate-y-4">Published: <Time timestamp={date} /></p>

	<slot />
</article>
