export default {
	namespace: 'app',
	state: {
		menus: []
	},
	subscriptions: {},
	effects: {
		*getMenus({ payload }, { call, put, select }) {
			const data = yield call(fetch, '/api/menu/findUserMenuAuthTree')
			const jsonData = yield data.json()
			const { result } = jsonData
			const menus = result[0].children
			yield put({
				type: `updateState`,
				payload: {
					menus
				}
			})
		}
	},
	reducers: {
		updateState(state, { payload }) {
			return {
				...state,
				...payload
			}
		}
	}
}
