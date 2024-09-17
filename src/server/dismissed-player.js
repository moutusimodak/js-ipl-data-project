const fs = require('fs');
const path = require('path');
const deliveries = require('../data/deliveries.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/dismissed-player.json');

function DismissedByAnotherPlayer() {
    const res = {};
    let maxDismissed = 0;
    let topBowler = '';
    let topBatsman = '';


    for (let i = 0; i < deliveries.length; i++) {
        let bowlerName = deliveries[i].bowler;
        let batsmanName = deliveries[i].batsman;
        let DismissedPlayer = deliveries[i].player_dismissed;

        if (DismissedPlayer) {
            if (!res[bowlerName]) {
                res[bowlerName] = {};
            }
            if (!res[bowlerName][batsmanName]) {
                res[bowlerName][batsmanName] = 0;
            }
            res[bowlerName][batsmanName]++;
            // console.log(res[bowlerName][batsmanName]);
            
            if (res[bowlerName][batsmanName] > maxDismissed) {
                maxDismissed = res[bowlerName][batsmanName];
                console.log(maxDismissed);
                
                topBowler = bowlerName;
                topBatsman = batsmanName;
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


const data = DismissedByAnotherPlayer();

fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

console.log('success: ', outputFilePath);
