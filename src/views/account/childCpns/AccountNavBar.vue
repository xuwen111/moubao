<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="left" @click="back">
      <div class="icon">
        <img src="@/assets/images/detail/back_active.png" alt="">
      </div>
      <div class="text">确认订单</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'AccountNavBar',
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
    width: 25%;
  }
  .icon img {
    width: 100%;
    margin-top: 4px;
    margin-left: 2px;
  }
  .left .text {
    font-size: 18px;
    color: #555;
  }
</style>