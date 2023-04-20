const searchbtn = document.querySelector("#button-addon1");

const results = $('#results');
const info23 = $('#information');
const apiurl ="api.openweathermap.org/data/2.5/weather?q="
const locationUrl ="https://api.openweathermap.org/data/2.5/weather?lat="


const cityApiUrl = ""
const apiKey = "55fdddf0342ba32672f85a534da958c1";
const cityinfo =[];


function weather(city) {
    var city = $('input[id="city-search"]').val();

        console.log(city);

    if(!city){
    console.log("nothing");
    return;
    }
   


    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=+${city}+&appid=${apiKey}`

    var 

  $.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
})
    
    .then (data =>{
      console.log(response);

    for (var i = 0; i < data.length; i++) {
        console.log(data);
    

    }
    }
    )
;




















    // fetch(requestUrl)
    //     .then(function (response) {
    //     return response.json();
     
    //         })
    //     .then(function (data) {
            
    //         results.append(data)
    //         results.append(data.coord.lat)
    //         console.log(data)
    //         results.append(data.coord)

      
            //     var lat = data.coord.lat;
            //     var lon = data.coord.lon;


            // var locationUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey  

   
        //     fetch(locationUrl)
        //         .then(function(response){

        //             return response.json();
        //         })
                
        //         .then
        //          for (var i = 0; i < data.length; i++) {

        //     }  
        }
        // );
    // }

searchbtn.addEventListener('click', weather);