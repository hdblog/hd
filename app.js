const WXAPI = require('apifm-wxapi')
const CONFIG = require('config.js')
const AUTH = require('utils/auth')
const TOKEN = 'token';

App({
  globaData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    WXAPI.init(CONFIG.subDomain) // 从根目录的 config.js 文件中读取
    // console.log('小程序初始化完成！');
   // const token = wx.getStorageSync(TOKEN)

  },
  onShow(e){
    // 自动登录
    AUTH.checkHasLogined().then(isLogined => {
      if (!isLogined) {
        AUTH.login()
      }
    })
  },
  globalData: {
    isConnected: true,
    launchOption: undefined,
    vipLevel: 0
  }
})