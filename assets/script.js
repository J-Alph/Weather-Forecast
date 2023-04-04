var results = $('#results');
var info = $('#information');
var apiurl ="https://api.openweathermap.org/data/2.5/weather?"

var searchbtn = document.querySelector("#button-addon1");
var apiKey = "55fdddf0342ba32672f85a534da958c1";
var city;

var tableBody = document.getElementById('repo-table');

// function cityHistory(city){
//     var searchBtn= $('button>')
//     .add

// }
function weather() {
    
    var lat = data.coord.lat;
    var lon = data.coord.lon;

    var requestUrl = apiurl+"lat="+lat+"&lon="+lon+"&appid="+apiKey;

    localStorage.setItem("city", "hello")

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)


            
        
            



            // results.append('<h2>With jQuery we can:</h2>');
            // //looping over the fetch response and inserting the URL of your repos into a list

            for (var i = 0; i < data.length; i++) {
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');
                

                link.textContent= data[i].html_url;
                link.href = data[i].html_url;
                
                console.log(data)

                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
                // //   //Create a list element

                // var listItem = $('<li>');

                // //   //Set the text of the list element to the JSON response's .html_url property

                // listItem.push(data[i].html_url);

                // //   //Append the li element to the id associated with the ul element.
                // // //   results.textContent = listItem
                // // var show = $("<div>" + listItem[i] + "</div>");  

                // results.append(listItem[i]);
                // results.append(city);
                // // console.log(listItem)
                // //   console.log("hello")
            }  
        });
}


searchbtn.addEventListener('click', weather);
