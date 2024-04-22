<script lang="ts">
	import { onMount } from 'svelte';
	import Comment from './comment.svelte';
	import Box from './box.svelte';
	import { CircleDashed, Loader } from 'lucide-svelte';

	export let pathname: string;
	let comments: any[] = [];
	let loaded = false;

	onMount(async () => {
		await fetchComments();
		loaded = true;
	});

	export async function fetchComments() {
		const response = await fetch(`/api/comments/get?postID=${encodeURIComponent(pathname)}`);
		console.log(response);

		comments = await response.json();
		console.log(comments);
	}
</script>

{#if loaded}
	{#if comments.length !== 0}
		{#each comments as comment}
			<Comment {comment} />
		{/each}
	{:else}
		<Box Class="flex justify-center align-middle"><div>No comments... yet?</div></Box>
	{/if}
{:else}
	<Box Class="flex justify-center align-middle"
		><div><Loader class="animate-spin inline mr-3" /> Comments loading...</div></Box
	>
{/if}

<br />
