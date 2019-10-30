require('./a.css')
require('./c.less')
let a = require('./a')
console.log('hello!', a.str)

const fn = () => {
	console.log('箭头函数')
}

fn()

// class A {
// 	a = 'yexin'
// }

// let a = new A()

// console.log(a.a)
