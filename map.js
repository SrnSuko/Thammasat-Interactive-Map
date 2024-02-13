
var modal3 = document.getElementById("Modal3");

var img3 = document.getElementById("Icon3");
var modalImg3 = document.getElementById("Icon3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal3.style.display = "none";
}
var modal8 = document.getElementById("Modal8");

var img8 = document.getElementById("Icon8");
var modalImg8 = document.getElementById("Icon8");
img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[1];

span.onclick = function() { 
  modal8.style.display = "none";
}
