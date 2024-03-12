function strikerateOfBatsman(matches,deliveries){
    const res = {};
    for(let delivery of deliveries){
        const matchId = delivery.match_id;
        const batsman = delivery.batsman;
        const runScored = Number(delivery.batsman_runs);
        const isWide = delivery.wide_runs!=='0' ? true:false;
        const season = matches.find((match)=>matchId===match.id)?.season;
        if(!season || isWide){
            continue;
        }
        if(!res[season]){
            res[season]={};
        }
        if(!res[season][batsman]){
            res[season][batsman] = {
            runs : 0,
            ballsFaced : 0,
            strikeRate : 0,
            }

        }
        res[season][batsman].runs += runScored;
        res[season][batsman].ballsFaced++;
        const totalBallsFaced = res[season][batsman].ballsFaced;
        const totalRunsScored = res[season][batsman].runs;
        if(totalBallsFaced > 0){
            res[season][batsman].strikeRate = ((totalRunsScored)/totalBallsFaced*100).toFixed(2);
        }

    };

    return res;
};
module.exports=strikerateOfBatsman;