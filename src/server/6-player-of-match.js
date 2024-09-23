function playerOfMatch(matches) {

    const awardsBySeason = matches.reduce((acc, match) => {
        const player = match.player_of_match;
        const year = match.season;

        // Initialize the season object if it doesn't exist
        if (!acc[year]) {
            acc[year] = {};
        }

        // Increment the player's count 
        acc[year][player] = (acc[year][player] || 0) + 1;

        return acc;
    }, {});
    // Find  top player for each season
    const topPlayers = Object.keys(awardsBySeason).reduce((acc, year) => {
        const players = awardsBySeason[year];
        const topPlayer = Object.entries(players).reduce((top, [player, awards]) => {
            return awards > top.awards ? { player, awards } : top;
        }, { player: null, awards: 0 });

        acc[year] = topPlayer;
        return acc;
    }, {});

    return topPlayers;
}

module.exports = playerOfMatch;
