<script lang="ts">
	import { onMount } from 'svelte';
	import Comment from './comment.svelte';

	export let pathname: string;
	let comments = [];

	onMount(async () => {
		fetchNotes();
	});

	export async function fetchNotes() {
		const response = await fetch(`/api/comments/get?postID=${encodeURIComponent(pathname)}`);
		console.log(response);

		comments = await response.json();
		console.log(comments);
	}
</script>

{#if comments}
	{#each comments as comment}
		<Comment {comment} />
	{/each}
{/if}

<br />
