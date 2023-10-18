<script>
	import { Github, Globe, Rss } from 'lucide-svelte';
</script>

<nav
	class="max-w-[999em] h-12 h-10 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-lg sticky top-0 prose dark:prose-invert prose-a:text-xl prose-a:no-underline prose-a:font-bold prose-a:mx-4 prose-a:mt-4 prose-a:decoration-2 prose-a:cursor-pointer"
>
	<div class="h-3" />
	<div class="mx-5">
		<div class="inline">
			<a class="hover:underline" href="/">/</a>
			<a class="hover:underline" href="/posts/">posts</a>
		</div>
		<div class="ml-auto flex float-right">
			<a href="https://github.com/joshua861"
				><Github class="hover:stroke-sky-500 transition-all" /></a
			>
			<a href="https://joshua861.github.io"><Globe class="hover:stroke-sky-500 transition-all" /></a
			>
			<a href="/rss/"><Rss class="hover:stroke-sky-500 transition-all" /></a>
		</div>
	</div>
	<div class="h-3" />
</nav>
