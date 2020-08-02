<template>
  <div class="back-card">
    <div class="pro-info">
      <div class="header"><img src="@/assets/images/profile/defaultportrait.png" alt=""></div>
      <div class="username">我是某宝昵称</div>
    </div>

    <div class="tab-lists">
      <div class="tab-item" v-for="(item, index) in list" :key="index">
        <div class="count">{{item.count}}</div>
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackCard',
  data(){
    return {
      list: [
        {name: '收藏夹', count: 38},
        {name: '关注店铺', count: 34},
        {name: '足迹', count: 313},
        {name: '红包卡券', count: 6}
      ]
    }
  }
}
</script>

<style scoped>
  .back-card {
    width: 100%;
    height: 120px;
    background-color: #fe4601;
    color: #fff;
  }
  .back-card .pro-infol {
    font-size: 19px;
  }
  .pro-info {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .header {
    width: 12%;
  }
  .header img {
    width: 100%;
    border-radius: 50%;
    margin-left: 15px;
  }
  .username {
    flex: 1;
    margin-left: 20px;
  }
  .tab-lists {
    width: 100vw;
    display: flex;
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    font-weight: 300px;
  }
  .tab-lists .tab-item {
    width: 25%;
  }
  .count {
    margin-bottom: 2px;
  }
</style>