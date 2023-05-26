
///QUESTION:1[COMMON NAME]

/////Find out the countries name of the given JSON ...............
function printData() { 
    let countries = JSON.parse(this.responseText);
   countries.forEach((c) =>console.log((c.name.common)));
      
   }
   var request = new XMLHttpRequest();
   request.addEventListener("load", printData);
   request.open("GET",'https://restcountries.com/v3.1/all');
   request.send();  
   


///QUESTION:2[FLAG]

   /////Find out the countries flag of the given JSON ...............
      function printData() {
         let countries = JSON.parse(this.responseText);
         countries.forEach((c) =>console.log((c.flag)));
        
         }
         var request = new XMLHttpRequest();
         request.addEventListener("load", printData);
         request.open("GET",'https://restcountries.com/v3.1/all');
         request.send();   




 ///QUESTION:3[CAPTIAL]

   //////Find out the capital of  countries of the given JSON.................
      function printData() {
         let countries = JSON.parse(this.responseText);
         countries.forEach((c) =>console.log((c.capital)));
        
         }
         var request = new XMLHttpRequest();
         request.addEventListener("load", printData);
         request.open("GET",'https://restcountries.com/v3.1/all');
         request.send();  