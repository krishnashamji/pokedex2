
// // IMPORTS
// import axios from 'axios';

// URL CONSTRUCTION
let randomINumber = Math.floor(Math.random() * 1025);
const urlToFetch = `https://pokeapi.co/api/v2/pokemon/${randomINumber}`;

// FETCH DATA
async function getPokemonData() {
    try {
        const response = await axios.get(urlToFetch);
        return response;  
    } catch (error) {
        console.error('Error fetching Pokemon data:', error); 
        throw error;  
    }
}

export { getPokemonData }


