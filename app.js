const WXAPI = require('apifm-wxapi')
const CONFIG = require('config.js')

const TOKEN = 'token';
const api_url = "https://api.it120.cc/laidong/";

App({
  globaData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    // console.log('小程序初始化完成！');

    const token = wx.getStorageSync(TOKEN)

    if (token && token.length !== 0) {
      //已经有token 验证token是否过期
     //  this.check_token(token)
    } else {
      //没有token 登录获取token
       // this.login()
    }



    /* WXAPI.goodsCategory().then(res => {
      console.log('请在控制台看打印出来的数据：', res)
    })
   wx.getUserInfo({
      success: function(res) {
        console.log(res);
      }
    })*/
    wx.getAccountInfoSync({
      success: function(res) {
        //    console.log(res)
      }
    })
  },
  login() {
    console.log('执行了登录操作');
    wx.login({
      success: (res) => {
        const code = res.code;
        //将code发送服务器
        wx.request({
          url: api_url + '/home/site/test',
          data: {
            code: code
          },
          success: (res) => {
            const token = res.data.token;
            this.globaData.token = res.data.data.openid
            wx.setStorage({
              key: 'token',
              data: this.globaData.token,
            })
          }
        })
      }
    })
  },
  check_token(token) {
    console.log('执行了验证操作！');
      wx.request({
        url: api_url + '/home/site/test',
        header:{
          token
        },
        success :(res)=>{
          console.log(res)
        },
        fail:(err)=>{
          console.log(err)
        }
      })
  }
})