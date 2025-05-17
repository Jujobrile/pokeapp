import { getPokemonDetails } from "../api";
import { SET_POKEMONS, SET_LOADING } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

//Creamos y exportamos nuestro action creator. Esuna función que retorna otra función.
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
  };
