<template>
  <div class="home-swiper">
    <el-carousel trigger="click" height="110px" indicator-position="outside">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="" >
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data(){
    return {
      list: [
        require('@/assets/images/home/show/01.jpg'),
        require('@/assets/images/home/show/02.jpg'),
        require('@/assets/images/home/show/03.jpg'),
        require('@/assets/images/home/show/04.jpg'),
        require('@/assets/images/home/show/05.jpg'),
      ]
    }
  }
}
</script>

<style scoped>
  .home-swiper{
    height: 130px;
  }
  .home-swiper img {
    width: 100%;
  }
</style>