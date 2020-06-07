$(document).ready(() => {
  $.ajax({
    url: "http://localhost:5501/stats",
    type: "GET",
    dataType: "json",
    success: (response) => {
      $.each(response.Countries, function (i, value) {
        item = `<li><div class="right" style="background-color:#ddd;">
          <a class="myitem" id="${value.CountryCode}" >${value.Country}</a></div></li>`;
        $("#myMenu").append(item);

        countryData = `
        <p class="1" id="${value.CountryCode}" style="display:none;">Country: ${value.Country}</p>
        <p class="2" id="${value.CountryCode}" style="display:none;">New Confirmed Cases: ${value.NewConfirmed}</p>
        <p class="3" id="${value.CountryCode}" style="display:none;">Total Confirmed: ${value.TotalConfirmed}</p>
        <p class="4" id="${value.CountryCode}" style="display:none;">New Deaths: ${value.NewDeaths}</p>
        <p class="5" id="${value.CountryCode}" style="display:none;">Total Deaths: ${value.TotalDeaths}</p>
        <p class="6" id="${value.CountryCode}" style="display:none;">New Recovered: ${value.NewRecovered}</p>
        <p class="7" id="${value.CountryCode}" style="display:none;">Total Recovered: ${value.TotalRecovered}</p>`;

        $("#CData").append(countryData);
      });

      $("a.myitem").click(function () {
        let val = $(this).attr("id");

        //https://www.w3schools.com/howto/howto_css_modals.asp
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        modal.style.display = "block";

        //load the data into the front
        let v1 = $(`p#${val}.\\31`).text();
        $("p#countryModal1").text(v1);

        let v2 = $(`p#${val}.\\32`).text();
        $("p#countryModal2").text(v2);

        let v3 = $(`p#${val}.\\33`).text();
        $("p#countryModal3").text(v3);

        let v4 = $(`p#${val}.\\34`).text();
        $("p#countryModal4").text(v4);

        let v5 = $(`p#${val}.\\35`).text();
        $("p#countryModal5").text(v5);

        let v6 = $(`p#${val}.\\36`).text();
        $("p#countryModal6").text(v6);

        let v7 = $(`p#${val}.\\37`).text();
        $("p#countryModal7").text(v7);

        span.onclick = function () {
          modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      });
    },
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
