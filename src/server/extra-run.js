const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');
const deliveries = require('../data/deliveries.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/extra-run.json');

function extraRuns() {
    let res = {};
    let matchIds = [];

    for (let i = 0; i < matches.length; i++) {
      
        if (matches[i].season === '2016') {
            matchIds.push(matches[i].id);             
        }

        // console.log(matchIds);
    }

  
    for (let i = 0; i < deliveries.length; i++) {
        
        if (matchIds.includes(deliveries[i].match_id)) {
            const teamName = deliveries[i].bowling_team;
            const run = Number(deliveries[i].extra_runs);

            if(!res[teamName]){
                res[teamName]=0
            }          
            res[teamName]+=run;
        }
    }

    return res; 
}

const data = extraRuns();


fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

console.log('success: ', outputFilePath);
