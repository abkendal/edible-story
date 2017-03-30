$( document ).ready(function() {
	var vid = document.getElementById("video"); 


    // Panel animations
	$('.panel').click(function(){
		$('.panel').css('z-index', '5');
		$(this).css('z-index', '6');

		// 2 step panel animations
		if ($(this).hasClass('2step')){
			if ($(this).hasClass('active')){
				$(this).removeClass('load').delay(1500).queue(function(){
				    $(this).removeClass('active').dequeue();
				});
			}
			else {
				$(this).addClass('active').delay(2000).queue(function(){
				    $(this).addClass('load').dequeue();
				});
			}
		}

		// Panel 3 animations
		else if($(this).hasClass('panel-3')){
			if ($(this).hasClass('active')){
				$('.fa').click(function(){
					$('.panel-3').removeClass('load').delay(2500).queue(function(){
					    $('.panel-3').removeClass('active').dequeue();
					});
				})
				
			}
			else {
				$(this).addClass('active').delay(1500).queue(function(){
				    $(this).addClass('load').dequeue();
				    // vid.play();
				});
			}
		}

		// Single step panel animations
		else {
			$(this).toggleClass('active');
		}
	});

	// Skip first 4 seconds
	vid.currentTime=4;

	// Button function
	$('#play').click(function () {
	   if ($("#video").get(0).paused) {
	       $("#video").get(0).play();
	       $(this).html("Pause");
	   } else {
	       $("#video").get(0).pause();
	       $(this).html("Play");
	  }
	});

	// Play/Pause
	$('#video').on('ended',function(){
		vid.currentTime=4;
		$("#video").get(0).pause();
	    $("#play").html("Play");
	   });

	// Return to beginning
	$("#beginning").click(function(){
		vid.currentTime=4;
		$("#video").get(0).pause();
	})

	// Expand/Collapse
	$('#expand').click(function(){

		// Collapse
		if ($(this).hasClass('active')){
			vid.currentTime=10;
			$(this).prop("disabled",true);
			$("#video").get(0).play();

			$(this).html("Expand");
			$(this).removeClass('active');

			setTimeout(function(){ 
				$("#video").get(0).pause();
				$("#play").html("Play");
				$("#expand").prop("disabled",false);
			 }, 1000);
		}

		// Expand
		else {
			vid.currentTime=5;
			$("#video").get(0).play();
			$(this).html("Collapse");
			$(this).prop("disabled",true);
			$(this).addClass('active');

			setTimeout(function(){ 
				$("#video").get(0).pause();
				$("#play").html("Play");
				$("#expand").prop("disabled",false);
			 }, 1500);
		}
		
	});

});
























































