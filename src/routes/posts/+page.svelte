<script type="text/javascript">
	export let data;
	import Time from 'svelte-time';
</script>

<h1>Posts</h1>

{#each data.posts as post}
	<h2>
		<a class="font-bold" href={post.path}>
			{post.meta.title}
		</a>
	</h2>
	<p>
		<span class="text-sm text-zinc-500 italic">
			Published <Time class="" timestamp={post.meta.date} />
		</span><br />
		<span class="text-xl">
			{post.meta.description}
		</span>
	</p>
{/each}
