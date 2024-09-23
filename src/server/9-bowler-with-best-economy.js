function bestEconomy(deliveries) {
    const result = {};

    for (let i = 0; i < deliveries.length; i++) {
        // Exclude super overs 
        if (deliveries[i].is_super_over !== '0') {
            const bowlerName = deliveries[i].bowler;

            if (!result[bowlerName]) {
                result[bowlerName] = { totalRuns: 0, totalBalls: 0 };
            }

            if (deliveries[i].wide_runs === '0' && deliveries[i].noball_runs === '0') {
                result[bowlerName].totalBalls++;
            }
            // Get the runs conceded by the bowler
            const runsConceded = Number(deliveries[i].total_runs)

            result[bowlerName].totalRuns += runsConceded;
        }
    }

    let bestEconomyBowler = null;
    let bestEconomyRate = Infinity;

    // Calculate the economy rate for each bowler and determine the best one
    for (const bowler in result) {
        const stats = result[bowler];
        const overs = stats.totalBalls / 6;

        if (overs > 0) {
            const economyRate = stats.totalRuns / overs;

            if (economyRate < bestEconomyRate) {
                bestEconomyRate = economyRate;
                bestEconomyBowler = bowler;
            }
        }
    }


    return {
        bestEconomyBowler: bestEconomyBowler,
        bestEconomyRate: bestEconomyRate
    };
}
module.exports = bestEconomy;