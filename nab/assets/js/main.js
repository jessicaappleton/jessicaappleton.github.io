$(document).ready(function(){
	console.log("im ready");

	$('.button').click(function(){
		console.log("you have clicked the button");
		$('.menu').toggleClass("active");
	});

});