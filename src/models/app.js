import { routerRedux } from 'dva'
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
			const res = yield fetch('/api/login', {
				method: 'post',
				body: JSON.stringify(payload)
			})
			const data = yield res.json()
			console.log(data)
			const { message, status } = data
			if (message === 'success' || status === 200) {
				yield put(routerRedux.push('/home'))
			}
			// .then(res => res.json())
			// .then(res => {
			// 	const { message, status } = res
			// 	if (message === 'success' || status === 200) {
			// 		routerRedux.push('/home')
			// 	}
			// })
			// const data = yield call(request, { url: userLogin, method: 'post', payload })
			// const { message, status } = data
			// if (message === 'success' || status === 200) {
			// 	yield put(routerRedux.push('/home'))
			// }
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
		*goShops({ payload }, { call, put, select }) {
			yield put(routerRedux.push('/shop/shops'))
		},
		*goShops2({ payload }, { call, put, select }) {
			window.location.href = '/#/shop/shops'
		},
		*goHome({ payload }, { call, put, select }) {
			yield put(routerRedux.push('/home'))
		},
		*goHome2({ payload }, { call, put, select }) {
			window.location.href = '/#/home'
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
