import request from "@/utils/request";
import urls from "@/utils/urls";
const { BaoHuo_Home_URLS } = urls;
const {
    homeGetSurrenderTimeSelect, //查询送货日期下拉框列表
    homeSurrenderData, //按日期查询订单数据
    homeGetOrderData, //按照日期查询订单数据
    homeGetOrderDetailData, //按照日期查询订货数据
    homeGetNewJoinedShopData, //查询新增的店铺列表
    homeGetShopAreaData, //查询店铺分布
} = BaoHuo_Home_URLS;

export default {
    namespace: "home",
    state: {
        shopAreaData: [],
    },
    effects: {
        *getShopAreaData({ payload = {} }, { call, put, select }) {
            const data = yield call(request, {
                method: "get",
                url: homeGetShopAreaData,
            });
            const { status, result = [] } = data;
            if (status === 200) {
                yield put({
                    type: "updateState",
                    payload: {
                        shopAreaData: result,
                    },
                });
            }
        },
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
