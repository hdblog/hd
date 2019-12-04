import request from './network.js'


export function getMultiData(){
    return request({
      url: '/banner/list'
    })
}

export function getProducts(data) {
  return request({
    url: '/shop/goods/list',
    data: data
  })
}