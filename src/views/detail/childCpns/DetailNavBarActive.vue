<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="left" >
      <div class="part" @click="back">
        <img src="@/assets/images/detail/back_active.png" alt="">
      </div>
    </div>

    <div slot="center" class="center">
      <div v-for="(item, index) in navGuides" :key="index" class="item" 
           @click="changeBar(index)">
        <span :class="{indexActive: index===currentIndex}">{{item}}</span>
      </div>
    </div>

    <div slot="right" class="right">
      <div class="part" @click="toCart">
        <img src="@/assets/images/detail/cart_active.png" alt="">
      </div>
      <div class="part">
        <img src="@/assets/images/detail/more_active.png" alt="">
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBarActive',
  components: {
    NavBar,
  },
  props: {
    navGuides: {
      type: Array,
      default(){
        return []
      }
    },
    navIndex: Number,
  },
  data(){
    return {
      currentIndex: 0,
    }
  },
  methods: {
    //点击“返回”
    back(){
      this.$router.back()
    },
    //点击切换“宝贝、评价、参数】=、推荐”
    changeBar(index){
      this.currentIndex = index
      this.$emit('changeBarItem', index)
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
    background-color: #fff;
    font-size: 13.5px;
    color: #555;
    height: 45px;
  }
  .part {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    padding: 5px;
  }
  .part img {
    width: 100%;
  }
  .left {
    margin-left: 10px;
  }
  .center {
    display: flex;
    width: 220px;
  }
  .center .item {
    flex: 1;
  }
  .item span {
    padding: 0 5px 5px 5px;
  }
  .right {
    width: 120px;
  }
  .right .part {
    display: inline-block;
    margin-left: 10px;
  }
  .indexActive {
    color: #fe4601;
    font-weight: 600;
    border-bottom: solid 2px #fe4601;
  }
</style>