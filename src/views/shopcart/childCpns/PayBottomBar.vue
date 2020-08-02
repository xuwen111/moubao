<template>
  <div class="pay-bottom-bar">
    <div class="choose_icon" @click="toggleChooseAll">
      <img src="@/assets/images/shopcart/choose.png" alt="" v-if="isChoosedAll">
      <div v-else class="not-choose"></div>
    </div>
    <div class="text">全选</div>

    <div class="total">
      <div>合计:</div>
      <div class="price">￥{{choosedTotalPrice|priceFilter}}</div>
    </div>

    <div class="pay-btn" @click="payFor">结 算({{choosedLength}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'PayBottomBar',
  computed: {
    ...mapGetters(['isChoosedAll', 'choosedLength', 'choosedTotalPrice']),
  },
  methods: {
    //“全选”的点击监听
    toggleChooseAll(){
      this.$store.commit('toggleChooseAll')
    },
    //"结算"的点击
    payFor(){
      if(this.choosedLength !== 0){
        this.$router.push('/account')
      }else{
        this.$toast.show('没有选中商品，先去逛逛吧', 1500)
      }
    }
  },
  filters: {
    priceFilter(price){
      return parseInt(price) === 0? 0 : parseFloat(price).toFixed(2)
    }
  }

}
</script>

<style scoped>
  .pay-bottom-bar {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 49px;
    display: flex;
    align-items: center;
    box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.05);
  }
  .choose_icon {
    width: 5.5%;
    margin: 2px 3px 0 15px;
  }
  .choose_icon img {
    width: 100%;
  }
  .not-choose {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: solid 1.5px #999;
    border-radius: 50%;
  }
  .text {
    width: 15%;
    color: #777777;
    font-size: 15px;
  }
  .total {
    flex: 1;
    text-align: right;
    margin-right: 15px;
    color: #555555;
  }
  .total div {
    display: inline-block;
  }
  .total .price {
    font-size: 14px;
    color: #fe4601;
  }
  .pay-btn {
    width: 25%;
    background-color: #fe4601;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    margin-right: 10px;
    border-radius: 15px;
  }
</style>