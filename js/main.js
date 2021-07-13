jQuery(document).ready(function($){
	$('.counter-number').counterUp({
    delay: 10,
    time: 1000
  });
  });
jQuery(document).ready(function($){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0){
      $("#scroller-positive").fadeIn();
    }
    else{
      $("#scroller-positive").fadeOut();
    }
    });
  $("#scroller-positive").click(function(){
    $("body,html").animate({scrollTop:0},400);
    return false;
  });
  });
jQuery(document).ready(function($){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0){
      $(".menu-positive-groping").addClass('menu-fixed-positive-groping');
    }
    else{
      $(".menu-positive-groping").removeClass('menu-fixed-positive-groping');
    }
    });
    });
jQuery(document).ready(function($){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0){
      $(".positive1-header-section").addClass('positive1-header-fixed');
    }
    else{
      $(".positive1-header-section").removeClass('positive1-header-fixed');
    }
    });
    });
jQuery(document).ready(function($){
  $('.owl-carousel').owlCarousel({
    autoplay:true,
  });
  });

