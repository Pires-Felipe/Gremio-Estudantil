$('a.link').click(function(event) {
	event.preventDefault();
	$('div.content').html($('div', this).html());
});

function tester() {
	alert("mensagem");
	window.location.href = "noticia.html";
}

function whats() {
	window.location.href = "https:wa.me/5542991083236"
}