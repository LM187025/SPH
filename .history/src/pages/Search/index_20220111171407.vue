<template>
  <div>
      我是搜索页面
      <br/>
      params:~~~~~~{{$route.params.keyword}}========{{a}}
      <br/>
      keyword:~~~~~~{{$route.query.keyword}}========{{k}}
  </div>
</template>

<script>
export default {
    name:'Search',
    // 路由组件可以传递props
    // props:['keyword','a','b','k']

}
</script>

<style>

</style>