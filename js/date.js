var HALTcounter = 0;
var monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "July",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

var i = setInterval(function() {
  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  document.getElementById("J1970").innerHTML = date.getTime();
  document.getElementById("regDate").innerHTML = monthNames[monthIndex] + ' // ' + day + ' // ' + year;

  if (HALTcounter === 1) {
    clearInterval(i);
  }
}, 35);
