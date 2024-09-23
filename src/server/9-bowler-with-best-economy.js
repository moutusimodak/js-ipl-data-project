function bestEconomy(deliveries) {
    const res = {};

    deliveries.map(delivery=> {
     if (delivery.is_super_over !== '0') {
       const isBall = delivery.wide_runs === '0' && delivery.noball_runs === '0';
 
       if (!res[delivery.bowler]) {
         res[delivery.bowler] = { runs: 0, balls: 0 };
       }
 
       if (isBall) {
         res[delivery.bowler].balls++;
       }
 
       res[delivery.bowler].runs += Number(delivery.total_runs);
     }
   });
 
   const economyRates = [];
   Object.keys(res).forEach(bowler => {
     let overs = res[bowler].balls / 6;
     let economy = res[bowler].runs / overs;

     economyRates.push({ bowler, economy });
   });
 
   economyRates.sort((a, b) => a.economy - b.economy);
 
   
   let bestBowler = null;
   if (economyRates.length > 0) {
       bestBowler = economyRates[0];
   }

    return bestBowler;


}
module.exports = bestEconomy;