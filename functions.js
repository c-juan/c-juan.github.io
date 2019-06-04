function linkden(){
    window.open("https://www.linkedin.com/in/juan-carrera-a5514b133/");
}

function github(){
    window.open("https://www.github.com/jweird");
}

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});