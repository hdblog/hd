// pages/home/childcompents/h-hot/h-hot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hots: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetailsTap: function (e) {
      wx.navigateTo({
        url: "/pages/goods-details/goods-details?id=" + e.currentTarget.dataset.id
      })
    },
  }
})
