<script lang="ts">
	import ListPost from '$lib/comp/list-post.svelte';
	import { onMount } from 'svelte';
	export let data;
	import Time from 'svelte-time';

	let good: any[], bad: any[];

	$: console.log(data.posts);

	onMount(() => {
		good = data.posts.filter((post: any) => post.meta.good === true);
		console.log(good);
		bad = data.posts.filter((post: any) => post.meta.good !== true);
		console.log(bad);
	});
</script>

<svelte:head>
	<title>Posts - Josh's blog</title>
</svelte:head>

<h1>Posts</h1>

{#if good}
	<div class="flex flex-col gap-5">
		{#each good as post}
			<ListPost {post} />
		{/each}
	</div>
{/if}
{#if good?.length != 0 && bad?.length != 0}
	<hr />
{/if}
{#if bad}
	<div class="flex flex-col gap-5">
		{#each bad as post}
			<ListPost {post} />
		{/each}
	</div>
{/if}
