<<<<<<< HEAD
////Countries of ASIAN CONTINENT........
function getCountry(){
    let countries = JSON.parse(this.responseText);
    
         k = countries.filter((a)=> a.continent === 'Asia');
         console.log(k);   
}

var request = new XMLHttpRequest();
request.addEventListener('load',getCountry);
request.open('GET','https://restcountries.com/v3.1/all')
request.send();






////Countries of ASIAN REGION........
function getCountry(){
    let countries = JSON.parse(this.responseText);
    
         k = countries.filter((a)=> a.region === 'Asia');
         console.log(k);   
}

var request = new XMLHttpRequest();
request.addEventListener('load',getCountry);
request.open('GET','https://restcountries.com/v3.1/all')
request.send();

=======
////Countries of ASIAN CONTINENT........
function getCountry(){
    let countries = JSON.parse(this.responseText);
    
         k = countries.filter((a)=> a.region === 'Asia');
         console.log(k);   
}

var request = new XMLHttpRequest();
request.addEventListener('load',getCountry);
request.open('GET','https://restcountries.com/v3.1/all')
request.send();





////Countries of ASIAN REGION........
function getCountry(){
    let countries = JSON.parse(this.responseText);
    
         k = countries.filter((a)=> a.region === 'Asia');
         console.log(k);   
}

var request = new XMLHttpRequest();
request.addEventListener('load',getCountry);
request.open('GET','https://restcountries.com/v3.1/all')
request.send();

>>>>>>> bb99a60f5e73e48d68860c5d373c002e56907f39


