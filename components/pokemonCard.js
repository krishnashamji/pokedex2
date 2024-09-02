const generatePokemonCard = (pokemonData) => {
    // POKEMON CARD
    const pokemonCard = document.createElement('div');
    pokemonCard.className = 'pokemonCard'

    // HEADING ROW
    // H1 HEADING
    const headingRow = document.createElement('div');
    headingRow.className = 'heading-row'
    const headingText = document.createElement('h1');
    headingText.textContent = pokemonData.name;
    headingText.className = 'stat'
    headingRow.appendChild(headingText);
    pokemonCard.appendChild(headingRow);

    // HP STAT
    const hpStat = document.createElement('div');
    hpStat.className = 'hpStat'
    const hpNumber = document.createElement('h2')
    hpNumber.textContent = pokemonData.stats[0].base_stat;
    hpNumber.className = 'stat'
    const hpTitle = document.createElement('h2')
    hpTitle.textContent = 'HP';
    hpStat.appendChild(hpNumber);
    hpStat.appendChild(hpTitle);
    headingRow.appendChild(hpStat);

    // IMAGE
    const pokemonImg = document.createElement('IMG')
    pokemonImg.src = pokemonData.sprites.front_default;
    pokemonCard.appendChild(pokemonImg)

    // DIVDER 
    const dividerHOne = document.createElement('div')
    dividerHOne.className = 'divider-h';
    pokemonCard.appendChild(dividerHOne);




    // STATS ROW
    const statsRow = document.createElement('div');
    statsRow.className = 'stats-row';
    pokemonCard.appendChild(statsRow)

    // COLLUMN ONE
    const statsColumnOne = document.createElement('div');
    statsColumnOne.className = 'stat-column';
    statsRow.appendChild(statsColumnOne);

    // Attack Stat

    const statAttackContent = document.createElement('div')
    statAttackContent.className = 'stat-content';
    statsColumnOne.appendChild(statAttackContent);

    const statAttackTitle = document.createElement('h4');
    statAttackTitle.textContent = 'ATT';
    statAttackContent.appendChild(statAttackTitle);

    
    const statAttack = document.createElement('h4');
    statAttack.textContent = pokemonData.stats[1].base_stat;
    statAttack.className = 'stat';
    statAttackContent.appendChild(statAttack);

    // Special Attack Stat

    const statSpecialAttackContent = document.createElement('div')
    statSpecialAttackContent.className = 'stat-content';
    statsColumnOne.appendChild(statSpecialAttackContent);

    const statSpecialAttackTitle = document.createElement('h4');
    statSpecialAttackTitle.textContent = 'SAT';
    statSpecialAttackContent.appendChild(statSpecialAttackTitle);

    const statSpecialAttack = document.createElement('h4');
    statSpecialAttack.textContent = pokemonData.stats[3].base_stat;
    statSpecialAttack.className = 'stat';
    statSpecialAttackContent.appendChild(statSpecialAttack);

    // COLLUMN TWO
    const statsColumnTwo = document.createElement('div');
    statsColumnTwo.className = 'stat-column';
    statsRow.appendChild(statsColumnTwo);

    // Defence

    const statDefenceContent = document.createElement('div')
    statDefenceContent.className = 'stat-content';
    statsColumnTwo.appendChild(statDefenceContent);

    const statDefenceTitle = document.createElement('h4');
    statDefenceTitle.textContent = 'DEF';
    statDefenceContent.appendChild(statDefenceTitle);

    const statDefence = document.createElement('h4');
    statDefence.textContent = pokemonData.stats[2].base_stat;
    statDefence.className = 'stat';
    statDefenceContent.appendChild(statDefence);

    // Sepecial Defence

    const statSpecialDefenceContent = document.createElement('div')
    statSpecialDefenceContent.className = 'stat-content';
    statsColumnTwo.appendChild(statSpecialDefenceContent);

    const statSpecialDefenceTitle = document.createElement('h4');
    statSpecialDefenceTitle.textContent = 'SDF';
    statSpecialDefenceContent.appendChild(statSpecialDefenceTitle);

    const statSpecialDefence = document.createElement('h4');
    statSpecialDefence.textContent = pokemonData.stats[4].base_stat;
    statSpecialDefence.className = 'stat';
    statSpecialDefenceContent.appendChild(statSpecialDefence);

    // COLLUMN THREE
    const statsColumnThree = document.createElement('div');
    statsColumnThree.className = 'stat-column';
    statsRow.appendChild(statsColumnThree);

    // Speed 

    const statSpeedContent = document.createElement('div')
    statSpeedContent.className = 'stat-content';
    statsColumnThree.appendChild(statSpeedContent);
    
    const statSpeedTitle = document.createElement('h4');
    statSpeedTitle.textContent = 'SPD';
    statSpeedContent.appendChild(statSpeedTitle);

    const statSpeed = document.createElement('h4');
    statSpeed.textContent = pokemonData.stats[5].base_stat;
    statSpeed.className = 'stat';
    statSpeedContent.appendChild(statSpeed);


    // DIVDER 
    const dividerHTwo = document.createElement('div')
    dividerHTwo.className = 'divider-h';
    pokemonCard.appendChild(dividerHTwo);



    // POWERS
    const powersRow = document.createElement('div');
    powersRow.className = 'stats-row';
    pokemonCard.appendChild(powersRow);

    // MOVES COLUMN
    const movesColumn = document.createElement('div');
    movesColumn.className = 'stat-column';
    powersRow.appendChild(movesColumn);

    // MOVES
    const movesTitle = document.createElement('h4');
    movesTitle.textContent = 'MOVES';
    movesColumn.appendChild(movesTitle);

    const moveOne = document.createElement('h4');
    moveOne.textContent = pokemonData.moves[0].move.name;
    moveOne.className = 'stat';
    movesColumn.appendChild(moveOne);

    const moveTwo = document.createElement('h4');
    moveTwo.textContent = pokemonData.moves[1].move.name;
    moveTwo.className = 'stat';
    movesColumn.appendChild(moveTwo);

    // ABILITIES COLUMN
    const typesColumn = document.createElement('div');
    typesColumn.className = 'stat-column';
    powersRow.appendChild(typesColumn);

    // ABILITIES
    const typesTitle = document.createElement('h4');
    typesTitle.textContent = 'ABILITIES';
    typesColumn.appendChild(typesTitle);

    const typesOne = document.createElement('h4');
    typesOne.textContent = pokemonData.abilities[0].ability.name;
    typesOne.className = 'stat';
    typesColumn.appendChild(typesOne);

    const typesTwo = document.createElement('h4');
    typesTwo.textContent = pokemonData.abilities[1].ability.name;
    typesTwo.className = 'stat';
    typesColumn.appendChild(typesTwo);


    

    // DIVDER 
    const dividerHThree = document.createElement('div')
    dividerHThree.className = 'divider-h';
    pokemonCard.appendChild(dividerHThree);



    // BUTTON
    const generateButton = document.createElement('button')
    generateButton.textContent = 'GENERATE'
    generateButton.className = 'generateButton';
    pokemonCard.appendChild(generateButton);


    // DIVDER 
    const dividerHFour = document.createElement('div')
    dividerHFour.className = 'divider-h';
    pokemonCard.appendChild(dividerHFour);

    return pokemonCard
}


export { generatePokemonCard }





