import request from "@/utils/request";
import urls from "@/utils/urls";
const { Contract_Option_URLS } = urls;
const {
    contractTemplate,
    pullPersonInfo,
    contractInfoById,
    contractDetailForm,
} = Contract_Option_URLS || {};
const namespace = "contractAdd";
export default {
    namespace,
    state: {
        contractTemplate: [],
        activeTemplate: {},
        addContractFormValues: {},
        contractDetailForm: [],
    },
    effects: {
        *getContractTemplate({ payload = {} }, { call, put, select }) {
            const data = yield call(request, {
                method: "post",
                url: contractTemplate,
                payload: {
                    ...payload,
                },
            });
            const { status, result = [], pagination = {} } = data;
            if (status === 200) {
                yield put({
                    type: "updateState",
                    payload: {
                        contractTemplate: result,
                    },
                });
                return {
                    result,
                    pagination,
                };
            }
        },
        *queryContractDetailForm({ payload = {} }, { call, put }) {
            const data = yield call(request, {
                method: "get",
                url: contractDetailForm,
                payload,
            });
            const { status, result } = data;
            if (status === 200) {
                yield put({
                    type: "updateState",
                    payload: {
                        contractDetailForm:
                            (result && result.structComponents) || [],
                    },
                });
            }
        },
        // *contractInfoById({ payload = {} }, { call, put }) {
        // 	const data = yield call(request, {
        // 		method: 'get',
        // 		url: contractInfoById,
        // 		payload
        // 	})

        // 	const { status, result } = data
        // 	if (status === 200) {
        // 		let { structComponentsJson, structComponents, signerAddress, identity, ...contractFilters } = result
        // 		structComponentsJson = JSON.parse(structComponentsJson || {})
        // 		const structComponent = structComponents.map(struct => {
        // 			const value = structComponentsJson[struct.key]
        // 			return {
        // 				key: struct.key,
        // 				value
        // 			}
        // 		})

        // 		yield put({
        // 			type: 'updateState',
        // 			payload: {
        // 				detail: structComponent
        // 			}
        // 		})

        // 		yield put({
        // 			type: 'AddContract/updateState',
        // 			payload: {
        // 				filters: contractFilters,
        // 				...(signerAddress && { signerAddress: structComponentsJson['signer_b_address'] }),
        // 				...(identity && { identity: structComponentsJson['id_number'] })
        // 			}
        // 		})
        // 	}
        // }
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },
};
