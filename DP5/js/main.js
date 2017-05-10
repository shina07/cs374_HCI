$('#menu_btn').click(function() {
	$('#header_menu').toggle(100)
});

$('.load_btn').click(function() {
	$('#header_menu').toggle(100)
});

$(document).ready(function() {
	$('#back_btn').click(function() {
		parent.history.back()
		return false
	});
});