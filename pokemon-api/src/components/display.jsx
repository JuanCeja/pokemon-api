import React, { useState } from 'react'

const Pokemon = (props) => {

    const [pokemon, setpokemon] = useState([])

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(data => {
                return data.json()
            })
            .then(data => {
                setpokemon(data.results );
            })
            .catch(Err => console.log('error'));
    }

    return (
        <div>
            <fieldset>
                <legend>display</legend>
                <h1>Pokemon</h1>
                <button onClick={fetchPokemon}>Get Pokemon</button>
                <br />
                <ol>
                    {
                        pokemon.map((pokemon, i) => {
                            return (
                                <li key={i}>{pokemon.name}</li>
                            )
                        })
                    }
                </ol>

            </fieldset>
        </div>
    )
}

export default Pokemon