let button = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.opacity = "1";
      button.style.cursor = "pointer";
  } else {
      button.style.opacity = "0";
      button.style.cursor = "default";
  }
};


let slideIdx = 1;
const images = document.getElementById("slide")?.getElementsByTagName("img");

if (images != null)
  setInterval(function(){ incrementSlideShow(1) }, 5000);

function incrementSlideShow(inc) {
  let nextId = (slideIdx + inc) % images.length || images.length;

  images[slideIdx - 1].style.display = "none";
  images[nextId - 1].style.display = "block";

  slideIdx = nextId;
}
