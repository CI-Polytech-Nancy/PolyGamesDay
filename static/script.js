function showModal(id) {
    modals[id].style.display = "block";
}

function closeModals() {
    for (const modal of modals) {
        modal.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let modals = document.getElementsByClassName("overlay");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.opacity = "1";
    } else {
        document.getElementById("topBtn").style.opacity = "0";
    }
};

window.onclick = function (event) {
    for (const modal of modals) {
        if (event.target === modal) closeModals();
    }
}








setInterval(function(){ plusSlides(1); }, 3000);

var slideIndex = 1;
showSlides(slideIndex);
showSlides(slideIndex = Math.floor(Math.random() * document.getElementsByClassName("mySlides").length) + 1); 


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}







