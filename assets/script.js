var searchbtn = document.querySelector("#button-addon1");

var results = $('#results');
var info = $('#information');
var apiurl ="https://api.openweathermap.org/data/2.5/weather?"
var city =$('#city-look')
var cityApiUrl = ""
var apiKey = "55fdddf0342ba32672f85a534da958c1";

var lat;
var lon;

var tableBody = document.getElementById('repo-table');

// function cityHistory(city){
//     var searchBtn= $('button>')
//     .add

// }
// function searchList(city){
//     var newbtn =$('<button>')
//         .addClass('btn')
//         .text(city)
//         .on('click', function(){

//         }).attr({
//             type:"button"
//         });

// }



function weather() {
    var coolbean = $('input[id="city-look"]').val();

console.log(coolbean);

if(!coolbean){
    console.log("nothing");
    return;

}
    results.append('<l1>'+ coolbean + '</li>')

    $('input[id="city-look"]').val('');

    // var lat = data.coord.lat;
    // var lon = data.coord.lon;

    // var requestUrl = apiurl+"lat="+lat+"&lon="+lon+"&appid="+apiKey;
    var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid="+apiKey;


    localStorage.setItem("city", "hello")

//     fetch(requestUrl)
//         .then(function (response) {
//             if(requestUrl.ok){
//                 requestUrl.json()
//                 .then(function (data){

//                 //     var latcord = data.coord.lat;
//                 //     var longcord = data.coord.long;
//                 //     var cityApiUrl = apiurl+latcord+'&lon='+longcord+'&appid='+apiKey;

//                 //     fetch(cityApiUrl)
//                 //         .then(function())
//                 }
//             }
        
//         // .then(function (data) {
//         //     console.log(data)


//             // results.append('<h2>With jQuery we can:</h2>');
//             // //looping over the fetch response and inserting the URL of your repos into a list

//             for (var i = 0; i < data.length; i++) {
//                 var createTableRow = document.createElement('tr');
//                 var tableData = document.createElement('td');
//                 var link = document.createElement('a');
                

//                 link.textContent= data[i].html_url;
//                 link.href = data[i].html_url;
                
                

//                 tableData.appendChild(link);
//                 createTableRow.appendChild(tableData);
//                 tableBody.appendChild(createTableRow);
//                 // //   //Create a list element

//                 // var listItem = $('<li>');

//                 // //   //Set the text of the list element to the JSON response's .html_url property

//                 // listItem.push(data[i].html_url);

//                 // //   //Append the li element to the id associated with the ul element.
//                 // // //   results.textContent = listItem
//                 // // var show = $("<div>" + listItem[i] + "</div>");  

//                 // results.append(listItem[i]);
//                 // results.append(city);
//                 // // console.log(listItem)
//                 // //   console.log("hello")
//             }  
//         }
//         // )
//         );
}


searchbtn.addEventListener('click', weather);
