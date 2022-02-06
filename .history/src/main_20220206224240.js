import Vue from 'vue'
import App from './App.vue'
import router from '@/router'


// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
// 轮播图全局组件Carousel
import Carousel from '@/components/Carousel'
//注册组件： 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

// 引入MockServer.js---mock数据
import '@/mock/mockServe';
// 引入swiper样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

// 引入仓库
import store from '@/store';

// 测试
// import {reqCategoryList} from '@/api/index'
// reqCategoryList()
new Vue({
  render: h => h(App),
//   
  beforeCreate(){

  },
//   注册路由：底下的写法KV一致省略V【router小写的】
// 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
//   注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')