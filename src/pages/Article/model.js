export default {
	namespace: 'article',
	state: {},
	reducers: {
		delete(state, { payload: id }) {
			return state.list.filter(item => item.id !== id)
		}
	}
}
