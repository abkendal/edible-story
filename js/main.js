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

	$('#video').on('ended',function(){
		vid.currentTime=0;
		$("#video").get(0).pause();
	    $("#play").html("Play");
	   });

	$("#beginning").click(function(){
		vid.currentTime=2;
		$("#video").get(0).pause();
	})

	$('#expand').click(function(){
		if ($(this).hasClass('active')){
			$(this).prop("disabled",true);
			vid.currentTime=10;
			$("#video").get(0).play();
			$(this).html("Expand");
			setTimeout(function(){ 
				$("#video").get(0).pause();
				$("#play").html("Play");
				$("#expand").prop("disabled",false);
			 }, 1000);
			$(this).removeClass('active');
		}
		else {
			vid.currentTime=5;
			$("#video").get(0).play();
			$(this).html("Collapse");
			$(this).prop("disabled",true);
			setTimeout(function(){ 
				$("#video").get(0).pause();
				$("#play").html("Play");
				$("#expand").prop("disabled",false);
			 }, 1500);
			$(this).addClass('active');
		}
		
	});

});
























































