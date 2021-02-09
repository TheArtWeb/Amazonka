$(function () {
  $('.header-navbar__link, .button__link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
  });
});