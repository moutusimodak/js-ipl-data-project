function matchWonPerTeamPerYear(matches) {
    const result = {};
    for (let i = 0; i < matches.length; i++) {
        const year = matches[i].season;
        const winner = matches[i].winner

        // Check if a winner exists 
        if (winner) {
            // Initialize the year if it doesn't exist
            if (!result[year]) {
                result[year] = {};
            }
            // Initialize the winner count for the team if  doesn't exist
            if (!result[year][winner]) {
                result[year][winner] = 0;
            }
            result[year][winner]++;
        }
    }
    return result;
}
module.exports = matchWonPerTeamPerYear;
