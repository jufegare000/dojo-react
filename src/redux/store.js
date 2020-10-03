import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {GamesReducer, SearchReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// DefaultState
export const defaultGamesState = {
    pokemon: 10,
}
export const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}

// Store
const rootReducers = combineReducers({
    games: GamesReducer,
    seeker: SearchReducer
})

// copiar esta linea si se tiene redux devtools instalado
export const store = createStore(rootReducers, composeWithDevTools(
   applyMiddleware(thunk)
))

// copiar esta linea si no se instalo redux devtools
 //const store = createStore(rootReducers, applyMiddleware(thunk)
 // )

