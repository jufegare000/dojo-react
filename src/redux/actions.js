import Axios from "axios";

export const BuyPokemon = "BUYPOKEMON";
export const ReturnPokemon = "RETURNPOKEMON";

export const FetchPokemonRequest = "FETCHPOKEMONREQUEST";
export const FetchPokemonFailure = "FETCHPOKEMONFAILURE";
export const FetchPokemonSuccess = "FETCHPOKEMONSUCCESS";

export const BuyPokemonAction = (cant) => {
    return {
        type: BuyPokemon,
        payload: cant
    }
}

export const ReturnPokemonActions = (cant) => {
    return {
        type: ReturnPokemon,
        payload: cant
    }
}

export const FetchPokemonRequestAction = () => {
    return {
        type: FetchPokemonRequest
    }
}

export const FetchPokemonSuccessAction = (pokemon) => {
    return {
        type: FetchPokemonSuccess
    }
}

export const FetchPokemonAction = (valor) => {
    return (dispatch) => {
        dispatch(FetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(FetchPokemonSuccessAction([response.data]))
            })
            .catch(error => {
                dispatch(FetchPokemonFailureAction("No se encontro el pokemon"))
            })
    }
}

export const FetchPokemonFailureAction = (error) => {
    return {
        type: FetchPokemonFailure,
        payload: error

    }
}