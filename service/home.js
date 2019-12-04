import request from './network.js'


export function getMultiData(){
    return request({
      url: '/banner/list'
    })
}

export function getHot() {
  return request({
    url: '/shop/goods/list',
    data: { 'categoryId': 78979}
  })
}