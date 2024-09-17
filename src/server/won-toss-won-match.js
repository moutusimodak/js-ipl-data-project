const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/won-toss-won-match.json');

function matchWinner() {
    const res = {}; 

    for (let i = 0; i < matches.length; i++) {
        const toss = matches[i].toss_winner;
        const matchWin = matches[i].winner;
        
        if(toss === matchWin){
            if(!res[toss]){
                res[toss]=0
            }
            res[toss]++
        }
    }

    console.log(res);
    return res
}

const data = matchWinner();

fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

console.log('success: ', outputFilePath);
