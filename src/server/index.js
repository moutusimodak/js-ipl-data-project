const matches = require('../data/matches.js');
const deliveries = require('../data/deliveries.js');

const json = require('./output.js')

let testMatchesPerYear = require('./1-matches-per-year')
let testMatchesWonPerTeamPerYear = require('./2-matches-won-per-team-per-year.js');
 let testExtraRun = require('./3-extra-run.js');
 let topEconomicalBowlers = require('./4-top-10-economical-bowler.js');
 let testWonTossWonMatch= require('./5-won-toss-won-match.js');
let testPlayerOfMatch = require("./6-player-of-match.js");  //
 let testStrikeRate= require('./7-strike-rate-of-batsman.js');
 let dismissedPlayer = require('./8-highest-dismissed-player.js');
let testBowlerWithBestEconomy = require('./9-bowler-with-best-economy.js')

let matchesInfo = testMatchesPerYear(matches)
 let MatchesWonPerTeamPerYearInfo = testMatchesWonPerTeamPerYear(matches)
 let ExtraRunInfo = testExtraRun(matches, deliveries)
 let topEconomicalBowlersInfo = topEconomicalBowlers(matches, deliveries)
 let testWonTossWonMatchInfo = testWonTossWonMatch(matches)
 let testPlayerOfMatchInfo = testPlayerOfMatch(matches); //
 let testStrikeRateInfo = testStrikeRate(matches,deliveries)
 let dismissedPlayerInfo = dismissedPlayer(deliveries)
 let testBowlerWithBestEconomyInfo = testBowlerWithBestEconomy(deliveries)

json('../../src/public/output/matchesPerYear.json',matchesInfo)

 json('../../src/public/output/matchesPerTeamPerYear.json',MatchesWonPerTeamPerYearInfo)

 json('../../src/public/output/extraRun.json',ExtraRunInfo)

 json('../../src/public/output/top10EconomicBowler.json',topEconomicalBowlersInfo)

 json('../../src/public/output/wonTossWonMatch.json',testWonTossWonMatchInfo)
 json('../../src/public/output/playerOfMatch.json', testPlayerOfMatchInfo); //

json('../../src/public/output/strikeRateOfBatsman.json',testStrikeRateInfo)

 json('../../src/public/output/highestDismissedPlayer.json',dismissedPlayerInfo)

json('../../src/public/output/bowlerWithBestEconomy.json',testBowlerWithBestEconomyInfo)