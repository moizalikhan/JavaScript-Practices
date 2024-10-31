// lecture 1:
console.log("-----------lecture 1:--------");
const country = "East Asia";
const continent = "Asia";
let population = 1000000000;
console.log(country);
console.log(continent);
console.log(population);

// Lecture 2:
console.log("-----------lecture 2:--------");
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lecture 3:
console.log("-----------lecture 3:--------");
const languageOfCountry = "English";
// const language = "English";

// Lecture 4:
console.log("-----------lecture 4:--------");
let halfpopulation = population / 2;
const finlandPopluation = 6000000;
const avgPopulation = 3300000;
let description = "Portugal is in Europe, and its 11 million people speak portuguese"
console.log(halfpopulation);
console.log(halfpopulation += 1);
console.log("Does your country have more people than Finland?", population > finlandPopluation);
console.log("Does your country have less people than the average country?", population < avgPopulation);

// Lecture 5:
console.log("-----------lecture 5:--------");
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);

// Lecture 6:
console.log("-----------lecture 6:--------");
if (population > avgPopulation) {
    console.log(`Portugal's population is above average`);
} else {
    console.log(`Portugal's population is 22 million below average'`);
}

// Lecture 7:
console.log("-----------lecture 7:--------");

// lecture 8:
console.log('9' - '5') //4
console.log('19' - '13' + '17') //617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log('123' > 57) //true
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143
console.log

// lecture 9:
// numNeighbours = prompt("How many neighbour countries does your countryhave?");
numNeighbours = 0;
if (Number(numNeighbours) === 1) {
    console.log("only 1 border!'");
}
else if (numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log("No borders")
}

// lecture 10:
language = 'English';
population = 1000000;
locationOf = "city"
if (language == "English" && population < 5000000 && locationOf != 'island') {
    console.log("You should live in Portugal ")
} else {
    console.log("Portugal does not meet your criteria")
}


// lecture 11:
language = "Urdu";
switch(language){
case "chinese":
    console.log("MOST number of native speakers!");
    break;
case "spanish":
    console.log("2nd place in number of native speakers");
case "english":
    console.log("3rd place");
case "hindi":
    console.log("Number 4");
case "arabic":
    console.log("5th most spoken language");
default:
    console.log("Great language too :D")    
}    


// lecture 12:
population = 10000001
console.log(`Portugal's population is ${population>10000000 ? 'above average': 'below average'}`)

    
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
// Coding Challenge: 1:
console.log("----------- Challenge 1:--------");
let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markbodyMassIndex = (markWeight) / (markHeight) ** 2;
console.log("mark bodyMassIndex", markbodyMassIndex);
let johnbodyMassIndex = (johnWeight) / (johnHeight) ** 2;
console.log("john bodyMassIndex", johnbodyMassIndex);
let markHigherBMI = markbodyMassIndex > johnbodyMassIndex;
console.log("is mark has HigherBMI", markHigherBMI);
// ------------------------------------------------------------
markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;
markbodyMassIndex = (markWeight) / (markHeight) ** 2;
console.log("mark bodyMassIndex", markbodyMassIndex);
johnbodyMassIndex = (johnWeight) / (johnHeight) ** 2;
console.log("john bodyMassIndex", johnbodyMassIndex);
markHigherBMI = markbodyMassIndex > johnbodyMassIndex;
console.log("is mark has HigherBMI", markHigherBMI);

// Coding Challenge: 2:
console.log("----------- Challenge 2:--------");
markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;
markbodyMassIndex = (markWeight) / (markHeight) ** 2;
johnbodyMassIndex = (johnWeight) / (johnHeight) ** 2;
if (markbodyMassIndex > johnbodyMassIndex) {
    console.log(`Mark's BMI ${markbodyMassIndex} is higher than John's ${johnbodyMassIndex}!`)
} else {
    console.log(`John's BMI is ${johnbodyMassIndex} higher than Mark's ${markbodyMassIndex}!`)
}

// Coding Challenge: 3:
Dolphins = [97, 112, 101];
Koalas = [109, 95, 106];
averageOfDolphins = 97 + 112 + 101 / 3;
averageOfKoalas = 109 + 95 + 106 / 3;
console.log("averageOfDolphins", averageOfDolphins);
console.log("averageOfKoalas", averageOfKoalas);
countOfminimumDolphins = 0;
countOfminimumKoalas = 0;
lengthOfDolphines = Dolphins.length - 1;
lengthOfKoalas = Koalas.length - 1;
while (lengthOfDolphines >= 0) {
    if (Dolphins[lengthOfDolphines] >= 100) {
        countOfminimumDolphins = countOfminimumDolphins + 1;
    }
    lengthOfDolphines -= 1;
}
console.log("countOfminimumDolphins", countOfminimumDolphins);
while (lengthOfKoalas >= 0) {
    if (Koalas[lengthOfKoalas] >= 100) {
        countOfminimumKoalas = countOfminimumKoalas + 1;
    }
    lengthOfKoalas -= 1;
}
console.log("countOfminimumKoalas", countOfminimumKoalas)
if (averageOfDolphins > averageOfKoalas && countOfminimumDolphins > countOfminimumKoalas) {
    console.log("Dolphins win");
} else if (averageOfKoalas > averageOfDolphins && countOfminimumKoalas > countOfminimumDolphins) {
    console.log("Koalas win")
} else {
    console.log("Draw")
}

// Coding Challenge: 4:
let bill = 15;
console.log(`The bill was ${bill}, the tip was ${tip = bill >=50 && bill<=300 ? bill*15/100: bill*20/100}, and the total value
${bill + tip}”`);






