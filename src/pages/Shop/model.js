import request from 'utils/request'
import urls from 'utils/urls'
const { BaoHuo_Shop_URLS } = urls
const { shopsLists } = BaoHuo_Shop_URLS

export default {
	namespace: 'shop',
	state: {
		list: [],
		pagination: {}
	},
	effects: {
		*query({ payload }, { call, put, select }) {
			const data = yield call(request, { method: 'post', url: shopsLists, payload })
			const { message, pagination = {}, result = [], status } = data
			if (message === 'success' && status === 200) {
				yield put({
					type: `updateState`,
					payload: {
						list: result,
						pagination
					}
				})
				const { total = 0 } = pagination
				return {
					list: result,
					total
				}
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
