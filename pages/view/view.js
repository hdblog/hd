// pages/view/view.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    categoryName: ''
  },

  backHome(){
       wx.navigateBack({
         delta:1
       })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      categoryName: options.categoryName
    })


    WXAPI.cmsArticleDetail(options.id).then(res => {
      
      if (res.code == 0) {
        this.setData({
          article: res.data
        })
      }
    })

  },

  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    //1.获取首页页面对象
   const pages= getCurrentPages()
   
   const home=pages[pages.length-2]
   //调用页面对象方法
   home.setData({
     title:'跳回首页了'
   })
  },
})