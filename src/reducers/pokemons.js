import { SET_LOADING, SET_POKEMONS } from '../Actions/types.js';

const initialState = {
  pokemons: [],
  loading: true
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
            case SET_LOADING:
                return {...state, loading: action.payload};
        default:
            return state;
    }
}