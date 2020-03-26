import request from 'utils/request'
import urls from 'utils/urls'
const { BaoHuo_Login_URLS, BaoHuo_Menu_URLS } = urls
const { userLogin } = BaoHuo_Login_URLS
const { menus } = BaoHuo_Menu_URLS

export default {
	namespace: 'app',
	state: {
		menus: []
	},
	subscriptions: {},
	effects: {
		*login({ payload }, { call, put, select }) {
			const data = yield call(request, { url: userLogin, method: 'post', payload })
			const { message, status } = data
			return message === 'success' || status === 200
		},
		*getMenus({ payload }, { call, put, select }) {
			const data = yield call(request, { method: 'get', url: menus })
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
		},
		*getBranchList() {}
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
