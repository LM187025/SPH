// 引入mock模块
import Mock from 'mockjs';
// 把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入]
// webpack默认对外暴露：图片、JSON数据格式
import banner from './banners.json';
import floor from './floors.json'

// mock数据:第一个参数请求地址
Mock.mock()