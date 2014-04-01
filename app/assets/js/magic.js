
var debug = true;
var height, width, device;


var debug_stage_msg = function(message) {
  if(debug) {
    console.log(message);
  }
}

var dsm = debug_stage_msg; // Alias



// TODO: Rewrite below to make data-attr-* work automatically.
var dataStyle = function(source, attribute, target) {
  var content = $(source).attr(attribute);
  if(content !="" && content) {
    $(source).attr(target, content);
  } else {
    $(source).attr(target, 'No content');
  }
}

var setCSS = function(target, property, value) {
  $(target).css(property, value);
}

var setWidth = function(target, value) {
  setCSS(target, 'min-width', Math.round(value));
}

var setHeight = function(target, value) {
  setCSS(target, 'min-height', Math.round(value));
}
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
