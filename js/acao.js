$(document).ready(function () {
	$("#abrir").click(function(){
	
		$(".messaggio").fadeIn("slow");
		$("#nero").css("display", "block");
		
			$("#nero").click(function(){
				$("#nero").css("display", "none");
				$(".messaggio").fadeOut("slow");
			});
			$("#chiudi").click(function(){
				$("#nero").css("display", "none");
				$(".messaggio").fadeOut("slow");
			});
			
	});
});