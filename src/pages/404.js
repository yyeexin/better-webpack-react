import React from 'react'

import image from 'assets/img/sd.jpg'
const page404 = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<p>404: Page not found</p>
			<img src={image}></img>
		</div>
	)
}

export default page404
