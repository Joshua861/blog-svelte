<script lang="ts">
	export let pathname: string | null = null;
	export let replyID: string = '';

	async function post(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const response = await fetch('/api/comments/post', {
			method: 'POST',
			body: formData
		});
		location.reload();
	}
</script>

{#if pathname || replyID}
	<form action="/api/comments/post" method="post" on:submit={post}>
		<input type="hidden" name="postID" value={pathname} />
		<input type="hidden" name="replyID" value={replyID} />
		<span class="text-gray-700 dark:text-gray-300">Username</span>
		<input required class="inp" name="username" type="text" />
		<br />
		<span class="text-gray-700 dark:text-gray-300">Content</span>
		<textarea required class="inp" name="content" />
		<br />
		<button type="submit" class="btn">Post</button>
	</form>
{/if}
