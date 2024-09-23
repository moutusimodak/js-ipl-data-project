function matchWonPerTeamPerYear(matches) {
    const winsPerTeamPerYear = matches.reduce((acc, match) => {
        const { season, winner } = match;

        if (!acc[season]) {
            acc[season] = {};
        }

        if (!acc[season][winner]) {
            acc[season][winner] = 0;
        }
        acc[season][winner] += 1;

        return acc;
    }, {});

    return winsPerTeamPerYear

}
module.exports = matchWonPerTeamPerYear;
