import { getPokemonData } from "./network/network.js";
import { generatePokemonCard } from "./components/pokemonCard.js";


// LOAD POKEMON CARD
const pokemonData = await getPokemonData();

let linkToBody = document.getElementById('container');

linkToBody.appendChild(generatePokemonCard(pokemonData.data));


// GENERATE BUTTON 
let linkToButton = document.getElementById('generateButton')

// linkToButton.onclick = async () => {
//     try {
//         const newPokemonData = await getPokemonData();
//         linkToBody.appendChild(generatePokemonCard(newPokemonData.data));
//     } catch (error) {
//         console.error('Error fetching Pokemon data:', error);
//     }
    
// }

const generateButton = async () => {
    try {
        const newPokemonData = await getPokemonData();
        linkToBody.appendChild(generatePokemonCard(newPokemonData.data));
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
}



  
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// // Get a reference to the container where you want to render the React app
// const container = document.getElementById('container');

// // Create a root
// const root = createRoot(container);

// // Render the app
// root.render(pokemonCardTwo)

