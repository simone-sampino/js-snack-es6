/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */

/* 
- Wilier 0 SLR – 6,5 kg
- Cannondale SuperSix EVO Hi-MOD Disc Dura Ace – 8,0 kg
- Trek Emonda 2020 – 6,81 kg
- Trek Emonda SLR – 4,65 kg
- SAVA Phantom 2.0 700C – 8,1 kg
 */

// racing bikes array
const racingBikes = [
  {
    bikeName: "Wilier 0 SLR",
    weight: 6.5,
  },
  {
    bikeName: "Cannondale SuperSix EVO Hi-MOD Disc Dura Ace",
    weight: 8.0,
  },
  {
    bikeName: "Trek Emonda 2020",
    weight: 6.81,
  },
  {
    bikeName: "Trek Emonda SLR",
    weight: 4.65,
  },
  {
    bikeName: "SAVA Phantom 2.0 700C",
    weight: 8.1,
  },
];

// check in console
console.log(racingBikes);

// which one is the lightest?
let lighterRacingBike = racingBikes[0];

for (let i = 0; i < racingBikes.length; i++) {
  const thisBike = racingBikes[i];
  if (thisBike.weight < lighterRacingBike.weight) {
    lighterRacingBike = thisBike;
  }
}

// check in console
console.log(lighterRacingBike);

// print on page
const lightestOne = document.getElementById("racing-bikes");

lightestOne.innerText = `The lightest racing bike is: ${lighterRacingBike.bikeName}\nWith the weight of: ${lighterRacingBike.weight} kg`;
