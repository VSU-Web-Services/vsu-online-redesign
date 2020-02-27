var main = angular.module('main', 
    [
      
    ]
);
 
main.controller('mainCtrl', ['$scope','$http', '$log', '$filter', function ($scope, $http, $log, $filter) { 
  
  var date = new Date();
  $scope.currentyear = $filter('date')(new Date(), 'yyyy');
  
  (function($){
  // here code can always use $ as n alias for jQuery, regardless if the user
  // has repointed $ to something else.
  
  // A $( document ).ready() block.
$( document ).ready(function() { 
    
   $("div#main.main > div.inner > div.wrapper:first-child").html("<img src='/_resources/images/home/VSU_OnlineWeb.png' alt='VSU Online'>");
   
        $('div.sub-menu ul li:nth-child(6) a').click(function(){
            window.open("http://www.vsu.edu/about/index.php", "_blank");
            return false;
        });
        
        $(window).on('resize', function(){
              var win = $(this); //this = window
              if (win.height() >= 960) { 
                  $('#mobile-nav').addClass('hide'); 
              }
        });
        
        $( "div.vsulogo" ).click(function() {
            window.open('http://www.vsu.edu', '_blank');
        });
        
        $( "#toggleSearch" ).click(function() {
            $( "form.search" ).toggleClass( "hide" );
        });
        
        $( "#toggleNavigation" ).click(function() {
            $( "#mobile-nav" ).toggleClass( "hide" );
        });
  
  // $('[data-toggle="tooltip"]').tooltip(); // Apparently this line causes a conflict ???   
  
  //fullscreen code
    // Maximize & Minimize Fullscreen
    	$('#toggleFullscreen').click(function() {
      
	        	        // Supports most browsers and their versions.
	        function toggleFull() {
	            var elem = document.documentElement; // Make the body go full screen.
	            var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

	            if (isInFullScreen) {
	                cancelFullScreen(document);
	            } else {
	                requestFullScreen(elem);
	            }
	            return false;
	        }
	        toggleFull();
	    });

	    function cancelFullScreen(el) {
            var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
            if (requestMethod) { // cancel full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }

        function requestFullScreen(el) {
            // Supports most browsers and their versions.
            var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

            if (requestMethod) { // Native full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
            return false
        } 

  //End of fullscreen code
  
  //auto-scroll to top of page
  $(window).scroll(function(){
    if($(this).scrollTop() > 300) {
        $(".auto-scroll-to-top").addClass("visible");                    
    } else {
        $(".auto-scroll-to-top").removeClass("visible");
    }        
});
    
 $(".auto-scroll-to-top").click(function(){
    $("html, body").animate({scrollTop: 0}, 600);
}); 
//end auto-scroll to top of page 
  
}); // End of A $( document ).ready() block.
  
})(jQuery);
  
}]);