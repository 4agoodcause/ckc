$(function(){

  // Mobile Nav Toggle
  $('.btn-mobile-menu').click(function(){
    $('.main-nav ul:first').toggleClass('show');
    $(this).toggleClass('active');
    return false;
  });
  
  $('.open-menu').click(function(){
    $('.child-menu').toggleClass('show');
    $(this).toggleClass('active');
    return false;
  });


});