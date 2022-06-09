import { request } from "./request";

// 取得首页数据get
export function getHomeMultidata() {
  return request({
    method: 'get',
    url: '/goods/getIndexInfo'
  })
}
