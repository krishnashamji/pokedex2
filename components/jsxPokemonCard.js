import React from 'react';

const PokemonCard = (pokemonData) => (
    <div>
        <div id="hide" className="pokemonCard">
            {/* <!-- HEADINGS --> */}
            <div className="heading-row">
                <h1 className="stat">Pokèmon Name</h1>
                <div className="hpStat">
                    <h2 className="stat">00</h2>
                    <h2>HP</h2>
                </div>
            </div>

            {/* <!-- IMAGE --> */}
            <img className="pokemonImg" src="./assets/pokemonImg.png" alt="Pokèmon Image" />

            <div className="divider-h"></div>

            <div className="stats-row">
                <div className="stat-column">
                    <div className="stat-content">
                        <h4>ATT</h4>
                        <h4 className="stat">000</h4>
                    </div>
                    <div className="stat-content">
                        <h4>SAT</h4>
                        <h4 className="stat">000</h4>
                    </div>
                </div>

                <div className="divider-v"></div>

                <div className="stat-column">
                    <div className="stat-content">
                        <h4>DEF</h4>
                        <h4 className="stat">000</h4>
                    </div>
                    <div className="stat-content">
                        <h4>SDF</h4>
                        <h4 className="stat">000</h4>
                    </div>
                </div>

                <div className="divider-v"></div>

                <div className="stat-column">
                    <div className="stat-content">
                        <h4>SPD</h4>
                        <h4 className="stat">00</h4>
                    </div>
                </div>
            </div>

            <div className="divider-h"></div>

            {/* <!-- POWERS --> */}
            <div className="stats-row">
                <div className="stat-column">
                    <h4>MOVES</h4>
                    <h4 className="stat">move 1</h4>
                    <h4 className="stat">move 2</h4>
                </div>

                <div className="divider-v"></div>

                <div className="stat-column">
                    <h4>TYPE</h4>
                    <h4 className="stat">Type 1</h4>
                    <h4 className="stat">Type 2</h4>
                </div>

                <div className="divider-v"></div>

                <div className="stat-column">
                    <h4>ABILITIES</h4>
                    <h4 className="stat">Ability 1</h4>
                    <h4 className="stat">Ability 2</h4>
                </div>
            </div>

            <div className="divider-h"></div>

            {/* <!-- BUTTON --> */}
            <button id="generateButton" className="generateButton">GENERATE</button>

            <div className="divider-h"></div>
        </div>
    </div>
);

export default PokemonCard;


// Same Pokemon card constructed using JSX instead of Vanilla JS
// const pokemonCardTwo = () => {
//     return (
//         <div className="pokemonCard">

//             <div className="heading-row">
//             <h1 className="stat">Pokèmon Name</h1>
//             <div className="hpStat">
//                 <h2 className="stat">{pokemonData.stats[0].base_stat}</h2>
//                 <h2>HP</h2>
//             </div>
//             </div>


//             <img className="pokemonImg" src={pokemonData.sprites.front_default} alt="Pokèmon Image"/>

//              <div className="divider-h"></div>
        
//             <div className="stats-row">
//                 <div className="stat-column">
//                     <div className="stat-content">
//                         <h4>ATT</h4>
//                         <h4 className="stat">{pokemonData.stats[1].base_stat}</h4>
//                     </div>
//                     <div className="stat-content">
//                         <h4>SAT</h4>
//                         <h4 className="stat">{pokemonData.stats[3].base_stat}</h4>
//                     </div>
//                 </div>

//                 <div className="divider-v"></div>

//                 <div className="stat-column">
//                     <div className="stat-content">
//                         <h4>DEF</h4>
//                         <h4 className="stat">{pokemonData.stats[2].base_stat}</h4>
//                     </div>
//                     <div className="stat-content">
//                         <h4>SDF</h4>
//                         <h4 className="stat">{pokemonData.stats[4].base_stat}</h4>
//                     </div>
//                 </div>

//                 <div className="divider-v"></div>

//                 <div className="stat-column">
//                     <div className="stat-content">
//                         <h4>SPD</h4>
//                         <h4 className="stat">{pokemonData.stats[5].base_stat}</h4>
//                     </div>
//                 </div>
//             </div>

//             <div className="divider-h"></div>


//             <div className="stats-row">
//                 <div className="stat-column">
//                     <h4>MOVES</h4>
//                     <h4 className="stat">{pokemonData.moves[0].move.name}</h4>
//                     <h4 className="stat">{pokemonData.moves[1].move.name}</h4>
//                 </div>

//                 <div className="divider-v"></div>

//                 <div className="stat-column">
//                     <h4>ABLITIES</h4>
//                     <h4 className="stat">{pokemonData.abilities[0].ability.name}</h4>
//                     <h4 className="stat">{pokemonData.abilities[1].ability.name}</h4>
//                 </div>
//             </div>

//             <div className="divider-h"></div>


//             <button onClick={generateButton} className="generateButton">GENERATE</button>
            
//             <div className="divider-h"></div>
//         </div>
//     );
// };