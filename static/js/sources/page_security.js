$(document).ready(function () {
  var start = 1;
  var maxPage = $('.detail').length;


  $( "#go-prev" ).click(function() {
    showPage(start-- < 1 ? 1 : maxPage);
  });

  $( "#go-next" ).click(function() {
    showPage(start++ < maxPage ? start : 1);
  });

  function showPage(p) {
    start = p;
    $('.detail').not(".collapse").addClass('collapse');
    $('#detail-' + p).removeClass('collapse');
  }

  showPage(start);
});
