function cntyUSdollars(){
 let countries = JSON.parse(this.responseText)
  

 //using filter method filter the countries which are using USD(united states dollar) as currency
  
 let search = countries.filter((a)=>a.currencies?.USD);
   console.log(search);

   //TO see the datas inside the USD 
  //k = countries.forEach((a)=> console.log(a.currencies?.USD));

}
const request = new XMLHttpRequest();
request.addEventListener('load',cntyUSdollars);
request.open('GET','https://restcountries.com/v3.1/all');
request.send();

////https://github.com/vaaluvishnu5146/FSD-B38-T
///a.currencies.USD

