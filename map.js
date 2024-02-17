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

handleImageClick("Icon3", "Modal3");
handleImageClick("Icon8", "Modal8");
handleImageClick("IconTemp", "ModalTemp");
