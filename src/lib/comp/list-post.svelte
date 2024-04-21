<script lang="ts">
	export let post: any;

	function searchFor(str: string) {
		window.location = `?q=${str}`;
	}
</script>

<div>
	<h3 class="m-0 p-0">
		<a class="font-bold m-0 p-0" href={post.path}>
			{post.meta.title}
		</a>
	</h3>
	<p class="m-0 p-0">
		<span class="text-md">
			{post.meta.description}
		</span>
		<br />
		{#if post.meta.tags}
			{#each post.meta.tags as tag}
				<button
					on:click={() => searchFor(tag)}
					class="text-sm text-zinc-500 hover:dark:text-zinc-100 hover:text-900 hover:underline transition-all pr-2"
				>
					#{tag}
				</button>
			{/each}
		{/if}
	</p>
</div>
