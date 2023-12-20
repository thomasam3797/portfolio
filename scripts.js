//landscapes Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.landscapes>.accordion span').addEventListener('click', function(){
		document.querySelector('.landscapes>.gallery').classList.toggle('show');
		document.querySelector('.landscapes span').classList.toggle('rotate');
	});
});
//wildlife Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.wildlife>.accordion span').addEventListener('click', function(){
		document.querySelector('.wildlife>.gallery').classList.toggle('show');
		document.querySelector('.wildlife span').classList.toggle('rotate');
	});
});
//subjectportrait Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.subjectportrait>.accordion span').addEventListener('click', function(){
		document.querySelector('.subjectportrait>.gallery').classList.toggle('show');
		document.querySelector('.subjectportrait span').classList.toggle('rotate');
	});
});
