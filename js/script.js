    // Script to hide the preloader after loading
    window.addEventListener("load", () => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
      });

      //sricky navbar
var navBar = $("#topNav");
var hdrHeight = $("header").height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight + 50) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
});
