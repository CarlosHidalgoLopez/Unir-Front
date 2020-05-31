
$( document ).ready(function() {

$(function() {
  $(document).scroll(function() {
    var $nav = $('.head-fixed');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(function() {
  $(document).scroll(function() {
    var $nav = $('.hamburguer .ham');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(function() {
  $(document).scroll(function() {
    var $nav = $('.hamburguer');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function() {
  $(document).scroll(function() {
    var $nav = $('.img-scroll');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(function() {
  $(document).scroll(function() {
    var $nav = $('.img-sin');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$('.hamburguer').click(function() {
$('.menu-click').toggle();
});

$('.close').click(function() {
$('.menu-click').toggle();
});



});
