let matchesPerYear = (matches,deliveries) => {
    return matches.reduce((acc, matches)=>{
      if(matches.season in acc){
        acc[matches.season]+=1
      }else{
        acc[matches.season]=1
      }
      return acc
    },{})
};

module.exports = matchesPerYear;
