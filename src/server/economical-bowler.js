const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');
const deliveries = require('../data/deliveries.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/economical-bowler.json');


function economicBowler() {
    let matchIds = []
    let res = {}
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].season === '2015') {
            matchIds.push(matches[i].id)
        }
    } for (let i = 0; i < deliveries.length; i++) {
        if (matchIds.includes(deliveries[i].match_id)) {
            const bowler = deliveries[i].bowler
            const totalRun = Number(deliveries[i].total_runs)

            let ball = 0
            if (deliveries[i].wide_runs == 0 && deliveries[i].noball_runs == 0) {
                ball = 1
            }
            if (!res[bowler]) {
                res[bowler] = { ball: 0, totalRun: 0 }
            }
            res[bowler].ball += ball
            // console.log(res);
           
            
            
            res[bowler].totalRun += totalRun
            
            
        }
    }
    // console.log(res);
    
    const rating = []
    for (const key in res) {
        //console.log(key);
        console.log(res[key]);
        
        
        const { totalRun, ball } = res[key];
        console.log(ball)
        let overs = ball / 6

        const ecoRate = ((totalRun / overs).toFixed(2));
        rating.push({ key, ecoRate })
    }
    rating.sort((a, b) => parseFloat(a.ecoRate) - parseFloat(b.ecoRate));
    const top10Bowlers = rating.slice(0, 10);

    return top10Bowlers;

}



const data = economicBowler();


fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

console.log('success: ', outputFilePath);
