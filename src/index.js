require('./css/index.less')

let a = require('./js/a')
console.log('hello!', a.str)

import test_img from './image/test.jpg'
console.log(test_img)
let img = new Image()
img.src = test_img
document.body.appendChild(img)
