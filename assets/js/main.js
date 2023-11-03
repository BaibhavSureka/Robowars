/**
* Template Name: Restaurantly
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


console.log(23);
// Get references to the checkbox and description elements



// Function to update the description text


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

 
  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

 

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

   

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }


  
  

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 600) { // Adjust this value to your desired scroll height
      navbar.classList.add('hidden');
  } else {
      navbar.classList.remove('hidden');
  }
});

function scrollToAboutUs() {
  // Get a reference to the "About Us" section element
  let aboutUsSection = document.getElementById("aboutUsSection"); // Replace 'aboutUsSection' with the actual ID of your "About Us" section

  // Check if the section element exists
  if (aboutUsSection) {
    // Scroll to the "About Us" section smoothly
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToFaq() {
  // Get a reference to the "About Us" section element
  let FaqSection = document.getElementById("faqsection"); // Replace 'aboutUsSection' with the actual ID of your "About Us" section

  // Check if the section element exists
  if (FaqSection) {
    // Scroll to the "About Us" section smoothly
    FaqSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollTocontactUs() {
    // Get a reference to the "About Us" section element
    let ContactUsSection = document.getElementById("contact"); // Replace 'aboutUsSection' with the actual ID of your "About Us" section

    // Check if the section element exists
    if (ContactUsSection) {
      // Scroll to the "About Us" section smoothly
      ContactUsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToGravitas(){
  // Get a reference to the "About Us" section element
  let GravitasSection = document.getElementById("gravitas"); // Replace 'aboutUsSection' with the actual ID of your "About Us" section

  // Check if the section element exists
  if (GravitasSection) {
    // Scroll to the "About Us" section smoothly
    GravitasSection.scrollIntoView({ behavior: 'smooth' });
  }
}


// Get references to the button and video element
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');

// Add a click event listener to the button
playButton.addEventListener('click', function () {
// Check if the video is paused or ended
if (videoPlayer.paused || videoPlayer.ended) {
  // Play the video
  videoPlayer.play();
  // Change the button icon to a pause icon if needed
  playButton.innerHTML = '<i class="fa-solid fa-play"></i> ';
} else {
  // Pause the video
  videoPlayer.pause();
  // Change the button icon back to a play icon
  playButton.innerHTML = '<i class="fa-solid fa-play"></i> ';
}
});

// Add an event listener to the video to reset the button text when the video ends
videoPlayer.addEventListener('ended', function () {
playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
});


document.addEventListener("DOMContentLoaded", function () {
  let lever = document.getElementById("switch");
  let textarea = document.getElementById("mainDescriptionPara");

  function updateDescription() {
    if (lever.checked) {
      textarea.innerHTML =
        "We, RoboVITics-The official club of VIT, are a collection of vehement tech enthusiasts with the aspiration to learn and hone our skills & the drive to excel. As the official robotics club of VIT Vellore, our motto is to support aspiring robotics enthusiasts in working on jaw-dropping projects and discovering their specialities by holding numerous interactive workshops, seminars, and practical sessions. We work together on some remarkable projects and support exemplary teams that have received numerous accolades.";

      textarea.style.padding = "2rem";
    } else {
      textarea.innerHTML =
        "ROBOWARS is the flagship event of graVITas and one of the biggest combat robotics events in India. More than 40 bots engage in thrilling battles around-the-clock in the largest and safest arena in India for a chance to win the championship with their war machines. It proves to be an adrenaline rush to the participants as well as the audience. Teams all over the globe gather here to show off their fighting spirits and attain glory."; // Clear the description if the checkbox is not checked
      console.log(234);
      textarea.style.padding = "2rem";
    }
  }

  // Add an event listener to the checkbox for change events
  lever.addEventListener("change", updateDescription);
});

const playButon = document.getElementById("playButton");
const videoOverlay = document.getElementById("videoOverlay");
const videoPlyer = document.getElementById("videoPlayer");
const backButton = document.getElementById("backButton");

playButon.addEventListener("click", function () {
  // Show the video overlay
  videoOverlay.style.display = "block";
  
  // Start playing the video
  videoPlyer.play();
  
  // Hide the play button
  playButon.style.display = "none";
});

backButton.addEventListener("click", closeVideoOverlay);

// Function to close the video overlay
function closeVideoOverlay() {
  // Hide the video overlay
  videoOverlay.style.display = "none";
  
  // Pause the video and reset its time
  videoPlyer.pause();
  videoPlyer.currentTime = 0;
  
  // Show the play button again
  playButon.style.display = "block";
}

// Close the video overlay when clicking outside the video
videoOverlay.addEventListener("click", function (event) {
  if (event.target === videoOverlay) {
    closeVideoOverlay();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-lightbox");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxContent = document.getElementById("lightbox-content"); // Added this line

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const imageUrl = item.getAttribute("href");
      lightboxImage.src = imageUrl;
      lightbox.style.display = "block";
    });
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  document.addEventListener("click", function (e) {
    if (e.target === lightbox && e.target !== lightboxContent) { // Updated this line
      lightbox.style.display = "none";
    }
  });

  lightboxContent.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent clicks inside lightbox-content from closing the lightbox
  });
});