$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $(".logo").css({
    'transform': 'translate(0px, '+ wScroll / 2 +'px)'
  });

  $(".back-bird").css({
    'transform': 'translate(0px, '+ wScroll / 4 +'%)'
  });

  $(".fore-bird").css({
    'transform': 'translate(0px, -'+ wScroll / 40 +'%)'
  });

// Model thumbnails
  if( wScroll > $('.clothes-pics').offset().top/5) {
    $('.clothes-pics figure').each(function(i){
      setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
      },100 * (i+1));

    });
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()) {
    $('.large-window').css({
      'background-position' :
      'center '+ (wScroll - $('.large-window').offset().top) +'px'
    });

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll /6);

    $('.window-tint').css({
      'opacity': opacity
    });
  }

  if(wScroll > $('.blog-posts').offset().top - $(window).height()) {

    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 690);
    $('.post-1').css({'transform': 'translate('+offset+'px, '+Math.abs(offset * 0.2)+'px)'});
    $('.post-3').css({'transform': 'translate('+Math.abs(offset)+'px, '+Math.abs(offset * 0.2)+'px)'});

  }
});
