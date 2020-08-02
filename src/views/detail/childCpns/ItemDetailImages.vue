<template>
  <div class="item-detail-images">
    <div v-for="(item, index) in itemDetailImages.detailImage" :key="index" class="image-group">
      <div class="key">——— {{index + 1}}. {{item.key}} ———</div>
      <div v-for="(item, index) in item.list" :key="index" class="item">
        <img :src="item" alt="" @load="detailImageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemDetailImages',
  props: {
    itemDetailImages: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    detailImageLoad(){
      this.$emit('detailImageLoad')
    }
  }
}
</script>

<style scoped>
  .item-detail-images {
    width: 100vw;
  }
  .item-detail-images .item {
    margin: 0 10px;
  }
  img {
    width: 100%;
  }
  .image-group {
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: solid 10px #f0f0f0;
  }
  .key {
    text-align: center;
    color: #fe4601;
    margin-bottom: 10px;
  }

</style>