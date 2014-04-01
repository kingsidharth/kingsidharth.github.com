
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

function getDeviceType(width, height) {
  if (width > 1600 && height > 1100) {
    return 'desk-wide';
  }
  else if (width > 1000) {
    return 'desk';
  }
  else if (width < 1000 && width > 481) {
    return 'portable';
  }
  else if (width < 481) {
    return 'palm';
  }
  else {
    return 'unknown';
  }
}




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
