<script>
	import Nav from '$comp/nav.svelte';
	import { fade } from 'svelte/transition';
	import '../app.postcss';
	export let data;
</script>

<Nav class="w-full" />

{#key data.currentRoute}
	<div
		in:fade={{ duration: 100, delay: 100 }}
		out:fade={{ duration: 100 }}
		class="prose dark:prose-invert prose-gray mx-auto prose-a:decoration-2 prose-a:underline-offset-4 px-5"
	>
		<div class="md:prose-md lg:prose-lg">
			<slot />
		</div>
	</div>
{/key}
