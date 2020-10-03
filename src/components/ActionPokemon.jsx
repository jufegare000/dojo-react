import React from 'react';
import { BuyPokemonAction, ReturnPokemonActions } from '../redux/actions';
import { useDispatch } from 'react-redux';


export default function ActionPokemon() {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(BuyPokemonAction(1));
            }}>Comprar Pokemon</button>

            <button className="btn btn-dark btn-sm " onClick={() => {
                dispatch(ReturnPokemonActions(1))
            }}>Devolver Pokemon</button>

        </div>
    )
}