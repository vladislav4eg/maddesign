$(document).ready(function() {





  $('.nav-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav').toggleClass('open');
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>20){
      $('.header').addClass('sticky');
    }
    else if ($(this).scrollTop()<20){
      $('.header').removeClass('sticky');
    }
  });

  $('.offer-tabs').tabslet({
    animation: true,
  });


  $('.services-tabs').tabslet({
    animation: true,
    controls: {
      prev: '.services-tabs__prev',
      next: '.services-tabs__next'
    }
  });

 

    $('.team-tabs').tabslet({
    animation: true,
  });

  function serviceCount() {

    var count = $('.services-tabs ul li').length;
    var current = $('.services-tabs ul li.active').index() + 1;

    $('.count').text(count);
    $('.current').text(current);

  }
  
  serviceCount();

  $('.services-tabs__prev').click(function(event) {
    serviceCount();
  });

  $('.services-tabs__next').click(function(event) {
    serviceCount();
  });


  $('.tabs-list li').click(function(event) {
    serviceCount();
  });
  // $( ".team-tab" ).each(function( index ) {
  //   console.log($(".team-tab").index() + 1);
  // });



    var msnry = new Masonry( '.grid', {
   itemSelector: '.grid-item',
   columnWidth: '.grid-sizer',
   gutter: 30,
   percentPosition: true
  });



     var swiper = new Swiper('.team-container', {

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 500
    });

   

 var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


  var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });





 
   var swiper = new Swiper('.swiper-sertificates', {
      slidesPerView: 5,
      spaceBetween: 50,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

 var breakpoint = window.matchMedia( '(min-width: 992px)' );
  var partnerSlider;

  var breakpointChecker = function() {
     // if larger viewport and multi-row layout needed
     if ( breakpoint.matches === true ) {
        // clean up old instances and inline styles when available
        if ( partnerSlider !== undefined ) {
          $('.partners__wrap').removeClass('swiper-container');
          $('.partners__wrap-card').unwrap('.swiper-wrapper');
          $('.partners__wrap-card').removeClass('swiper-slide');
          $('.partners__wrap .swiper-pagination').remove();
          partnerSlider.destroy( true, true );
        }
        // or/and do nothing
        return;
     // else if a small viewport and single column layout needed
     } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
     }
  };

  var enableSwiper = function() {

    $('.partners__wrap').addClass('swiper-container');
    if (! $('.partners__wrap .swiper-wrapper').length ) {
      $('.partners__wrap-card').wrapAll('<div class="swiper-wrapper"></div>');
    }
    $('.partners__wrap-card').addClass('swiper-slide');
    $('.partners__wrap').append('<div class="swiper-pagination"></div>');

    partnerSlider = new Swiper ('.partners__wrap', {
      slidesPerView: 8,
  spaceBetween: 30,
 
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 35,
      
      // slidesPerColumn: 5
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      width: 340,
      // slidesPerColumn: 5
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
      width: 500,
      // slidesPerColumn: 5
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      width: 685,
      // slidesPerColumn: 5
    }
  },

      
    });
  }

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();







//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".order-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-form").find("input[name=name]").val(),
        phone: jQuery(".order-form").find("input[name=phone]").val(),
        number: jQuery(".order-form").find("input[name=number]").val(),
        product: jQuery(".order-form").find("input[name=product]").val(),
        subject: jQuery(".order-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-form', t);
    }
  });

  $(".calculation-form").validate({
    messages: {
      name: "Введите ваше имя",
      phone: "Введите ваш телефон",
      email: "Введите ваш email",
      upload: "Загрузите ваш документ",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".calculation-form").find("input[name=name]").val(),
        phone: jQuery(".calculation-form").find("input[name=phone]").val(),
        subject: jQuery(".calculation-form").find("input[name=subject]").val()
      };
      ajaxSend('.calculation-form', t);
    }
  });


    $("#calculation__file").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html("Вы прикрепили файл " + filename);
    });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

    function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
         $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }


 var acc = $('.calc__title');
var accContent = $('.calc__content');
$('.calc__title.calc__active').next().slideDown(500);
acc.on('click', function(e) {
  if ($(this).hasClass('calc__active')) {
    $(this).removeClass('calc__active');
    $(this).next().slideUp(500);
  }
  else {
    $(this).addClass('calc__active');
    accContent.not($(this).next()).slideUp(500);
    acc.not($(this)).removeClass('calc__active');
    $(this).next().slideDown(500);
  }
});



    var swiper = new Swiper('.command-slider', {
       slidesPerView: 4,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });


$('.catalog__card').hide();
$('.catalog__card:first').show();
$('.tabs ul a:first').addClass('active');

$('.tabs ul a').click(function(event){
  event.preventDefault();
  $('.tabs ul a').removeClass('active');
  $(this).addClass('active');
  $('.catalog__card').hide();

  var selectTab = $(this).attr('href');
  $(selectTab).fadeIn();
});



});