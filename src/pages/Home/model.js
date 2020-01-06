export default {
	namespace: 'home',
	state: {
		list: []
	},
	reducers: {
		delete(state, { payload: id }) {
			return state.list.filter(item => item.id !== id)
		}
	}
}
