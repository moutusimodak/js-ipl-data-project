const fs = require('fs');
const path = require('path');
const deliveries = require('../data/deliveries.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/bowler-with-best-economy.json');

function BestEconomy() {
    const res = {};

    for (let i = 0; i < deliveries.length; i++) {

        if (deliveries[i].is_super_over !== '0') {
            const BowlerName = deliveries[i].bowler;

            if (!res[BowlerName]) {
                res[BowlerName] = { totalruns: 0, totalballs: 0 };
            }

            if (deliveries[i].wide_runs === '0' && deliveries[i].noball_runs === '0') {
                res[BowlerName].totalballs++;
            }

            const runsconceded = Number(deliveries[i].total_runs) 

            res[BowlerName].totalruns += runsconceded;
        }
    }

    let bestEconomyBowler = null;
    let bestEconomyRate = Infinity;

    for (const bowler in res) {
        const stats = res[bowler];
        const overs = stats.totalballs / 6;  

        if (overs > 0) { 
            const economyRate = stats.totalruns / overs;

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

const result = BestEconomy();
fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), 'utf8');

console.log('Success', outputFilePath);