/*
 * INDEX
 * 1. Sets minimum content height to full browser height.
 * 2. Turn off webkit font soothing; except Windows
 */


// 1. Sets minimum content height to full browser height.
$(function() {
  $("#content_box").css("min-height", $(window).height() ); 
  //$("#logo").css("height", $("#logo").css('width') );
}); 

// 2. Turn off webkit font soothing; except Windows
//Not needed on MAC OS. Looks shitty.
var OSName ="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

if (OSName == "Win32") {
  $("body").css("-webkit-font-smoothing", "antialiased");
}
