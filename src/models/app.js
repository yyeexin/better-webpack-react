import request from 'utils/request'
import urls from 'utils/urls'
const { BaoHuo_Login_URLS, BaoHuo_Menu_URLS, BaoHuo_AppCommon_URLS } = urls
const { userLogin } = BaoHuo_Login_URLS
const { menus } = BaoHuo_Menu_URLS
const {
	getShopBrandSelects, //获取店铺品牌下拉框列表
	getShopTypeSelects, // 获取店铺类型下拉框列表
	getWareHouses,
	getSingleWareHouseTagLines
} = BaoHuo_AppCommon_URLS

export default {
	namespace: 'app',
	state: {
		menus: [],
		ShopBrandSelect: [],
		ShopTypeSelect: [],
		wareHouses: [],
		wareHouseTagLines: []
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
			const { status, result = [] } = data
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
		*getShopBrandSelects({ payload }, { call, put, select }) {
			const data = yield call(request, { url: getShopBrandSelects, method: 'get' })
			const { status, result = [] } = data
			if (status === 200) {
				yield put({
					type: 'updateState',
					payload: {
						ShopBrandSelect: result
					}
				})
			}
		},
		*getShopTypeSelects({ payload }, { call, put, select }) {
			const data = yield call(request, { url: getShopTypeSelects, method: 'get' })
			const { status, result = [] } = data
			if (status === 200) {
				yield put({
					type: 'updateState',
					payload: {
						ShopTypeSelect: result
					}
				})
			}
		},
		*getWareHouses({ payload }, { call, put }) {
			const data = yield call(request, { url: getWareHouses, method: 'get' })
			const { status, result = [] } = data
			if (status === 200) {
				yield put({
					type: 'updateState',
					payload: {
						wareHouses: result
					}
				})
			}
		},
		*getSingleWareHouseTagLines({ payload }, { call, put }) {
			const data = yield call(request, {
				url: getSingleWareHouseTagLines,
				method: 'post',
				payload
			})
			const { status, result = [] } = data
			if (status === 200) {
				yield put({
					type: 'updateState',
					payload: {
						wareHouseTagLines: result
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
