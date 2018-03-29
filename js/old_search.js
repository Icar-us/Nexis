document.getElementById("Youtube").onclick = function() {
  search('https://www.youtube.com/results', 'search_query')
};
document.getElementById("Google").onclick = function() {
  search('https://www.google.com/search', 'q')
};
document.getElementById("DuckDuckGo").onclick = function() {
  search('https://duckduckgo.com', 'q')
};
//  document.getElementById("Torrents").onclick = function() {search('https://www.1337x.to/search/', '')};

var search_site;
var search_def;

function search(ss, sd) {
  search_def = sd;
  search_site = ss;
  console.log('debug');
  document.getElementById("f").action = search_site;
  document.getElementById("input").name = search_def;
};


// changes site to be searched a the predefined var "search_site"
/* When the user clicks on the button,
                                                                  toggle between hiding and showing the dropdown content */
function toggleClick() {
  document.getElementById("dropclick").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
