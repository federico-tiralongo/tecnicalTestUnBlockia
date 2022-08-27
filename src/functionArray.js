const array_test = [
    { "name": "Adil", "recentlyPlayedWith": ["Ben", "Andy", "Rio",
    "Nader", "Giuliano", "Dali"] },
    { "name": "Andy", "recentlyPlayedWith": ["Adil", "Walter", "Chris",
    "Dan", "Ben"] },
    { "name": "Dan", "recentlyPlayedWith": ["Andy", "Rio", "Dennis",
    "John", "Bernard", "Ben"] },
    { "name": "Ben", "recentlyPlayedWith": ["Nader", "Dali", "Dan",
    "Carter", "Bruno", "Andy", "Adil"] },
    { "name": "Nader", "recentlyPlayedWith": ["Adil", "Ben", "Arthur",
    "Walter"] },
    ]
function cleanData(arr) {
    return arr.map((player) => {
        let newPlayer = {
            "name": player.name,
            "recentlyPlayedWith": []
        }

        arr.recentlyPlayedWith.forEach(playerName => {
            arr.forEach(listPlayer => {
                if(listPlayer.name === playerName) {
                    newPlayer.recentlyPlayedWith.push(playerName)
                }
            })
        })

        return newPlayer
    });
}
function groupPlayers(players) {
    // return a 2D array
    let groupPlayers = [];
    players =  cleanData(players)
    players.forEach(player => {
        let playedWith = []
        players.forEach(otherPlayer => {
            if(otherPlayer.name = player.name){
                 return;
            }
            if(otherPlayer.recentlyPlayedWith.includes(player.name)) {
                playedWith.push(otherPlayer.name);
            }
        })
        playedWith.sort();
            let isNotSubGroup = true;      
            let isSubGroup;           
            groupPlayers.every( group => {
                isSubGroup = playedWith.every(player => {
                    group.includes(player);
                });
                if(isSubGroup) {
                    isNotSubGroup = false;
                    return false;
                }else{
                    return true;
                }
            })
            if(isNotSubGroup) {
                let isNew = true;
                let isSuperGroup;
                groupPlayers.map(group => {
                    isSuperGroup = group.every( player => {
                        playedWith.includes(player)
                    })
                    if (isSuperGroup) {
                        isNew = false;
                        group = playedWith;
                    }
                })
                if(isNew) groupPlayers.push(playedWith);
            }
        
    });
    
    return groupPlayers;
   }

   //console.log(groupPlayers(array_test));

   console.log(new Set([1,3,4]))

   