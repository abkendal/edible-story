$( document ).ready(function() {
	var vid = document.getElementById("video"); 

    
	$('.panel').click(function(){
		$('.panel').css('z-index', '5');
		$(this).css('z-index', '6');

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

		else if($(this).hasClass('panel-3')){
			if ($(this).hasClass('active')){
				$(this).removeClass('load').delay(2500).queue(function(){
				    $(this).removeClass('active').dequeue();
				});
			}
			else {
				$(this).addClass('active').delay(3000).queue(function(){
				    $(this).addClass('load').dequeue();
				    // $('.inner').css('background-image', 'none');
				    vid.play();
				    // vid.onended = function(e) {
				    // 	console.log("TEST");
				    //    $('.panel-3').removeClass('load').delay(2500).queue(function(){
				    //        $('.panel-3').removeClass('active').dequeue();
				    //    });
				    //     };
				});
			}
		}




		// Single step panel animations
		else {
			$(this).toggleClass('active');
		}
	});


});
























































