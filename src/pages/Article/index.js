import React, { useState } from 'react'
import SelectShops from './SelectShops'

const Article = () => {
	const [relativeShops, setRelativeShops] = useState([])

	return (
		<div>
			<SelectShops defaultValue={relativeShops} onChange={shops => setRelativeShops(shops)} />
		</div>
	)
}

export default Article
