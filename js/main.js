$('.single-item').slick({
    infinite: true,
    dots: true,
    dotsClass:'slick-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide:true,
  });
  
  $('.most-popular__slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
               }
      }],
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth <= 1024) {
      $('.most-popular__slider').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('.most-popular__slider').slick();
        sliderIsLive = true;
      }
    }
  });
  
 