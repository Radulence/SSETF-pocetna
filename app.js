const nav = document.getElementById('nav')
const ikona = document.getElementById('ikona')

nav.addEventListener('click', function(){

  if (ikona.style.display === "none") {
    ikona.style.display = "block"
    ikona.style.top  = "8px"
    ikona.style.left = "8px"
  }
  else {
    ikona.style.display = "none"
  }



})














function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}