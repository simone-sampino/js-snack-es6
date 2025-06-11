/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// football teams array
const footballTeams = [
  {
    teamName: "Inter",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Palermo",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Atalanta",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Roma",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Lazio",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Napoli",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Milan",
    points: 0,
    foulsDrawn: 0,
  },
  {
    teamName: "Juventus",
    points: 0,
    foulsDrawn: 0,
  },
];

// random numbers for points and fouls drawn properties
for (let i = 0; i < footballTeams.length; i++) {
  let thisTeam = footballTeams[i];

  thisTeam.points = Math.floor(Math.random() * 100);
  thisTeam.foulsDrawn = Math.floor(Math.random() * 100);
}

console.log(footballTeams);

// add new array with only names and fouls drawn
const newArray = [];

for (let i = 0; i < footballTeams.length; i++) {
  let thisTeam = footballTeams[i];
  const namesFouls = {
    teamName: thisTeam.teamName,
    foulsDrawn: thisTeam.foulsDrawn,
  };
  newArray.push(namesFouls);
}

// print in console
console.log(newArray);
