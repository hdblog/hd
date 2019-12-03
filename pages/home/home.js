// pages/home/home.js


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
    api_url: "https://api.it120.cc/laidong/",
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
    const _this = this;
    wx.request({
      url: 'https://api.it120.cc/laidong/' + '/cms/category/list',
      success: function(res) {
        const data = res.data.data;
        _this.setData({
          list: data
        })
      }
    })
  }

})