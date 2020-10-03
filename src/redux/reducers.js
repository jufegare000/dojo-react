import {BuyPokemon, ReturnPokemon, FetchPokemonRequest, FetchPokemonFailure, FetchPokemonSuccess} from "./actions";
import {defaultGamesState, initialStateSearch} from './store';

export const GamesReducer =  (state = defaultGamesState, action) => {
    switch (action.type) {
        case BuyPokemon:{
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case ReturnPokemon:
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        default: return state;
    }
}

export const SearchReducer = (state = initialStateSearch, action) => {
    switch (action.type) {
        case FetchPokemonRequest:
            return {
                ...state,
                loading: true
            }
        case FetchPokemonSuccess:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case FetchPokemonFailure:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}