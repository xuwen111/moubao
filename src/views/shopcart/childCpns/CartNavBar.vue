<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <div slot="left" class="left">
        <div class="text">购物车</div>
      </div>
      <!-- <span style="margin-top: 15px;" slot="center" class="center">
        <el-button class="search" round icon="el-icon-search">搜索</el-button>
      </span> -->
      <span slot="right" class="right">
        <div class="right-s">
          <div class="right-item">
            <div>管 理</div>
          </div>
        </div>
      </span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .cart-nav-bar {
    background-color: #fe4601;
    width: 100vw;
  }
  .nav-bar {
    display: flex;
  }
  .left {
    margin-left: 15px;
    width: 150px;
  }
  .left .text {
    line-height: 50px;
    font-size: 19px;
    color: #fff;
  }
  .cart-nav-bar img {
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }
  .right {
    flex: 1;
    position: fixed;
    right: 10px;
  }
  .right-s {
    display: flex;
  }
  .right-item {
    flex: 1;
    font-size: 14px;
    color: #fff;
    line-height: 50px;
  } 
</style>