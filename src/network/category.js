import {request} from './request'

//获取主要数据
export function getCategory(){
  return request({
    url: '/category'
  })
}

//获取侧边分类栏
export function getSubcategory(maitKey){
  return request ({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
