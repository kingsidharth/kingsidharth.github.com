

var dataStyle = function(source, attribute, target) {
  var content = $(source).attr(attribute);
  if(content !="" && content) {
    $(source).attr(target, content);
  } else {
    $(source).attr(target, 'No content');
  }
}

var setHeight = function(target, height) {
  $(target).css('min-height', Math.round(height));
}

var homeScripts = function()  {
  dataStyle('#instamojo_area', 'data-style', 'style');

  // Layout & Height Settings
  var windowHeight = $(window).height();
  //setHeight('#content_area', $('#intro_area').height() + $('#header_area').height() ); 


  // skrollr functions
  /*var s = skrollr.init({
    //forceHeight: false,
    easing: 'cubicOut',
      constants: {
        //instamojo: Math.round($('#instamojo_area').offset().top),
        instamojo: $('#instamojo_area').offset().top,
      },
  });*/
}

$(document).ready(function() {
  
});
