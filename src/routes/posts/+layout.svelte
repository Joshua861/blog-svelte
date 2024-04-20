<script>
	import { page } from "$app/stores";
  import Commentbox from "$lib/comp/commentbox.svelte"
  import Comments from "$lib/comp/comments.svelte";

  $: pathname = $page.url.pathname
</script>

<slot></slot>

{#if pathname !== '/posts'}
<hr /><div />
<Commentbox {pathname} />
<br><br>
<Comments {pathname} />
{/if}