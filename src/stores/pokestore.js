import { writable } from "svelte/store";

export const pokemon = writable([]);

//function 
const fetchPoke = async (limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`; //url
    const res = await fetch(url); //fetching
    const data = await res.json(); //converting data
    const loadedpoke = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }
    });
    pokemon.set(loadedpoke);
}

fetchPoke(190);