<script>
	import { page } from '$app/stores';
	import Commentbox from '$lib/comp/commentbox.svelte';
	import Comments from '$lib/comp/comments.svelte';
	import RelatedPosts from '$lib/comp/related-posts.svelte';
	import ScrollToTop from '$lib/comp/scroll-to-top.svelte';

	$: pathname = $page.url.pathname;
</script>

<slot />

{#if pathname !== '/posts'}
	<hr />
	<div />
	<RelatedPosts {pathname} />
	<Commentbox {pathname} />
	<br /><br />
	<Comments {pathname} />
	<ScrollToTop />
{/if}
