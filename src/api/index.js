import axios from "axios"

export const getPokemons = () =>{
    return axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.data.results)
        .catch((error) => console.error("Error fetching Pokemon data:", error))
}

export const getPokemonDetails = (pokemon) => {
    return axios
        .get(pokemon.url)
        .then((response) => response.data)
        .catch((error) => console.error("Error fetching Pokemon details:", error))
}



