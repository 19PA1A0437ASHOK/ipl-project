function highestDismedBy(matches,deliveries){
    const dismissals ={};
    for(let delivery of deliveries){
        if(delivery['player_dismissed']){
            const key =`${delivery['player_dismissed']}-${delivery['bowler']}`;
            dismissals[key]=(dismissals[key] || 0)+1;
        }
    }
    return dismissalfun(dismissals);
};
function dismissalfun(dismissals){
    let maxi=-Infinity;
    let play ='';
    for(let dismissal in dismissals){
        if(dismissals[dismissal]>maxi){
            maxi=dismissals[dismissal];
            play=dismissal;
        }
    }
    const res ={}
    res[play]=maxi;
    return res;
}
module.exports = highestDismedBy;