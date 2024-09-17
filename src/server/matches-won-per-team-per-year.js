const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');
// console.log(matches);

const outputFilePath = path.join(__dirname, '../../src/public/output/matchesPerTeamPerYear.json');
function matchWonPerTeamPerYear() {
    const result = {};

    for (let i = 0; i < matches.length; i++) {
        const year = matches[i].season;
        const winner = matches[i].winner

        if (winner) {
            if (!result[year]) {
                result[year] = {};
            }
            if (!result[year][winner]) {
                result[year][winner] = 0;
            }
            result[year][winner]++;
        }
    }
    return result;
}
const data = matchWonPerTeamPerYear();
fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 4), 'utf8');

console.log('successfully submitted', outputFilePath);
