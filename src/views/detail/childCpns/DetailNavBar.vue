<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="left" >
      <div class="part" @click="back">
        <img src="@/assets/images/detail/back.png" alt="">
      </div>
    </div>

    <div slot="right" class="right">
      <div class="part" @click="toCart">
        <img src="@/assets/images/detail/cart.png" alt="">
      </div>
      <div class="part">
        <img src="@/assets/images/detail/more.png" alt="">
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
  },
  data(){
    return {
      currentIndex: 0,
    }
  },
  methods: {
    //“返回”的点击监听
    back(){
      this.$router.back()
    },
    //“购物车icon”的单击监听
    toCart(){
      this.$router.push('/shopcart')
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .part {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.35);
    padding: 5px;
  }
  .part img {
    width: 100%;
  }
  .left {
    margin-left: 10px;
    margin-right: 220px;
  }
  .right {
    width: 120px;
  }
  .right .part {
    display: inline-block;
    margin-left: 10px;
  }
</style>