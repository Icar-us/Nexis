var name = "Icar-us";
var machine = "Mint 18.3";

function KeyPress(e) {
      var evtobj = window.event? event : e
}

document.onkeydown = KeyPress;
$(document).ready(function() {
  $("#terminal").keydown(function(event) {
    if(event.which==13) {
      rncmd($("#terminal").val());
      $("#terminal").val("");
    }
  });
  $(".two-thirds").on("click", function() {
    $("#terminal").focus();
  });
});

function rncmd(i) {
  i=i.toUpperCase();
  if(i=="HELP") {
    $("#result").append("["+name+"@"+machine+" ~]$ help"
    +"<br>Help - Display a list of commands"
    +"<br>Clear - Erase previous terminal text"
    +"<br>Goto [address] - Redirects to entered address"
    +"<br>Name [new name] - Change username"
    +"<br>Machine [new machine name] - Change machine name"
    +"<br>Search [search query] - Search Google");
  }
  else if(i=="CLEAR") {
    $("#result").html("");
  }
  else if(i.startsWith("GOTO")) {
    if(i.slice(4)=="") {
      $("#result").append("["+name+"@"+machine+" ~]$ goto<br>Invalid command usage! Use \"Goto [address]\"");
    }
    else {
      if(i.slice(5).startsWith("http") == false) {
        window.location.href = "http\:\/\/" + i.slice(5);
      }
      else {
        window.location.href = i.slice(5);
      }
    }
  }
}
