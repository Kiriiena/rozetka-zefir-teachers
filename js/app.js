
var favouriteProducts = [];
if(window.localStorage.getItem('product')){
	favouriteProducts = window.localStorage.getItem('product');
	favouriteProducts = favouriteProducts.split(',');
}


$("button.add-to-favourites").each(function(){
	var product_id = $(this).attr('data-id');

	
	if(favouriteProducts.includes(product_id) == true){
		$(this).addClass('in-favourites');
	}
	updateFavouritesCounter();

});
 
$(document).on('click', 'button.add-to-favourites', function(){
	//отримуєм ID продукту, який додаємо в обрані
	var product_id = $(this).attr('data-id');

	//отримуєм поточну кількість обраних
	//var currentCount = Number($('#favourites span').html());

	if(favouriteProducts.includes(product_id) == true){
		//визначаємо позицію елементу в масиві
		var index = favouriteProducts.indexOf(product_id);
		//видаляємо айді продукту з масиву за індексом
		favouriteProducts.splice(index,1);
		//віднімаємо одиницю від лічильника
		// currentCount--;
		$(this).removeClass('in-favourites');
	}else {
		//додаємо айді товару в масив
		favouriteProducts.push(product_id);
		//додаємо одиницю до лічильника
		//currentCount++;
		$(this).addClass('in-favourites');
	}
	window.localStorage.setItem('product', favouriteProducts);
	
	updateFavouritesCounter();
	
	
	
	//оновити дані лічильника
	
	
	
	
});
function updateFavouritesCounter(){
	$('#favourites span').html(favouriteProducts.length);
	if (favouriteProducts.length == 0) {
		$('#favourites span').addClass('empty')
	}else {
		$('#favourites span').removeClass('empty');
	}
}

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
	function createProductHtml (product){
		var html = `<li class="product-card home__product-list-card">
							<div class="thumb">
								<button data-id="${product.id}" class="add-to-favourites">
									<svg> 
										<use href="#heart"></use>

									</svg>
									<svg class="filled"> <use href="#heart_fill"></use>
									</svg>

								</button>

								<a href="">
									<img src="${product.image}" alt="">
								</a>
							</div>
							<a href="#" class="title">${product.title} </a>
							<div class="old-price">${product.price * 1.2} ₴
							</div>
							<div class="price">${product.price} ₴
							</div>
							<div class="availability">
								Немає в наявності
							</div>
						</li>`;

		return html;

	}

	function getProducts(){
		fetch('https://fakestoreapi.com/products')
		.then((response)=>{
			return response.json();
		})
		.then((products)=>{
			var allHtml = '';
			var count = 0;
			products.forEach((product)=>{
				if (count < 6){
				var html = createProductHtml(product);
				allHtml = allHtml + html;
				count++
				}
			})
			$('.home__product-list ul').html(allHtml);
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	getProducts();
	//console.log(fullName);
	//https://fakestoreapi.com/products
