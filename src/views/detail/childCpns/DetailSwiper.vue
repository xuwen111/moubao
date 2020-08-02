<template>
  <div class="detail-swiper">
    <el-carousel trigger="click" height="400px" indicator-position="outside">
      <el-carousel-item v-for="item in topImages" :key="item">
        <img :src="item" alt="" @load="topImageLoad">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    topImageLoad(){
      this.$emit('topImageLoad')
    }
  }
}
</script>

<style scoped>
  .detail-swiper {
    height: 430px;
  }
  img {
    width: 100%;
  }

</style>