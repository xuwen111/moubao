<template>
  <div id="shopcart">
    <scroll class="content">
      <cart-nav-bar/>
      <back-card :total="cartLength" />
      <item-card v-for="(item, index) in cartList" :key="index" :itemInfo="item" />
    </scroll>
    <pay-bottom-bar />
  </div>
</template>

<script>
import CartNavBar from './childCpns/CartNavBar'
import BackCard from './childCpns/BackCard'
import ItemCard from './childCpns/ItemCard'
import PayBottomBar from './childCpns/PayBottomBar'

import Scroll from '@/components/common/scroll/Scroll';

import {mapGetters} from 'vuex'

export default {
  name: 'Shopcart',
  components: {
    CartNavBar,
    Scroll,
    BackCard,
    ItemCard,
    PayBottomBar
  },
  data(){
    return {}
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList', 'choosedGoods']),
  }
}
</script>

<style scoped>
  #shopcart {
    width: 100vw;
    height: 100vh;
  }
  .content {
    height: calc(100% - 50px - 49px);
    overflow: hidden;
  }
</style>