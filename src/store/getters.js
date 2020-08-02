export default {
  //获取购物车商品列表
  cartList(state){
    return state.cartList
  },
  //购物车内商品总个数
  cartLength(state){
    return state.cartList.length
  },
  //选中的商品列表
  choosedGoods(state){
    return state.cartList.filter(item => item.isChoosed)
  },
  //选中的商品个数
  choosedLength(state){
    return state.cartList.filter(item => item.isChoosed).length
  },
  //选中的商品总价钱
  choosedTotalPrice(state){
    return state.cartList.filter(item => item.isChoosed).reduce((pre, item) => {
      return pre += item.price * item.count
    }, 0)
  },
  //判断是否全选
  isChoosedAll(state){
    if(state.cartList.length === 0){
      return false
    }
    const product = state.cartList.find(item => !item.isChoosed)
    state.isAll = !product
    return state.isAll
  }
}