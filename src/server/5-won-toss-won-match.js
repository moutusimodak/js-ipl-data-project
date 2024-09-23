function matchWinner(matches) {
    const result ={};
matches.map(match=>{
    if(match.toss_winner=== match.winner){
        if(!result[match.toss_winner]){
            result[match.toss_winner]=0;
        }      
            result[match.toss_winner]++;
    }
})
return result
}
module.exports = matchWinner;
