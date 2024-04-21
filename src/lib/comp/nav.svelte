<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Fuse from 'fuse.js';
	import { Github, Globe, Rss, Code2, Menu, Search, X, Star } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import PostIcon from './post-icon.svelte';

	let showMenu = false;
	let searchMenu = false;
	let search: string = '';
	let posts, fuse: any, results;
	let mounted = false;
	let q: string | null;

	onMount(async () => {
		const response = await fetch(`/api/posts`);
		posts = await response.json();
		console.log(posts);
		fuse = new Fuse(posts, { keys: ['meta.title', 'meta.description', 'path', 'meta.tags'] });

		q = $page.url.searchParams.get('q');

		if (q) {
			search = q;
			searchMenu = true;
			updateSearch();
		}

		mounted = true;
	});

	function searchFor(string: string) {
		search = string;
		event?.preventDefault();
		updateSearch();
	}

	function closeSearch() {
		searchMenu = false;
		let s = new URLSearchParams($page.url.searchParams.toString());
		s.set('q', '');
		goto(`?${s.toString()}`);
	}

	function updateSearch() {
		results = fuse.search(search).slice(0, 4);
		console.log(results);
	}

	function doNothing() {
		event!.stopPropagation();
	}

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
	];

	$: activeUrl = $page.url.pathname;

	let scrollTop: any = null;
	let scrollLeft: any = null;

	function disableScroll() {
		if (browser) {
			scrollTop = window.scrollY || window.document.documentElement.scrollTop;
			(scrollLeft = window.scrollX || window.document.documentElement.scrollLeft),
				(window.onscroll = function () {
					window.scrollTo(scrollLeft, scrollTop);
				});
		}
	}

	function enableScroll() {
		if (browser) {
			window.onscroll = function () {};
		}
	}

	$: if (searchMenu) {
		disableScroll();
	} else {
		enableScroll();
	}
</script>

<nav
	class="max-w-[999em] h-fit pb-4 bg-zinc-100/30 dark:bg-zinc-900/30 top-0 prose dark:prose-invert prose-a:text-xl prose-a:no-underline prose-a:font-bold prose-a:mx-4 prose-a:mt-4 prose-a:decoration-2 prose-a:cursor-pointer"
>
	<div class="h-3" />
	<div class=" mx-5">
		<div class="inline-block">
			<a
				class="hover:underline inline-block transition-all {activeUrl == '/'
					? 'dark:text-sky-400 text-sky-600'
					: ''}"
				href="/">/</a
			>
			<a
				class="hover:underline inline-block transition-all {activeUrl == '/posts'
					? 'dark:text-sky-400 text-sky-600'
					: ''}"
				href="/posts/">posts</a
			>
		</div>
		<div class="hidden sm:flex ml-auto float-right">
			{#each links as link}
				<a href={link.href} title={link.name}>
					<svelte:component this={link.icon} class="hover:stroke-sky-500 transition-all" />
				</a>
			{/each}
			<a title="Search posts">
				<button
					on:click={() => {
						searchMenu = !searchMenu;
						updateSearch();
					}}
				>
					<Search class="hover:stroke-sky-500 transition-all" />
				</button>
			</a>
		</div>
		<div class="flex sm:hidden ml-auto float-right">
			<button on:click={() => (showMenu = !showMenu)}>
				<Menu class="my-4 mx-5 hover:stroke-sky-500 transition-all" />
			</button>
			<button
				title="Search posts"
				on:click={() => {
					searchMenu = !searchMenu;
					updateSearch();
				}}
			>
				<Search class="hover:stroke-sky-500 transition-all" />
			</button>
		</div>
	</div>
	<div class="h-3" />

	{#if showMenu}
		<div
			class="rounded-2xl h-fit dark:bg-zinc-800/50 bg-zinc-200/50 m-3 p-5 prose dark:prose-invert"
			transition:slide
		>
			<div class="absolute w-full max-w-screen flex justify-end align-center">
				<button
					on:click={() => {
						showMenu = false;
					}}
				>
					<X class="mr-16 hover:text-sky-500 hover:opacity-100 transition-all opacity-40" />
				</button>
			</div>
			{#each links as link}
				<li class="list-none w-max ml-0">
					<a href={link.href}>
						<svelte:component this={link.icon} class="inline mr-3" />
						<span class="font-normal">{link.name}</span>
					</a>
				</li>
			{/each}
		</div>
	{/if}
</nav>

{#if searchMenu}
	<div
		on:click={closeSearch}
		class="w-screen h-screen absolute top-0 backdrop-blur-md z-20 flex justify-center align-center overflow-hidden"
	>
		<div
			on:click={doNothing}
			class="my-auto p-3 rounded-2xl prose dark:prose-invert w-full max-w-[480px] dark:bg-[#1E1E22] bg-[#EBEBF0] mx-5 z-30"
		>
			<div class="flex">
				<input
					on:input={updateSearch}
					bind:value={search}
					type="text"
					class="inline w-max inp flex-1"
					placeholder="Search posts"
					autofocus
				/>
				<button on:click={closeSearch}>
					<X
						class="opacity-50 my-auto ml-3 aspect-square hover:stroke-sky-500 transition-all hover:opacity-100"
					/>
				</button>
			</div>
			{#if results}
				{#if results.length !== 0}
					<div class="flex flex-col gap-3 pt-3">
						{#each results as post}
							<PostIcon {searchFor} post={post.item} />
						{/each}
					</div>
				{/if}
			{/if}
		</div>
	</div>
{/if}
