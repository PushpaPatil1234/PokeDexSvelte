<script context="module"> //wil run before loading
    export async function load({page}){
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`; //url
        const res = await fetch(url); //fetching
        const pokemon = await res.json(); //converting data

        return {props: {pokemon}}
    }
</script>

<script>
    export let pokemon;
</script>
<div class="flex flex-col items-center">
<h1 class="4xl uppercase underline text-center my-7 font-bold" >{pokemon.name}</h1>
<img src={pokemon.sprites['front_default']} alt={pokemon.name} class="h-40 w-40"/>
</div>

<div class="flex flex-col items-left m-3 uppercase">
<li><strong>Type: </strong>{pokemon.types[0].type.name}</li>
<li><strong>Height: </strong>{pokemon.height}</li>
<li><strong>Weight: </strong>{pokemon.weight}</li>
</div>