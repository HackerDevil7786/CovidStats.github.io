
// getting data from an API using jquery and AJAX
$.ajax({

    type:"get",
    url:"https://api.covid19api.com/summary",
    success:function (response){
        console.log(response.Countries);
        for(let i=0;i<response.Countries.length;i++){
            let totalActive = response.Countries[i].TotalConfirmed-response.Countries[i].TotalRecovered;
            // how many columns we need is how many td we declare
            let tableRow = ` <tr><td>${response.Countries[i].Country}</td>
            <td>${response.Countries[i].TotalConfirmed}</td>
            <td>${totalActive}</td>
            <td>${response.Countries[i].TotalRecovered}</td>
            <td>${response.Countries[i].TotalDeaths}</td>
            </tr>`;
            // adding a row into table body using jquery in jquery first we have to write a dollar and then bracket and in bracker we pas arguments
            $('#tbody').append(tableRow);
        }
        // when we use data tables we need to write like this
        // We are using Data Table library of js to add functionalities to the table
        $('#covidTable').DataTable();
    },
    error:function (err){
        console.log(err);
    }
});