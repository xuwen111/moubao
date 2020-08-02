export default {
  //1.-->添加到购物车
  addToCart(state, product){
    const oldProduct = state.cartList.find(item => item.iid === product.iid)
    if(oldProduct){
      oldProduct.count += 1
    }else {
      product.count = 1
      state.cartList.push(product)
    }
    console.log(state.cartList);
  },
  //2.-->增加商品数量
  addCount(state, product){
    // const product = state.cartList.find(item => item.iid === iid)
    product.count += 1
  },
  //3.-->减少商品数量
  submitCount(state, product){
    // const product = state.cartList.find(item => item.iid === iid)
    product.count -= 1
  },
  //4.单个商品的选择状态切换
  toggle(state, product){
    product.isChoosed = !product.isChoosed
  },
  //5.“全选”的切换
  toggleChooseAll(state){
    //选中状态取反
    state.isAll = !state.isAll
    //遍历cartList，更改商品的选中状态
    state.cartList.map(item => {
      return item.isChoosed = state.isAll
    })
  }

}