
function getCountry(){
    let countries = JSON.parse(this.responseText);
    
         k = countries.filter((a)=> a.region === 'Asia');
         console.log(k);   
}

const request = new XMLHttpRequest();
request.addEventListener('load',getCountry);
request.open('GET','https://restcountries.com/v3.1/all')
request.send();

