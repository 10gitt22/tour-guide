window.onscroll = function showHeader() {

	var header =  document.querySelector('header');
	if(window.pageYOffset > 60){
		header.classList.add('header-scroll');
	}
	else{
		header.classList.remove('header-scroll');
	}
}

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$("#menu-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

function openNav() {
	document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }