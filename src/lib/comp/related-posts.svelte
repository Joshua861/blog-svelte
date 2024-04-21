<script lang="ts">
	import Fuse from 'fuse.js';
	import { Star } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let pathname;

	let post;
	let posts: any[] | null;
	let tags;
	let relatedPosts: any[];

	onMount(async () => {
		const response = await fetch('/api/posts');
		posts = await response.json();
		console.log('POSTS', posts);

		post = posts!.find((post) => post.path == `${pathname}/`);

		let fuse = new Fuse(posts, { keys: ['meta.tags'] });
		let tags = '';

		post.meta.tags.forEach((tag) => {
			tags += `${tag} `;
		});

		function searchFor(str: string) {
			window.location = `?q=${str}`;
		}

		console.log(tags);

		relatedPosts = fuse
			.search(tags)
			.filter((_post) => {
				console.log(_post, post);

				return _post.item.path !== post.path;
			})
			.slice(0, 2);
	});
</script>

{#if relatedPosts && posts}
	{#if relatedPosts.length > 0}
		<h3>Related posts</h3>
		<div class="flex flex-col gap-3">
			{#each relatedPosts as post}
				<a class="no-underline hover:dark:text-zinc-100 hover:text-zinc-900" href={post.item.path}>
					<div
						class="bg-zinc-200/50 border border-zinc-500/20 dark:bg-zinc-800/50 rounded-xl hover:bg-sky-300/20 transition-all dark:hover:bg-sky-700/20 p-3"
					>
						<strong class="text-lg">{post.item.meta.title}</strong>
						{#if post.item.meta.good}
							<Star class="inline float-right text-yellow-500 fill-yellow-500" />
						{/if}
						<br />
						<p class="opacity-50 text-md leading-snug m-0 p-0">
							{post.item.meta.description}
						</p>
						{#if post.item.meta.tags}
							{#each post.item.meta.tags as tag}
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
			{/each}
		</div>
		<hr />
	{/if}
{/if}
