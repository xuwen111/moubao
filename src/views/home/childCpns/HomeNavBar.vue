<template>
  <div class="home-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="left" class="left">
        <img class="icon" src="@/assets/images/home/to_scan.png" alt="">
        <div class="text">扫一扫</div>
      </div>
      <span style="margin-top: 15px;" slot="center" class="center" @click="toSearch">
        <el-button class="search" round icon="el-icon-search">散粉定妆粉</el-button>
      </span>
      <div slot="right" class="right">
        <div class="right-s">
          <div class="right-item item1">
            <img src="@/assets/images/home/red_packet.png" alt="">
            <div class="pic">领红包</div>
          </div>
          <div class="right-item">
            <img src="@/assets/images/home/member_code.png" alt="">
            <div class="pic">会员码</div>
          </div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'HomeNavBar',
  components: {
    NavBar
  },
  methods: {
    toSearch(){
      this.$router.push('/tosearch')
    }
  }
}
</script>

<style scoped>
  .home-nav-bar {
    background-color: #fe4601;
    width: 100vw;
    text-align: center;
  }
  .nav-bar {
    display: flex;
  }
  .left {
    margin-left: 10px;
    /* width: 30%; */
  }
  .left .text {
    font-size: 12px;
    color: #fff;
  }
  .home-nav-bar img {
    width: 25px;
    height: 25px;
    margin-top: 3px;
  }
  element-style {
    margin-top: 10px;
  }
  .search {
    height: 30px;
    width: 200px;
    border-radius: 15px;
    border: none;
    text-align: left;
    font-size: 14px;
    margin-left: 5px;
    margin-top: 10px;
  }
  .right {
    width: 120px;
    flex: 1;
  }
  .pic {
    color: #fff;
    font-size: 12px;
  }
  .right-s {
    display: flex;
  }
  .right-item {
    flex: 1;
    width: 80px;
    margin-right: 15px;
  } 
  .item1 img {
    border-radius: 50%;
  }

</style>