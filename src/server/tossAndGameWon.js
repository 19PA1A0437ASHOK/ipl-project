function tossAndGameWon(matches,deliveries){
    return matches.reduce((acc,match)=>{
        if(match.toss_winner === match.winner){
            const winner = match.winner || 'neww'
            if(acc[winner]){
                acc[winner]+=1;
            }else{
                acc[winner]=1;
            }
        }
    return acc;
    },{})
};
module.exports = tossAndGameWon;