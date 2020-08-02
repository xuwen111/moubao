<template>
  <div class="message-nav-bar">
    <nav-bar>
      <div slot="left" class="left">
        <div class="text">消息</div>
      </div>
      <span style="margin-top: 15px;" slot="center" class="center">
        <el-button class="search" round icon="el-icon-search">搜索</el-button>
      </span>
      <div slot="right" class="right">
        <div class="right-s">
          <div class="right-item">
            <img src="@/assets/images/message/friends.png" alt="">
          </div>
          <div class="right-item">
            <img src="@/assets/images/message/add.png" alt="">
          </div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'MessageNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .message-nav-bar {
    background-color: #fe4601;
    width: 100vw;
  }
  .nav-bar {
    display: flex;
  }
  .left{
    margin-left: 15px;
    width: 40px;
  }
  .left .text {
    line-height: 50px;
    font-size: 19px;
    color: #fff;
  }
  .message-nav-bar img {
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }
  .search {
    height: 30px;
    width: 200px;
    border-radius: 15px;
    border: none;
    margin: 8px 12px;
    text-align: left;
    font-size: 14px;
  }
  .right {
    flex: 1;
  }
  .right-s {
    display: flex;
    margin-left: 15px;
  }
  .right-item {
    flex: 1;
    margin-right: 15px;
  } 
</style>