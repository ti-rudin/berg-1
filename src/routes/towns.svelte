<script>
	import { getTowns } from '../components/api.js';
	import { isDarkFlag, isAdmin, localTown, screenmode } from '$lib/siteConfig';

	async function towns() {
		rawtowns = await getTowns();
	}
	export let rawtowns;

	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	//
	onMount(() => {
		towns();
	});

function selectTown(town){
$localTown = town;
}

</script>

<div class="mx-auto mt-2 mb-4 flex max-w-[62rem] flex-col items-start justify-center">
	{#if rawtowns}
		{#each rawtowns as town}
			
        <div class="cursor-pointer rounded ring-blue-600 transition-all hover:ring-2 bg-blue-400/30 hover:bg-blue-400/50 focus:outline-none 
        mx-auto flex w-full p-2 text-center  sm:flex-col
        mb-2 sm:mr-2
        "
            on:click={selectTown(town)}>{town.name}</div>
		{/each}
	{/if}
</div>
