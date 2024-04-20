<script lang="ts">
	import Time from 'svelte-time/src/Time.svelte';
	import Comment from './comment.svelte';
	import Commentbox from './commentbox.svelte';

	let showReplyBox = false;
	export let comment: any;
</script>

<div>
	<p>
		<strong>{comment.username}</strong>
		<em class="text-sm ml-3 text-zinc-500"><Time timestamp={comment.time} /></em>
		<br />
		{comment.content}
		<br />
		<button on:click={() => (showReplyBox = !showReplyBox)} class="text-zinc-500 hover:underline"
			>reply</button
		>
	</p>
	{#if showReplyBox}
		<div class="p-10 bg-zinc-200/20 dark:bg-zinc-800/20 rounded-xl">
			<Commentbox replyID={comment.id} />
		</div>
	{/if}
	<div class="pl-4 border-l-4 border-zinc-500">
		{#each comment.replies as reply}
			<Comment comment={reply} />
		{/each}
	</div>
</div>
