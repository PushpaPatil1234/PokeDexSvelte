

<script>
import {pokemon} from '../stores/pokestore';
import Card from '../components/Card.svelte';

let searchQuery = "";
let searchResults = [];

$: {
    if(searchQuery){
        searchResults = $pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))

    } else{
        searchResults = [...$pokemon]
    }
}
</script>


<h1 class="3x3 my-8 font-extrabold text-center uppercase underline">Svelte Kit PokeDex</h1>
<input type="text" placeholder="Search Pokemon" bind:value={searchQuery} class="w-full rounded-md border-2 text-md my-5 mx-4 p-4 border-gray-200">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1 m-3">

    {#if searchResults.length == 0}
        No Results Found

    {:else}
        {#each searchResults as poke}
        <Card pokemon={poke}/>
        {/each}
    {/if}
</div>
    