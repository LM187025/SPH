import { reqGetSearchInfo } from '@/api'
// search模块的小仓库
const state = {};

const mutations = {};

const actions = {
    // 获取search模块数据
   async getSearchList({commit},params={}){
    //    当前这个reqGetS
        let result = await reqGetSearchInfo(params)
    }
};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}