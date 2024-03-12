function extraRunConcededIn2016(matches,deliveries){
    const matchIn2016 = matches.reduce((acc,match)=>{
        if(match.season==='2016'){
            acc.add(match.id);
        }
        return acc;
} , new Set());
    const extraRuns={};
    deliveries.forEach((delivery)=>{
        if(matchIn2016.has(delivery.match_id)){
            extraRuns[delivery.bowling_team] = (extraRuns[delivery.bowling_team] || 0) + Number(delivery.extra_runs);
        }
    });
    return extraRuns;
};
module.exports = extraRunConcededIn2016;