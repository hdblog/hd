// pages/home/home.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')

import {
  getMultiData,
  getHot
} from '../../service/home.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    hot: [],
    tabs: ['推荐','最新','热门']
  },

  //载入数据
  onLoad() {
    //请求banner轮播图
    /* WXAPI.banners({type:'a1'}).then(res => {
       console.log(res.data)
       if (res.code == 0) {
         this.setData({
           list: res.data
         })
       }
     })*/

    getMultiData().then(res => {
      if (res.code == 0) {
        const datas = res.data;
        const banners = [];
        const recommends = [];
        let i = 1;
        for (var key in datas) {
          // console.log(datas[key])
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

    getHot().then(res => {
      console.log(res.data)
      this.setData({
        hot: res.data
      })
    })
  }

})