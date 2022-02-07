# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


6)三级联动组件的路由跳转与传递参数
三级联动用户可以点击的：一级分类、二级分类、三级分类、当你点击的时候
Home模块跳转到Search模块，一级会把用户选中的产品（产品的名字、产品的ID）在路由跳转的时候，进行传递。

路由跳转：
声明式导航：router-link
编程式导航：push|replace

三级联动：如果使用声明式导航router-link，可以实现路由的跳转与传递参数。
但是需要注意，出现卡顿现象。

router-link:可以一个组件，当服务器的数据返回之后，循环出很多的router-link组件【创建组件实例的】 1000+

创建组件实例的时候，一瞬间创建1000+很多内存，因此出现了卡顿现象。

7）完成三级联动



复习：
1）商品分类的三级列表由静态变为动态形式【获取服务器数据：解决跨域问题】
2）商品防抖与节流【面试频率很高】
3）路由跳转：声明式导航（router-link）、编程式导航
编程式导航解决三级联动传参跳转问题：自定义属性



四、
1）开发Search模块中的TypeNav商品分类菜单（过渡动画效果）
过渡动画：前提组件|元素务必要有v-if|v-show指令才可以进行过渡动画

2)现在咱们的商品分类三级列表可以进行优化？
在App根组件当中发请求【根组件mounted发请求】执行一次

3）合并params与query参数？

4）开发Home首页当中的ListContainer组件与Floor组件？
但是这里需要知道一件事情：服务器返回的数据（接口）只有商品分类菜单分类数据，对于ListContainer组件与Floor组件数据服务器没有提供的。
mock数据（模拟）：如果你想mock数据，需要用到一个插件mockjs

使用步骤：
1）在项目当中src文件夹中创建mock文件夹
2）第二步准备JSON数据（mock文件夹中创建相应的JSON文件）----格式化一下，别留有空格（跑不起来的）
3)把mock数据需要的图片放置public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动的打包到dist文件夹中】
4)第四步开始mock（虚拟的数据了），通过mockjs模块实现
创建mockServer.js通过mockjs插件实现模拟数据
5)mockServe.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）

5)ListContainer组件开发重点？
安装Swiper插件：最新版本6，安装的是swiper@5
cnpm install --save swiper@5


复习：
1）完成商品分类的三级列表路由跳转一级路由传参（合并参数）
2）完成search模块中对于typeNav使用（过渡动画）
3）对于typeNav请求次数也进行优化
4）swiper插件
使用步骤：
第一步：引入相应的依赖包（swiper.js|swiper.css）
第二步：页面中的结构必须要有
第三步：初始化swiper实例，给轮播图添加动态效果
5）mock数据，通过mockjs模块实现



最完美解决方案，解决轮播图问题
watch + nextTick：数据监听：监听已有数据变化

$nextTick:在下次DOM更新 循环结束之后 执行延迟回调。在修改数据之后 立即使用这个方法，获取更新后的DOM
$nextTick：可以保证在页面中的结构一定是有的，经常和很多插件一起使用【都需要的DOM存在了】

开发floor组件
切记：仓库当中的state的数据格式，你别瞎写、胡写、乱写，数据格式取决于服务器返回的数据
2.1：getFloorListZ这个action在哪里触发，是需要在Home路由组件当中发的，不能在Floor组件内部发action，因为我们需要v-for遍历floor组件

2.2v-for也可以在自定义标签当中使用

2.3组件通信的方式有哪些？面试频率极高
props:用于父子组件通信
自定义事件：@on @emit 可以实现子给父通信
全局事件总线：$bus 全能
pubsub-js：vue当中几乎不用  全能
插槽
vuex

3）把首页当中的轮播图拆分成一个全局的共用组件
切记：以后在开发项目的时候，如果看到某一个组件在很多地方都使用，把它变为全局组件
注册一次，可以在任意地方使用，共用的组件|非路由组件放到components文件夹下面

4)search模块开发？
1：先静态页面 + 静态组件拆分出来
2：发请求（API）
3：vuex（三连环）
4：组件获取仓库数据，动态展示数据

day6

复习：
1）search模块需要的服务器数据，我们已经请求到了，而且存储于vuex仓库当中，而且有一些数组数据【我们已经 通过getters】进行简化
切记：getters为简化数据而生
2）商品列表、平台售卖属性已经动态数据（来自服务器数据）


1)动态开发面包屑的分类名
编程是导航路由跳转【自己眺自己】

2）动态开发面包屑中的关键字
2.1当面包屑中的关键字清除以后，需要让兄弟组件Header组件中的关键字清除
设计组件通信：
props:父子
自定义事件：子父
vuex：万能
插槽：父子
pubsub-js:完成
$bus:全局事件总线

排序操作：
1：综合，2：价格 asc:升序，desc:降序
示例：“1：desc”


1.1问题
order属性的属性值最多有多少写法：
1：asc
1:desc
2:asc
2:desc
1.2考虑的问题
谁应该有类名：通过order属性值当中是包含1（综合）|包含2（价格）

1.3考虑的问题 谁应该有箭头

1.4箭头用什么制作？
阿里图标库

2）很多电商平台为什么需要用分页？
