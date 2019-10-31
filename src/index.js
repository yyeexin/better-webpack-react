import $ from 'jquery'
console.log($)
console.log('index!!!!!!!!!!!!!!')

let button = document.createElement('button')
button.innerHTML = '按钮'
button.addEventListener('click', function() {
	import('./source').then(data => {
		console.log(data)
	})
})

document.body.appendChild(button)
