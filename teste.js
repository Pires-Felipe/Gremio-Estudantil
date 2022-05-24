$('a.link').click(function(event) {
	event.preventDefault();
	$('div.content').html($('div', this).html());
});
