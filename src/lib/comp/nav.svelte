<script>
	import { page } from '$app/stores';
	import { Github, Globe, Rss, Code2, Menu, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let showMenu = false;

	let links = [
		{
			icon: Github,
			name: 'My Github',
			href: 'https://github.com/joshua861'
		},
		{
			icon: Globe,
			name: 'My other websites',
			href: 'https://joshrl.dev'
		},
		{
			icon: Rss,
			name: 'RSS feed',
			href: '/rss'
		},
		{
			icon: Code2,
			name: 'Source code',
			href: 'https://github.com/joshua861/blog-svelte'
		}
	]

	$: activeUrl = $page.url.pathname;
</script>


<nav
	class="max-w-[999em] h-fit pb-4 bg-zinc-100/30 dark:bg-zinc-900/30 top-0 prose dark:prose-invert prose-a:text-xl prose-a:no-underline prose-a:font-bold prose-a:mx-4 prose-a:mt-4 prose-a:decoration-2 prose-a:cursor-pointer"
	>
	<div class="h-3" />
	<div class=" mx-5">
		<div class="inline-block">
			<a class="hover:underline inline-block transition-all {activeUrl == '/' ? 'dark:text-sky-400 text-sky-600' : ''}" href="/">/</a>
			<a class="hover:underline inline-block transition-all {activeUrl == '/posts' ? 'dark:text-sky-400 text-sky-600' : ''}" href="/posts/">posts</a>
		</div>
		<div class="hidden sm:flex ml-auto float-right">
				{#each links as link}
					<a href={link.href} title={link.name}>
					<svelte:component this={link.icon} class="hover:stroke-sky-500 transition-all" />
					</a>
				{/each}
			</div>
			<button class="flex sm:hidden ml-auto float-right" on:click={() => showMenu = !showMenu}>
				<Menu class="my-4 mx-5 hover:stroke-sky-500 transition-all" />
			</button>
		</div>
		<div class="h-3" />
		
		{#if showMenu}
			<div class="rounded-xl h-fit dark:bg-zinc-800 bg-zinc-200 m-3 p-5 prose dark:prose-invert" transition:slide>
				{#each links as link}
				<li class="list-none w-max ml-0">
					<a href={link.href}>
							<svelte:component this={link.icon} class="inline mr-3" /> <span class="font-normal hover:underline">{link.name}</span>
					</a>
				</li>
				{/each}
			</div>
		{/if}
	</nav>