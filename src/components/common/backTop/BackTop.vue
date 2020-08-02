<template>
  <div class="back-top">
    <img src="@/assets/images/back_top.png" alt="">
    <div class="text">顶部</div>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .back-top {
    width: 38px;
    height: 38px;
    position: fixed;
    bottom: 80px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    text-align: center;
    border: solid 1px #bbb;
    z-index: 9;
  }
  .back-top img {
    margin-top: 2px;
    width: 50%;
  }
  .text {
    font-size: 10px;
    color: #777;
  }
</style>