<template>
  <div id="app">
      <Header></Header>
      <!-- ；路由组件出口的地方 -->
      <router-view></router-view>
      <!-- 在Home、Search显示，在登录、注册隐藏 -->
      <!-- 在Home与Search可见的，但是Login|Register不可见 -->
      <!-- 利用路由元信息解决当前问题好处：一行代码就可以解决 -->
      <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
      Header,
      Footer
  },
  mounted(){
    //   派发一个action
  }
}
</script>

<style>

</style>
