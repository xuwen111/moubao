<template>
  <div class="back-card">
    <div class="total">
      共有{{total}}件宝贝
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackCard',
  props: {
    total: {
      type: Number,
      default: ''
    }
  }
}
</script>

<style scoped>
  .back-card {
    width: 100%;
    height: 70px;
    background-color: #fe4601;
  }
  .back-card .total {
    color: #fff;
    font-size: 13px;
    margin-left: 15px;
  }
</style>