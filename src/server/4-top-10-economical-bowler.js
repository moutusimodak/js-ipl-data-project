function economicBowler(matches, deliveries) {
    const matchIds = matches
        .filter(match => match.season === '2015')
        .map(match => match.id);


    const result = deliveries.reduce((acc, delivery) => {
        if (matchIds.includes(delivery.match_id)) {
            const ball = delivery.noball_runs === '0' && delivery.wide_runs === '0';

            if (!acc[delivery.bowler]) {
                acc[delivery.bowler] = { balls: 0, runs: 0 };
            }

            if (ball) {
                acc[delivery.bowler].balls++;
            }

            acc[delivery.bowler].runs += Number(delivery.total_runs);
        }
        return acc;
    }, {});
    const economyRates = Object.keys(result).map(bowler => {
        let overs = result[bowler].balls / 6;
        let economyRate = result[bowler].runs / overs;

        return { bowler, economyRate };
    })

    const top10EconomicalBowlers = economyRates
        .sort((a, b) => a.economyRate - b.economyRate)
        .slice(0, 10);

    return top10EconomicalBowlers
}


module.exports = economicBowler;
