/* our code */
$(document).ready(function () {

  $.fn.shuffle = function () {
    var allElems = this.get(),
      getRandom = function (max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function () {
        var random = getRandom(allElems.length),
          randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });
    this.each(function (i) {
      $(this).replaceWith($(shuffled[i]));
    });
    return $(shuffled);
  };

  function scrolled(event) {
    var scrollPos = $(document).scrollTop();
    $('.scrollTo').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.scrollTo').removeClass("active");
        currLink.addClass("active");
      }
      else {
        currLink.removeClass("active");
      }
    });
  }

  $('.scrollTo').on('click touchstart', function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({
      scrollTop: $target.offset().top + 20
    }, 500, 'swing', function () {
      window.location.hash = target;
    });
  });

  function bindStickyHandler() {
    // @todo config
    var scrollPos = $(window).scrollTop();
    var startPos = $('#comparison-table thead').offset().top;
    var endPos = $('#comparison-table-footer').offset().top;

    if( scrollPos > startPos && endPos > scrollPos) {
      $('#comparison-header-sticky').addClass('active')
    } else {
      $('#comparison-header-sticky').removeClass('active')
    }
  }

  $(window).scroll(function(event){
    bindStickyHandler();
  });

  function onPageLoaded() {
    bindStickyHandler();
  }

  // init
  onPageLoaded();
});
