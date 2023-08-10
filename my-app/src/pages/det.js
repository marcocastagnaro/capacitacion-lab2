// pages/det.js
import React from "react";
import DetailPok from "../components/details";
import { useParams } from 'react-router-dom';

function Detail({pokemonDataList}) {
    const { id } = useParams();

    if (pokemonDataList.length === 0) {
        return <div>Loading...</div>;
    }

    const pokemonData = pokemonDataList.find((pokemon) => pokemon.id === parseInt(id));

    if (!pokemonData) {
        return <div>Pokémon not found</div>;
    }

    return (
        <DetailPok pokemonData={pokemonData} />
    );
}

export default Detail;
