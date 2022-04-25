<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	sveltekit:prefetch
	class="hidden border-blue-400 text-base text-gray-200 transition-all
	
	hover:border-b-2
	 
			 hover:text-blue-300
			 hover:no-underline
			 dark:text-gray-200
			 dark:hover:text-blue-300
			 md:inline-block
			 "
	class:font-semibold={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>
