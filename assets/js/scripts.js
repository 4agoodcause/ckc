$(function(){

  // Mobile Nav Toggle
  $('.btn-mobile-menu').click(function(){
    $('.main-nav ul, .admin-nav').toggleClass('show');
    $(this).toggleClass('active');
    return false;
  });

});