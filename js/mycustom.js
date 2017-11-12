(function ($) {
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
        
        var hash = this.hash;
        if( hash ) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
       
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-expand-lg").offset().top > 50) {
            $(".fixed-top").addClass("topnavcol");
        } else {
            $(".fixed-top").removeClass("topnavcol");
        }
    });
    
    $(window).scroll(function() {
        if ($(".navbar-expand-lg").offset().top < 50) {
            $(".fixed-top").addClass("z-depth-0");
        } else {
            $(".fixed-top").removeClass("z-depth-0");
        }
    });

    $(window).scroll(function() {
        if ($(".navbar-expand-lg").offset().top > 50) {
            $(".fixed-top").addClass("navbar-custom");
        } else {
            $(".fixed-top").removeClass("navbar-custom");
        }
    });

     $(window).scroll(function() {
        var img = $(".changelogo img");
        if ($(".navbar-expand-lg").offset().top > 50) {
            img.attr("src", img.attr("src").replace("logo-atas.png", "logo-atas-black.png"));
        } 
        else {
            img.attr("src", img.attr("src").replace("logo-atas-black.png", "logo-atas.png"));
        }
    });


    $(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 5);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

})(jQuery);

 