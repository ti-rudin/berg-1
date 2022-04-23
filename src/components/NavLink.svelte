<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a sveltekit:prefetch
	class="hidden text-gray-200 rounded-lg  transition-all  md:inline-block"
	class:font-semibold={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>
