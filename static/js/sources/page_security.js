$(document).ready(function () {
  var activeId = 4;
  var maxPage = $('.detail').length;


  $( "#go-prev" ).click(function() {
    showPage(activeId-- > 1 ? activeId : maxPage);
  });

  $( "#go-next" ).click(function() {
    showPage(activeId++ < maxPage ? activeId : 1);
  });

  $(".date").click(function () {
    showPage($(this).data("target"));
  });

  function showPage(p) {
    activeId = p;

    $('.detail').not(".collapse").addClass('collapse');
    $('#detail-' + activeId).removeClass('collapse');

    $('.date-active').removeClass('date-active');
    $('#date-' + activeId).addClass('date-active');
  }
  showPage(activeId);

  $(".nextStep, .prevStep").click(function (e) {
    e.preventDefault();
    var target = $(this).data("target");
    $('.form-content').not(".collapse").addClass('collapse');
    $('#formStep' + target).removeClass('collapse');
  });
});
