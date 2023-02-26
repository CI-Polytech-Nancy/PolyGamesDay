function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.opacity = "1";
  } else {
      document.getElementById("topBtn").style.opacity = "0";
  }
};


var slideIdx = 1;
setInterval(function(){ incrementSlideShow(1); }, 5000);

function incrementSlideShow(inc) {
  var images = document.getElementById("slide").getElementsByTagName("img")

  nextId = (slideIdx + inc) % images.length
  if (nextId == 0) {
    nextId = images.length
  }

  images[slideIdx - 1].style.display = "none"
  images[nextId - 1].style.display = "block"

  slideIdx = nextId
}
