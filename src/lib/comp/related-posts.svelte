<script lang="ts">
	import Fuse from 'fuse.js';
	import { Star } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import PostIcon from './post-icon.svelte';

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

		let fuse = new Fuse(posts, { keys: ['meta.tags', 'meta.title', 'meta.description'] });
		let tags = '';

		post.meta.tags.forEach((tag) => {
			tags += `${tag} `;
		});

		console.log(tags);

		relatedPosts = fuse
			.search(tags)
			.filter((_post) => {
				console.log(_post, post);

				return _post.item.path !== post.path;
			})
			.slice(0, 2);
	});

	function searchFor(str: string) {
		event?.preventDefault();
		window.location = `?q=${str}`;
	}
</script>

{#if relatedPosts && posts}
	{#if relatedPosts.length > 0}
		<h3>Related posts</h3>
		<div class="flex flex-col gap-3">
			{#each relatedPosts as post}
				<PostIcon {searchFor} post={post.item} />
			{/each}
		</div>
		<hr />
	{/if}
{/if}
