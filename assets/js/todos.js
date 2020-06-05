//check off a todo on clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(function () {
		$(this).remove();
	});
	event.stopPropagation();
});

//create a todo
$("input[type='text']").on("keypress", function (event) {
	if(event.which === 13) {
		//grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and append to ul
		$("ul").append("<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>" + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function () {
	$("input[type='text']").fadeToggle();
});
