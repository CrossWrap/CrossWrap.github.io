// JavaScript Document

function call1(){
var safeColors = ['00', '33', '66', '99', 'cc', 'ff'];
var rand = function() {
  return Math.floor(Math.random() * 6);
};
var randomColor = function() {
  var r = safeColors[rand()];
  var g = safeColors[rand()];
  var b = safeColors[rand()];
  return "#" + r + g + b;
};

$(document).ready(function() {
$('.fil2').css('fill', randomColor());
$('.fil14').css('fill', randomColor());
$('.fil3').css('fill', randomColor());
$('.fil15').css('fill', randomColor());	
$('.fil4').css('fill', randomColor());
$('.fil5').css('fill', randomColor());	
$('.fil16').css('fill', randomColor());
$('.fil6').css('fill', randomColor());	
$('.fil17').css('fill', randomColor());	
$('.fil32').css('fill', randomColor());	
$('.fil7').css('fill', randomColor());
$('.fil33').css('fill', randomColor());
$('.fil18').css('fill', randomColor());
$('.fil34').css('fill', randomColor());
$('.fil26').css('fill', randomColor());
$('.fil19').css('fill', randomColor());
$('.fil35').css('fill', randomColor());
$('.fil27').css('fill', randomColor());
$('.fil36').css('fill', randomColor());
$('.fil28').css('fill', randomColor());
$('.fil37').css('fill', randomColor());    
$('.fil29').css('fill', randomColor());
$('.fil30').css('fill', randomColor());
$('.fil13').css('fill', randomColor());
$('.fi12').css('fill', randomColor());	
$('.fil11').css('fill', randomColor());
$('.fil10').css('fill', randomColor());
$('.fil9').css('fill', randomColor());
$('.fil8').css('fill', randomColor());	
$('.fil31').css('fill', randomColor());
$('.fil20').css('fill', randomColor());
$('.fil21').css('fill', randomColor());	
$('.fil22').css('fill', randomColor());
$('.fil23').css('fill', randomColor());
$('.fil24').css('fill', randomColor());	
$('.fil25').css('fill', randomColor());


$('#Layer_1').ready(function() {
$('.fil2').css('fill', randomColor());
$('.fil14').css('fill', randomColor());
$('.fil3').css('fill', randomColor());
$('.fil15').css('fill', randomColor());	
$('.fil4').css('fill', randomColor());
$('.fil5').css('fill', randomColor());	
$('.fil16').css('fill', randomColor());
$('.fil6').css('fill', randomColor());	
$('.fil17').css('fill', randomColor());	
$('.fil32').css('fill', randomColor());	
$('.fil7').css('fill', randomColor());
$('.fil33').css('fill', randomColor());
$('.fil18').css('fill', randomColor());
$('.fil34').css('fill', randomColor());
$('.fil26').css('fill', randomColor());
$('.fil19').css('fill', randomColor());
$('.fil35').css('fill', randomColor());
$('.fil27').css('fill', randomColor());
$('.fil36').css('fill', randomColor());
$('.fil28').css('fill', randomColor());
$('.fil37').css('fill', randomColor());    
$('.fil29').css('fill', randomColor());
$('.fil30').css('fill', randomColor());
$('.fil13').css('fill', randomColor());
$('.fi12').css('fill', randomColor());	
$('.fil11').css('fill', randomColor());
$('.fil10').css('fill', randomColor());
$('.fil9').css('fill', randomColor());
$('.fil8').css('fill', randomColor());	
$('.fil31').css('fill', randomColor());
$('.fil20').css('fill', randomColor());
$('.fil21').css('fill', randomColor());	
$('.fil22').css('fill', randomColor());
$('.fil23').css('fill', randomColor());
$('.fil24').css('fill', randomColor());	
$('.fil25').css('fill', randomColor());
 
});
});
}




!function() {
	
  function addListener(element, type, callback, capture) {
    if (element.addEventListener) {
      element.addEventListener(type, callback, capture);
    } else {
      element.attachEvent("on" + type, callback);
    }
  }
  
  function draggable(element) {
    var dragging = null;
  
    addListener(element, "mousedown", function(e) {
      var e = window.event || e;
      dragging = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        startX: parseInt(element.style.left),
        startY: parseInt(element.style.top)
      };
      if (element.setCapture) element.setCapture();
    });
  
    addListener(element, "losecapture", function() {
      dragging = null;
    });
  
    addListener(document, "mouseup", function() {
      dragging = null;
      if (document.releaseCapture) document.releaseCapture();
    }, true);
  
    var dragTarget = element.setCapture ? element : document;
  
    addListener(dragTarget, "mousemove", function(e) {
      if (!dragging) return;
  
      var e = window.event || e;
      var top = dragging.startY + (e.clientY - dragging.mouseY);
      var left = dragging.startX + (e.clientX - dragging.mouseX);
  
      element.style.top = (Math.max(0, top)) + "px";
      element.style.left = (Math.max(0, left)) + "px";
    }, true);
  };    
      
  draggable(document.getElementById("popup"));
  
}();