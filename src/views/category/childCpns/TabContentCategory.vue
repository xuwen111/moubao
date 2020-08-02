<template>
  <div class="sub-categories">
    <div class="space"></div>
    <div class="top-text">猜你喜欢</div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
      <div class="list-item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </grid-view>
    <div class="bottom-text">———— 到底啦 ————</div>
    <div class="b-space"></div>
  </div>
</template>

<script>
  import GridView from '@/components/common/gridView/GridView'

  export default {
    name: "TabContentCategory",
    components: {
      GridView
    },
    props: {
      subcategories: null
    }
  }
</script>
 
<style scoped>
  .space {
    height: 20px;
  }
  .top-text {
    color: #333333;
    font-size: 14px;
    margin: 0 0 10px 17px;
  }
  .list-item {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .list-item img {
    width: 80%;
    border-radius: 10px;
  }
  .item-text {
    font-size: 13.5px;
    margin-top: 15px;
  }
  .bottom-text {
    text-align: center;
    color: #888;
    font-size: 13px;
    margin-top: 20px;
  }
  .b-space {
    height: 20px;
  }
</style>