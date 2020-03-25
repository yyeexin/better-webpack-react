import { useState } from 'react'
import { Card } from 'antd'
import BraftEditor from '@/components/BraftEditor'

const Editor = () => {
	const [editorState, setEditorState] = useState(null)

	const submitContent = () => {
		const htmlContent = editorState.toHTML()
		console.log(htmlContent)
	}

	const handleEditorChange = editorState => {
		setEditorState(editorState)
	}

	return (
		<Card>
			<BraftEditor value={editorState} onSave={submitContent} onChange={handleEditorChange} />
		</Card>
	)
}

export default Editor
