const bestInSuperOverBowler = function (_, deliveries) {
    const superOverDeliveries = deliveries.filter(
      (delivery) => delivery.is_super_over === '1'
    );
  
    const economyMap = {};
  
    for (let delivery of superOverDeliveries) {
      economyMap[delivery['bowler']] = economyMap[delivery['bowler']] || {};
      economyMap[delivery['bowler']]['runsConceded'] =
        (economyMap[delivery['bowler']]['runsConceded'] || 0) +
        +delivery['total_runs'];
  
      if (delivery['noball_runs'] === '0' || delivery['wide_runs'] === '0') {
        economyMap[delivery['bowler']]['ballsBowled'] =
          (economyMap[delivery['bowler']]['ballsBowled'] || 0) + 1;
      }
  
      let runs = economyMap[delivery['bowler']]['runsConceded'];
      let balls = economyMap[delivery['bowler']]['ballsBowled'];
  
      economyMap[delivery['bowler']]['economy'] = (runs / balls) * 6;
    }
  
    const minEconomyBowler = findMinEconomyBowler(economyMap);
  
    return minEconomyBowler;
  };
  
  function findMinEconomyBowler(economyMap) {
    let minEconomy = Infinity;
    let bestBowler = '';
  
    for (let bowler in economyMap) {
      if (minEconomy > economyMap[bowler]['economy']) {
        minEconomy = economyMap[bowler]['economy'];
        bestBowler = bowler;
      }
    }
  
    let result = {};
    result[bestBowler] = minEconomy;
  
    return result;
  }
  

module.exports = bestInSuperOverBowler;