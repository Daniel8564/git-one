// JavaScript Document

//alert("Conected");

//Check of all the specific Todos by clicking:
$("ul").on("click","li",function(){
//	console.log($(this).css("color"));
//	if ($(this).css("color")==="gray"){
//	if ($(this).css("color")==="rgb(128, 128, 128)"){
//		$(this).css({
//		textDecoration: "none" ,
//		color: "black"		
//	});
		
//		$(this).addClass("completed");
//		
//	}
//	
//	else {
//	
////	$(this).css({
////		textDecoration: "line-through" ,
////		color: "gray"
////		
////	});
//		
//		$(this).removeClass("completed");
//		
//		}
//	$(this).css("text-decoration","line-through");
//	$(this).css("color","gray");
	
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	//To stop bubbling/propagating of span to li and then ul and then div and then body ...
//	$(this).parent().remove();
//	$(this).parent().fadeOut().remove();
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});

$("input[type='text']").on("keypress",function(event){
//	console.log("key pressed!");
	if (event.which===13){
//		console.log($(this).val());
		var todoText=($(this).val());
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText +"</li>");
		$(this).val("");
		
	}
	
	
});

$(".fa-plus").on("click",function (){
//	console.log("You clicked on icon");
	$("input[type='text']").fadeToggle();
	
});