// pages/list/list.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateogryId: 0,
    categoryName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      cateogryId: options.categoryId,
      categoryName:options.categoryName
    })

    WXAPI.cmsArticles({categoryId:options.categoryId}).then(res => {
      console.log(res.data)
      if (res.code == 0) {
        this.setData({
          list: res.data
        })
      }
    })

  },
})