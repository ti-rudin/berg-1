<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a sveltekit:prefetch
	class="hidden md:inline-block text-gray-200 rounded-lg text-base transition-all  "
	class:font-semibold={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>
