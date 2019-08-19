$('.my-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});


let btnScroll =  $('.btnScroll__wrap .btn');

let headerWrap  =  $('.header-wrap');


function btnTop(top){

  if(top > 800){

    btnScroll.parent().parent().fadeIn(500);

  }else{

    btnScroll.parent().parent().fadeOut(500);

  }

}

btnTop(top);

$(document).on('scroll', function () {

  let top = $(this).scrollTop();


  btnTop(top);

});


btnScroll.on('click', function () {

  $('html, body').animate({
    scrollTop: 0
  }, 500)

})