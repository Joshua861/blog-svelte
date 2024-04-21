<script lang="ts">
	import Time from 'svelte-time/src/Time.svelte';

	export let post: any;
</script>

<div>
	<h3 class="m-0 p-0">
		<a class="font-bold m-0 p-0" href={post.path}>
			{post.meta.title}
		</a>
	</h3>
	<p class="mt-1">
		<Time class="text-sm text-zinc-500 italic" timestamp={post.meta.date} />
		<br class="mb-3" />
		<span class="text-md">
			{post.meta.description}
		</span>
	</p>
</div>
