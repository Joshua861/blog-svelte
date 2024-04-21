<script>
	import { Star } from 'lucide-svelte';

	export let post;
	export let searchFor;
</script>

<a class="no-underline hover:dark:text-zinc-100 hover:text-zinc-900" href={post.path}>
	<div
		class="bg-zinc-200/50 border border-zinc-500/20 dark:bg-zinc-800/50 rounded-xl hover:bg-sky-300/20 transition-all dark:hover:bg-sky-700/20 p-3"
	>
		<strong class="text-lg">{post.meta.title}</strong>
		{#if post.meta.good}
			<Star class="hover:animate-spin inline float-right text-yellow-500 fill-yellow-500" />
		{/if}
		<p class="opacity-50 text-md leading-snug m-0 p-0">
			{post.meta.description}
		</p>
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
	</div>
</a>
