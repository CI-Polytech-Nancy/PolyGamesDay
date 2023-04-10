function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      document.getElementById("scrollTopBtn").style.opacity = "1";
  else
      document.getElementById("scrollTopBtn").style.opacity = "0";
};

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.getElementById("loader").style.opacity = "0";
  }
}


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
