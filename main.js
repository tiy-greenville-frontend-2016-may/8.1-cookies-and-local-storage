console.log('nnnammmm naaammm naaammm');

// ########################################
// Cookies: regular js and jQuery
// ########################################

// You can set a key/value pair to a cookie by using document.cookie
document.cookie="username=Cookie Moster";
document.cookie="likes-cookies=yes";

// You can access all the text in the cookie, but it's all the text, not just one
// key/value pair
var loggedInUser = document.cookie;
console.log(loggedInUser);

// So to get one key/value par we have to split on ";" and then loop over the
// parts that are in the array
var cookies = loggedInUser.split(';');
for(var i=0; i < cookies.length; i++){
  console.log(cookies[i]);
}

// Or we can use a 3rd party jquery plugin that does all the splitting/looping
// for us
console.log($.cookie('username'));

// The same plugin can set the cookie value
$.cookie('username', 'dietz');

// Cookies get stale, and you can set the expiration of Cookies
$.cookie('username', 'Cookie Monster', { expires: 7});  // good for 7 days

console.log($.cookie('username'));

// The jquery plugin has been abanonded, but you can still use the cookie lib:
// https://github.com/js-cookie/js-cookie

// ########################################
// Local Storage: just regular
// ########################################

// You can set key/value pair data into local storage with .setItem()
localStorage.setItem('favorite-flavor', 'oreo');

// You can get it with .getItem(). No 3rd party code or split/loop is needed
console.log('favorite-flavor', localStorage.getItem('favorite-flavor'));

localStorage.setItem('least-favorite-flavor', 'chocolate chip');

console.log('least-favorite-flavor', localStorage.getItem('least-favorite-flavor'));

// You can remove items also
localStorage.removeItem('least-favorite-flavor');

console.log('least-favorite-flavor', localStorage.getItem('least-favorite-flavor'));

var car = {};
car.wheels = 4;
car.doors = 2;
car.sound = 'vroom';
car.name = 'Lightning McQueen';
console.log( car );

// Because local storage is still just a text store, we need to convert javascript
// objects and arrays to text to store it
localStorage.setItem('car', JSON.stringify(car));
console.log(localStorage.getItem('car'));

// Getting JSON out of local storage is done by converting it back to javascript
// using JSON.parse()
var myCar = JSON.parse(localStorage.getItem('car'));
console.log(myCar.wheels);
