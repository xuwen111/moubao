<template>
  <div class="line-info">
    <div class="left">
      <slot name="left"><span>left</span></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"><img src="@/assets/images/detail/right.png" alt=""></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineInfo'
}
</script>

<style scoped>
  .line-info {
    width: 100vw;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #aaa;
  }
  .line-info .left {
    flex: 1;
  }
  .line-info .center {
    width: 65%;
    color: #333;
  }
  .line-info .right {
    width: 20%;
  }
  img {
    width: 30%;
    margin-left: 12vw;
  }
  .left {
    margin-left: 10px
  }
</style>