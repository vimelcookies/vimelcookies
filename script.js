function myFunction(x) {
    x.classList.toggle("change"); // Fungsi untuk mengubah tampilan tombol hamburger
    var overlay = document.getElementById("myNav");
    if (overlay.style.width === "100%") {
      // Jika overlay terbuka, tutup overlay
      closeNav();
    } else {
      // Jika overlay tertutup, buka overlay
      openNav();
    }
  }
  
function openNav() {
  var overlay = document.getElementById("myNav");
  overlay.style.width = "100%";
}
function closeNav() {
  var overlay = document.getElementById("myNav");
  overlay.style.width = "0%";
}
  
// function for redirect to whatsapp
function redirectToWhatsApp1() {
  // Ganti nomor WhatsApp penerima pesan di bawah ini
  var phoneNumber = "6281280403520"; // Ganti dengan nomor WhatsApp penerima
  var message = "Halo, saya ingin membeli produk Anda. Mohon informasi lebih lanjut."; // Pesan yang akan ditampilkan di chat
  // Buat URL WhatsApp dengan nomor penerima dan pesan chat
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  // Redirect ke URL WhatsApp
  window.location.href = url;
}
// Panggil fungsi untuk memulai animasi saat halaman dimuat
window.onload = function() {
  typeWriter();
};


// function for redirect to whatsapp
function redirectToWhatsApp2() {
  // Ganti nomor WhatsApp penerima pesan di bawah ini
  var phoneNumber = "6281280403520"; // Ganti dengan nomor WhatsApp penerima
  var message = "Halo, saya ingin mendapatkan email notifikasi saat ada diskon."; // Pesan yang akan ditampilkan di chat
  // Buat URL WhatsApp dengan nomor penerima dan pesan chat
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  // Redirect ke URL WhatsApp
  window.location.href = url;
}
// Panggil fungsi untuk memulai animasi saat halaman dimuat
window.onload = function() {
    typeWriter();
};

// Set the date we're counting down for Independence Day
let countDownDateIndependence = new Date("Aug 17, 2023 23:59:59").getTime();
// Update the count down every 1 second for Independence Day
let xIndependence = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDateIndependence - now;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo1"
  document.getElementById("demo1").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(xIndependence);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the date we're counting down for New Year
let countDownDateNewYear = new Date("Dec 31, 2023 23:59:59").getTime();
// Update the count down every 1 second for New Year
let xNewYear = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDateNewYear - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo2"
  document.getElementById("demo2").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(xNewYear);
    document.getElementById("demo2").innerHTML = "EXPIRED";
  }
}, 1000);


// accordion_button
var acc = document.getElementsByClassName("accordion_button");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    toggleAccordion(panel);
  });
}

function toggleAccordion(panel) {
  var openPanels = document.getElementsByClassName("panel");
  for (var i = 0; i < openPanels.length; i++) {
    if (openPanels[i] !== panel) {
      openPanels[i].style.maxHeight = null;
    }
  }

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

// collapsible_button
var accCollapsible = document.getElementsByClassName("collapsible_button");
var j;
for (j = 0; j < accCollapsible.length; j++) {
  accCollapsible[j].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panelCollapsible = this.nextElementSibling;
    toggleCollapsible(panelCollapsible);
  });
}

function toggleCollapsible(panelCollapsible) {
  var openPanelsCollapsible = document.getElementsByClassName("collapsible_panel");
  for (var j = 0; j < openPanelsCollapsible.length; j++) {
    if (openPanelsCollapsible[j] !== panelCollapsible) {
      openPanelsCollapsible[j].style.maxHeight = null;
    }
  }
  if (panelCollapsible.style.maxHeight) {
    panelCollapsible.style.maxHeight = null;
  } else {
    panelCollapsible.style.maxHeight = panelCollapsible.scrollHeight + "px";
  }
}

// function to close the overlay automatically when scrolling to collapsible button
function closeOverlay() {
  var overlay = document.getElementById("myNav");
  overlay.style.width = "0%";
  // Get the hamburger button element based on its class
  var hamburgerButton = document.querySelector(".hamburger_button");
  hamburgerButton.classList.remove("change"); // Remove the "change" class from the hamburger button
}
// Get the reference to the "Home" text element based on its ID
const homeLink = document.getElementById("homeLink");
// Get the reference to the produkSection element based on its ID
const produkSection = document.getElementById("produkSection");
// Add an event listener to handle clicks on the "Home" text
homeLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action of the link
  // Scroll the page to the position of the produkSection element
  produkSection.scrollIntoView({ behavior: "smooth" });
;
  // Close the overlay automatically
  closeOverlay();
});

// function to close the overlay automatically when scrolling to collapsible button
function closeOverlay() {
  var overlay = document.getElementById("myNav");
  overlay.style.width = "0%";
  // Get the hamburger button element based on its class
  var hamburgerButton = document.querySelector(".hamburger_button");
  hamburgerButton.classList.remove("change"); // Remove the "change" class from the hamburger button
}
// Get the reference to the "Service" text element based on its ID
const serviceLink = document.getElementById("serviceLink");
// Get the reference to the collapsible button element based on its ID
const collapsibleButton = document.getElementById("collapsibleBtn");
// Add an event listener to handle clicks on the "Service" text
serviceLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action of the link
  // Scroll the page to the position of the collapsible button element
  collapsibleButton.scrollIntoView({ behavior: "smooth" });
  // Close the overlay automatically
  closeOverlay();
});

// function to close the overlay automatically when scrolling to collapsible button
function closeOverlay() {
  var overlay = document.getElementById("myNav");
  overlay.style.width = "0%";
  // Get the hamburger button element based on its class
  var hamburgerButton = document.querySelector(".hamburger_button");
  hamburgerButton.classList.remove("change"); // Remove the "change" class from the hamburger button
}
// Get the reference to the "Home" text element based on its ID
const aboutLink = document.getElementById("aboutLink");
// Get the reference to the produkSection element based on its ID
const aboutSection = document.getElementById("aboutSection");
// Add an event listener to handle clicks on the "Home" text
aboutLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action of the link
  // Scroll the page to the position of the produkSection element
  aboutSection.scrollIntoView({ behavior: "smooth" });
;
  // Close the overlay automatically
  closeOverlay();
});

// function to close the overlay automatically when scrolling to collapsible button
function closeOverlay() {
  var overlay = document.getElementById("myNav");
  overlay.style.width = "0%";
  // Get the hamburger button element based on its class
  var hamburgerButton = document.querySelector(".hamburger_button");
  hamburgerButton.classList.remove("change"); // Remove the "change" class from the hamburger button
}
// Get the reference to the "Home" text element based on its ID
const contactLink = document.getElementById("contactLink");
// Get the reference to the produkSection element based on its ID
const contactSection = document.getElementById("contactSection");
// Add an event listener to handle clicks on the "Home" text
contactLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action of the link
  // Scroll the page to the position of the produkSection element
  contactSection.scrollIntoView({ behavior: "smooth" });
;
  // Close the overlay automatically
  closeOverlay();
});



