function testMatchesPerYear(matches) {
    const matchesPerYear = matches
        .map(match => match.season)
        .reduce((acc, year) => {
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        }, {});

    return matchesPerYear


}
module.exports = testMatchesPerYear;




