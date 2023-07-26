const searchbtn = document.querySelector("#button-addon1");
const issueContainer = document.getElementById('issues');

const results = $("#results");
const info23 = $("#information");
const apiurl = "api.openweathermap.org/data/2.5/weather?q=";
const locationUrl = "https://api.openweathermap.org/data/2.5/weather?lat=";


const apiKey = "55fdddf0342ba32672f85a534da958c1";


function weather(city) {
  var city = $('input[id="city-search"]').val();
  localStorage.setItem("city", city);
  console.log(city);

  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=+${city}+&appid=${apiKey}`;

  if (!city) {
    console.log("nothing");
    return;
  }



  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var weatherData = document.getElementById("weather-data");

      console.log(data);

      weatherData.innerHTML = `<a href="https://openweathermap.org/city/${data.id}" target="_blank">
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}</p>
        <p>Humidity: ${data.main.humidity}</p>
        <p>Wind Speed: ${data.wind.speed}</p></a>
      `
 } )  };
  
  function addEntry() {
    var entry = localStorage.getItem("city");
    var button = document.createElement("button");
    button.innerHTML = entry;
    document.getElementById("search-history").appendChild(button);
  }

  var weatherStorage = document.getElementById("wStorage")
  const values = Object.values(localStorage);



searchbtn.addEventListener("click", function() {

 weather(); addEntry(); getInfo()});
 

 function getInfo(){
  const newName = document.getElementById("city-search").value;
  const cityname = document.getElementById("forecast");
  cityname.innerHTML = newName;

  var city = $('input[id="city-search"]').val();


  let forecasttUrl = `https://api.openweathermap.org/data/2.5/forecast?q=+${city}+&appid=${apiKey}`;


 fetch(forecasttUrl)
 .then(response => (response.json())
 .then(data => {  

  console.log(data);

 

 
 } ))
}