// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "来懂的博客",
    age: 18,
    students: [{
      id: 10,
      name: "张三",
      age: "12"
    },
    {
      id: 13,
      name: "李四",
      age: "14"
    },
    {
      id: 14,
      name: "王五",
      age: "15"
    },
    {
      id: 15,
      name: "小刘",
      age: "25"
    }
    ],
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
    wx.request({
      url: 'https://www.3twork.com/home/content/category/nav',
      success: (res) => {
        console.log(res.data.data)
        const data = res.data.data;
        this.setData({
          nav: data
        })
      }
    })
  }

})