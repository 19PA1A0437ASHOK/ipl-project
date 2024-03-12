const top10EcoBowlers2015 = function (matches, deliveries) {
    const seasonID = matches.reduce((result, match) => {
      result[match.id] = match.season;
      return result;
    }, {});
    let runs = {};
    let balls = {};
    for (let delivery of deliveries) {
      if (seasonID[delivery['match_id']] === '2015') {
        runs[delivery.bowler] =
          (runs[delivery.bowler] || 0) + Number(delivery['total_runs']);
        if (delivery['noball_runs'] === '0' || delivery['wide_runs'] === '0') {
          balls[delivery.bowler] = (balls[delivery.bowler] || 0) + 1;
        }
      }
    }
    for (let i in runs) {
      runs[i] = (runs[i] / balls[i]) * 6;
    }
  
    return Object.entries(runs)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 10)
      .map((x) => {
        let obj = {};
        obj['bowler'] = x[0];
        obj['economy'] = x[1];
        return obj;
      });
  };
  module.exports = top10EcoBowlers2015;
  