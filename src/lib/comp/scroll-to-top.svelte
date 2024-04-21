<script>
	import { ChevronUp } from 'lucide-svelte';

	let showButton = false;

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			showButton = true;
		} else {
			showButton = false;
		}
	}

	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
</script>

<button
	on:click={topFunction}
	class="fixed bottom-4 right-4 p-2 bg-sky-500/20 dark:text-white text-black rounded-full backdrop-blur-md"
	style="display: {showButton ? 'block' : 'none'}"
>
	<ChevronUp />
</button>

<svelte:window on:scroll={scrollFunction} />
