// pages/home/home.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    counter: 0,
    inputShowed: false,
    inputVal: "",
    api_url:"http://47.98.121.11:81"
  },
 // 以下为搜索框事件
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //计数测试
  handleBtnClickAdd() {
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleBtnClickSub() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //载入数据
  onLoad() {
    console.log('onload')
    const _this = this;
    wx.request({
      url: 'http://47.98.121.11:81/home/content/article?catid=10',
      success: function(res) {
        console.log(res.data.data)
        const data = res.data.data.model;
        _this.setData({
          list: data
        })
      }
    })
  }

})