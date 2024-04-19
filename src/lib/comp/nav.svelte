<script>
	import { Github, Globe, Rss, Code2, Menu, X } from 'lucide-svelte';
	import { slide, fade } from 'svelte/transition';
	let showMenu = false;
	function enableMenu() {
		showMenu = true;
	}
	function disableMenu() {
		showMenu = false;
	}
	function doNothing() {}
</script>

{#if showMenu}
	<div
		class="w-screen h-screen prose dark:prose-invert transition-all fixed z-10 backdrop-blur-md prose-a:no-underline flex justify-end"
		on:click={disableMenu}
	>
		<div
			class="absolute h-screen bg-neutral-200 dark:bg-neutral-800 w-10/12 p-0 m-0 z-20 drop-shadow-xl"
			transition:slide={{ axis: 'x', duration: 100 }}
			on:click={doNothing}
		>
		<div class="flex justify-end align-middle">

			<button on:click={disableMenu}><X class="m-3" size="32" /></button>
		</div>
			<div class="pl-5 text-2xl [&>*]:my-2" transition:fade={{ delay: 75 }}>
				<a href="/rss/">
					<Rss class="inline-block pr-2" /> RSS
				</a><br />
				<a href="https://joshua861.github.io"
					><Globe class="inline-block pr-2" />My other websites</a
				><br />
				<a href="https://github.com/joshua861"><Github class="inline-block pr-2" />My GitHub</a><br
				/>
				<a href="https://github.com/joshua861/blog-svelte"
					><Code2 class="inline-block pr-2" />Source code</a
				><br />
			</div>
		</div>
	</div>
{/if}

<nav
	class="sticky max-w-[999em] h-12 h-fit pb-4 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-lg top-0 prose dark:prose-invert prose-a:text-xl prose-a:no-underline prose-a:font-bold prose-a:mx-4 prose-a:mt-4 prose-a:decoration-2 prose-a:cursor-pointer"
>
	<div class="h-3" />
	<div class=" mx-5">
		<div class="inline-block">
			<a class="hover:underline inline-block" href="/">/</a>
			<a class="hover:underline inline-block" href="/posts/">posts</a>
		</div>
		<div class="hidden sm:flex ml-auto float-right">
			<a href="https://github.com/joshua861"
				><Github class="hover:stroke-sky-500 transition-all" /></a
			>
			<a href="https://joshrl.dev"><Globe class="hover:stroke-sky-500 transition-all" /></a
			>
			<a href="/rss/"><Rss class="hover:stroke-sky-500 transition-all" /></a>
			<a class="hidden md:inline" href="https://github.com/joshua861/blog-svelte"
				><Code2 class="hover:stroke-sky-500 transition-all" /></a
			>
		</div>
		<button class="flex sm:hidden ml-auto float-right" on:click={enableMenu}>
			<Menu class="my-4 mx-5 hover:stroke-sky-500 transition-all" />
		</button>
	</div>
	<div class="h-3" />
</nav>
