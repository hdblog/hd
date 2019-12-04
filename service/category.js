import request from './network.js'

export function getCategory() {
  return request({
    url: '/shop/goods/category/all'
  })
}

export function getSubcategory() {
  return request({
    url: '/shop/goods/category/all'
  })
}


export function getCategoryDetail() {
  return request({
    url: '/shop/goods/category/all'
  })
}

export function getProducts(data) {
  return request({
    url: '/shop/goods/list',
    data: data
  })
}