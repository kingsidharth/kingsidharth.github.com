
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

  $(document.body).css('padding-top', stickyOffset);

  if (device === 'desk-wide' || device === 'desk') { 
    dsm('Desktop detected, running skrollr...');

    // HOME skrollr ELEMENTS
    if($(document.body).hasClass('home')) {
      dsm('Home Page signal');

      // Tagline
      var taglinePaddingInit = $('.tagline').css('padding-top');
      var taglineHeight = parseInt($('.tagline').css('height'), 10) + (parseInt(taglinePaddingInit, 10) * 2);

      $('.tagline')
        .attr('data-0', 'opacity: 1; height: ' + taglineHeight + 'px; padding: ' + taglinePaddingInit + ' 0px; display:! block;')
        .attr('data-150', 'opacity: 0; height: ' + taglineHeight / 2 + 'px; padding: 0px 0px;')
        .attr('data-200', 'opacity: 0; height: 0px; padding: 0px 0px; display:! none;');

      $('#logo')
        .attr('data-0',  'transform: translate(100%, 0%);')
        .attr('data-70', 'transform: translate(100%, 0%);')
        .attr('data-170', 'transform: translate(0%, 0%;);');

      $('#main_navigation')
        .attr('data-0', 'opacity: 0;') 
        .attr('data-100', 'opacity: 0;')
        .attr('data-200', 'opacity: 1;');
    }
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
    //forceHeight: false,
    easing: 'easeInOutCubic',
    render: function(data) {
      scrollPosition = data.curTop;
    }
  });
}

$(document).ready(function() {
  initScripts();
  homeScripts();
});
