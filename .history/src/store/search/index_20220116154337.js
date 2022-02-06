import { reqGetSearchInfo } from '@/api'
// search模块的小仓库
const state = {};

const mutations = {};

const actions = {
    // 获取search模块数据
   async getSearchList({commit},params={}){
    //    当前这个reqGetSearchInfo这个函数在调用
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