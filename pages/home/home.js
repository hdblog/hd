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
    banner1: [],
    banner2: []
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
        const a1 = [];
        const a2 = [];
        for (var key in datas) {
          // console.log(datas[key])
          switch (datas[key].type) {
            case 'a1':
              a1[key] = datas[key];
              break;
            case 'a2':
              a2[key] = datas[key];
              break;
          }
        }
        console.log(a1);
        console.log(datas);

        this.setData({
          banner1: a1,
          banner2: a2
        })
      }
    })
  }

})