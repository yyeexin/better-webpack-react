import $ from 'jquery'
// console.log($)
import str from './source'

let button = document.createElement('button')
button.innerHTML = '按钮'
button.addEventListener('click', function() {
	console.log(str)
})
document.body.appendChild(button)

if (module.hot) {
	module.hot.accept('./source.js', () => {
		const str = require('./source').default
		console.log(str)
	})
}
