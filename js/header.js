// window.addEventListener("scroll", function() {
//     var header = document.querySelector("header");
//     if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//     } else {
//     header.classList.remove("scrolled");
//     }
//     });

window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
  
    if (window.scrollY > 0) {
      navbar.classList.add("transparent-bg");
    } else {
      navbar.classList.remove("transparent-bg");
    }
  });
  