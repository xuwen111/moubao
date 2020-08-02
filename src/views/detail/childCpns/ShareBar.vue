<template>
  <div class="share-bar">
    <div class="item">复制链接</div>
    <div class="item">发送到微信</div>
    <div class="item">发送到微博</div>
    <div class="item">发送到支付宝</div>
    <div class="item">发送到短信</div>
    <div class="cancel-share" @click="cancelShare">取消</div>
  </div>
</template>

<script>
export default {
  name: 'ShareBar',
  methods: {
    cancelShare(){
      this.$emit("cancelShare")
    }
  }
}
</script>

<style scoped>
.share-bar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  /* height: 100px; */
  background-color: #ffffff;
  z-index: 39;
  text-align: center;
}
.item {
  height: 20px;
  line-height: 20px;
  padding: 10px 0;
  border-bottom: solid 1px #ccc;
}
.item:hover {
  background-color: #f0f0f0;
}
.cancel-share {
  height: 20px;
  line-height: 20px;
  padding: 10px 0;
}

</style>