import request from 'utils/request'
import urls from 'utils/urls'
const { Contract_Option_URLS, Contract_Confirm_URLS } = urls
const { contractTemplate, pullPersonInfo } = Contract_Option_URLS || {}
const namespace = 'contractAdd'
export default {
	namespace,
	state: {
		contractTemplate: [],
		activeTemplate: {}
	},
	effects: {
		*getContractTemplate({ payload = {} }, { call, put, select }) {
			const data = yield call(request, {
				method: 'post',
				url: contractTemplate,
				payload: {
					...payload
				}
			})
			const { status, result = [], pagination = {} } = data
			if (status === 200) {
				yield put({
					type: 'updateState',
					payload: {
						contractTemplate: result
					}
				})
				return {
					result,
					pagination
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
