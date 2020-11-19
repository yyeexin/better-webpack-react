const contractApiPrefix = "/contractApi";

module.exports = {
    // 合同
    Contract_expired_URLS: {
        find: `${contractApiPrefix}/overdueContract/findByPage`,
        renewContract: `${contractApiPrefix}/overdueContract/renewContract`,
    },
    Contract_file_URLS: {
        find: `${contractApiPrefix}/contract/findByPage`,
        transferContract: `${contractApiPrefix}/contract/transferContract`,
        validTransfer: `${contractApiPrefix}/contract/validateTransferState`,
    },
    Contract_home_URLS: {
        findByPage: `${contractApiPrefix}/index/findByPage`,
        findOverdueByPage: `${contractApiPrefix}/index/findOverdueByPage`,
        saveOrUpdateStatus: `${contractApiPrefix}/index/saveOrUpdateStatus`,
        urgencyContract: `${contractApiPrefix}/index/urgencyContract`,
        urgencyContractBatch: `${contractApiPrefix}/index/urgencyContractBatch`,
        pendingContractLists: `${contractApiPrefix}/index/findNoSignByPage`,
    },
    Contract_template_URLS: {
        find: `${contractApiPrefix}/contractTemplate/page`,
        remove: `${contractApiPrefix}/contractTemplate/remove`,
        save: `${contractApiPrefix}/contractTemplate/save`,
    },
    Contract_AppCommon_URLS: {
        getContractDict: `${contractApiPrefix}/dict/findList`,
        signEndContractDownload: `${contractApiPrefix}/contract/signEndContractDownload`,
    },
    Contract_Option_URLS: {
        contractTemplate: `${contractApiPrefix}/contractTemplate/page`,
        contractDetailForm: `${contractApiPrefix}/contract/showContractTemplate`,
        contractDictionary: `${contractApiPrefix}/dict/findList`, // 数据字典
        newContract: `${contractApiPrefix}/contract/newContract`, // 新增合同
        tranforContract: `${contractApiPrefix}/contract/transferContract`, // 转让合同
        contractInfoById: `${contractApiPrefix}/contract/findContractById`, // 获取合同详情
        pullPersonInfo: `${contractApiPrefix}/contract/getSignerInfo`, // 纷享销客拉取客户数据
        importContract: `${contractApiPrefix}/contract/import`, // 根据下载的合同模板填入数据后进行导入合同
        deleteImportedRow: `${contractApiPrefix}/contract/deleteImportedRow`, // 删除导入后的表格的某一行
        batchStartContracts: `${contractApiPrefix}/contract/batchStartContracts`, //批量发起合同
        findWaitingStartContract: `${contractApiPrefix}/contract/findWaitingStartContract`, //根据模板id获取待发起合同
    },
    Contract_BatchImport_URLS: {
        //批量导入
        getContractTemplate: `${contractApiPrefix}/contractTemplate/get`, //合同模板列表
        importContract: `${contractApiPrefix}/contract/upload`, // 根据下载的合同模板填入数据后进行导入合同
        deleteImportedRow: `${contractApiPrefix}/contract/deleteImportedRow`, // 删除导入后的表格的某一行
        confirmBatchImport: `${contractApiPrefix}/contract/buildContracts`, // 确认表格导入结果
    },
    Contract_Confirm_URLS: {
        contractList: `${contractApiPrefix}/contractCustomerConfirm/findByPage`, // 合同信息确认列表
        contractDetail: `${contractApiPrefix}/contractCustomerConfirm/findById`, // 合同信息确认详情
        contractRelate: `${contractApiPrefix}/contract/findConfirmContractsByPage`, // 获取相关的合同
        pushDataToFXXK: `${contractApiPrefix}/contractCustomerConfirm/sychronizeCustomerInfo`, // 推送至纷享销客
        submitConfirm: `${contractApiPrefix}/contractCustomerConfirm/saveOrUpdate`, // 发起信息确认
        getOwnerInfo: `${contractApiPrefix}/contractCustomerConfirm/findCustomerConfirmInfoByPhone`, // 获取纷享销客信息
        sendDingDingMessage: `${contractApiPrefix}/contractCustomerConfirm/sendDingDingMessage`, // 钉钉推送
        getShopAddress: `${contractApiPrefix}/contractCustomerConfirm/findShopAddressByCode`, // 获取店铺地址
        sychronizeAddress: `${contractApiPrefix}/contractCustomerConfirm/sychronizeAddress`, //同步法人地址
    },
    Contract_File_URLS: {
        contractFileList: `${contractApiPrefix}/contract/findFilesByPage`, // 文件管理列表
    },
};
