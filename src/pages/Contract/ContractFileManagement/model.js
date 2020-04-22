export default {
	namespace: 'contractFileManagement',
	state: {},
	effects: {},
	reducers: {
		updateState(state, { payload }) {
			return {
				...state,
				...payload
			}
		}
	}
}
