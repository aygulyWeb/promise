//5) В каком порядке выведется консольлог и почему? 

console.log('1'); //1

setTimeout(function () {
	console.log('2') //4
}, 0);

Promise.resolve().then(() => console.log('3')); //3

console.log('4'); //2


