<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let showButton = false;

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			showButton = true;
		} else {
			showButton = false;
		}
	}

	function topFunction() {
		document.getElementById('html')!.classList.add('scroll-smooth');

		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

		document.getElementById('html')!.classList.remove('scroll-smooth');
	}
</script>

{#if showButton}
	<button
		transition:fly={{ y: 200 }}
		on:click={topFunction}
		class="fixed bottom-4 right-4 p-2 bg-sky-500/20 hover:bg-sky-500/40 transition-all dark:text-white text-black rounded-full backdrop-blur-md"
	>
		<ChevronUp />
	</button>
{/if}

<svelte:window on:scroll={scrollFunction} />
