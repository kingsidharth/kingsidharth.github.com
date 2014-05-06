
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

/* ---------- HELPER FUNCTIONS --------- */

// CSS Wrappers 
var setCSS = function(target, property, value) {
  $(target).css(property, value);
  return target;
}

var setWidth = function(target, value) {
  setCSS(target, 'min-width', Math.round(value));
}

var setHeight = function(target, value) {
  setCSS(target, 'min-height', Math.round(value));
}

// Mathematical Wrappers 
var percentage = function(number, percentage, decimalPlaces) {
  decimalPlaces = decimalPlaces || false; 

  var result = (percentage/100) * number; 

  if (decimalPlaces) {
    return Math.floor(result * (10 * decimalPlaces)) / (10 * decimalPlaces);
  } else {
    return result;
  }
}


/* ---------- RESPONSIVE ---------- */
// Get Device Type 
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


// Responsive Navigation
var responsiveNavigationInit = function(element) {
  var clickTargetText = '<span>' + $(element).data('nav-title') + '</span>';
  var clickActiveText = '<span style="display: none;">&times; Close</span>';
  var text = clickTargetText + clickActiveText;
  var clickTarget = '<li class="palm-show"><a class="nav_state_toggle switch_span" href="#">' + text + '</a></li>';

  $(element).children().hide();
  $(element).prepend(clickTarget);

  return element;
}

var responsiveNavigationListeners = function() {
  $('body').on('click', '.nav_state_toggle', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    var nav = $(this).parent().parent();
    nav.children().not('.palm-show').slideToggle();
  });
}

var responsiveNavigation = function(element) {
  responsiveNavigationInit(element);
  responsiveNavigationListeners();
}
