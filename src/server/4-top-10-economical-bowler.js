function economicBowler(matches, deliveries) {
    let matchIds = []
    let result = {}
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].season === '2015') {
            matchIds.push(matches[i].id)
        }
    } for (let i = 0; i < deliveries.length; i++) {
        if (matchIds.includes(deliveries[i].match_id)) {
            const bowler = deliveries[i].bowler
            const totalRun = Number(deliveries[i].total_runs)
            // Count  valid balls
            let ball = 0
            if (deliveries[i].wide_runs == 0 && deliveries[i].noball_runs == 0) {
                ball = 1
            }

            // Initialize bowler's data if not  present
            if (!result[bowler]) {
                result[bowler] = { ball: 0, totalRun: 0 }
            }
            result[bowler].ball += ball

            result[bowler].totalRun += totalRun


        }
    }


    const rating = []
    for (const key in result) {
        console.log(result[key]);


        const { totalRun, ball } = result[key];

        let overs = ball / 6

        // Calculate economy rate
        const ecoRate = ((totalRun / overs).toFixed(2));
        rating.push({ key, ecoRate })
    }
    //sorting the economy rate
    rating.sort((a, b) => parseFloat(a.ecoRate) - parseFloat(b.ecoRate));
    // Get the top 10 economical bowlers
    const top10Bowlers = rating.slice(0, 10);

    return top10Bowlers;

}


module.exports = economicBowler;
