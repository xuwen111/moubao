<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  .tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
    z-index: 19;
  }
</style>