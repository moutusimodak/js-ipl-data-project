function strikeRate(matches, deliveries) {
    const res = {};

    const matchId = matches.map(match => match.id);

    deliveries.forEach(delivery => {

        if (matchId.includes(delivery.match_id)) {

            const match = matches.find(m => m.id === delivery.match_id);
            
            const year = match.season;
            const batsman = delivery.batsman;


            if (!res[year]) {
                res[year] = {};
            }

            if (!res[year][batsman]) {
                res[year][batsman] = { runs: 0, balls: 0 };
            }

            if (delivery.noball_runs === '0' && delivery.wide_runs === '0') {
                res[year][batsman].balls += 1;
            }

            res[year][batsman].runs += Number(delivery.batsman_runs);
        }
    });

    const strikeRates = {};


    Object.entries(res).forEach(([year, batsmanData]) => {
        strikeRates[year] = Object.entries(batsmanData).reduce((acc, [batsmanName, { runs, balls }]) => {
            const strikeRate = balls > 0 ? (runs / balls) * 100 : 0
            acc[batsmanName] = strikeRate.toFixed(2);

            return acc;
        }, {});
    });

  return strikeRates


}

module.exports = strikeRate;