'use strict';
console.log(`-----------------lecture 1:--------------------`) 
function describeCountry(country, population, capitalCity){
    let output = console.log(`${country} has ${population} and it's capital city is ${capitalCity}`);
    return output;
}
describeCountry('Finland','6 million','helsinki');
describeCountry('Norway','6 million','Oslo');
describeCountry('Denmark','6 million','Copenhagen');
describeCountry('Netherlands','6 million','Amsterdam');

console.log(`--------------------lecture 2:--------------------`)
const worldpipoulation7 = 7900;
function percentageOfWorld1(population){
    return (population / worldpipoulation7) * 100; 
}
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld2(1225));
console.log(percentageOfWorld2(1335));
console.log(percentageOfWorld2(1445));
let netherlands = function(population){
    return (population / worldpipoulation7) * 100;}
let finland = function(population){
    return (population / worldpipoulation7) * 100;}
let norway = function(population){
    return (population / worldpipoulation7) * 100;}
console.log(netherlands(122), finland(123), norway(124))
function percentageOfWorld2(population){
    return (population / worldpipoulation7) * 100; 
}

console.log(`--------------------lecture 3:--------------------`)
let percentageOfWorld3 = population => (population / worldpipoulation) * 100;
console.log(percentageOfWorld3(12334));

console.log(`--------------------lecture 4:--------------------`)
// const years = Array(12,13,14,15); // class-based syntax
// years = years[years.length - 1];
const populationOfcities  = [123,234,345,456];
const percentages = [percentageOfWorld1(populationOfcities[0]),percentageOfWorld1(populationOfcities[1]),percentageOfWorld1(populationOfcities[2]),percentageOfWorld1(populationOfcities[3])];
console.log(populationOfcities,percentages);

console.log(`--------------------lecture 5:--------------------`)
const neighbours = ["japan","china","noth-korea"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);
if(!neighbours.includes("Germany")){
    console.log("Probably not a central European country :D");
}
console.log(`index of japan is ${neighbours.indexOf("japan")}`);
const changethevalue = neighbours.indexOf("japan");
console.log(changethevalue);
neighbours[changethevalue] = "Republic of Japan";
console.log(neighbours);

console.log(`--------------------lecture 6:--------------------`)
let myCountry1 = {
    country : "Norway",
    capital : "Oslo",
    language : "English",
    population : "10 Million",
    neighbours : "Finland"
};
console.log(`${myCountry1.capital}, ${myCountry1.population}, ${myCountry1.language}, ${myCountry1.neighbours}`)

console.log(`--------------------lecture 7:--------------------`)
let myCountry2 = {
    name : "Norway",
    capital : "Oslo",
    language : "English",
    population : "10",
    neighbours : ["Finland","Estonia","Denmark"]
};
console.log(`${myCountry2.name} has ${myCountry2.population} ${myCountry2.language}-speaking people, ${myCountry2.neighbours.length} neighbouring countries and a capital called ${myCountry2.capital}.`)
console.log(`${myCountry2.name} has ${parseInt(myCountry2.population) + 2} Million.`);
console.log(`${myCountry2.name} has ${parseInt(myCountry2["population"]) -2} Million.`);

console.log(`--------------------lecture 8:--------------------`)
let myCountry = {
    name : "Norway",
    capital : "Oslo",
    language : "English",
    population : "10",
    neighbours : ["finland","norway","denmark"],
    describe : function(){
        return console.log(this)
    },
    checkIsland : function(neighbours)
    {
        this.isIsland = this.neighbours.length === 0 ? true:false
        console.log(this.isIsland ? "this is isIsland" : "this is not isIsland")
    }
};
myCountry.describe()
myCountry.checkIsland(myCountry.neighbours)

console.log(`--------------------lecture 8:--------------------`)
for(let counter = 0;counter<=50;counter++){
    console.log(`Voter number ${counter} is currently voting`)
}

console.log(`--------------------lecture 9:--------------------`)
const worldpipoulation = 800
function percentageOfWorld5(population){
    return (population / worldpipoulation) * 100; 
}
let populations = [10,20,30,40,50];
let percentageOfWorld4 = [];
let i = 0;
while(i<populations.length){
    percentageOfWorld4[i] = percentageOfWorld5(populations[i])
    console.log(percentageOfWorld4[i])
    i++
}

