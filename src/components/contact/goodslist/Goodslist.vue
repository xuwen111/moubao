<template>
  <div class="goodslist">
    <goodslist-item v-for="(item, index) in goods.list" :key="index" :goodsItem="item"></goodslist-item>
  </div>
</template>

<script>
import GoodslistItem from './GoodslistItem';
export default {
  name: 'Goodslist',
  components: {
    GoodslistItem
  },
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goodslist {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
</style>