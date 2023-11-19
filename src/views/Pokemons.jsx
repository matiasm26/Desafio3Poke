import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Pokeball from '../componentes/Pokeball';


export default function Pokemons() {
    const [namePokemon, setNamePokemon] = useState('');
    const [namesPokemones, setNamesPokemones] = useState([]);
    const navigate = useNavigate();

    const pokeDetails = () => {
        if (!namePokemon) {
            alert('Por favor, selecciona un Pokemón'); 
        } else {
            navigate(`/pokemons/${namePokemon}`);
        }
    };

const handleSelectChange = ({ target }) => {
    setNamePokemon(target.value);
};

useEffect(() => {
    const pokemonList = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
            const data = await response.json();
            const namesPoke = data.results.map((poke) => poke.name);
            setNamesPokemones(namesPoke);
        } catch (error) {
            console.error('Error : ', error);
            setError('No pudimos cargar la lista de Pokémon! Por favor, intenta de nuevo más tarde.');
        }
    };

    pokemonList();
}, []);

return (
    <div className="boxSelect">
    <form onSubmit={pokeDetails}>
    <Pokeball/>
    <select onChange={handleSelectChange} required>
        <option value="">Selecciona tu Pokemón</option>
        {namesPokemones.map((name, index) => (
            <option key={index} value={name}>
                {name}
            </option>
        ))}
    </select>
    <Button variant="dark" type="submit" onClick={pokeDetails}>Detalles</Button>
    </form>
    </div>
);
}