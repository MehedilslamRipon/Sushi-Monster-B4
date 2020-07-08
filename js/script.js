$(document).ready(function () {
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 718) {
      $('#back-to-top').addClass('scrollTop')
    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  });
  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);
  });
  $(window).scroll(function () {
      let position = $(this).scrollTop();
      if (position >= 718) {
        $('.navbar').addClass('navbar-background')
        $('.navbar').addClass('fixed-top');
      } else {
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
      }
    });
    $("#header,.info").ripples({
      dropRadius: 20,
      perturbance: 0.06
    });
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery: {
        // options for gallery
        enabled: true
      }
    });
});