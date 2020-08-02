<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="left" @click="back">
      <div class="icon">
        <img src="@/assets/images/detail/back_active.png" alt="">
      </div>
      <div class="text">商品分类</div>
    </div>

    <div slot="right" class="right">
      <img src="@/assets/images/category/more.png" alt="">
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  },
  methods: {
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    width: 100vw;
  }
  .left {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .left .icon {
    width: 16%;
  }
  .icon img {
    width: 100%;
    margin-top: 4px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .left .text {
    font-size: 17px;
    font-weight: 600;
    color: #666666;
    margin-left: 20px;
  }
  .right img {
    width: 50%;
    margin-right: 15px;
    margin-left: 20px;
  }
</style>
