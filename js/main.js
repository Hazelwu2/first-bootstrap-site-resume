$(window).load(function(){
  $('#status').fadeOut();
  $('#preloader').delay(500).fadeOut('slow');
});

$(document).ready(function(){
  var scroll = new SmoothScroll('a[href*="#"]');
})