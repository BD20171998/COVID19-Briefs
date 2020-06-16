$(document).ready(() => {
  $.ajax({
    url: "http://localhost:5501/stats",
    type: "GET",
    dataType: "json",
    success: (response) => {
      $.each(response.Countries, function (i, value) {
        item = `<li><div class="right" style="background-color:#ddd;">
          <a class="myitem" id="${value.Slug}" >${value.Country}</a></div></li>`;
        $("#myMenu").append(item);
      });

      $("a.myitem").click(function () {
        let country = $(this).attr("id");
        let counName = $(this).html();
        $("#countryName").attr("value", counName);
        $("#countryName").attr("class", country);
      });
    },
  });

  $("#submit-button").click(() => {
    $(".chart").append(`<canvas id="myChart"></canvas>`);

    $.ajax({
      url: "http://localhost:5501/stats2-submit",
      type: "POST",
      dataType: "json",
      data: {
        start: $("#start").datepicker({ dateFormat: "yy-mm-dd" }).val(),
        end: $("#end").datepicker({ dateFormat: "yy-mm-dd" }).val(),
        slug: $("#countryName").attr("class"),
        confirmed: $("#confirmed").is(":checked"),
        recovered: $("#recovered").is(":checked"),
        deaths: $("#deaths").is(":checked"),
      },
      success: () => {},
    });

    $.ajax({
      url: "http://localhost:5501/stats2",
      type: "GET",
      dataType: "json",
      success: (response) => {
        let labels = response.map(function (e) {
          return e.Cases;
        });
        // Map JSON values back to values array
        let values = response.map(function (e) {
          return e.Date;
        });
        let Values = [];
        let backColor = [];
        for (let j = 0; j < values.length; j++) {
          var date = values[j].split("-");
          let year = date[0];
          let month = date[1];
          let dd = date[2].split("T");

          let dateString = month + "/" + dd[0] + "/" + year;

          Values.push(dateString);
          backColor.push("rgb(255,223,0)");
        }
        chartTitle =
          response[0].Country +
          ": Cumulative " +
          response[0].Status +
          " (by date)";

        BuildChart(Values, labels, chartTitle, response, backColor);
      },
    });
  });
});
// https://css-tricks.com/the-many-ways-of-getting-data-into-charts/
function BuildChart(labels, values, chartTitle, allData, backColor) {
  var data = {
    labels: labels,
    datasets: [
      {
        label: chartTitle, // Name the series
        data: values,
        backgroundColor: backColor,
      },
    ],
  };
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: data,
    options: {
      responsive: true, // Instruct chart JS to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behavior of full-width/height
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: allData[0].Status + " cases",
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Time Period",
            },
          },
        ],
      },
    },
  });
  return myChart;
}

$(function () {
  var today = new Date();
  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  $("#start").datepicker({
    dateFormat: "yy-mm-dd",

    minDate: "2020-01-20",
    maxDate: yesterday,
    onSelect: function (date) {
      var selectedDate = new Date(date);

      if (selectedDate === yesterday) {
        $("#end").datepicker("option", "minDate", selectedDate);
        $("#end").datepicker("option", "maxDate", selectedDate);
      } else {
        var msecsInADay = 86400000;
        var endDate = new Date(selectedDate.getTime() + msecsInADay);
        //https://stackoverflow.com/questions/4419804/restrict-date-in-jquery-datepicker-based-on-another-datepicker-or-textbox
        //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
        $("#end").datepicker("option", "minDate", endDate);
        $("#end").datepicker("option", "maxDate", yesterday);
      }
    },
  });
});
$(function () {
  var today = new Date();
  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  $("#end").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: "2020-01-20",
    maxDate: yesterday,
  });
});

//https://www.w3schools.com/howto/howto_js_search_menu.asp
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
