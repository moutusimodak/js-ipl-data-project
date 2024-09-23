function extraRuns(matches, deliveries) {
    let result = {};
    let matchIds = [];

     // fetching match IDs 
    for (let i = 0; i < matches.length; i++) {
      
        if (matches[i].season === '2016') {
            matchIds.push(matches[i].id);             
        }

    }

    // Calculate extra runs for each team in the selected matches
    for (let i = 0; i < deliveries.length; i++) {
        
        if (matchIds.includes(deliveries[i].match_id)) {
            const teamName = deliveries[i].bowling_team;
         
            
            const run = Number(deliveries[i].extra_runs);
   
            

            if(!result[teamName]){
                result[teamName]=0
            }     
            // Add the extra runs to the team's total     
            result[teamName]+=run;
        }
    }

    return result; 
}

module.exports=extraRuns;
