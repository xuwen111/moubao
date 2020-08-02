<template>
  <div class="back-card">
    <div class="info">
      {{info}}条未读消息
    </div>
    <info-bar class="info-bar"/>
  </div>
</template>

<script>
import InfoBar from './InfoBar'

export default {
  name: 'BackCard',
  components: {
    InfoBar
  },
  props: {
    info: {
      type: Number,
      default: ''
    }
  }
}
</script>

<style scoped>
  .back-card {
    width: 100%;
    height: 90px;
    background-color: #fe4601;
    position: absolute;
    margin-bottom: 40px;
  }
  .back-card .info {
    color: #fff;
    font-size: 13.5px;
    margin-left: 15px;
  }
  .info-bar {
    position: relative;
    left: 0;
    top: 25px;
  }
</style>