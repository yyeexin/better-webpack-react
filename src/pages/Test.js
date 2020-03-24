import React, { useState, useRef } from 'react'
import { useModal, useDebounce, useScroll } from '@/hooks'
const App = () => {
	const { show, hide, RenderModal } = useModal()
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	const [cancel] = useDebounce(
		() => {
			setB(a)
		},
		2000,
		[a]
	)

	const scrollRef = useRef(null)
	const [x, y] = useScroll(scrollRef)

	const changeIpt = e => {
		setA(e.target.value)
	}

	return (
		<div style={{ height: '500vh' }}>
			<input type='text' onChange={changeIpt} />
			{b} {a}
			<div>
				<p>some content...</p>
				<button onClick={show}>打开</button>
				<button onClick={hide}>关闭</button>
				<RenderModal>
					<p>这里面的内容将会被渲染到'modal-root'容器里.</p>
				</RenderModal>
			</div>
			<div id='modal-root' />
			<div ref={scrollRef}>
				<div className='innerBox'></div>
			</div>
			<div>
				{x}, {y}
			</div>
		</div>
	)
}

export default App
