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


setInterval(function(){ incrementSlideShow(1); }, 5000);

function incrementSlideShow(inc) {
  var img = document.getElementById("slide-img")
  var idx = parseInt(img.alt)

  nextIdx = (idx + inc) % 15
  if (nextIdx == 0)
    nextIdx = 15

  img.src = "static/images/slideshow/" + nextIdx + ".webp"
  img.alt = nextIdx
}
