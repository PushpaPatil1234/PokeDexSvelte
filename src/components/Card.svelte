<script>
	export let pokemon;
</script>

<a href={`/poke/${pokemon.id}`} class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-md hover:shadow-lg flex flex-col items-center">
	<img src={pokemon.pic} alt="Pic" class="h-40 w-40"/>
	<h2 class="font-semibold uppercase">{pokemon.id}. {pokemon.name}</h2>
</a>
