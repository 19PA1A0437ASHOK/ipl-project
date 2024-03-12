function playerWithMostPomEveryYear(matches,deliveries){
    const output={};
    for(let match of matches){
        const season = match.season;
        const playerofmatch = match['player_of_match'];
        if(!output[season]){
            output[season]={};
        }
        if(!output[season][playerofmatch]){
            output[season][playerofmatch]=1;
        }else{
            output[season][playerofmatch]++;
        }
    }
    
    for(let season in output){
        let maxi = 0;
        let highestplayer = '';
        for(let player in output[season]){
            if(output[season][player] > maxi){
                maxi =output[season][player];
                highestplayer = player;
        }
    }
        output[season]=highestplayer;
  }
  return output;
    
};
module.exports = playerWithMostPomEveryYear;