const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

const apiPrefix = '/api'
const takeawayApiPrefix = '/takeawayApi'
const contractApiUrls = require('./config_contract.js') //合同模块接口链接

export default {
	name: '古茗电商', //
	prefix: 'gm',
	footerText: 'Gu Ming ',
	logo: '/logo.jpg',
	avator: '/dashu.jpeg', //用户头像
	iconFontCSS: '/iconfont.css',
	iconFontJS: '/iconfont.js',
	CORS: [],
	openPages: ['/login', '/createPage'],
	apiPrefix,
	APIV1,
	APIV2,

	//登录
	BaoHuo_Login_URLS: {
		userLogin: `${apiPrefix}/login/login`, //用户登陆
		userLogout: `${apiPrefix}/login/logout`, //登录退出

		userGetToken: `${apiPrefix}/login/getToken`, //用户登陆地方的token获取

		changeCurPass: `${apiPrefix}/user/changPersonPass`, //更改用户密码
		changeUserPassWord: `${apiPrefix}/user/changePass` //修改用户密码
	},

	//项目菜单
	BaoHuo_Menu_URLS: {
		menus: `${apiPrefix}/menu/findUserMenuAuthTree` //查询当前用户的菜单列表
	},

	//报货独立组件中api
	BaoHuoComponentApi: {
		queryGoodsCanUse: `${apiPrefix}/products/find`, //查找可用的商品列表
		queryRelateGoods: `${apiPrefix}/products/productsList`, //查找相关的商品列表
		queryShops: `${apiPrefix}/shop/find`, //查找店铺列表
		queryAllShops: `${apiPrefix}/shop/findLineShop`, //查找店铺列表
		queryNotice: `${apiPrefix}/notice/findByPage`, //查找通知列表
		queryQuestion: `${apiPrefix}/question/find`, //查找题目列表

		getAllSystem: `${apiPrefix}/system/findBSystem`, //获取所有b端系统列表
		getSystemTree: `${apiPrefix}/menu/findSystemMenuTree`, //获取系统树,
		RoleDetail: `${apiPrefix}/role/detail`, //角色详情
		getLearnMaterialList: `${apiPrefix}/materials/find` //查询学习资料
	},
	//报货中公用的api  下拉框居多
	BaoHuo_AppCommon_URLS: {
		getCityData: `${apiPrefix}/addressDict/getTiledAddressDict`, //获取省市区信息
		getAllWahreHouse: `${apiPrefix}/wareHouse/getAllWarehouse`,
		getWareHouses: `${apiPrefix}/wareHouse/getWareHouseList`, //查询仓库列表 用于在各个层面的select选项中调用

		getSingleWareHouseTagLines: `${apiPrefix}/line/getLineList`, //查询单个仓库下面的送货路线
		getGoodsClassifySelect: `${apiPrefix}/productsClassify/getProductsClassifyList`, //查询商品分类列表 用于在各个层面的select选项中调用

		getShopLevelsSelect: `${apiPrefix}/rank/getRankList`, //查询店铺等级列表 方便select选择
		getShopStatusSelect: `${apiPrefix}/status/getStatusList`, //获取店铺状态
		getShopRolesSelect: `${apiPrefix}/shop/findCRole`, //获取店铺内部角色列表
		getMonitoringBrand: `${apiPrefix}/shop/selectMonitoringBrand`, //获取店铺品牌列表

		getOrderStatusListSelect: `${apiPrefix}/order/getOrderStatusList`, //获取订单状态列表
		getTemplatesTypeListSelect: `${apiPrefix}/templatesType/findTemplatesTypeList`, //获取订单模板类型下拉框

		getSurrenderStatusSelect: `${apiPrefix}/order/getSurrenderStatus`, //获取交单状态列表

		getAllWareHouseAndLines: `${apiPrefix}/wareHouse/findAllWarehouseWithLine`, //获取所有的仓库以及仓库下面的路线列表
		getNoticeTypeSelects: `${apiPrefix}/noticeClassify/getNoticeClassifyList`, //获取通知类型的下拉框
		getSystemTree: `${apiPrefix}/menu/findSystemMenuTree`, //获取系统树
		getCommodityAttributeList: `${apiPrefix}/productAttribute/getProductsAttributeList`, //获取商品属性的下拉框

		getAllRolesSelect: `${apiPrefix}/role/findAll`, //获取所有角色列表
		getAllSystem: `${apiPrefix}/system/findBSystem`, //获取所有b端系统列表
		getAllSystemTypeSelect: `${apiPrefix}/system/findSystemType`, //获取系统类型下拉框

		getAllDepartmentSelect: `${apiPrefix}/dept/findAll`, //获取所有的部门列表
		getAllDepartMentBySystem: `${apiPrefix}/dept/findDeptUnderSystem`, //根据系统查询下面对应的部门列表

		getGoodUnitSelect: `${apiPrefix}/unit/getUnit`, //获取所有的可选择商品单位下拉框列表
		getGoodLabelsSelect: `${apiPrefix}/products/getProductTagList`, //获取商品的标签下拉列表
		getGoodSaleModeSelect: `${apiPrefix}/products/getSellModeList`, //获取商品的售卖方式下拉列表

		resetBPwd: `${apiPrefix}/user/resetPassWithNewPass`, //重置B端用户密码  和修改密码是不一样的

		getQuestionType: `${apiPrefix}/questionRankClassify/queryQuestionClassify`, //查询试题类型
		getCollegeTree: `${apiPrefix}/questionRankClassify/query`, //查询题库完整树
		getQuestionTopLevelSelects: `${apiPrefix}/questionRankClassify/bankType`, //查询题库顶层分类下拉框列表

		getShopBrandSelects: `${apiPrefix}/shop/getShopBrandList`, //获取店铺品牌下拉框列表
		getShopTypeSelects: `${apiPrefix}/shop/getShopTypeList`, //获取店铺类型下拉框列表

		getCreateOrderTypeSelects: `${apiPrefix}/order/substitution`, //获取订单下单方式下拉框列表

		getOrderSortTypeSelects: `${apiPrefix}/order/getOrder`, //获取订单列表排序方式下拉框列表
		getAreaTreeSelect: `${apiPrefix}/area/query`, //获取店铺所属区域下拉框列表

		getSupplierGroupSelect: `${apiPrefix}/procurement/supplier/findSupplierGroup`, //获取供应商分组下拉框列表
		getSupplierStatusSelect: `${apiPrefix}/procurement/supplier/findStatus`, //获取供应商状态下拉框列表
		getPurchasesOrderStatusSelect: `${apiPrefix}/procurement/order/findStatus`, //获取订单传输状态拉框列表
		// getWarehouseOrgSelect:`${apiPrefix}/procurement/supplier/findWarehouseOrg`,//获取仓库组织下拉框列表
		getCountrySelect: `${apiPrefix}/procurement/supplier/findCountry`, //获取国家编码下拉框列表
		getWareSubSelect: `${apiPrefix}/wareSub/wareSubMapList`,
		getKisDepartment: `${apiPrefix}/cloud/dept/getAllKCDept`, //获取金蝶部门
		getKisStaff: `${apiPrefix}/cloud/staff/getKCStaff`, //获取金蝶员工
		getInvBillStatus: `${apiPrefix}/InventoryBill/getInventoryStatusList`, //获取单据类型
		getInvBillType: `${apiPrefix}/InventoryBill/getInventoryTypeList`, //获取盘点类型
		getCollegeFilesType: `${apiPrefix}/transcript/GetBasicType`, //获取学员成绩单类型
		getTakeoutType: `${apiPrefix}/shopCertification/getTakeoutType`, //获取外卖类型
		getCurrentRole: `${apiPrefix}/shopCertification/getCurrentRole`, //获取当前环节
		getFlowStatus: `${apiPrefix}/shopCertification/getFlowStatus`, //获取审核外卖异常状态
		getQuestionClassify: `${apiPrefix}/questionRankClassify/queryQuestionClassify`, //查询题型分类
		getLearnMaterialTree: `${apiPrefix}/learningMaterialsRankClassify/query` //查询学习资料分类完整树
	},
	// 报货首页
	BaoHuo_Home_URLS: {
		homeGetSurrenderTimeSelect: `${apiPrefix}/arrangement/findArrangeAfterNow`, //查询送货日期下拉框列表
		homeSurrenderData: `${apiPrefix}/order/countSurrenderDocumentsNum`, //按日期查询订单数据
		homeGetOrderData: `${apiPrefix}/order/countOrderFlow`, //按照日期查询订单数据
		homeGetOrderDetailData: `${apiPrefix}/order/countOrder`, //按照日期查询订货数据
		homeGetNewJoinedShopData: `${apiPrefix}/shop/joinShop`, //查询新增的店铺列表
		homeGetShopAreaData: `${apiPrefix}/shop/shopDistribution` //查询店铺分布
	},

	//订单模块
	BaoHuo_Orders_URLS: {
		OrderList: `${apiPrefix}/order/find`, //订单列表查询
		OrderDelete: `${apiPrefix}/OrderDelete`, //删除订单信息
		orderRevoke: `${apiPrefix}/order/revokeOrder`, //撤销订单
		OrderAdd: `${apiPrefix}/OrderAdd`, //新增订单
		OrderRevokeHasClosed: `${apiPrefix}/order/revokeClosedOrder`, //撤回已关闭的订单，该功能页面不可见  需要在控制台改变按钮的显示状态进行控制
		updateOrderByLine: `${apiPrefix}/order/updateOrderByLine`, //更新某条路线下的订单信息
		batchReviewOrders: `${apiPrefix}/order/batchReviewOrders`, //批量更新订单
		mergeDeliveryOder: `${apiPrefix}/order/mergeDeliveryOder` //批量合并订单
	},

	// 交单模块
	BaoHuo_Surrender_URLS: {
		SurrenderList: `${apiPrefix}/order/countSurrenderDocuments`, //查询店铺的交单列表
		hastens: `${apiPrefix}/order/orderReminder` //催单
	},

	//店铺模块
	BaoHuo_Shop_URLS: {
		shopsLists: `${apiPrefix}/shop/find`, //店铺列表
		shopDelete: `${apiPrefix}/shop/delete`, //店铺删除
		shopDetail: `${apiPrefix}/shop/detail`, //店铺详情
		shopAdd: `${apiPrefix}/shop/add`, //店铺添加
		shopUpdate: `${apiPrefix}/shop/update`, //店铺更新

		resetUserPassword: `${apiPrefix}/customer/resetPass`, //重置店铺用户密码
		createNewUserPassword: `${apiPrefix}/createNewUserPassword`, //重置店铺用户密码
		changeShopPwd: `${apiPrefix}/customer/customerPass`, //重置用户密码
		deleteShopUser: `${apiPrefix}/shop/deleteUser`, //删除店铺用户关系
		changeShopMainAccount: `${apiPrefix}/customer/modifyUserAccount`, //修改店铺主账号

		//店铺导入导出相关
		shopImport: `${apiPrefix}/shop/import`, //店铺导入
		confirmInput: `${apiPrefix}/shop/confirmImport`, //确认导入数据
		shopInput: `${apiPrefix}/shop/import`, //导入execl

		toggleShopOnOff: `${apiPrefix}/shop/modifyEnable`, //切换店铺启用或者禁用状态
		toggleShopCollegeOnOff: `${apiPrefix}/toggleShopCollegeOnOff`, //切换店铺的学院权限功能模块

		getShopAccounts: `${apiPrefix}/shop/shopStaffDetail`, //获取店铺账号列表
		getCoreStaff: `${apiPrefix}/shop/findShopCoreStaffInfo`, //查询店铺核心人员信息
		addCoreStaff: `${apiPrefix}/shop/saveShopCoreStaffInfo`, //新增店铺核心人员信息
		editCoreStaff: `${apiPrefix}/shop/updateShopCoreStaffInfo`, //修改店铺核心人员信息
		// findShopAuth: `${apiPrefix}/shop/findTakeOutInfoByShopId`, //查询单个店铺外卖授权信息
		findShopAuth: `${apiPrefix}/shop/getShopPoiInfoDto`, //查询单个店铺外卖授权信息
		// editShopAuth: `${apiPrefix}/shop/saveOrUpdateShopTakeOutInfo`, //新增或修改授权信息
		editShopAuth: `${apiPrefix}/shop/saveOrUpdateShopPoiInfo`, //新增或修改授权信息
		listShopStatus: `${apiPrefix}/shop/listShopStatus`, //根据名称获取店铺下拉框(一级分类/二级分类)
		findShopUnderLineTrainInfo: `${apiPrefix}/shop/findShopUnderLineTrainInfo`, //查询门店线下培训信息
		findShopOnLineTrainInfo: `${apiPrefix}/shop/findShopOnLineTrainInfo`, //查询门店线上培训信息
		getShopCloseTime: `${apiPrefix}/shop/getCloseTime`, //获取闭店时间
		addOrUpdateShopCloseTime: `${apiPrefix}/shop/addOrUpdateCloseTime`, //修改/保存 闭店时间
		getPayInfo: `${apiPrefix}/shop/getPayInfo`, //获取店铺支付信息
		addOrUpdate: `${apiPrefix}/shop/addOrUpdate`, //修改/保存 支付信息,
		getUserList: `${apiPrefix}/shop/getUserList` //获取督导
	},

	// 店铺认证模块
	BaoHuo_ShopAuth_URLS: {
		find: `${apiPrefix}/shopauth/findShopAuthList`, //门店认证列表
		detail: `${apiPrefix}/shopauth/findShopAuthDetail`, //查询门店认证详情
		update: `${apiPrefix}/shopauth/saveShopAuthDetail`, //更新门店认证
		uploadLicense: `${apiPrefix}/shopauth/getBizLicInfo`, //上传并返回营业执照信息
		uploadIDMsg: `${apiPrefix}/shopauth/getIDCardInfo`, //上传并返回身份证信息
		getBankName: `${apiPrefix}/shopauth/getBankName`, //获得银行卡信息
		getFoodBusinessLicense: `${apiPrefix}/shopauth/getFoodBusinessLicense` //获取食品安全经营许可证信息
	},

	// 店铺认证模块及外卖
	BaoHuo_ShopReview_URLS: {
		find: `${apiPrefix}/shopCertification/auditList`, //店铺认证模块及外卖列表
		detail: `${apiPrefix}/shopReview/getReviewInfo`, //店铺认证模块及外卖详情
		update: `${apiPrefix}/shopReview/submitReviewForm`, //更新店铺认证模块及外卖
		submitAudit: `${apiPrefix}/shopCertification/audit`, //审批入驻外卖操作
		history: `${apiPrefix}/shopCertification/auditHistory`, //审批记录查询
		downloadFiles: `${apiPrefix}/shopCertification/download`, //附件下载
		setAuditor: `${apiPrefix}/shopCertification/setAuditor` //新门店添加督导和区域经理
	},
	// 店铺资料任务列表模块
	BaoHuo_ShopMaterialTasks_URLS: {
		query: `${apiPrefix}/shopJob/listShopJob`, //资料任务列表查询
		remindShop: `${apiPrefix}/shopJob/remindMsg`, //资料任务未完成提醒
		queryTaskDetailList: `${apiPrefix}/shopJob/listShopJobType`, //资料任务详情列表
		getSummaryData: `${apiPrefix}/shopJob/getShopJobTypeSize` //资料数据概况 共多少店、未完成、已完成
	},

	//商品列表
	BaoHuo_CommodityGoodsLists_URLS: {
		googsListQuery: `${apiPrefix}/products/pageQuery`, //新商品列表查询
		goodsLists: `${apiPrefix}/products/find`, //商品列表
		goodsWareLists: `${apiPrefix}/products/findProductsWhatOrgsAvailable`, //商品列表
		goodDelete: `${apiPrefix}/products/delete`, //商品删除
		goodDetail: `${apiPrefix}/products/detail`, //商品详情
		goodAdd: `${apiPrefix}/products/add`, //商品添加
		createDownLoadFile: `${apiPrefix}/products/export`, //创建生成下载内容链接
		goodUpdate: `${apiPrefix}/products/update`, //商品编辑更新
		goodDown: `${apiPrefix}/products/undercarriage`, //商品下架
		goodBatchDown: `${apiPrefix}/products/undercarriageBatch`, //商品批量上下架
		goodDetailView: `${apiPrefix}/products/view`, //商品详情查看
		goodsImport: `${apiPrefix}/products/import`, //商品导出
		GoodUploadImg: `${apiPrefix}/products/productPictureUpload`, //商品图片上传
		goodChangeGoodLabels: `${apiPrefix}/products/productTagsBatch`, //批量修改商品标签
		goodsInput: `${apiPrefix}/products/import`, //商品导入
		confirmInput: `${apiPrefix}/products/confirmImport`, //确认导入
		saveType: `${apiPrefix}/storageType/storageTypeMapList`, // 存放类型
		belongWarehouse: `${apiPrefix}/wareSub/wareSubMapList`, // 所属仓库
		getWareHouses: `${apiPrefix}/organization/getOrganizationList` // 使用组织
	},
	//商品分类
	BaoHuo_CommodityGoodsClassify_URLS: {
		lists: `${apiPrefix}/productsClassify/find`, //商品分类列表
		deleteItem: `${apiPrefix}/productsClassify/delete`, //商品分类删除
		detail: `${apiPrefix}/productsClassify/detail`, //商品分类详情
		add: `${apiPrefix}/productsClassify/add`, //商品分类添加
		update: `${apiPrefix}/productsClassify/update`, //商品分类更新
		getProductsClassifyList: `${apiPrefix}/productsClassify/getProductsClassifyList`, //查询对应分类的的商品类型
		findByPid: `${apiPrefix}/productsClassify/findByPid` //查询对应父级分类下的子分类
	},

	//商品属性
	BaoHuoCommodityAttr_URLS: {
		productList: `${apiPrefix}/productAttribute/find`, //商品属性列表
		addProductAttr: `${apiPrefix}/productAttribute/add`, //添加商品属性
		deleteProductAttr: `${apiPrefix}/productAttribute/delete`, //删除商品属性
		updateProductAttr: `${apiPrefix}/productAttribute/update` //更新商品属性
	},
	//商品品牌商
	BaoHuoGoodsBranchDelear_URLS: {
		query: `${apiPrefix}/productSupplier/find`, //商品品牌商查询
		deleteItems: `${apiPrefix}/productSupplier/delete`, //品牌商删除
		add: `${apiPrefix}/productSupplier/add`, //品牌商新增或者编辑
		update: `${apiPrefix}/productSupplier/update`, //品牌商新增或者编辑
		queryBranchByName: `${apiPrefix}/productSupplier/getList` //按名字查询品牌商(不分页)
	},
	//商品下载中心
	BaoHuo_GoodsDownloadCenter_URLS: {
		query: `${apiPrefix}/products/findOne`, //下载查询
		deleteItems: `${apiPrefix}/products/deleteFile` //下载删除
	},
	//广告模块
	BaoHuoAdvertising_URLS: {
		advertisingList: `${apiPrefix}/banners/find`, //广告列表
		addAdvertising: `${apiPrefix}/banners/add`, //添加广告
		deleteAdvertising: `${apiPrefix}/banners/delete`, //删除广告
		stickAdvertising: `${apiPrefix}/banners/stick`, //置顶或取消置顶广告
		updateAdvertising: `${apiPrefix}/banners/update`, //更新广告
		uploadPic: `${apiPrefix}/banners/PictureUpload`, //广告图片上传
		advertisingDetail: `${apiPrefix}/banners/detail` //广告详情
	},

	//商品限购
	BaoHuo_GoodPurchaseLimit_URLS: {
		lists: `${apiPrefix}/productLimit/find`, //商品限购列表
		deleteItem: `${apiPrefix}/productLimit/delete`, //商品限购删除
		detail: `${apiPrefix}/productLimit/detail`, //商品限购详情
		add: `${apiPrefix}/productLimit/add`, //商品限购添加
		update: `${apiPrefix}/productLimit/update` //商品限购更新
	},

	//商品预售
	BaoHuo_GoodsPreSale_URLS: {
		lists: `${apiPrefix}/productPreSellLimit/find`, //商品预售列表
		deleteItem: `${apiPrefix}/productPreSellLimit/delete`, //商品预售删除
		detail: `${apiPrefix}/productPreSellLimit/detail`, //商品预售详情
		add: `${apiPrefix}/productPreSellLimit/add`, //商品预售添加
		update: `${apiPrefix}/productPreSellLimit/update` //商品预售更新
	},

	//计量单位
	BaoHuo_Unit_URLS: {
		UnitList: `${apiPrefix}/unit/find`, //计量单位列表
		UnitDelete: `${apiPrefix}/unit/delete`, //计量单位删除
		UnitDetail: `${apiPrefix}/unit/findOne`, //计量单位详情
		UnitAdd: `${apiPrefix}/unit/add`, //计量单位添加
		UnitUpdate: `${apiPrefix}/unit/update` //计量单位更新
	},

	//订单模板
	BaoHuo_OrderTemplate_URLS: {
		OrderTemplateList: `${apiPrefix}/recommend/find`, //订单模板列表
		OrderTemplateDelete: `${apiPrefix}/recommend/delete`, //订单模板删除
		OrderTemplateDetail: `${apiPrefix}/recommend/detail`, //订单模板详情
		OrderTemplateAdd: `${apiPrefix}/recommend/add`, //订单模板添加
		OrderTemplateUpdate: `${apiPrefix}/recommend/update`, //订单模板更新
		queryGoodsCanUseInTemplate: `${apiPrefix}/products/find` //查找可用的商品列表
	},

	//新增订单模块
	BaoHuo_OrderAdd_URLS: {
		orderAddGetTemplateByTagLine: `${apiPrefix}/recommend/findByLineAndStatus`, //根据路线查找路线下面的模板列表
		orderAddGetDeliveryDateByTagline: `${apiPrefix}/arrangement/findLineByToDay`, //根据路线查找可选的送货日期
		// orderAddGetTemplateGoodsLists:`${apiPrefix}/orderAddGetTemplateGoodsLists`,//根据订单模板查询模板中的商品列表 调取订单模板中的接口
		orderAddCreateOrders: `${apiPrefix}/order/replaceList`, //后台人员新增订单
		// orderAddQueryGoodsCanUseInTemplate:`${apiPrefix}/orderAddQueryGoodsCanUseInTemplate`,//根据路线查找可用的商品列表  调取订单模板中的可用商品列表接口
		OrderAddGoods: `${apiPrefix}/order/cart/addBatch` //订单中新增商品
	},

	//订单详情
	BaoHuo_OrderDetail_URLS: {
		orderDetailView: `${apiPrefix}/order/detail`, //订单信息详情
		orderDeleteGood: `${apiPrefix}/order/cart/deleteOrderCart`, //删除订单中的某个商品
		orderRevokeGood: `${apiPrefix}/order/cart/revokeDelete`, //撤销订单中某个删除的商品
		orderUpdateGood: `${apiPrefix}/order/cart/updateOrderCartAmount`, //编辑订单中的某个商品
		orderCheckStock: `${apiPrefix}/order/checkStock`, //订单库存核对
		orderCheckAudit: `${apiPrefix}/order/audit`, //订单审核
		orderNextOrder: `${apiPrefix}/order/nextOrder`, //上一条订单  nextOrder
		orderPrevOrder: `${apiPrefix}/order/lastOrder`, //下一条订单
		orderQueryGoodsCanUse: `${apiPrefix}/products/findTagLineTemplateProducesByShopId`, //查询可用的商品
		OrderAddGoods: `${apiPrefix}/order/cart/addBatch`, //订单中新增商品

		OrderSplit: `${apiPrefix}/order/orderSplit`,
		orderBackToNotChecked: `${apiPrefix}/order/retrial`, //将已经审核的订单撤回至未审核状态
		modifyOrderDeliveryTypeAndDate: `${apiPrefix}/order/modifyOrder` //修改订单的送货日期或者送货方式
	},

	//订单合并
	BaoHuo_OrderCombine_URLS: {
		detail: `${apiPrefix}/order/consolidatedOrders`, //需要合并的订单信息列表
		orderCombineCheckStock: `${apiPrefix}/order/checkStockByOrders`, //订单合并 检测库存
		orderSubmitCombine: `${apiPrefix}/order/confirmOrders` //提交订单合并
	},

	// 订单批量改价
	BaoHuo_OrdersBatchChangePrice_URLS: {
		OrdersBatchChangePriceGetLeftGoods: `${apiPrefix}/order/findProducts`, //获取多个订单中涉及到的商品列表
		OrdersBatchChangePriceGetSingleGoodShops: `${apiPrefix}/order/findProductsByOrderQuery`, //获取单个商品下面对应的店铺列表
		OrdersBatchChangePriceSubmit: `${apiPrefix}/order/batchProductPriceUpdate` //修改结算价格
	},

	//基础配置
	BaoHuo_BaseConfig_URLS: {
		detail: `${apiPrefix}/setups/findOrderConfig`, //基础配置查询
		update: `${apiPrefix}/setups/updateOrderConfig` //基础配置更新
	},

	//文件中心
	BaoHuo_FileCenterg_URLS: {
		lists: `${apiPrefix}/document/find`, //文件列表
		deleteItem: `${apiPrefix}/document/delete`, //文件删除
		importFile: `${apiPrefix}/document/upload` //文件导入 上传
	},

	//公告模块
	BaoHuo_Notice_URLS: {
		//公告列表相关
		NoticeList: `${apiPrefix}/notice/findByPage`, //通知列表
		NoticeDetail: `${apiPrefix}/notice/detail`, //通知详情
		NoticeAdd: `${apiPrefix}/notice/add`, //通知添加
		NoticeDelete: `${apiPrefix}/notice/delete`, //通知删除
		NoticeQueryShops: `${apiPrefix}/notice/findIsReadShopByNoticeId`, //查询公告读取状态的店铺列表
		NoticeUploadImg: `${apiPrefix}/notice/noticePictureUpload`, // 通知公告的图片上传功能

		//公告类型相关
		noticeTypeLists: `${apiPrefix}/noticeClassify/find`, //公告类型列表
		noticeTypeDelete: `${apiPrefix}/noticeClassify/delete`, //公告类型列表删除
		noticeTypeAdd: `${apiPrefix}/noticeClassify/add`, //公告类型新增,
		noticeTypeUpdate: `${apiPrefix}/noticeClassify/update`, //公告类型更新,
		noticeTypeDetail: `${apiPrefix}/noticeClassify/detail`, //公告类型详情,
		uploadNoticeTypeImg: `${apiPrefix}/noticeClassify/noticeClassifyPictureUpload` //公告类型上传图片,
	},
	//意见反馈
	BaoHuo_Feedback_URLS: {
		FeedbackList: `${apiPrefix}/feedBack/findByPage`, //意见反馈信息列表
		FeedbackDetail: `${apiPrefix}/feedBack/detail` //意见详情
	},
	//操作日志
	BaoHuo_SystemLog_URLS: {
		systemLogList: `${apiPrefix}/system/log/find` //查询系统日志
	},
	//仓库模块
	BaoHuo_WareHouse_URLS: {
		lists: `${apiPrefix}/wareHouse/find`, //仓库列表查询
		deleteItem: `${apiPrefix}/wareHouse/delete`, //删除仓库信息
		detail: `${apiPrefix}/wareHouse/detail`, //仓库信息详情
		add: `${apiPrefix}/wareHouse/add`, //新增仓库
		update: `${apiPrefix}/wareHouse/update`, //更新仓库
		deleteBank: `${apiPrefix}/tagbank/delete` //删除仓库下面的银行信息
	},
	//送货路线模块
	BaoHuo_DeliveryLine_URLS: {
		deliveryLines: `${apiPrefix}/line/find`, //送货路线查询列表
		deliveryLineDelete: `${apiPrefix}/line/delete`, //送货路线删除
		deliveryLineDetail: `${apiPrefix}/line/detail`, //送货路线详情
		deliveryLineAdd: `${apiPrefix}/line/add`, //新增送货路线
		deliveryLineUpdate: `${apiPrefix}/line/update`, //新增送货路线
		findScreenProduct: `${apiPrefix}/line/findScreenProduct`, //查询配送/不配送商品
		screenProduct: `${apiPrefix}/line/screenProduct` //路线屏蔽/取消屏蔽商品
	},
	//路线安排
	BaoHuo_DeliveryPlan_URLS: {
		deliveryPlanGetTagLinesByHouseId: `${apiPrefix}/line/getLineList`, //根据仓库查送货路线
		deliveryPlanGetMonthPlan: `${apiPrefix}/arrangement/find`, //查找某一个月的路线安排
		deliveryPlanMoveLineToDate: `${apiPrefix}/arrangement/move`, //移动路线到某日安排下
		deliveryPlanDeleteLineFromDate: `${apiPrefix}/arrangement/remove`, //将路线从某一日下删除
		deliveryPlanExportData: `${apiPrefix}/arrangement/export`, //数据导出
		deliveryPlanMoveLineFromDateToDate: `${apiPrefix}/arrangement/changeRoute` //把路线安排从一个日期挪动到另外一个日期
	},

	//路线规划
	BaoHuo_DeliveryLineConfig_URLS: {
		deliveryLinesConfigGetLines: `${apiPrefix}/line/findByWareHouse`, //根据仓库查送货路线 包含了暂无安排的路线
		deliveryLinesConfigGetShops: `${apiPrefix}/shop/findShopByLine`, //根据送货路线查店铺
		deliveryLinesConfigMoveShop: `${apiPrefix}/shop/move`, //移动店铺到某条路线下
		deliveryLinesConfigSearchShopsGlobalSimple: `${apiPrefix}/path/fuzzyFind `, //根据名称查找店铺列表 模糊搜索
		deliveryLinesConfigSearchShopsGlobal: `${apiPrefix}/shop/findShopByName ` //根据名称查找店铺列表 精确搜索
	},

	//店铺等级
	BaoHuo_ShopLevel_URLS: {
		lists: `${apiPrefix}/rank/find`, //店铺等级列表
		deleteItem: `${apiPrefix}/rank/delete`, //店铺等级删除
		add: `${apiPrefix}/rank/add`, //店铺等级添加
		update: `${apiPrefix}/rank/update` //店铺等级修改
	},

	//权限模块

	//系统模块
	BaoHuo_System_URLS: {
		lists: `${apiPrefix}/system/find`, //系统列表
		detail: `${apiPrefix}/system/edit`, //系统详情
		add: `${apiPrefix}/system/add`, //系统新增
		deleteItem: `${apiPrefix}/system/delete`, //系统删除
		update: `${apiPrefix}/system/update` //系统更新
	},
	// 部门  角色组
	BaoHuo_Department_URLS: {
		lists: `${apiPrefix}/dept/find`, //部门列表
		detail: `${apiPrefix}/dept/detail`, //部门详情
		add: `${apiPrefix}/dept/add`, //部门添加
		deleteItem: `${apiPrefix}/dept/delete`, //部门删除
		update: `${apiPrefix}/dept/update` //部门更新
	},

	//角色
	BaoHuo_Role_URLS: {
		findAllMenuRole: `${apiPrefix}/authority/findAllMenu`, //获取角色的所有权限列表
		RoleList: `${apiPrefix}/role/find`, //角色列表
		RoleDelete: `${apiPrefix}/role/delete`, //角色删除
		RoleDetail: `${apiPrefix}/role/detail`, //角色详情
		RoleAdd: `${apiPrefix}/role/add`, //角色添加
		RoleUpdate: `${apiPrefix}/role/update` //角色更新
	},
	//用户
	BaoHuo_Users_URLS: {
		UserList: `${apiPrefix}/user/find`, //用户列表
		UserDelete: `${apiPrefix}/user/delete`, //用户删除
		UserDetail: `${apiPrefix}/user/detail`, //用户详情
		UserAdd: `${apiPrefix}/user/add`, //用户添加
		UserUpdate: `${apiPrefix}/user/update` //用户更新
	},

	//数据管理
	BaoHuo_Data_URLS: {
		//商品销售报表
		getSalePieCharts: `${apiPrefix}/statistics/findProductCountTopVoList`, //商品销售饼图
		getSaleTopList: `${apiPrefix}/statistics/findProductCountByPage`, //商品销售排行榜
		exportSaleData: `${apiPrefix}/statistics/exportProductCount`, //商品销售数据导出

		//订货统计报表
		getOrderLineCharts: `${apiPrefix}/orderStatistics/findOrderTotalCount`, //商品销售饼图
		getOrderTopList: `${apiPrefix}/orderStatistics/findOrderCountByPage`, //商品销售排行榜
		exportOrderData: `${apiPrefix}/orderStatistics/exportOrder`, //商品销售数据导出

		//店铺订货报表
		getShopOrder: `${apiPrefix}/shopOrderStatistics/find`, //店铺订货分页查询
		exportShopOrder: `${apiPrefix}/shopOrderStatistics/exportShopOrderReport` //店铺订货导出
	},

	BaoHuo_College_URLS: {
		// 学习资料 资料分类菜单
		getLMTypeTree: `${apiPrefix}/learningMaterialsRankClassify/query`, //查询学习资料等级分类菜单
		updateLMTypeTree: `${apiPrefix}/learningMaterialsRankClassify/update`, //更新学习资料等级分类
		addLMTypeTree: `${apiPrefix}/learningMaterialsRankClassify/add`, //新增学习资料等级分类
		deleteLMTypeTree: `${apiPrefix}/learningMaterialsRankClassify/delete`, //删除学习资料等级分类
		uploadLMTypeTree: `${apiPrefix}/learningMaterialsRankClassify/learningMaterialsRankClassifyUpload`, // 学习资料等级分类菜单图片上传

		questionImport: `${apiPrefix}/question/import`, //习题导入
		getQuestionBankList: `${apiPrefix}/question/queryQuestionBank`, //题库列表查询
		getQuestionList: `${apiPrefix}/question/find`, //问题列表
		deleteQuestion: `${apiPrefix}/question/delete`, //删除问题
		addQuestion: `${apiPrefix}/question/add`, //新增问题
		updateQuestion: `${apiPrefix}/question/update`, //更新问题
		questionClassify: `${apiPrefix}/questionRankClassify/query`, //查询试题分类
		questionType: `${apiPrefix}/questionRankClassify/queryQuestionClassify`, //查询题型分类
		questionDetail: `${apiPrefix}/question/view`, //问题详情
		getTypeTree: `${apiPrefix}/questionRankClassify/query`, //得到类型树
		treeNodeUpdate: `${apiPrefix}/questionRankClassify/update`, //更新树上的一个节点
		treeNodeDel: `${apiPrefix}/questionRankClassify/delete`, //删除一个节点
		treeNodeAdd: `${apiPrefix}/questionRankClassify/add`, //增加下级节点
		queryVisible: `${apiPrefix}/questionRankClassify/queryQuestionClassifyRange`, //查询试题题型可见范围
		setVisible: `${apiPrefix}/questionRankClassify/setQuestionClassifyRange`, //设置试题题型可见范围
		questionUpOrDown: `${apiPrefix}/question/questionUpOrDown`, //习题上下架
		questionRankUpOrDown: `${apiPrefix}/questionRankClassify/rankUpOrDown`, //类型上下架
		setWareHouse: `${apiPrefix}/questionRankClassify/setWareHouse`, //仓库属性设置

		viewExam: `${apiPrefix}/exam/view`, //查询试卷
		updateExam: `${apiPrefix}/exam/update`, //更新试卷
		addExam: `${apiPrefix}/exam/add`, //新增试卷
		getLineData: `${apiPrefix}/learning/findLearningCount`, //学院统计折线图
		getListData: `${apiPrefix}/learning/findLearningCountByPage`, //学院统计折线图
		exportData: `${apiPrefix}/learning/exportLeaarning` //导出链接
	},
	//学院考试试卷模块
	BaoHuo_Exam_URLS: {
		queryLists: `${apiPrefix}/test/find`, //查询列表
		detail: `${apiPrefix}/test/view`, //查询详情
		deleteTableRows: `${apiPrefix}/test/delete`, //删除数据
		add: `${apiPrefix}/test/add`, //新增试卷
		update: `${apiPrefix}/test/update`, //更新试卷
		getPreviewExam: `${apiPrefix}/test/createTestPaper` //获取试卷预览
	},

	//学员档案模块
	BaoHuo_Files_URLS: {
		query: `${apiPrefix}/transcript/PageBasicInfo`, //查询列表
		detail: `${apiPrefix}/transcript/GetTranscriptInfo`, //查询详情
		import: `${apiPrefix}/transcript/ImportTranscript`, //导入
		save: `${apiPrefix}/transcript/saveTranscriptBatch`, //确认导入
		add: `${apiPrefix}/transcript/AddTranscript`, //新增档案
		deleteItem: `${apiPrefix}/transcript/removeBitchByIds` //删除
	},

	//学院新增考试模块
	BaoHuo_Test_URLS: {
		detail: `${apiPrefix}/settings/view`, //查询详情
		deleteTableRows: `${apiPrefix}/deleteTableRows`, //删除数据
		add: `${apiPrefix}/settings/add`, //新增考试
		update: `${apiPrefix}/settings/edit` //更新考试
	},

	//学院在线考试设置模块
	BaoHuo_TestSetting_URLS: {
		// 试卷设置
		query: `${apiPrefix}/settings/find`, //分页查询在线考试
		deleteTableRows: `${apiPrefix}/settings/delete`, //删除在线考试设置
		// 成绩列表
		findScoreListByPage: `${apiPrefix}/settings/findScoreByPage`, //分页查询在线考试某次成绩
		viewDetailExamScore: `${apiPrefix}/settings/viewDetailExamScore`, //查看在线考试成绩(B端)
		exportScoreList: `${apiPrefix}/settings/export`, //考试成绩排行导出
		scoreSeting: `${apiPrefix}/settings/viewScoreSeting` //考试列表 分数等级设置
	},
	//微课 章节管理
	BaoHuo_CourseChapterManagement_URLS: {
		query: `${apiPrefix}/chapter/find`, // 查询课程章节列表
		add: `${apiPrefix}/chapter/add`, //新增章节
		update: `${apiPrefix}/chapter/update`, //更新章节
		detail: `${apiPrefix}/chapter/detail`, //章节详情
		deleteChapters: `${apiPrefix}/chapter/delete`, //删除章节
		uploadVideo: `${apiPrefix}/chapter/bunchVideoUpload`, //上传章节视频

		//课程作业详情
		chapterTaskSubmitLists: `${apiPrefix}/work/find`, //章节作业提交列表
		viewChapterTaskSubmitDetail: `${apiPrefix}/work/workDetail` //章节作详情
	},
	//活动模块
	BaoHuo_Activity_URLS: {
		query: `${apiPrefix}/activity/findByPage`, //分页查询活动
		deleteTableRows: `${apiPrefix}/activity/delete`, //删除活动
		detail: `${apiPrefix}/activity/view`, //查询单个活动详情
		showApplyData: `${apiPrefix}/activity/showApplyData`, //查询报名数据
		exportApplyData: `${apiPrefix}/activity/exportApplyData` //导出活动报名数据
	},

	//活动数据模块
	BaoHuo_ActivityStatistics_URLS: {
		sendMessage: `${apiPrefix}/activityStatistics/activityReminder`, //活动提醒钉钉推送
		queryApplyData: `${apiPrefix}/activityStatistics/findActivityApplyData`, //活动报名统计
		queryVoList: `${apiPrefix}/activityStatistics/findActivityVoList` //活动统计折线图
	},

	//常见问题模块
	BaoHuo_CommonProblem_URLS: {
		add: `${apiPrefix}/problem/addProblem`,
		deleteTableRows: `${apiPrefix}/problem/deleteProblem`,
		update: `${apiPrefix}/problem/updateProblem`,
		query: `${apiPrefix}/problem/findProblemByPage`,
		view: `${apiPrefix}/problem/detailProblem`,
		stick: `${apiPrefix}/problem/stickProblem` //置顶
	},

	//视频中心模块
	BaoHuo_VideoCenter_URLS: {
		add: `${apiPrefix}/video/addVideo`, //新增视频设置
		deleteTableRows: `${apiPrefix}/video/deleteVideo`, //删除使用视频
		update: `${apiPrefix}/video/updateVideo`,
		query: `${apiPrefix}/video/findVideoByPage`,
		view: `${apiPrefix}/video/detailVideo`,
		stick: `${apiPrefix}/video/stickVideo`, //置顶
		uploadpicture: `${apiPrefix}/video/PictureUpload`,
		uploadvideo: `${apiPrefix}/video/VideoUpload`
	},

	//视频中心模块
	BaoHuo_UserManual_URLS: {
		add: `${apiPrefix}/userManual/addManual`, //新增视频设置
		deleteTableRows: `${apiPrefix}/userManual/deleteManual`, //删除使用视频
		update: `${apiPrefix}/userManual/updateManual`,
		query: `${apiPrefix}/userManual/findManualByPage`,
		view: `${apiPrefix}/userManual/detailManual`,
		stick: `${apiPrefix}/userManual/stickManual`, //置顶
		uploadpicture: `${apiPrefix}/userManual/PictureUpload`
	},
	//活动 新增或者编辑
	BaoHuo_ActivityAddOrEdit_URLS: {
		add: `${apiPrefix}/activity/add`, //新增活动
		update: `${apiPrefix}/activity/update`, //更新活动
		detail: `${apiPrefix}/activity/view`, //活动详情
		activityUpload: `${apiPrefix}/activity/activityUpload`, //上传活动封面图片
		updateApplyData: `${apiPrefix}/activity/updateApplyData` //更新报名详情
	},

	//问卷模块
	BaoHuo_Question_URLS: {
		query: `${apiPrefix}/questionnaire/findByPage`, //分页查询活动
		deleteTableRows: `${apiPrefix}/questionnaire/delete`, //删除活动
		detail: `${apiPrefix}/questionnaire/view`, //查询单个活动详情
		showApplyData: `${apiPrefix}/questionnaire/showApplyData`, //查询报名数据
		exportApplyData: `${apiPrefix}/questionnaire/exportApplyData` //导出活动报名数据
	},

	//问卷数据模块
	BaoHuo_QuestionStatistics_URLS: {
		sendMessage: `${apiPrefix}/questionnaireStatistics/activityReminder`, //问卷提醒钉钉推送
		queryApplyData: `${apiPrefix}/questionnaireStatistics/findActivityApplyData`, //问卷报名统计
		queryVoList: `${apiPrefix}/questionnaireStatistics/findActivityVoList` //问卷统计折线图
	},
	//问卷 新增或者编辑
	BaoHuo_QuestionAddOrEdit_URLS: {
		add: `${apiPrefix}/questionnaire/add`, //新增问卷
		update: `${apiPrefix}/questionnaire/update`, //更新问卷
		detail: `${apiPrefix}/questionnaire/view`, //问卷详情
		activityUpload: `${apiPrefix}/questionnaire/activityUpload`, //上传活动封面图片
		updateApplyData: `${apiPrefix}/questionnaire/updateApplyData` //更新报名详情
	},
	//可借商品模块
	BaoHuo_CanBorrow_URLS: {
		query: `${apiPrefix}/broGood/find`,
		add: `${apiPrefix}/broGood/add`,
		deleteTableRows: `${apiPrefix}/broGood/delete`,
		detail: `${apiPrefix}/broGood/detail`,
		update: `${apiPrefix}/broGood/update`
	},

	//借用记录模块
	BaoHuo_BorrowRecord_URLS: {
		dropdown: `${apiPrefix}/broGoodRecord/borrowingState`, //借用状态下拉框 get
		exportBorrow: `${apiPrefix}/broGoodRecord/exportBorrow`, //借用记录导出 get
		flow: `${apiPrefix}/broGoodRecord/flow`, //流程控制
		find: `${apiPrefix}/broGoodRecord/find`, //分页查询
		recordLeaving: `${apiPrefix}/broGoodRecord/recordLeaving`, //记录留言
		detail: `${apiPrefix}/broGoodRecord/view` //详情 get
	},

	//错题排行模块
	BaoHuo_MistakeRanking_URLS: {
		rank: `${apiPrefix}/error/rank`, //获取试题分类下拉框 get
		query: `${apiPrefix}/error/seek`, //错题排行
		classify: `${apiPrefix}/questionRankClassify/queryQuestionClassify`
	},

	// 账号管理模块
	BaoHuo_AccountManagement_URLS: {
		add: `${apiPrefix}/account/add`,
		query: `${apiPrefix}/account/findByPage`,
		update: `${apiPrefix}/account/update`,
		deleteTableRows: `${apiPrefix}/account/delete`,
		detail: `${apiPrefix}/account/detail`,
		updateRole: `${apiPrefix}/account/updateRole`, //更改店铺子账号的角色
		getRoleList: `${apiPrefix}/account/customerRoles` //获取门店子账号角色列表
	},

	// 归属区域模块
	BaoHuo_AttributionArea_URLS: {
		add: `${apiPrefix}/area/add`,
		query: `${apiPrefix}/area/query`,
		update: `${apiPrefix}/area/update`,
		deleteTableRows: `${apiPrefix}/area/delete`
	},

	// 学习资料
	BaoHuo_Learning_URLS: {
		add: `${apiPrefix}/materials/add`,
		find: `${apiPrefix}/materials/find`,
		update: `${apiPrefix}/materials/update`,
		view: `${apiPrefix}/materials/view`,
		delete: `${apiPrefix}/materials/delete`,
		isUp: `${apiPrefix}/materials/isUp`,
		recommend: `${apiPrefix}/materials/toRecommend`,
		sendByRole: `${apiPrefix}/materials/sendByRole`, //立即推送
		sendByTime: `${apiPrefix}/materials/send`, //根据时间推送
		visibleRoleIds: `${apiPrefix}/materials/visibleRoleIds`, //查看学习资料可见性

		getUserVisitLists: `${apiPrefix}/materials/pageCustomer`, //学习资料 用户访问 已读 未读列表
		warnNoReadDdPush: `${apiPrefix}/materials/sendMaterialsCustomer` //学习资料 用户未读 钉钉推送提醒
	},

	// 考试数据统计模块
	BaoHuo_TestStatistics_URLS: {
		query: `${apiPrefix}/settings/joinRate`, //查询列表
		testJoinQuery: `${apiPrefix}/settings/joinRate`, //参与率列表
		exportTestJoin: `${apiPrefix}/statistics/exportJoinTestStatistics`, //店铺参与率列表导出
		testPassQuery: `${apiPrefix}/statistics/testPassQuery`, //通过率列表
		exportTestPassQuery: `${apiPrefix}/statistics/exportTestPassQuery`, //店铺通过率列表导出
		detail: `${apiPrefix}/detail` //查询某个维度下的店铺参与详情
	},
	BaoHuo_TestStatisticsDetail_URLS: {
		// 考试数据统计情况详情
		query: `${apiPrefix}/area/query`, //查询列表
		unJoinPersonnel: `${apiPrefix}/settings/unJoinPersonnel`, //老板、店长、店员、店员未参与详情
		unShopJoin: `${apiPrefix}/settings/unShopJoin`, //店铺未参与详情

		exportUnEmployeeJoin: `${apiPrefix}/statistics/exportUnEmployeeJoin`, //店员未参与详情导出
		exportUnManagerJoin: `${apiPrefix}/statistics/exportUnManagerJoin`, //店长未参与详情导出
		exportUnBossJoin: `${apiPrefix}/statistics/exportUnBossJoin`, //老板未参与详情导出
		exportUnShopJoin: `${apiPrefix}/statistics/exportUnShopJoin` //店铺未参与详情导出
	},
	// 供应商模块
	BaoHuo_Supplier_URLS: {
		add: `${apiPrefix}/procurement/supplier/add`,
		find: `${apiPrefix}/procurement/supplier/find`,
		update: `${apiPrefix}/procurement/supplier/update`,
		detail: `${apiPrefix}/procurement/supplier/detail`,
		supplierInput: `${apiPrefix}/procurement/supplier/import`,
		exportData: `${apiPrefix}/procurement/supplier/exportSupplier`,
		resubmitSupplier: `${apiPrefix}/procurement/supplier/resubmitSupplier`
	},

	// 采购价格模块
	BaoHuo_PurchasePrice_URLS: {
		add: `${apiPrefix}/procurement/price/add`,
		find: `${apiPrefix}/procurement/price/find`,
		update: `${apiPrefix}/procurement/price/update`,
		detail: `${apiPrefix}/procurement/price/detail`,
		detailBySupplier: `${apiPrefix}/procurement/price/detailBySupplier`,
		purchasePriceInput: `${apiPrefix}/procurement/price/import`,
		exportData: `${apiPrefix}/procurement/price/exportProcurementPrice`,
		resubmitProcurementPrice: `${apiPrefix}/procurement/price/resubmitProcurementPrice`
	},

	// 采购订单模块
	BaoHuo_PurchaseOrder_URLS: {
		add: `${apiPrefix}/procurement/order/add`,
		find: `${apiPrefix}/procurement/order/find`,
		update: `${apiPrefix}/procurement/order/update`,
		detail: `${apiPrefix}/procurement/order/detail`,
		purchaseOrderInput: `${apiPrefix}/procurement/order/import`,
		exportData: `${apiPrefix}/procurement/order/exportProcurementOrder`,
		resubmitProcurementOrder: `${apiPrefix}/procurement/order/resubmitProcurementOrder`,
		stopProcurementOrder: `${apiPrefix}/procurement/order/stopProcurementOrder`,
		findProcurementPrice: `${apiPrefix}/procurement/order/findProcurementPrice`
	},

	// 入库确认单
	BaoHuo_InBound_URLS: {
		find: `${apiPrefix}/bill/confirm/in/query`,
		documentType: `${apiPrefix}/bill/findBillType`,
		inBoundType: `${apiPrefix}/bill/confirm/in/getInConfirmBillType`,
		detail: `${apiPrefix}/bill/confirm/in/view`,
		add: `${apiPrefix}/bill/confirm/in/save`,
		export: `${apiPrefix}/bill/confirm/in/export`,
		import: `${apiPrefix}/bill/confirm/in/import`
	},

	// 出库确认单
	BaoHuo_OutBound_URLS: {
		find: `${apiPrefix}/stockOutConfirmOrder/find`,
		documentType: `${apiPrefix}/stockOutConfirmOrder/findBillType`,
		detail: `${apiPrefix}/stockOutConfirmOrder/detail`,
		add: `${apiPrefix}/stockOutConfirmOrder/add`,
		export: `${apiPrefix}/stockOutConfirmOrder/exportStockOutConfirmOrder`,
		import: `${apiPrefix}/stockOutConfirmOrder/import`
	},

	// 库存转移
	BaoHuo_BoundTransfer_URLS: {
		find: `${apiPrefix}/stockConvert/find`,
		add: `${apiPrefix}/stockConvert/add`,
		status: `${apiPrefix}/stockConvert/findBillType`
	},

	// 其他出入库申请管理
	BaoHuo_OtherInventoryApply_URLS: {
		find: `${apiPrefix}/bill/otr/apply/out/query`,
		detail: `${apiPrefix}/bill/otr/apply/out/view`,
		add: `${apiPrefix}/bill/otr/apply/out/save`,
		update: `${apiPrefix}/bill/otr/apply/out/modify`,
		resubmitOtherInventor: `${apiPrefix}/bill/otr/apply/out/sync`,
		stopOtherInventor: `${apiPrefix}/bill/otr/apply/out/cancel`,
		otherInventoryApplyImport: `${apiPrefix}/bill/otr/apply/out/import`,
		otherInventoryApplyExport: `${apiPrefix}/bill/otr/apply/out/export`
	},

	// 入库单创建
	BaoHuo_InboundOrder_URLS: {
		getProductSpec: `${apiPrefix}/bill/apply/in/getBillStatus`
	},
	// 销售价格管理
	BaoHuo_SalePrice_URLS: {
		find: `${apiPrefix}/sell/find`,
		import: `${apiPrefix}/sell/import`,
		update: `${apiPrefix}/sell/update`,
		confirmImport: `${apiPrefix}/sell/confirmImport`
	},
	// 库存消耗管理
	BaoHuo_InventoryConsum_URLS: {
		find: `${apiPrefix}/stock/find`,
		exportFile: `${apiPrefix}/sell/export`,
		stockFind: `${apiPrefix}/stock/stockQuery`, // 库存查询
		downLoadData: `${apiPrefix}/stock/export` //数据导出
	},
	// 采购单据
	BaoHuo_storeInvOrder_URLS: {
		detailSave: `${apiPrefix}/order/cart/updateOrderCartActualNum`
	},
	// 门店库存
	BaoHuo_StoreInventory_URLS: {
		findShop: `${apiPrefix}/shop/findBase`, // 查找店铺
		find: `${apiPrefix}/shopInventory/query`, // 查找店铺下库存
		queryExpendNumber: `${apiPrefix}/shopInventory/queryExpendNumber` // 理论消耗分页查询
	},
	// 门店库存
	BaoHuo_InventorySetting_URLS: {
		addTemplate: `${apiPrefix}/inventory/addTemplate`, // 添加盘点设置
		deleteTemplate: `${apiPrefix}/inventory/deleteTemplate`, // 删除盘点设置
		deleteCategory: `${apiPrefix}/inventory/deleteCategory`, // 删除盘点类目
		detailTemplate: `${apiPrefix}/inventory/detailTemplate`, // 盘点设置详情查看
		findListTemplate: `${apiPrefix}/inventory/findListTemplate`, // 盘点设置列表
		saveCategoryAndProduct: `${apiPrefix}/inventory/saveCategoryAndProduct`, // 保存类目商品
		saveUpdateCategory: `${apiPrefix}/inventory/saveUpdateCategory`, // 新增或修改商品类目
		updateTemplate: `${apiPrefix}/inventory/updateTemplate`, // 更新盘点模板
		viewCategoriesProducts: `${apiPrefix}/inventory/viewCategoriesProducts` // 查看盘点类目商品列表
	},
	BaoHuo_StoreCheck_URLS: {
		shopsLists: `${apiPrefix}/shop/findBase`, //店铺查询列表
		find: `${apiPrefix}/InventoryBill/query`, // 盘点库存列表
		queryDetail: `${apiPrefix}/InventoryBill/queryDetail`, // 盘点单详情分页查询
		queryPLDetail: `${apiPrefix}/InventoryBill/queryProfitLossDetail` // 盘亏盘盈单详情分页查询
	},
	// 饮品分类
	BaoHuo_DrinkType_URLS: {
		findDrinkType: `${apiPrefix}/bom/clazz/listClazz`, //获取分类列表
		addDrinkType: `${apiPrefix}/bom/clazz/addClazz`, //添加分类
		updateDrinkType: `${apiPrefix}/bom/clazz/updateClazz`, //修改分类
		sortDrinkType: `${apiPrefix}/bom/clazz/clazzSort`, //分类排序
		updateDrinkTypeStatus: `${apiPrefix}/bom/clazz/updateClazzTypeById` //分类状态修改
	},
	// 饮品列表
	BaoHuo_DrinkList_URLS: {
		find: `${apiPrefix}/bom/drink/pageDrink`, //获取饮品列表
		add: `${apiPrefix}/bom/drink/addDrink`, //添加饮品
		update: `${apiPrefix}/bom/drink/updateDrink`, //更新饮品
		remove: `${apiPrefix}/bom/drink/removeDrink`, //删除饮品
		status: `${apiPrefix}/bom/drink/updateDrinkStatus`, //禁用启用饮品饮品
		detail: `${apiPrefix}/bom/drink/getDrinkInfo`, //获取饮品基本信息
		initConfig: `${apiPrefix}/bom/drink/initAttrKeyValue` //新增和修改页面初始化属性值
	},
	// 成本卡
	BaoHuo_CostCard_URLS: {
		findById: `${apiPrefix}/bom/costCard/findById`, // 根据饮品Id查找成本卡
		findCostCard: `${apiPrefix}/bom/costCard/findCostCardVos`, // 查找成本卡
		deleteCostCard: `${apiPrefix}/bom/costCard/delete`, // 删除成本卡
		findRage: `${apiPrefix}/bom/costCard/findRangeByCardId`, // 查找设置范围
		findDrinkSpecLists: `${apiPrefix}/bom/costCard/getDrinkSpecList`, // 查找饮品规格下拉列表
		findDrinkTempLists: `${apiPrefix}/bom/costCard/getMethodSpecList`, // 查找饮品温度下拉列表
		findDrinkStatusLists: `${apiPrefix}/bom/costCard/getStatusList`, // 查找饮品下拉状态栏
		findDrinkTypeLists: `${apiPrefix}/bom/costCard/getTypeList`, // 查找饮品类型下拉列表
		modify: `${apiPrefix}/bom/costCard/modify`, // 修改成本卡
		save: `${apiPrefix}/bom/costCard/save`, // 新增成本卡
		saveFood: `${apiPrefix}/bom/costCard/saveDetails`, // 保存成品卡品项设置
		saveRange: `${apiPrefix}/bom/costCard/saveRange`, // 保存成本卡范围
		findDrink: `${apiPrefix}/bom/drink/listDrinkAll`,
		findDrinkLists: `${apiPrefix}/bom/clazz/listClazzByName`, // 查找饮品和饮品下的所有方法
		importCostCard: `${apiPrefix}/bom/costCard/importPreview`,
		exportCostCard: `${apiPrefix}/bom/costCard/download`,
		confirmImportCostCard: `${apiPrefix}/bom/costCard/confirmImport`,
		findLineByName: `${apiPrefix}/line/findByName`
	},

	//课程分类
	BaoHuo_CourseClassify_URLS: {
		add: `${apiPrefix}/courseClassify/add`,
		deleteItem: `${apiPrefix}/courseClassify/delete`,
		find: `${apiPrefix}/courseClassify/query`,
		update: `${apiPrefix}/courseClassify/update`
	},

	//课程
	BaoHuo_Course_URLS: {
		add: `${apiPrefix}/course/add`,
		deleteItem: `${apiPrefix}/course/delete`,
		find: `${apiPrefix}/course/find`,
		update: `${apiPrefix}/course/update`,
		view: `${apiPrefix}/course/view`
	},

	BaoHuo_CourseSignUp_URLS: {
		//B端课程报名
		detail: `${apiPrefix}/signUp/detail`, //get
		find: `${apiPrefix}/signUp/find`, //post
		onCourse: `${apiPrefix}/signUp/onCourse`, //get
		passCourse: `${apiPrefix}/signUp/passCourse`, //post
		statistical: `${apiPrefix}/signUp/statistical`, //post
		remind: `${apiPrefix}/signUp/remind` //get
	},

	BaoHuo_CourseProgress_URLS: {
		query: `${apiPrefix}/courseProgress/progress`,
		remind: `${apiPrefix}/courseProgress/remind`
	},

	BaoHuo_Task_URLS: {
		add: `${apiPrefix}/task/add`,
		findByPage: `${apiPrefix}/task/findByPage`,
		getTaskDetail: `${apiPrefix}/task/getTaskDetail`,
		getTaskInfo: `${apiPrefix}/task/getTaskInfo`,
		taskReminder: `${apiPrefix}/task/taskReminder`,
		update: `${apiPrefix}/task/update`,
		updateTaskStatus: `${apiPrefix}/task/updateTaskStatus`,
		findShopListByIdsVo: `${apiPrefix}/task/findShopListByIdsVo`,
		taskMgmtQuery: `${apiPrefix}/taskManage/findByPage`,
		taskMgmtDetail: `${apiPrefix}/taskManage/findShopTaskDetail`,
		taskMgmtApproval: `${apiPrefix}/taskManage/shopTaskApproval`,
		taskUpload: `${apiPrefix}/taskManage/upload`
	},

	WaiMai_Classify_URLS: {
		find: `${takeawayApiPrefix}/classify/findClassify`,
		save: `${takeawayApiPrefix}/classify/saveClassify`,
		upload: `${takeawayApiPrefix}/picture/upload`,
		uploadBatch: `${takeawayApiPrefix}/picture/uploadBatch`,
		pictureFindByPage: `${takeawayApiPrefix}/picture/findByPage`,
		syncPicture: `${takeawayApiPrefix}/picture/syncPicture`,
		pictureType: `${takeawayApiPrefix}/picture/picTypeList`,
		exportGoods: `${takeawayApiPrefix}/food/downloadFood`,
		saveMenuImportData: `${takeawayApiPrefix}/menu/confirmImportMenuFood`
	},

	WaiMai_menuHistory_URLS: {
		find: `${takeawayApiPrefix}/menuHistory/findList`,
		syncMenu: `${takeawayApiPrefix}/api/syncMenu`
	},

	WaiMai_menuShop_URLS: {
		menuShopFind: `${takeawayApiPrefix}/menuShop/findMenuShopByPage`
	},

	// 外卖中的公用app
	WaiMai_AppCommon_URLS: {
		getChannelList: `${takeawayApiPrefix}/channel/getList`,
		getPushList: `${takeawayApiPrefix}/channel/getPushList`,
		getSyncStatusList: `${takeawayApiPrefix}/picture/syncStatusList`,
		getMenuList: `${takeawayApiPrefix}/menu/findMenuList`,
		getOrderFlow: `${takeawayApiPrefix}/order/getOrderFlow`
	},

	// 集团菜单
	GroupDishes: {
		getDishes: `${takeawayApiPrefix}/food/findFood`,
		upOrDown: `${takeawayApiPrefix}/food/batchUpOrDown`,
		getClassify: `${takeawayApiPrefix}/food/findClassify`,
		addMenu: `${takeawayApiPrefix}/menu/addMenu`,
		saveClassifySort: `${takeawayApiPrefix}/classify/saveClassifySort`
	},

	// 生效与待生效菜单
	MenuDishes: {
		correctData: `${takeawayApiPrefix}/menu/fixMenuClassify`,
		getDishes: `${takeawayApiPrefix}/menu/findMenuDetailByPage`,
		upOrDown: `${takeawayApiPrefix}/menuFood/batchUpOrDown`,
		dishesList: `${takeawayApiPrefix}/menu/findMenuList`,
		channelList: `${takeawayApiPrefix}/channel/getList`,
		newDishesLists: `${takeawayApiPrefix}/menuFood/findMenuFood`, // 新增菜品查询
		addNewDishes: `${takeawayApiPrefix}/menuFood/addMenuFood`,
		addImportDishes: `${takeawayApiPrefix}/menuFood/findImportFood`,
		getClassify: `${takeawayApiPrefix}/menu/findMenuClassify`,
		getCount: `${takeawayApiPrefix}/menu/findMenuCount`,
		channeldEffectCount: `${takeawayApiPrefix}/menu/countValidShop`,
		syncFindShop: `${takeawayApiPrefix}/api/findShopAndFood`,
		submitSyncShop: `${takeawayApiPrefix}/api/syncMenu`,
		syncActiveShop: `${takeawayApiPrefix}/menuShop/findShopByMenu`,
		syncDishesNumber: `${takeawayApiPrefix}/menu/countValidFood`,
		findMenuOnlineDetailByPage: `${takeawayApiPrefix}/menu/findMenuOnlineDetailByPage`, //线上菜单详情
		saveClassifySort: `${takeawayApiPrefix}/menuClassify/saveMenuClassifySort`,
		syncClassify: `${takeawayApiPrefix}/api/syncClassify`,
		batchUpdateSpecPrice: `${takeawayApiPrefix}/spec/batchUpdateSpecPrice`,
		batchDeleteSpec: `${takeawayApiPrefix}/api/delSpec`
	},

	// 新增、编辑菜品
	OptionDishes: {
		getClassify: `${takeawayApiPrefix}/classify/getClassify`,
		saveOrEdit: `${takeawayApiPrefix}/food/saveOrUpdate`,
		effectSaveOrEdit: `${takeawayApiPrefix}/menuFood/updateMenuFood`,
		dishesDetail: `${takeawayApiPrefix}/food/detail`,
		effectDishesDetail: `${takeawayApiPrefix}/menuFood/detail`,
		judgeDishesExist: `${takeawayApiPrefix}/food/findByName`,
		getSpecs: `${takeawayApiPrefix}/spec/findSpec`,
		isNameExits: `${takeawayApiPrefix}/menuFood/findByName`,
		isSpecNameExits: `${takeawayApiPrefix}/spec/findByName`,
		getMaterial: `${takeawayApiPrefix}/ele/materialTree`
	},

	// 外卖订单列表
	WaiMai_order_URLS: {
		findOrder: `${takeawayApiPrefix}/order/findOrderByPage`,
		detail: `${takeawayApiPrefix}/order/detail`,
		findOrderRetry: `${takeawayApiPrefix}/order/findOrderRetryLogByPage`,
		updateLogStatus: `${takeawayApiPrefix}/order/updateLogStatus`
	},
	// 外卖店铺装修 品牌故事
	BranchStory_URLS: {
		query: `${takeawayApiPrefix}/brandStory/findBrandStoryByPage`,
		getFailBranchStoryNum: `${takeawayApiPrefix}/brandStory/selectBrandStoryCountVoByFailure`,
		lists: `${takeawayApiPrefix}/lists`,
		detail: `${takeawayApiPrefix}/detail`,
		deleteItems: `${takeawayApiPrefix}/brandStory/deleteBrandStory`
	},
	BranchStoryDetail_URLS: {
		detail: `${takeawayApiPrefix}/brandStory/findBrandStoryBaseById`, //某一个品牌故事的详情
		queryBindingShops: `${takeawayApiPrefix}/brandStory/findBrandStoryShopByPage`, //查看品牌故事绑定的门店列表
		// cancelRelationShip: `${takeawayApiPrefix}/cancelRelationShip` //取消品牌故事和门店的绑定关系
		cancelRelationShip: `${takeawayApiPrefix}/brandStory/deleteBrandStoryByShop
		` //取消品牌故事和门店的绑定关系
	},
	BranchStoryAddOrEdit_URLS: {
		detail: `${takeawayApiPrefix}/brandStory/findBrandStoryById`, //获取品牌故事详情
		queryBindShopByPage: `${takeawayApiPrefix}/brandStory/findBrandStoryShopByPage`, //查询品牌绑定的店铺列表
		queryShop: `${takeawayApiPrefix}/api/findPoiCodeVo`, //查找店铺列表
		exportShopCodes: `${takeawayApiPrefix}/exportShopCodes`, //导入店铺编码
		uploadImg: `${takeawayApiPrefix}/brandStory/uploadPicture`, //上传品牌故事图片
		uploadVideo: `${takeawayApiPrefix}/brandStory/uploadVideo`, //上传品牌故事视频
		addOrUpdate: `${takeawayApiPrefix}/brandStory/insertOrUpdate` //新增或更新品牌故事
	},

	// 店铺装修 - 招牌故事
	TakeAwayDecorateSignBoard_URLS: {
		singleShopCancel: `${takeawayApiPrefix}/signage/cancellationShopSignage`, // 单个店铺作废
		signBoardCancel: `${takeawayApiPrefix}/signage/cancellationSignage`, // 删除整个招牌
		findSignBoard: `${takeawayApiPrefix}/signage/findByPage`, // 查询生效或失败的招牌
		signBoardDetail: `${takeawayApiPrefix}/signage/findBySignageId`, // 根据id查找招牌详情
		signBoardFailCount: `${takeawayApiPrefix}/signage/getSignageInfo`, // 查找失败的招牌个数
		optionSignBoard: `${takeawayApiPrefix}/signage/insertOrUpdate`, // 新增或编辑招牌
		signBoardBindShop: `${takeawayApiPrefix}/signage/findShopBySignageId`, // 绑定店铺
		signOptionalShop: `${takeawayApiPrefix}/api/findUnbindSignageShop` // 可选店铺
	},

	TakeAwayDecorate_BossRecommend_URLS: {
		findBossRecommendShop: `${takeawayApiPrefix}/api/findBossRecommendShop`, //查询老板推荐可选店铺
		findByPage: `${takeawayApiPrefix}/bossRecommend/findByPage`, //橱窗列表查询
		getRecommendDetail: `${takeawayApiPrefix}/bossRecommend/getRecommendDetail`, //查询橱窗详情
		getRecommendInfo: `${takeawayApiPrefix}/bossRecommend/getRecommendInfo`, //查询橱窗状态
		getRecommendType: `${takeawayApiPrefix}/bossRecommend/getRecommendType`, //查询开启类型
		saveBossRecommend: `${takeawayApiPrefix}/bossRecommend/saveBossRecommend`, //橱窗新增或修改
		saveBossRecommendType: `${takeawayApiPrefix}/bossRecommend/saveBossRecommendType` //关闭店铺推荐
	},
	// 店铺装修 - 海报
	TakeAwayDecoratePoster_URLS: {
		findByPage: `${takeawayApiPrefix}/poster/findByPage`, //门店海报分页查询
		invalidPoster: `${takeawayApiPrefix}/poster/invalidPoster`, //作废海报
		detail: `${takeawayApiPrefix}/poster/getPosterDetail`, //查询海报详情
		savePoster: `${takeawayApiPrefix}/poster/saveOrUpdatePoster`, //创建门店海报
		findPosterShop: `${takeawayApiPrefix}/api/findPosterShop`, //查询门店海报可选店铺
		findMenuOnlineDetailByPage: `${takeawayApiPrefix}/menu/findMenuOnlineDetailByPage`, //线上菜单详情
		findSyncPosterShops: `${takeawayApiPrefix}/poster/findSyncPosterShops`, //查询生效或失效店铺
		invalidShopPoster: `${takeawayApiPrefix}/poster/invalidShopPoster`, //失效门店海报
		selectSycnCount: `${takeawayApiPrefix}/poster/selectSycnCount` //查询门店海报同步数量
	},

	// 合同 api配置
	...contractApiUrls,

	BaoHuo_OrderEval_URLS: {
		find: `${apiPrefix}/orderComment/page`
	},
	BaoHuo_FormStats_URLS: {
		listLineLeader: `${apiPrefix}/orderComment/listLineLeader`, // 获取路线满意度排行
		getSatisfaction: `${apiPrefix}/orderComment/getSatisfaction`, // 获取评论满意度统计
		getSatisfactionWeek: `${apiPrefix}/orderComment/getSatisfactionWeek`, // 获取自然周满意度排行
		getDriverSatisfaction: `${apiPrefix}/orderComment/getDriverSatisfaction`, // 获取司机满意度排行
		findAllOrderCommentStatisticsList: `${apiPrefix}/orderCommentStatistics/findAllOrderCommentStatisticsList` // 获取区域满意度
	},
	BaoHuo_FormStatsDetail_URLS: {
		find: `${apiPrefix}/orderCommentStatistics/findOrderCommentCountByPage`,
		headCol: `${apiPrefix}/orderCommentStatistics/findOrderCommentGoodEnumList`,
		headSecondCol: `${apiPrefix}/orderCommentStatistics/findOrderCommentNoGoodEnumList`
	},
	BaoHuo_FormStatsPersonal_URLS: {
		statList: `${apiPrefix}/orderCommentStatistics/findOrderCommentStatisticsList`,
		statTbList: `${apiPrefix}/orderCommentStatistics/findWholeOrderStatisticsList`
	}
}
