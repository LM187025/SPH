import { reqGetSearchInfo } from '@/api'
// search模块的小仓库
const state = {
    searchList:{}
};

const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};

const actions = {
    // 获取search模块数据
   async getSearchList({commit},params = {}){
    //    当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
    // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit("GETSEARCHLIST",result.data);
        }
    }
};

// 计算属性：在项目当中，为了简化数据而生
// 项目当中getters主要的作用是：简化仓库中的数据而生
// 可以把我们将来在组件当中需要用到的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
    goods
};

export default {
    state,
    mutations,
    actions,
    getters
}