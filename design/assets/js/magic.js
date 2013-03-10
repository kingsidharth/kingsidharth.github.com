$(function() {
  /* -- Universal -- */

  // Set minimum height of the main frame to window to avoid awkward footer in mid air
  var winHeight = $(window).height();
  $('#content').css('min-height', winHeight);
  $('#sidebar').css('min-height', winHeight);
  
  var sidebarWidth = $('#sidebar').width();
  $('#fixed-side').css('width', sidebarWidth);
})(jQuery)
