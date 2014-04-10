
var debug = true;
var height, width, device;
var scrollPosition;


// Debugging Message Control
var debug_stage_msg = function(message) {
  if(debug) {
    console.log(message);
  }
}

var dsm = debug_stage_msg; // Alias

// CSS Methods
var setCSS = function(target, property, value) {
  $(target).css(property, value);
}

var setWidth = function(target, value) {
  setCSS(target, 'min-width', Math.round(value));
}

var setHeight = function(target, value) {
  setCSS(target, 'min-height', Math.round(value));
}

// Get Device Type — Responsive Querries
var getDeviceType = function(width, height) {
  if (width > 1600 && height > 1100) {
    device = 'desk-wide';
  }
  else if (width > 1000) {
    device = 'desk';
  }
  else if (width < 1000 && width > 481) {
    device = 'portable';
  }
  else if (width < 481) {
    device = 'palm';
  }
  else {
    device = 'unknown';
  }

  return device;
}

var deviceDimensions = function() {
  // Get to know the viewport
  // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript

  window.width = Math.max(window.innerWidth)
  window.height = Math.max(window.innerHeight)

  return width, height;
}

// Classes that need viewport data to Initialize
var viewportDependentClasses = function(device) {
  if(device != 'desk-wide') {
    $('.full-height').css('min-height', height);
    $('.half-height').css('min-height', height / 2);
  } else {
    setHeight('.full-height', 900);
    setHeight('.half-height', 1500);
  }

  return false;
}

var layout = function() {
  
  deviceDimensions();
  getDeviceType(width, height);
  viewportDependentClasses(device);
  
}

var skrollrData = function() {
  var stickyOffset = $('#header_area').height();
  var staticHeaderHeight = 46 + ( 37*2 ); 

  if (device === 'desk-wide' || device === 'desk') { 
    dsm('Desktop detected, running skrollr...');

    // Always pad body to adjust content for sticky #header_area
    $(document.body).css('padding-top', stickyOffset);

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
  } // endif device === 'desk' | 'desk-wide'

  dsm('skrollr data is in place...');
}

var initScripts = function() {
  layout();
  skrollrData();
}

var commonScripts = function()  {
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
  commonScripts();
});
