function extraRuns(matches, deliveries) {
    const matchIds = matches
    .filter(match => match.season === '2016')
    .map(match => match.id);


const filteredDeliveries = deliveries
    .filter(delivery => matchIds.includes(delivery.match_id));


const extraRunsPerTeam = filteredDeliveries
    .reduce((acc, delivery) => {
        const teamName = delivery.bowling_team;
        const extraRuns = Number(delivery.extra_runs);

        if (!acc[teamName]) {
            acc[teamName] = 0;
        }
        acc[teamName] += extraRuns;

        return acc;
    }, {});

return extraRunsPerTeam
}

module.exports=extraRuns;
