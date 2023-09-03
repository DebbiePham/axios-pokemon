import React, { useState } from 'react';
import axios from 'axios';


const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then((response) => {
        console.log(response);
        setPokemonList(response.data.results);
        });
    };

    return (
        
        <div>
            <div class="card shadow  align-items-center">
                <div class="card-body">
                    <div>
                        <button className='btn btn-success mb-5' onClick={fetchPokemon}>Fetch Pokemon</button>
                    </div>
                    {
                        pokemonList.map((pokemon, index) => {
                            return <div key={index} className='d-inline-grid'>
                                <ul>
                                    <li>{pokemon.name}</li>
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokemon; 