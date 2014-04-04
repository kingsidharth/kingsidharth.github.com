
var debug = true;
var height, width, device;
var scrollPosition;

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


var layout = function() {
  
  // Static Variables — I know the oxymoron

  // Get to know the viewport
  // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
  var width = Math.max(window.innerWidth)
  var height = Math.max(window.innerHeight)
  device = getDeviceType(width, height);
  dsm('Static variables initialized: ' + 
      'height = ' + height +
      'width  =' + width +
      'device =' + device);


  //Intializing js classes
  if(device != 'desk-wide') {
    $('.full-height').css('min-height', height);
    $('.half-height').css('min-height', height / 2);
  } else {
    setHeight('.full-height', 900);
    setHeight('.half-height', 1500);
  }

}

skrollrData = function() {
  if($(document.body).hasClass('home')) {
    dsm('Home Page Detected');
    $('#header_area')
      .attr('data-0', 'background-position: 0% 90%;')
      .attr('data-200', 'background-position: 0% 70%;');

    var stickyOffset = $('#header_area').height();
    $('#intro_area')
      .attr('data-0', 'margin-top: ' + stickyOffset + 'px;')
      .attr('data-400', 'margin-top: ' + 100 + 'px;');
    $('.tagline')
      .attr('data-0', 'opacity: 1;')
      .attr('data-100', 'opacity: 0.8;')
      .attr('data-200', 'opacity: 0;');
    $('#main_navigation')
      .attr('data-0', 'opacity: 0;')
      .attr('data-150', 'opacity: 1;');
  }
  dsm('skrollr data is in place...');
}

var initScripts = function() {
  layout();
  skrollrData();
}



var homeScripts = function()  {
  // skrollr functions
  var s = skrollr.init({
    forceHeight: false,
    easing: 'cubicOut',
      constants: {
        //instamojo: Math.round($('#instamojo_area').offset().top),
        instamojo: $('#instamojo_area').offset().top,
      },
      render: function(data) {
        scrollPosition = data.curTop;
        if (scrollPosition > 10 ) {
          if($('#logo').is(':visible')) {
            $('#logo, .home .tagline').slideUp();
          }
        } else {
          if($('#logo').is(':hidden')) {
            $('#logo, .home .tagline').slideDown();
          }
        }
      }
  });
}

$(document).ready(function() {
  initScripts();
  homeScripts();
});
