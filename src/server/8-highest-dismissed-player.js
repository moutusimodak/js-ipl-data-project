function dismissedByAnotherPlayer(deliveries) {
    const result = {};
    let maxDismissed = 0;
    let topBowler = '';
    let topBatsman = '';

    deliveries.reduce((acc, delivery) => {
        if (delivery.player_dismissed) {
          
            if (!acc[delivery.bowler]) {
                acc[delivery.bowler] = {};
            }

        
            if (!acc[delivery.bowler][delivery.batsman]) {
                acc[delivery.bowler][delivery.batsman] = 0;
            }

            acc[delivery.bowler][delivery.batsman]++;

            if (acc[delivery.bowler][delivery.batsman] > maxDismissed) {
                maxDismissed = acc[delivery.bowler][delivery.batsman];
                topBowler = delivery.bowler;
                topBatsman = delivery.batsman;
            }
        }
        return acc; 
    }, result);

    const res = {
        bowler: topBowler,
        batsman: topBatsman,
        count: maxDismissed
    };

    return res;
}

module.exports = dismissedByAnotherPlayer;
