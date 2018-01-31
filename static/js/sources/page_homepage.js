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

  function createStickyNav(sticky) {
    if (typeof sticky !== 'undefined') {
      $(document).on('scroll', scrolled);
    }
  }

  function shuffleTeam(team) {
    if (typeof team !== 'undefined') {
      team.shuffle();
    }
  }

  // On the RUN

  var OSName = "unknown",
    win = $('html'),
    $jumbo = $('#jumbotron'),
    $header = $('#header'),
    h = window.innerHeight + 260;

  // reorder platform icons
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "win";
  if (navigator.appVersion.indexOf("Mac") != -1) OSName = "mac";
  if (navigator.appVersion.indexOf("X11") != -1) OSName = "linux";
  if (navigator.appVersion.indexOf("Linux") != -1) OSName = "linux";
  $("#" + OSName).prependTo("#platforms");

  // jumbo height fixer
  $jumbo.css('max-height', h + 'px');
  $header.css('max-height', h + 'px');

  // jumbotron headline fitting
  $("#headline").fitText(.7);
  $("#lead").fitText(2.1);


  shuffleTeam($('.shuffle'));
  createStickyNav($("#sticky-nav"));

  $('.scrollTo').on('click touchstart', function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({
      scrollTop: $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
    });
  });

});
