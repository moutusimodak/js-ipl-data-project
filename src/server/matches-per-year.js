const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');
// console.log(matches);

const outputFilePath = path.join(__dirname, '../../src/public/output/matchesPerYear.json');

function testMatchesPerYear() {
    const matchesPerYear = {};
    for (let i = 0; i < matches.length; i++) {
        const season = matches[i].season;
        if (!matchesPerYear[season]) {
            matchesPerYear[season] = 0;
        }
        matchesPerYear[season]++;
    }             
                   
    return matchesPerYear;
}
const data = testMatchesPerYear();
fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

console.log('successfully submitted', outputFilePath);





