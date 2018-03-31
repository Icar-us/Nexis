function popIn() {
  console.log('popIn');
  document.getElementById("results").style.display = "block";
}

function popOut() {
  window.onclick = function(event) {
    if (!event.target.matches('#myInput')) {
      console.log('popOut');
      document.getElementById("results").style.display = "none";
    }
  }
}
popOut();
