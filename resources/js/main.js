$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('body').scrollspy({ target: '#main-nav' });
   
    
    var navPadding = $('#main-nav').css('padding-top');
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      if($(this).scrollTop() > $nav.height()) {
        $("#main-nav").css('padding-top', '0');
        $(".lab-text").css('color', 'white');
      }
      else{
        $("#main-nav").css('padding-top', navPadding);
        $(".lab-text").css('color', '#ff6e6e');
      }
    });
    
});
