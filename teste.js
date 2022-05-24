$('a.link').click(function(event) {
	event.preventDefault();
	$('div.content').html($('div', this).html());
});

function tester() {
	alert("mensagem");
	window.location.href = "noticia.html";
	// ou uma variante com o mesmo efeito
}
