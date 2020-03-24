import React from 'react'

import { useModal } from '@/hooks'

const App = React.memo(() => {
	const { show, hide, RenderModal } = useModal()
	return (
		<div>
			<div>
				<p>some content...</p>
				<button onClick={show}>打开</button>
				<button onClick={hide}>关闭</button>
				<RenderModal>
					<p>这里面的内容将会被渲染到'modal-root'容器里.</p>
				</RenderModal>
			</div>
			<div id='modal-root' />
		</div>
	)
})

export default App
