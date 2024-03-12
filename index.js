const fs = require('fs');
const csv = require('csv-parser');
const  bestInSuperOverBowler = require('./src/server/bestInSuperOverBowler.js');
const extraRunConcededIn2016 = require('./src/server/extraRunConcededIn2016.js');
const highestDismedBy = require('./src/server/highestDismedBy.js');
const matchesPerYear = require('./src/server/matchesPerYear.js');
const numOfMatchesWonPerTeam = require('./src/server/numOfMatchesWonPerTeam.js');
const playerWithMostPomEveryYear = require('./src/server/playerWithMostPomEveryYear.js');
const strikerateOfBatsman = require('./src/server/strikerateOfBatsman.js');
const top10EcoBowlers2015 = require('./src/server/top10EcoBowlers2015.js');
const tossAndGameWon = require('./src/server/tossAndGameWon.js');

//csvReadJsonWrite(bestInSuperOverBowler,'./src/output/bestInSuperOverBowler.json');
//csvReadJsonWrite(extraRunConcededIn2016,'./src/output/extraRunConcededIn2016.json');
//csvReadJsonWrite(highestDismedBy,'./src/output/highestDismedBy.json');
//csvReadJsonWrite(matchesPerYear,'./src/output/matchesPerYear.json');
//csvReadJsonWrite(numOfMatchesWonPerTeam,'./src/output/numOfMatchesWonPerTeam.json');
//csvReadJsonWrite(playerWithMostPomEveryYear,'./src/output/playerWithMostPomEveryYear.json');
//csvReadJsonWrite(strikerateOfBatsman,'./src/output/strikerateOfBatsman.json');
csvReadJsonWrite(top10EcoBowlers2015,'./src/output/top10EcoBowlers2015.json');
//csvReadJsonWrite(tossAndGameWon,'./src/output/tossAndGameWon.json');

function csvReadJsonWrite(cb,path){
    matches=[];
    deliveries=[];
    fs.createReadStream('./src/data/matches.csv')
        .pipe(csv({}))
        .on('data',(data)=>matches.push(data))
        .on('end',()=>{
            fs.createReadStream('./src/data/deliveries.csv')
                .pipe(csv({}))
                .on('data',(data)=>deliveries.push(data))
                .on('end',()=>{
                    fs.writeFile(path,
                        JSON.stringify(cb(matches, deliveries), null, 2),
                        (err)=>{
                        if (err) throw err;
                        console.log('file saved');
                        },
                             )
                })
            

        })
}

