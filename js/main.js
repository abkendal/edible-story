var setWindow = function(){
	height = $('.table').height();
	width = height * 1.33;
	$('.table').css({
		'width': width,
		'margin-left': -width/2,
		'margin-top': -height/2
	})
	$('.panel').css('height', height);

	$(video).css({
		'width': width,
		'height': height
	})
}

var setPanels = function(){

	// Panel 1
	panel1startX = -3.071*height;
	panel1startY = -0.645*height;
	panel1startSize = 7.06*height;
	
	panel1loadX = -0.1*height;
	panel1loadY = 0.02*height;
	panel1loadSize = 1.5*height;

	// Panel 2
	panel2startX = -0.6261*height;
	panel2startY = -0.4628*height;
	panel2startSize = 2.498*height;

	panel2activeX = 0*height;
	panel2activeY = 0*height;
	panel2activeSize = 1.33*height;

	// Panel 3
	panel3startX = -1.796*height;
	panel3startY = -0.872*height;
	panel3startSize = 3.678*height;

	panel3activeX = -0.93*height;
	panel3activeSize = 3.275*height;

	// Panel 4 
	panel4startX = -7.954*height;
	panel4startY = -1.854*height;
	panel4startSize = 10.742*height;

	panel4loadX = -0.1667*height;
	panel4loadY = 0*height;
	panel4loadSize =1.6667*height;

	panel4bg1 = "../img/panel4-2.svg";
	panel4bg2 = "../img/panel4.svg";

}



// Add transition after images have loaded to avoid movement
window.onload = function() {
    $(".inner").css('transition', 'all 1.5s ease');
};

$(window).resize(function(){
	setWindow();
	setPanels();
});

$( document ).ready(function() {

	var vid = document.getElementById("video");



	// -------- Panel backgrounds -------------
	setWindow();
	setPanels();


	$("#inner1").css('background-size', panel1startSize).css('background-position-x', panel1startX).css('background-position-y', panel1startY);

	$(".panel-1").click(function(){
		if ($(this).hasClass('active')){
			$("#inner1").css({
				'background-position-x': panel1startX,
				'background-position-y': panel1startY,
				'background-size': panel1startSize
			});
		}
		else {
			$("#inner1").css({
				'background-position-x': panel1loadX,
				'background-position-y': panel1loadY,
				'background-size': panel1loadSize
			});
		}
	});

	

	$("#inner2").css('background-size', panel2startSize).css('background-position-x', panel2startX).css('background-position-y', panel2startY);

	$(".panel-2").click(function(){
		if ($(this).hasClass('active')){
			$("#inner2").css({
				'background-position-x': panel2startX,
				'background-position-y': panel2startY,
				'background-size': panel2startSize
			})
		}
		else {
			$("#inner2").css({
				'background-position-x': panel2activeX,
				'background-position-y': panel2activeY,
				'background-size': panel2activeSize
			})
		}
	});

	

	$("#inner3").css('background-size', panel3startSize).css('background-position-x', panel3startX).css('background-position-y', panel3startY);

	$('.fa').click(function(){
		$('.panel-3').removeClass('load')
		$("#inner3").css({
			'background-position-x': panel3activeX,
			'background-size': panel3activeSize
		}).delay(2500).queue(function(){
			$('.panel-3').removeClass('active');
			$('#inner3').css({
				'background-position-x': panel3startX,
				'background-size': panel3startSize
			}).dequeue();
		});
	});

	$(".panel-3").click(function(){
		if ($(this).hasClass('active')){
		}
		else {
			$("#inner3").css({
				'background-position-x': panel3activeX,
				'background-size': panel3activeSize
			})
		}
	});




	$("#inner4").css('background-size', panel4startSize).css('background-position-x', panel4startX).css('background-position-y', panel4startY);


	$(".panel-4").click(function(){
		if ($(this).hasClass('active')){
			$("#inner4").css({
				'background-position-x': panel4startX,
				'background-position-y': panel4startY,
				'background-size': panel4startSize
			});
		}
		else {
			$("#inner4").css({
				'background-position-x': panel4loadX,
				'background-position-y': panel4loadY,
				'background-size': panel4loadSize
			});
		}
	});


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
		// -------- End panel animations---------



    



	// -------- Video controls --------------

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
























































