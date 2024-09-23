function testMatchesPerYear(matches) {
    const matchesPerYear = {};
    for (let i = 0; i < matches.length; i++) {
        const season = matches[i].season;
        // If season is not already a key in the object, initializing
        if (!matchesPerYear[season]) {
            matchesPerYear[season] = 0;
        }

        // Increment the count
        matchesPerYear[season]++;
    }             
                   
    return matchesPerYear;
}
module.exports=testMatchesPerYear;




