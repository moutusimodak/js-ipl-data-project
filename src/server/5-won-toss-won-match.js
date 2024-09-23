function matchWinner(matches) {
    const result = {};

    for (let i = 0; i < matches.length; i++) {
        const toss = matches[i].toss_winner;
        const matchWin = matches[i].winner;
        // Checking both won the toss also won the match
        if (toss === matchWin) {
            // Initialize the team's win count if it doesn't exist
            if (!result[toss]) {
                result[toss] = 0
            }
            result[toss]++
        }
    }

    return result
}
module.exports = matchWinner;
