$(function() {
  /* -- Universal -- */

  // Set minimum height of the main frame to window to avoid awkward footer in mid air
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  /*if (winWidth > 1000) {
    $('#content').css('min-height', winHeight);
    $('#sidebar').css('min-height', winHeight);
  
    var sidebarWidth = $('#sidebar').width();
    $('#fixed-side').css('width', sidebarWidth);
  } else {
    $('#content').css('margin-bottom', winHeight);
  }*/
})(jQuery);
