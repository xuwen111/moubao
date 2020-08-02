<template>
  <div class="bottom-bar">

    <!-- “结算的商品总数、总价” -->
    <div class="total">
      <div class="total-count">共 {{choosedLength}} 件，</div>
      <div class="total-price">
        合计:
        <div class="price-value">￥{{choosedTotalPrice | priceFilter}}</div>
      </div>
    </div>

    <!-- “提交订单”按钮 -->
    <div class="submission">
      提交订单
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'BottomBar',
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(['choosedLength', 'choosedTotalPrice']),
  },
  filters: {
    priceFilter(price){
      return parseInt(price) === 0? 0 : parseFloat(price).toFixed(2)
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 39;
  }
  .total {
    width: 65%;
    text-align: right;
  }
  .total div {
    display: inline-block;
  }
  .total-count {
    font-size: 13px;
    color: #666666;
  }
  .total-price {
    font-size: 13.5px;
  }
  .price-value {
    font-size: 17px;
    color: #fe4601;
  }
  .submission {
    flex: 1;
    margin: 0 10px;
    padding: 13px 0;
    background-color: #fe560a;
    color: #fff;
    text-align: center;
    font-size: 13.5px;
    border-radius: 20px;
  }
</style>