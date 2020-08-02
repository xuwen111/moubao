<template>
  <div class="nav-bar">
    <div><slot name="left" class="left"></slot></div>
    <div><slot name="center" class="center"></slot></div>
    <div><slot name="right" class="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    height: 50px;
    display: flex;
    align-items: center;
  }
  .left, .right {
    width: 50px;
  }
  .center {
    flex: 1;
  }
</style>