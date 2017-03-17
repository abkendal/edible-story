function panel1(){
	$('.panel-1').toggleClass('load');
};
$( document ).ready(function() {


    
	$('.panel').click(function(){
		if ($(this).hasClass('active')){
			setTimeout(panel1, 2000);
			$(this).toggleClass('active');
		}
		else {
			$(this).toggleClass('active');
			setTimeout(panel1, 2000);
		}
		
		
	});


});
























































