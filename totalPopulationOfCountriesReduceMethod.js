
////Find out the total population of countries
function printData() {
    let countries = JSON.parse(this.responseText);
    //console.log(JSON.parse(this.responseText))
    let bag = [];
    countries.forEach((c) =>bag.push((c.population)))
    //Adding population of each country inside the array
    //console.log(bag);
    let sum = bag.reduce((a,b)=>a+b);
    console.log(` The total population is: ${sum} `);
    }
    
    var request = new XMLHttpRequest();
    request.addEventListener("load", printData);
    request.open("GET",'https://restcountries.com/v3.1/all');
    request.send(); 