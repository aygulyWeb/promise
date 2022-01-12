//3)  Реализовать аналог Promise.all.

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Promise 1') //1
		const person = {
			name: 'Vasya',
			age: 25,
			skills: 'html css js'
		}
		resolve(person);
	}, 0)

})
p1.then(() => {
	setTimeout(() => {
		console.log('Promise 2'); //5
	}, 0);


})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Promise 3'); //2
		const data = {
			name: 'aaa',
			age: 44,
			skills: 'bbb'
		}
		resolve(data)
	}, 0)

})
p2.then(() => {
	console.log('Promise 4') //3
})



Promise.all([p1, p2]).then(values => {
	console.log(values);  //4
});