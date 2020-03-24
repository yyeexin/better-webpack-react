import React, { useState, memo, Fragment } from 'react'
import ReactDOM from 'react-dom'

export const useModal = () => {
	const [isVisible, setIsVisible] = useState(false)
	const show = () => setIsVisible(true)
	const hide = () => setIsVisible(false)

	const RenderModal = ({ children }) => (
		<Fragment>{isVisible && <Modal closeModal={hide}>{children}</Modal>}</Fragment>
	)

	return {
		show,
		hide,
		RenderModal
	}
}

const Modal = memo(({ children, closeModal }) => {
	const domEl = document.getElementById('modal-root')
	if (!domEl) return null
	return ReactDOM.createPortal(
		<div>
			<button onClick={closeModal}>Close</button>
			{children}
		</div>,
		domEl
	)
})