console.log(`--------------------lecture 10:--------------------`)
let listOfNeighbours8 = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway','Sweden','Russia']];
const inputCountry8 = "Norway";
for(let counterOne = 0; counterOne<listOfNeighbours8.length; counterOne++){
    if(listOfNeighbours8[counterOne].includes(inputCountry8)){
    for(let counterTwo = 0; counterTwo<listOfNeighbours8[counterOne].length; counterTwo++){
    if(listOfNeighbours8[counterOne][counterTwo] === inputCountry8){continue}
    console.log(listOfNeighbours8[counterOne][counterTwo],"is the Neighbour")}
    }
}


console.log(`--------------------lecture 11:--------------------`)
let listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway','Sweden','Russia']];
const inputCountry = "Norway";
let counterOne = 0;
while(counterOne<listOfNeighbours.length)
    {if(listOfNeighbours[counterOne].includes(inputCountry)){
    let counterTwo = 0;
    while(counterTwo<listOfNeighbours[counterOne].length){
    if(listOfNeighbours[counterOne][counterTwo] === inputCountry){
    counterTwo++
    continue}
    console.log(listOfNeighbours[counterOne][counterTwo],"is the Neighbour")
    counterTwo++}}
    counterOne ++;
}

console.log("------------------------------------------------------------------------------------------------------------------------------------------------------")
console.log(`--------------------Challenge :1--------------------`);
let calcAverage = (score) => {
    const lengthofarray = score.length;
    console.log(`${lengthofarray} is length of the array`);
    let i = 0;
    let sum = 0;
    while (i < lengthofarray){
        sum = sum + score[i];
        console.log(`${score[i]} and sum now ${sum}`);
        i = i+1
    }
    return sum / lengthofarray;
};
let checkWinner = (avgDolhin, avgKoala) => {
    if (avgDolhin >= 2* avgKoala){
        console.log(`average of Dolhins is ${avgDolhin} and is the winner`);
    }else if (avgKoala>= 2* avgDolhin){
        console.log(`average of Koalas is ${avgKoala} and is the winner`);
    }else{
        console.log("tie")
    }
}
checkWinner(calcAverage([4,23,71]),calcAverage([5,54,49]));
checkWinner(calcAverage([85,54,41]),calcAverage([23,34,27]));



console.log(`--------------------Challenge :2--------------------`);
function calcTip(amountOf){
    let tip = [];
    let i = 0;
    let total = [];
    while (i < amountOf.length){
        if(amountOf[i]<=50 && amountOf[i]>=300){
            tip[i] = (amountOf[i]/100)*15
        }else{
            tip[i] = (amountOf[i]/100)*20
        }
        i +=1;}
    return tip;}

function totalBill(amountOf,tip){
    let total = [];
    let i = 0;
    while(i < amountOf.length){
        total[i] = amountOf[i] + tip[i];
        i +=1
    }
    return total;
}
let amount1 = [125,555,44];
let tip3= calcTip(amount)
console.log(`the ${amount1} bill amount's tip is ${tip3} and total bill is ${totalBill(amount1,tip3)}`);



console.log(`--------------------Challenge :3--------------------`);
function calcTip1(amountOf){
    let tip = [];
    let i = 0;
    let total = [];
    while (i < amountOf.length){
        if(amountOf[i]<=50 && amountOf[i]>=300){
            tip[i] = (amountOf[i]/100)*15
        }else{
            tip[i] = (amountOf[i]/100)*20
        }
        i +=1;}
    return tip;}

function totalBill1(amountOf,tip){
    let total = [];
    let i = 0;
    while(i < amountOf.length){
        total[i] = amountOf[i] + tip[i];
        i +=1
    }
    return total;
}

function calcAverageofbills(totalsArray){
    let average = 0;
    let sum = 0;
    let i =0;
    while(i<totalsArray.length){
        sum = totalsArray[i]
        i ++
    }
    return average = sum / totalsArray.length;
}
let amount = [125,555,44,123,234,333,444,555,666,777];
let tip= calcTip1(amount)
let totalOf = totalBill1(amount,tip);
let avergaeofbills = calcAverageofbills(totalOf);
console.log(avergaeofbills)