//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var manager1=[managerName, managerAge, currentTeam, trophiesWon];
  return manager1;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  var arr1=[];
  if(formation.length==0)
  {
    return null;
  }
  else{
      if(formation[0]==" "){
        var a="undefined";
      }
      else{
        var a=formation[0];
      }
      if(formation[1]==" "){
        var b="undefined";
      }
      else{
        var b=formation[1];
      }
      if(formation[2]==" "){
        var c="undefined";
      }
      else{
        var c=formation[2];
      }
      arr1={"defender":a, "midfield":b, "forward":c};
      return arr1;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  var filt = players.filter(players => players.debut == year);
  return filt;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var filtpos = players.filter(players => players.position == position);
  return filtpos;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
  var filtaward=[];
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i].awards.length; j++){
      if(players[i].awards[j].name == awardName){
        filtaward.push(players[i]);
      }
    }
  }
  return filtaward;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes){
  var filtawardno=[];
  for(var i=0;i<players.length;i++){
    var c=0;
    for(var j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name === awardName){
        c++;
      }
    }
    if(c===noOfTimes){
      filtawardno.push(players[i]);
    }
  }
  return filtawardno;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country){
  var data = filterByAward(awardName);
  var filtawardnamecountry = data.filter(players => players.country === country);
  return filtawardnamecountry;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var filtered = players.filter(players => players.age < age && players.awards.length >= noOfAwards && players.team == team);
  return filtered;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  for(var i=0;i<players.length;i++){
    for(var j=i+1;j<players.length;j++){
      if(players[i].age < players[j].age){
        var temp = players[j];
        players[j]=players[i];
        players[i]=temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
  var count = 0;
  var filteredPlayers = [];
  for( i=0; i<players.length; i++ ){
    if(players[i].team == team){
      filteredPlayers[count++] = players[i];
    }
  }
  for( i=0; i<filteredPlayers.length; i++ ){
    for( j=i+1; j<filteredPlayers.length; j++){
      if(filteredPlayers[i].awards.length < filteredPlayers[j].awards.length){
        temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var data=filterByAwardxTimes(awardName, noOfTimes);
  var data1=data.filter(players => players.country == country);
  return data1.sort(compare);
  function compare(a,b){
    var value = 0;
    if(a.name > b.name){
      value = 1
    }
    else if(a.name < b.name){
      value = -1
    }
    else{
      value =0;
    }
  }

}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
function SortByNamexOlderThan(age){
  var data = players.filter(player => player.age > age);
}
//Sort the awards won by them in reverse chronological order
