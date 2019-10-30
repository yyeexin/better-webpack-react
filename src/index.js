require('./a.css')
require('./c.less')
let a = require('./a')
console.log('hello!', a.str)

import img1 from './image/test.jpg' //把图片引入 返回的结果是一个新的图片地址
console.log(img1)
let img = new Image()
img.src = img1
document.body.appendChild(img)
