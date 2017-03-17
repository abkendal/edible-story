$( document ).ready(function() {


    
	$('.panel').click(function(){
		
		// 2 step panel animations
		if ($(this).hasClass('2step')){
			if ($(this).hasClass('active')){
				$(this).removeClass('load').delay(2500).queue(function(){
				    $(this).removeClass('active').dequeue();
				});
			}
			else {
				$(this).addClass('active').delay(4000).queue(function(){
				    $(this).addClass('load').dequeue();
				});
			}
		}

		// Single step panel animations
		else {
			$(this).toggleClass('active');
		}
	});


});
























































