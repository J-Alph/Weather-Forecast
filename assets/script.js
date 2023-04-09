var searchbtn = document.querySelector("#button-addon1");

var results = $('#results');
var info23 = $('#information');
var apiurl ="api.openweathermap.org/data/2.5/weather?q="
var locationUrl ="https://api.openweathermap.org/data/2.5/weather?lat="
var city ;
var cityApiUrl = ""
var apiKey = "55fdddf0342ba32672f85a534da958c1";
var cityinfo =[];

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

var tableBody = document.getElementById('repo-table');

function cityHistory(city){
    var searchBtn= $('button>')
    .add

}
function searchList(city){
    var newbtn =$('<button>')
        .addClass('btn')
        .text(city)
        .on('click', function(){

        }).attr({
            type:"button"
        });

}



function weather(city) {
    var city = $('input[id="city-look"]').val();

        console.log(city);

if(!city){
    console.log("nothing");
    return;
}
    results.append('<li>'+ city + '</li>')

    // var lat = data.coord
    // var lon = data.coord;

    // var requestUrl = apiurl+"lat="+lat+"&lon="+lon+"&appid="+apiKey;
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey


    // localStorage.setItem("city", "stupid")

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
     
            })
        .then(function (data) {
            
            console.log(data)
            console.log(data.coord.lat)
            console.log(data.coord)
            console.log(data.main)
            cityinfo.push(data);
                var lat = data.coord.lat;
                var lon = data.coord.lon;


            var locationUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey  

            // // //looping over the fetch response and inserting the URL of your repos into a list
            
            fetch(locationUrl)
                .then(function(response){

                    return response.json();
                })
                


                
                info23.append("Hello world")
                // console.log(JSON.stringify(data))
            

            for (var i = 0; i < cityinfo.length; i++) {
                console.log(data)
                var listItem = $('<li>')
                .text(data);
                console.log(cityinfo[1])
                // listItem.textContent = data[i]
                info23.append(listItem);
                

                
                var weatdiv = $('<li>')
                .addClass('container2');

                var weathertitle= $('<h3>')
                .addClass('container2')
                .text(data);


                // listItem.text = data[i].html_url;

                info23.append(weatdiv);
                console.log("hello")
                
            
                // results.append('<li>'+ data + '</li>')
                // tableData.appendChild(link);
                // createTableRow.appendChild(tableData);
                // tableBody.append(createTableRow);
                //   //Create a list element

                // var listItem = $('<li>');

                // //   //Set the text of the list element to the JSON response's .html_url property

                // listItem.append(data[i].html_url);

                // //   //Append the li element to the id associated with the ul element.
                //   results.textContent = listItem
                // var show = $("<div>" + listItem[i] + "</div>");  

                // results.append(listItem[i]);
                // results.append(show);
                // results.append(createTableRow);
                // results.append(tableData);
                // console.log(listItem)

                
                  console.log("hello")
            }  
        });
    }
        
        



searchbtn.addEventListener('click', weather);