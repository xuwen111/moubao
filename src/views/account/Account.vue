<template>
  <div id="account">
    <account-nav-bar />
    <scroll class="content">
      <account-user />
      <item-card v-for="(item, index) in choosedGoods" :key="index" :itemInfo="item" />
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
import AccountNavBar from './childCpns/AccountNavBar'
import AccountUser from './childCpns/AccountUser'
import BottomBar from './childCpns/BottomBar'
import ItemCard from '../shopcart/childCpns/ItemCard'

import Scroll from '@/components/common/scroll/Scroll';

import {mapGetters} from 'vuex'

export default {
  name: 'Account',
  components: {
    AccountNavBar,
    Scroll,
    AccountUser,
    BottomBar,
    ItemCard
  },
  computed: {
    ...mapGetters(['choosedGoods'])
  }
}
</script>

<style scoped>
  #account {
    width: 100vw;
    height: 100vh;
    background-color: #f0f0f0;
  }
  .content {
    height: calc(100% - 49px - 50px);
    overflow: hidden;
  }
</style>