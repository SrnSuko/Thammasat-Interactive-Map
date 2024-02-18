function handleImageClick(imgId, modalId) {
  var img = document.getElementById(imgId);
  var modal = document.getElementById(modalId);
  var modalImg = document.getElementById(modalId);
  
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  var span = modal.getElementsByClassName("close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }
}

handleImageClick("Icon1", "Modal1");
handleImageClick("Icon3", "Modal3");
handleImageClick("Icon4", "Modal4");
handleImageClick("Icon5", "Modal5");
//handleImageClick("Icon6", "Modal6");
//handleImageClick("Icon7", "Modal7");
handleImageClick("Icon8", "Modal8");
handleImageClick("Icon9", "Modal9");
handleImageClick("IconTemp", "ModalTemp");
