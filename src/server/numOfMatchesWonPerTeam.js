function numOfMatchesWonPerTeam(matches,deliveries){
    return matches.reduce((accu,match)=>{
        if (accu[match.season] === undefined) {
            accu[match.season] = { [match.winner]: 0 }
        }
    
        if(match.winner in accu[match.season]){
            accu[match.season][match.winner]+=1
        }else{
            accu[match.season][match.winner] = 1;
        }
        return accu;
    },{})
}
module.exports = numOfMatchesWonPerTeam;