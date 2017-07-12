$(document).ready(function(){
	lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
		'wrapAround': true
	});
	$("#searchFor").keyup(function(){
        // Retrieve the input field text 
       	var filter = $(this).val();
		$(".responsive").each(function(){
		    // // If the div item does not contain the text phrase fade it out
		    if($(this).find('a').attr('data-title').search(new RegExp(filter, "i")) < 0) {
		    	$(this).fadeOut(500);
		    	console.log($(this).find('img').attr('alt').search(new RegExp(filter, "i")) < 0);
		    // Show the div item if the phrase matches 
		    } else {
		        $(this).show();
		    }
		});
	})
})