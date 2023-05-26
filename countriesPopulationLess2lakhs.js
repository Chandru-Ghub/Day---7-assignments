
///Find out the countries having population less than 2lakhs

function calcPopulation(){

let countries=JSON.parse(this.responseText);


let l = countries.filter((a)=>a.population < 200000);
console.log(l);


}

const request = new XMLHttpRequest();
request.addEventListener('load',calcPopulation);
request.open('GET','https://restcountries.com/v3.1/all');
request.send();


