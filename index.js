// Image Slider on Header Section of Index Page //

window.onload = function(){
const imageurl = [
  "../images/banner1.jpg", 
  "../images/banner2.jpeg",
  "../images/banner3.jpg", 
  "../images/banner4.jpg",
  "../images/banner5.jpg", 
];
let index = 0;
let myImage = document.getElementById("gallery");


function swapImage() {                    // function for the slideshow in the header section//
  if (index == imageurl.length - 1) {
    index = 0;
  }
  else {                                 // increment in index so that photos come after one
    index += 1;
  }
  myImage.setAttribute("src",imageurl[index]);
}

swapImage();
setInterval(swapImage,2000);          // interval is set to change the image after 2000ms//
}























































































