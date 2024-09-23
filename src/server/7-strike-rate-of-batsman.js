function strikeRate(matches, deliveries) {
    let strikeRates = {};
    let matchIds = {};

    for (let i = 0; i < matches.length; i++) {
        matchIds[matches[i].id] = matches[i].season;

    }

    let batsMan = {};

    for (let i = 0; i < deliveries.length; i++) {
        const season = matchIds[deliveries[i].match_id];
        const batsManName = deliveries[i].batsman;
        // Initialize the season for the batsman if not exist
        if (!batsMan[season]) {
            batsMan[season] = {};
        }
        if (!batsMan[season][batsManName]) {
            batsMan[season][batsManName] = { runs: 0, balls: 0 };
        }
        // Update runs scored by the batsman
        batsMan[season][batsManName].runs += Number(deliveries[i].batsman_runs);

        if (deliveries[i]['wide_runs'] === '0' && deliveries[i]['noball_runs'] === '0') {
            batsMan[season][batsManName].balls += 1;
        }
    }


    for (let season in batsMan) {
        strikeRates[season] = {};
        for (let batsManName in batsMan[season]) {
            const runs = batsMan[season][batsManName].runs;
            const balls = batsMan[season][batsManName].balls;
            // Calculate strike rate

            const strikeRate = balls > 0 ? (runs / balls) * 100 : 0;
            strikeRates[season][batsManName] = strikeRate;
        }
    }

    return strikeRates;
}

module.exports = strikeRate;