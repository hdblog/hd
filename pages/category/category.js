// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

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
  onLoad() {
    console.log('onload')

  }

})