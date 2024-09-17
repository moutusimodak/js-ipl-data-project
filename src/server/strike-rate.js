const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');
const deliveries = require('../data/deliveries.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/strike-rate.json');

function StrikeRate() {
    let strikeRates = {};
    let matchIds = {};

    for (let i = 0; i < matches.length; i++) {
        matchIds[matches[i].id] = matches[i].season;
        // console.log(matchIds);
        
    }

    let batsman = {};

    for (let i = 0; i < deliveries.length; i++) {
        const season = matchIds[deliveries[i].match_id];
        const batsmanName = deliveries[i].batsman;

        if (!batsman[season]) {
            batsman[season] = {};
        }
        if (!batsman[season][batsmanName]) {
            batsman[season][batsmanName] = { runs: 0, balls: 0 };
        }
        batsman[season][batsmanName].runs += Number(deliveries[i].batsman_runs);

        if (deliveries[i]['wide_runs'] === '0' && deliveries[i]['noball_runs'] === '0') {
            batsman[season][batsmanName].balls += 1;
        }
    }


    for (let season in batsman) {
        strikeRates[season] = {};
        for (let batsmanName in batsman[season]) {
            const runs = batsman[season][batsmanName].runs;
            const balls = batsman[season][batsmanName].balls;
            console.log("runns is ",runs);
            console.log("balls is ",balls);
            
            const strikeRate = balls > 0 ? (runs / balls) * 100 : 0;
            strikeRates[season][batsmanName] = strikeRate;
        }
    }

    return strikeRates;
}


const result = StrikeRate();
fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), 'utf8');

console.log('success', outputFilePath);
