
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
  window.width = Math.max(window.innerWidth)
  window.height = Math.max(window.innerHeight)
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

  return width, height;
}

skrollrData = function() {
  var stickyOffset = $('#header_area').height();
  var staticHeaderHeight = 46 + ( 37*2 ); 
  
  $('#header_area')
      .attr('data-0', 'background-position: 0% 90%; height:' + stickyOffset +'px;')
      .attr('data-200', 'background-position: 0% 10%; height:' + stickyOffset +'px;')
      .attr('data-300', 'background-position: 0% 0%; height: ' + staticHeaderHeight +'px;'); 

  if($(document.body).hasClass('home')) {
    dsm('Home Page signal');

    $('#intro_area')
      .attr('data-0', 'margin-top: ' + stickyOffset + 'px;')
      .attr('data-500', 'margin-top: ' + (stickyOffset + 300) + 'px;');
    $('.tagline')
      .attr('data-0', 'opacity: 1; display:! block;')
      .attr('data-100', 'opacity: 0.6; display:! block;')
      .attr('data-200', 'opacity: 0; display:! block')
      .attr('data-210', 'opacity: 0; display:! none;');
    $('#main_navigation')
      .attr('data-0', 'opacity: 0;') 
      .attr('data-100', 'opacity: 0;')
      .attr('data-250', 'opacity: 1;');
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
    easing: 'easeInOutCubic',
      render: function(data) {
        scrollPosition = data.curTop;
        console.log(scrollPosition);
      }
  });
}

$(document).ready(function() {
  initScripts();
  homeScripts();
});
