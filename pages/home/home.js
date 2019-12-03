// pages/home/home.js
const WXAPI = require('apifm-wxapi')
const CONFIG = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],
    list: [],
    counter: 0,
    inputShowed: false,
    inputVal: "",
    title: '第一次标题'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/view/view?id=20&name=小红&age=22',
    })
  },

  // 以下为搜索框事件
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  //载入数据
  onLoad() {

    WXAPI.cmsCategories().then(res => {
      if (res.code == 0) {
        this.setData({
          list: res.data
        })
      }
    })

  }

})