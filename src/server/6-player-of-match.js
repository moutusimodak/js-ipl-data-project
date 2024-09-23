function playerOfMatch(matches) {
    let result = {};
    let topPlayerPerSeason = {};

    for (let i = 0; i < matches.length; i++) {
        const player = matches[i].player_of_match;
        const year = matches[i].season;
     // Initialize  season object if  not exist
        if (!result[year]) {
            result[year] = {};
        }
    
    // Initialize the player's count if not exist
        if (!result[year][player]) {
            result[year][player] = 0;
        }
        result[year][player]++;
    }

    // Find the top player for each season
    for (const year in result) {
        let topPlayer = null;
        let maxAwards = 0;

        for (const player in result[year]) {
            if (result[year][player] > maxAwards) {
                maxAwards = result[year][player];
                topPlayer = player;
            }
        }
        topPlayerPerSeason[year] = { player: topPlayer, awards: maxAwards };
    }

    return topPlayerPerSeason;
}


module.exports = playerOfMatch;
