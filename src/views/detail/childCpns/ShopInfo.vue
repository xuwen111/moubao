<template>
  <div class="shop-info">
    <!-- 1.店铺信息 -->
    <div class="shop-bar">
      <div class="logo">
        <img :src="shopInfo.shopLogo" alt="">
      </div>
      <div class="name">{{shopInfo.name}}</div>
      <div class="btns">
        <div class="all-goods">
          <a :href="shopInfo.allGoodsUrl"><button>全部宝贝</button></a>
        </div>
        <div class="in-shop">
          <button>进店逛逛</button>
        </div>
      </div>
    </div>

    <!-- 2.店铺评价分数 -->
    <div class="shop-score">
      <div class="shop-score-item" v-for="(item, index) in shopInfo.score" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="score">{{item.score}}</div>
        <div class="text high" v-if="item.isBetter">高</div>
        <div class="text low" v-else>低</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shop-info {
    width: 100vw;
  }
  .shop-bar {
    width: 100%;
    padding: 15px 0 10px 0;
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  .shop-bar .logo {
    width: 12%;
  }
  .logo img {
    width: 100%;
  }
  .shop-bar .name {
    flex: 1;
    font-size: 14px;
    margin-left: 8px;
  }
  .shop-bar .btns {
    width: 50%;
    display: flex;
  }
  .btns .all-goods, .btns .in-shop {
    flex: 1;
    height: 20px;
  }
  .btns button {
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 13px;
    font-weight: 300;
  }
  .all-goods button{
    background-color: #fff;
    color: #fe4601;
    border: solid 1px #fe4601;
  }
  .in-shop {
    margin-right: 25px;
  }
  .in-shop button {
    background-color: #fe4601;
    color: #fff;
    border: none;
  }
  .shop-score {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 6px;
    padding-bottom: 15px;
  }
  .shop-score .shop-score-item {
    flex: 1;
    font-size: 13px;
  }
  .name, .score, .text {
    display: inline-block;
    margin-left: 4px;
    color: #999;
  }
  .text {
    background-color: #ddd;
    color: #999;
    padding: 2px;
    border-radius: 50%;
    font-size: 12px;
  }
</style>