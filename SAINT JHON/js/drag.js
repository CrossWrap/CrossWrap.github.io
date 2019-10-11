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
$('.fil0').css('fill', randomColor());
$('.fil1').css('fill', randomColor());
$('.fil2').css('fill', randomColor());

  
$('#Layer_1').ready(function() {
$('.fil0').css('fill', randomColor());
$('.fil1').css('fill', randomColor());
$('.fil2').css('fill', randomColor());   

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