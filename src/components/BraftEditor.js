import React, { useState } from 'react'
import BraftEditor from 'braft-editor'
import Table from 'braft-extensions/dist/table'
import MaxLength from 'braft-extensions/dist/max-length'
import request from 'utils/request'

BraftEditor.use(
	Table({
		defaultColumns: 4, // 默认列数
		defaultRows: 3, // 默认行数
		withDropdown: false, // 插入表格前是否弹出下拉菜单
		columnResizable: false, // 是否允许拖动调整列宽，默认false
		exportAttrString: '' // 指定输出HTML时附加到table标签上的属性字符串
	})
)

BraftEditor.use(MaxLength())

const Editor = ({ value = null, onChange, ...editorProps }) => {
	const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value))

	const handleEditorChange = editorState => {
		setEditorState(editorState)
		onChange && onChange(editorState)
	}

	const preview = () => {
		if (window.previewWindow) window.previewWindow.close()
		window.previewWindow = window.open()
		window.previewWindow.document.write(buildPreviewHtml())
		window.previewWindow.document.close()
	}

	const buildPreviewHtml = () => {
		return `
          <!Doctype html>
          <html>
            <head>
              <title>预览</title>
              <style>
                html,body{
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  overflow: auto;
                  background-color: #f1f2f3;
                }
                .container{
                  box-sizing: border-box;
                  width: 1000px;
                  max-width: 100%;
                  min-height: 100%;
                  margin: 0 auto;
                  padding: 30px 20px;
                  overflow: hidden;
                  background-color: #fff;
                  border-right: solid 1px #eee;
                  border-left: solid 1px #eee;
                }
                .container img,
                .container audio,
                .container video{
                  max-width: 100%;
                  height: auto;
                }
                .container p{
                  white-space: pre-wrap;
                  min-height: 1em;
                }
                .container pre{
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-radius: 5px;
                }
                .container blockquote{
                  margin: 0;
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-left: 3px solid #d1d1d1;
                }
              </style>
            </head>
            <body>
              <div class="container">${editorState.toHTML()}</div>
            </body>
          </html>
        `
	}

	const extendControls = [
		{
			key: 'custom-button',
			type: 'button',
			text: '预览',
			onClick: preview
		}
	]

	const myUploadFn = async ({ file, libraryId, progress, success, error }) => {
		const formData = new FormData()
		formData.append('file', file)
		const result = await request({
			url: '/koaServer/file/upload',
			method: 'post',
			data: formData
		})
		const { data } = result
		if (Array.isArray(data) && data.length) {
			const { url } = data[0]
			success({ url })
		} else {
			error({
				msg: 'unable to upload.'
			})
		}
	}

	return (
		<BraftEditor
			{...editorProps}
			extendControls={extendControls}
			value={editorState}
			onChange={handleEditorChange}
			media={{ uploadFn: myUploadFn }}
		/>
	)
}

export default Editor
