// index.js


console.log("I am live");



var totalcases =()=> {

fetch('https://api.covid19api.com/summary').then((apidata)=>{
  //console.log(apidata);
  return apidata.json();
}).then((actualdata)=>{
  console.log(actualdata);
  //console.log(actualdata.Global.TotalConfirmed);

  var totalcasesCount=actualdata.Global.TotalConfirmed;
  document.getElementById('totalcases').innerHTML=`${totalcasesCount}`;

  var totalDeaths=actualdata.Global.TotalDeaths;
  document.getElementById('Deaths').innerHTML=`${totalDeaths}`;

  var totalRecovered=actualdata.Global.TotalRecovered;
  document.getElementById('Recovers').innerHTML=`${totalRecovered}`;

  var newConfirmed=actualdata.Global.NewConfirmed;
  document.getElementById('activeCases').innerHTML=`${newConfirmed}`;

  var totalRecovered=actualdata.Global.TotalRecovered;
  document.getElementById('totalRecovered').innerHTML=`${totalRecovered}`;

  var newDeaths=actualdata.Global.NewDeaths;
  document.getElementById('newDeaths').innerHTML=`${newDeaths}`;

  var newRecovered=actualdata.Global.NewRecovered;
  document.getElementById('newRecovered').innerHTML=`${newRecovered}`;


});
}

totalcases();
