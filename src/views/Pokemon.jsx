import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";

export default function Pokemon() {
const { namePokemon } = useParams();
const navigate = useNavigate();
const [pokemon, setPokemon] = useState({
    name: '',
    img: '',
    stats: [],
    type: [],
});

    useEffect(() => {
        const detallePokemon = async () => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
            );
            const data = await response.json();
                setPokemon({
                    name: data.name,
                    img: data.sprites.other.dream_world.front_default,
                    stats: data.stats,
                    type: data.types,
                    weight: data.weight,
        });
    } catch (error) {
        console.error('Error : ', error);
    }
    };

    detallePokemon();
}, [namePokemon]);

const backToBrowse = () => {
    navigate('/pokemon');
};

return (
    <main>
    <p>Tu Pokemón seleccionado es: {pokemon.name}</p>
    <div className="card">
    <img src={pokemon.img} alt={pokemon.name} />
    <div className="boxCard">
        <h2>{(pokemon.name)}</h2>
        <ul>
            {pokemon.stats.map((stat, index) => (
                <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                </li>
            ))}
        </ul>
    </div>
    </div>
    <Button variant="dark" type="submit" onClick={backToBrowse}>Atrás</Button> 
    </main>
);
}