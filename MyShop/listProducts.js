var shop = require('faker');

console.log('==================');
console.log('Welcome to My Shop');
console.log('==================')
console.log('');

for (var i = 0; i < 10; i++) {
	
	var product = shop.commerce.product();
	var price = shop.commerce.price();
	// console.log(product);
	var str = product + ' - $' + price;
	console.log(str);
}
	 