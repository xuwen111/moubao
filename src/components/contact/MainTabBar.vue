<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor='#fe4601'>
        <div slot="item-icon"><img src="@/assets/images/tabbar/home.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/images/tabbar/home_active.png" alt=""></div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/message" activeColor='#fe4601'>
        <div slot="item-icon"><img src="@/assets/images/tabbar/message.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/images/tabbar/message_active.png" alt=""></div>
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor='#fe4601'>
        <div slot="item-icon"><img src="@/assets/images/tabbar/cart.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/images/tabbar/cart_active.png" alt=""></div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='#fe4601'>
        <div slot="item-icon"><img src="@/assets/images/tabbar/profile.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/images/tabbar/profile_active.png" alt=""></div>
        <div slot="item-text">我的某宝</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/TabBar/TabBar';
import TabBarItem from '../common/TabBar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>