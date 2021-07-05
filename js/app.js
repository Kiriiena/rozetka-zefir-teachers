
	$(document).ready(function(){

		var sliderOptions = {
			prevArrow:'<div class="prev-button"><svg><use href="#chevron-right"</svg></div>',
			nextArrow:'<div class="next-button"><svg><use href="#chevron-right"</svg></div>',
		};
		$('.home__banner-slider').slick(sliderOptions);
	});
	//$(document).on('ready', function(){
	//	alert('jQuery is ok');
	//})

	//$('.header__search form button').on('click', function(){
	//	var searchTerm = $('.header__search form input').val();
	//	alert(searchTerm);
	//})


	$(document).on('click', '.header__search form button', function(){
		var searchTerm = $('.header__search form input').val();
		alert(searchTerm);
	})
	$(document).on('click', '.header__menu-toggle', function(){
	//	if($(this).hasClass('opened')){
  		//	$(this).removeClass('opened');
  //	}  else {
  		//	$(this).addClass('opened');

  		//}
  		//Змін клас для кнопки
  		$(this).toggleClass('opened');
  		$('.slide-menu').toggleClass('opened');
  	}) 
		//var firstName = 'Kiriiena';
	//var lastName = 'Melkhisedek';
	//var fullName = firstName +' '+lastName;
	var myData = {
		firstName: 'Kiriiena',
		lastName: 'Melkhisedek',
		age: 21
	}

	function fullNameFunction(first,last){
		var fullName = first + ' ' + last;
		return fullName;
	}

	var myFullName = fullNameFunction(myData.firstName, myData.lastName);
	//alert(myFullName);

	//console.log(fullName);
