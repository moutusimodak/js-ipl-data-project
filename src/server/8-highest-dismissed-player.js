function dismissedByAnotherPlayer(deliveries) {
    const res = {};
    let maxDismissed = 0;
    let topBowler = '';
    let topBatsman = '';


    for (let i = 0; i < deliveries.length; i++) {
        let bowlerName = deliveries[i].bowler;
        let batsManName = deliveries[i].batsman;
        let dismissedPlayer = deliveries[i].player_dismissed;
        // Check if a player was dismissed
        if (dismissedPlayer) {

            // Initialize the bowler's entry in the result  if not exist
            if (!res[bowlerName]) {
                res[bowlerName] = {};
            }
            // Initialize the batsman's dismissal count 
            if (!res[bowlerName][batsManName]) {
                res[bowlerName][batsManName] = 0;
            }
            res[bowlerName][batsManName]++;

            if (res[bowlerName][batsManName] > maxDismissed) {
                // Update maximum dismissals
                maxDismissed = res[bowlerName][batsManName];

                topBowler = bowlerName;
                topBatsman = batsManName;
            }
        }
    }

    const result = {

        bowler: topBowler,
        batsman: topBatsman,
        count: maxDismissed
    };

    return result;
}
module.exports = dismissedByAnotherPlayer;
