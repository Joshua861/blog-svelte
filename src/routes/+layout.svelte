<script>
	import Nav from '$comp/nav.svelte';
	import '../app.postcss';
</script>

<Nav class="w-full" />

<div
	class="prose dark:prose-invert prose-gray mx-auto prose-a:decoration-2 prose-a:underline-offset-4 px-5"
>
	<div class="md:prose-md lg:prose-lg">
		<slot />
	</div>
</div>
