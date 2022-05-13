$('.owl-carousel').owlCarousel({
  loop:true,
  margin:32,
  nav:true,
  autoplay:true,
  autoplaytimeout:900,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1500:{
          items:5
      }
  }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
