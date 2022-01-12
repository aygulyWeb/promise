// 1) что выведет код?  Объясните

var a = 5;
setTimeout(function timeout() {
	console.log(a); //1
	a = 10;
}, 0);

var p = new Promise(function (resolve, reject) {
	console.log(a); //2
	a = 25;
	resolve();
});

p.then(function () {
	console.log('Успешно'); //3
});

console.log(a); //4