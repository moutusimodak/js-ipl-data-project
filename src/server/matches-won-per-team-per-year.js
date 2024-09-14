const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');
// console.log(matches);

const outputFilePath = path.join(__dirname, '../../src/public/output/matchesPerTeamPerYear.json');
function matchWonPerTeamPerYear() {
    const res = {};

    for (let i = 0; i < matches.length; i++) {
        const year = matches[i].season;
        const winner = matches[i].winner

        if (winner) {
            if (!res[year]) {
                res[year] = {};
            }
            if (!res[year][winner]) {
                res[year][winner] = 0;
            }
            res[year][winner]++;
        }
    }
    return res;
}

const data = matchWonPerTeamPerYear();
fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

console.log('success', outputFilePath);
