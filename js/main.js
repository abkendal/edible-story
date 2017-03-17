$( document ).ready(function() {


    
	$('.panel').click(function(){
		// panel 1
		// if ($(this).hasClass('panel-1')){
		// 	if ($(this).hasClass('active')){
		// 		$(this).removeClass('load').delay(2500).queue(function(){
		// 		    $(this).removeClass('active').dequeue();
		// 		});
		// 	}
		// 	else {
		// 		$(this).addClass('active').delay(3000).queue(function(){
		// 		    $(this).addClass('load').dequeue();
		// 		});
		// 	}
		// }

		// // panel 2
		// if ($(this).hasClass('panel-2')){
		// 	if ($(this).hasClass('active')){
		// 		setTimeout(panel3, 2000);
		// 		$(this).toggleClass('active');
		// 	}
		// 	else {
		// 		$(this).toggleClass('active').delay;
		// 		console.log("test");
		// 		// setTimeout(panel3, 2000);
		// 	}
		// }

		// //  panel 3
		// if ($(this).hasClass('panel-3')){
		// 	if ($(this).hasClass('active')){
		// 		$(this).removeClass('load').delay(2500).queue(function(){
		// 		    $(this).removeClass('active').dequeue();
		// 		});
		// 	}
		// 	else {
		// 		$(this).addClass('active').delay(4000).queue(function(){
		// 		    $(this).addClass('load').dequeue();
		// 		});
		// 	}
		// }
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
		
		
	});


});
























































