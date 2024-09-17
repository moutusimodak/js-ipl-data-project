const fs = require('fs');
const path = require('path');
const matches = require('../data/matches.js');

const outputFilePath = path.join(__dirname, '../../src/public/output/player-of-match.json');

function playerOfMatch() {
    let res={}
    
    for (let i = 0; i < matches.length; i++) {
      
        const Player = matches[i].player_of_match

        if(!res[Player]){
            res[Player]=0
        }
        res[Player]++
    }
    // console.log(res);
    
    return res
}

const data = playerOfMatch();

function findTopPlayer(data) {
    let topPlayer = null;
    let maxAwards = 0;

    for (const player in data) {
        // console.log(player);
        
        console.log(data[player]);
        
        if (data[player] > maxAwards) {
            maxAwards = data[player];
            topPlayer = player;
        }       
    }

    return { player: topPlayer, awards: maxAwards };
}

const highestPlayer = findTopPlayer(data);
fs.writeFileSync(outputFilePath, JSON.stringify(highestPlayer, null, 2), 'utf8');

console.log('success', outputFilePath);
