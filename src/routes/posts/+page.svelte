<script type="text/javascript">
	export let data;
	import Time from 'svelte-time';
</script>

<svelte:head>
	<title>Posts - Josh's blog</title>
</svelte:head>

<h1>Posts</h1>

{#each data.posts as post}
	<h3>
		<a class="font-bold mb-0" href={post.path}>
			{post.meta.title}
		</a>
	</h3>
	<p>
		<span class="text-sm text-zinc-500 italic">
			Published <Time class="" timestamp={post.meta.date} />
		</span><br />
		<span class="text-xl">
			{post.meta.description}
		</span>
	</p>
	<hr />
{/each}
