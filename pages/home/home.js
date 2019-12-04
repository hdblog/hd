// pages/home/home.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')

import {
  getMultiData,
  getProducts
} from '../../service/home.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {
      "pop": { page: 1, list: [] },
      "new": { page: 1, list: [] },
      "sell": { page: 1, list: [] }
    },
    banners: [],
    recommends: [],
    hot: [],
    tabs: ["推荐", "最新", "热门"],
    currentType: "pop",
    pageSize:4
  },

  //载入数据 
  onLoad() {
    this._getData()
  },
  //-----------------事件监听函数------------------------
  //点击tab-control 推荐 最新 热门
  handleTabClick(event) {
    //当前类型
    let currentType = '';
    let params = {
      'pageSize': this.data.pageSize
    };
    
    switch (event.detail.index) {
      case 0:
        currentType = 'pop'
        params.categoryId = 78981
        break;
      case 1:
        currentType = 'new'
        params.categoryId = 78980
        break;
      case 2:
        currentType = 'sell'
        params.categoryId = 78979
        break;
    }
    this.setData({
       currentType:currentType
    })
   this._getProducts(currentType, params)
  },
  //-----------------网络请求函数------------------------
  _getData(){
    //轮播图，以及轮播图下商品
    this._getMultidata()
    //获取热销产品
    this._getHot()
    //tab默认数据
    this._getProducts('pop', {
      'page': 0,
      'categoryId': 78980,
      'pageSize': this.data.pageSize
    })
    this._getProducts('new', {
      'page': 0,
      'categoryId': 78979,
      'pageSize': this.data.pageSize
    })
    this._getProducts('sell', {
      'page': 0,
      'categoryId': 78981,
      'pageSize': this.data.pageSize
    })
  },
  //banner
  _getMultidata() {
    getMultiData().then(res => {
      if (res.code == 0) {
        const datas = res.data;
        const banners = [];
        const recommends = [];
        let i = 1;
        for (var key in datas) {
          switch (datas[key].type) {
            case 'banner':
              banners.push(datas[key]);
              break;
            case 'recommend':
              if (i < 5) {
                recommends.push(datas[key]);
              }
              i++;
              break;
          }
        }
        this.setData({
          banners: banners,
          recommends: recommends
        })
      }
    })
  },
  //获取热销
  _getHot() {
    getProducts({
      'categoryId': 78979
    }).then(res => {
      this.setData({
        hot: res.data
      })
    })
  },
  //获取商品
  _getProducts(type, params) {

    const page = this.data.goods[type].page;
    params.page = page;
    getProducts(params).then(res => {
    
      const list = res.data;
    
     const typeKey=`goods.${type}.list`

      this.setData({
        [typeKey]: list
      })
    })
  },
})