module.exports = {
  version: "0.0.1",
  note: '跳转学习',
  baseUrl:'https://api.it120.cc/',
  subDomain: "laidong", // 根据教程 https://www.yuque.com/apifm/doc/qr6l4m 查看你自己的 subDomain
  appid: "wx67e1d2583c0d388b", // 您的小程序的appid，购物单功能需要使用
  shareProfile: '汽车用品商城商品，总有一款适合您', // 首页转发的时候话术
  requireBindMobile: true, // 是否强制绑定手机号码才能使用
  kanjiaRequirePlayAd: true, // 是否必须要观看视频广告后才可以砍价
  timeout:5000
}
/*
根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒；
1、/pages/to-pay-order/index.js 中已添加关闭订单、商家发货后提醒消费者；
2、/pages/order-details/index.js 中已添加用户确认收货后提供用户参与评价；评价后提醒消费者好评奖励积分已到账；
3、请自行修改上面几处的模板消息ID，参数为您自己的变量设置即可。  
*/