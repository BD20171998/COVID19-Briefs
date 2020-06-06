$(document).ready(() => {
  $.ajax({
    url: "http://localhost:5501/stats",
    type: "GET",
    dataType: "json",
    success: (response) => {
      $.each(response.Countries, function (i, value) {
        item = `<li><div class="right" style="background-color:#ddd;">
          <a class="myitem">${value.Country}</a></div></li>`;
        $("#myMenu").append(item);
      });

      $("a.myitem").click(function () {
        //prints country name when clicked
        alert($(this).html());
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
