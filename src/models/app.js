import request from 'utils/request'
export default {
	namespace: 'app',
	state: {
		menus: []
	},
	subscriptions: {},
	effects: {
		*getMenus({ payload }, { call, put, select }) {
			const data = yield call(request, { method: 'get', url: '/api/menu/findUserMenuAuthTree' })
			const { status, result } = data
			if (status === 200) {
				const menus = result[0].children
				yield put({
					type: `updateState`,
					payload: {
						menus
					}
				})
			}
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
