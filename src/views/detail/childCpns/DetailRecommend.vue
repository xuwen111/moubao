<template>
  <div class="recommend">
    <div class="text">———— 看了又看 ————</div>
    <goodslist :goods="recommendData"/>
  </div>
</template>

<script>
import Goodslist from '@/components/contact/goodslist/Goodslist'
import GoodslistItem from '@/components/contact/goodslist/GoodslistItem'

export default {
  name: 'DetailRecommend',
  components: {
    Goodslist,
    GoodslistItem
  },
  props: {
    recommendData: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .recommend {
    width: 100vw;
  }
  .text {
    padding: 15px 0;
    text-align: center;
    color: #555;
    font-size: 13.5px;
    background-color: #f0f0f0;
  }
</style>