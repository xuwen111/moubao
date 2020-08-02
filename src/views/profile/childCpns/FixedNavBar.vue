<template>
  <div class="fixed-nav-bar">
    <nav-bar>
      <div slot="center" class="center">我是某宝昵称</div>
      <div slot="right" class="right">设置</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'FixedNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .fixed-nav-bar {
    width: 100vw;
    background-color: #fe4601;
    color: #ffffff;
    text-align: center;
    font-size: 15px;
  }
  .center {
    margin-left: 140px;
    margin-right: 80px;
  }
</style>