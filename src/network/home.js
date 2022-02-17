import { request } from "./request";

export function getHomedata() {
  return request({
    url: 'goods'
  })
}
// 取得首页数据get
export function getHomeMultidata() {
  return request({
    url: 'goods/getIndexInfo'
  })
}
// 获取商品详情信息的接口post  key:goodsId
export function getHomeCatedata() {
  return request({
    url: 'goods/getCategoryList'
  })
}
// 读取大类数据的接口get
export function getGoodsIDdata() {
  return request({
    url: 'goods/getDetailGoodsInfo  '
  })
}
// 读取小类的数据post key:categoryId
export function getBigCateDdata() {
  return request({
    url: 'goods/getCategoryList  '
  })
}
// 根据类别获取商品列表post key:categorySubId
export function getSmallCateDdata() {
  return request({
    url: 'goods/getCategorySubList  '
  })
}

export function getCatesubIdDdata() {
  return request({
    url: 'goods/getGoodsListByCategorySubID  '
  })
}