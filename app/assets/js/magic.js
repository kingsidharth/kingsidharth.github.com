
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


// Event Tracking Wrapper
var shoutOut = function(category, action, opt_label, opt_value) {

  opt_label = opt_label || false;
  opt_value = opt_value || false;

  // Google Analytics Shit
  _gaq.push(['_trackEvent', category, action, opt_label, opt_value]);

  dsm("An event was logged");

}

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

var percentage = function(number, percentage, decimalPlaces) {
  decimalPlaces = decimalPlaces || false; 

  var result = (percentage/100) * number; 

  if (decimalPlaces) {
    return Math.floor(result * (10 * decimalPlaces)) / (10 * decimalPlaces);
  } else {
    return result;
  }
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

  return false; }

/* ==== HEADER STATICNESS ==== */
var stickyOffset, staticHeaderHeight;
  
var stickyHeader = function() {
  $('#header_area').addClass('sticky');
  window.staticHeaderHeight = $('#banner').height() + ( Math.floor($('#header_area .page').css('padding-top').replace(/[^-\d\.]/g, '')) * 2) ; 
}

var stickyHeaderBodyOffeset = function() {
  $('#header_area')
    .attr('data-0', 'min-height: '   + height/2 + 'px;')
    .attr('data-200', 'min-height: ' + staticHeaderHeight + 'px;');
}

var layout = function() {
  
  deviceDimensions();
  getDeviceType(width, height);
  viewportDependentClasses(device);


  if(device === 'desk-wide' || device === 'desk') {
    stickyHeader('#header_area');
    stickyHeaderBodyOffeset();
    dsm("Sticky Header Done!");
  }
}

var skrollrData = function() {
  var taglinePaddingInit = height/6;
  taglinePaddingInit = [ taglinePaddingInit, percentage(taglinePaddingInit, 75), percentage(taglinePaddingInit, 50), percentage(taglinePaddingInit, 25) ];

  var taglineHeight = parseInt($('.tagline').height(), 10) * 2;
  taglineHeight = [ taglineHeight, percentage(taglineHeight, 75), percentage(taglineHeight, 50), percentage(taglineHeight, 25) ];
  dsm(taglineHeight);
  
  $('.tagline')
    .attr('data-0', 'opacity: 1;    height: '+ taglineHeight[0] + 'px; padding: ' + taglinePaddingInit[0] +'px 0px; display:! block;')
    .attr('data-50', 'opacity: 0.5; height: '+ taglineHeight[1] + 'px; padding: ' + taglinePaddingInit[1] +'px 0px; display:! block;')
    .attr('data-100', 'opacity: 0;  height: '+ taglineHeight[2] + 'px; padding: ' + taglinePaddingInit[2] +'px 0px; display:! block;')
    .attr('data-150', 'opacity: 0;  height: '+ taglineHeight[3] + 'px; padding: ' + taglinePaddingInit[3] +'px 0px; display:! block;')
    .attr('data-200', 'opacity: 0;  height: 0px; padding: 0px 0px; display:! none;');
}

var postSkrollr = function() {
  $('body').css('margin-top', $('#header_area').css('height'));
  return document.body;
}

var initScripts = function() {
  // Getter Scripts
  layout();

  // Setter Scripts
}

var commonScripts = function()  {

  skrollrData();

  // skrollr functions
  var s = skrollr.init({
    forceHeight: false,
    easing: 'easeInOutCubic',
    constants: {
      box: '50p',
      header: '100p',
      instamojo: '500',
      epilogue: '1300'
    }
    
  });

  postSkrollr();
  
}

$(document).ready(function() {
  initScripts();
  commonScripts();
});
