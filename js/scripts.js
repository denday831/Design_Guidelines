//------------------------------------------------------
// MENU SCRIPTS
//------------------------------------------------------


$(document).ready(function() {
    // Menu opening script for devices over 400px
    if ( $(window).width() > 400 ) {        
            $("header #nav-icon").click(function() {
                if ( $("nav").hasClass("open") ) {
                    $("nav").stop().animate({"margin-left":"-300px"}, 250);
                    $("header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                    $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                } else {
                    $("nav").stop().animate({"margin-left":"0px"}, 250);
                    $("header").stop().css("min-width", "100vw").animate({"margin-left":"300px"}, 250);
                    $(".wrapper").stop().css("min-width", "100vw").animate({"left":"300px"}, 250);
                }
                $("nav, #nav-icon").toggleClass("open");
                return false;
            });

            $(".wrapper").click(function() {  
                $("nav").stop().animate({"margin-left":"-300px"}, 250);
                $("header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                $("nav, #nav-icon").removeClass("open");
            });
    }
    //Menu open script for small devices
    else {        
            $("header #nav-icon").click(function() {
                if ( $("nav").hasClass("open") ) {
                    $("nav").css("margin-left", "0").stop().animate({"left": "-100%"}, 250);
                    $("header, .wrapper").stop().animate({"left": "0"}, 250);
                } else {
                    $("nav").css("margin-left", "0").stop().animate({"left": "0"}, 250);
                    $("header, .wrapper").stop().animate({"left": "0"}, 250);
                }
                $("nav, #nav-icon").toggleClass("open");
                return false;
            });
    }
});






//------------------------------------------------------
// Mobile Orientation Reload
//------------------------------------------------------
window.onorientationchange = function() { 
    var orientation = window.orientation; 
        switch(orientation) { 
            case 0: window.location.reload(); 
            break; 
            case 90: window.location.reload(); 
            break; 
            case -90: window.location.reload(); 
            break; } 
};






//------------------------------------------------------
// Resize wrapper
//------------------------------------------------------
$('.code-content').resizable({
    handles: 'w,e',
    minWidth: 360,
    maxWidth: "90%"
});

$(window).resize(function(e) {
  if (e.target == window)
    $('.code-content').width("50%")
});






//------------------------------------------------------
// Toggle <pre>
//------------------------------------------------------
$("*").click(function(){
    $(this).next("pre").slideToggle("slow");
});






//------------------------------------------------------
// Mouse hover state
//------------------------------------------------------

$("pre").prev().css("cursor", "pointer");






//------------------------------------------------------
// Slider Breakpoints
//------------------------------------------------------

$(".code-content").resize(function(){
   if ( $(".code-content").width() >= 768 && $(".code-content").width() < 992 ) {
            $(".code-content").addClass("tablet");
            $(".code-content").removeClass("mobile desktop large-desktop");
       }
   else if ( $(".code-content").width() >= 992 && $(".code-content").width() < 1200 ) {
            $(".code-content").removeClass("tablet mobile large-desktop");
            $(".code-content").addClass("desktop");
       }
   else if ( $(".code-content").width() >= 1200 ) {
            $(".code-content").removeClass("tablet mobile desktop");
            $(".code-content").addClass("large-desktop");
       }
   else if ( $(".code-content").width() < 768 ) {
            $(".code-content").removeClass("tablet desktop large-desktop");
            $(".code-content").addClass("mobile");
       }
});


