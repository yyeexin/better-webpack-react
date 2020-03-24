import React, { useState } from 'react'
import Modal from '@/components/Modal'

export const useModal = () => {
	const [isVisible, setIsVisible] = useState(false)
	const show = () => setIsVisible(true)
	const hide = () => setIsVisible(false)

	const RenderModal = ({ children }) => (
		<React.Fragment>{isVisible && <Modal closeModal={hide}>{children}</Modal>}</React.Fragment>
	)

	return {
		show,
		hide,
		RenderModal
	}
}
