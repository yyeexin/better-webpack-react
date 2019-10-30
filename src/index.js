require('./a.css')
require('./c.less')
let a = require('./a')
console.log('hello!', a.str)

import $ from 'jquery'

const fn = async () => {
	await console.log('箭头函数')
}

fn()

class A {
	a = 'yexin'
}

let ca = new A()

console.log(ca.a)

console.log('abc'.includes('a'))

console.log('jq', $jq$)
