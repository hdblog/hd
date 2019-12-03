// pages/home/home.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')

import {
  getMultiData
} from '../../service/home.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: []
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
        for (var key in datas) {
          // console.log(datas[key])
          switch (datas[key].type) {
            case 'banner':
              banners.push(datas[key]);
              break;
            case 'recommend':
              recommends.push(datas[key]);
              break;
          }
        }

     console.log(recommends)

        this.setData({
          banners: banners,
          recommends: recommends
        })
      }
    })
  }

})