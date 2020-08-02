<template>
  <div class="item-card">
    <el-card class="box-card">
      <div class="shopName">
        <div class="icon"><img src="@/assets/images/shopcart/shop_icon.png" alt=""></div>
        <div class='text'>
          {{itemInfo.shopName}}
        </div>
        <div class="right_icon"><img src="@/assets/images/detail/right.png"></div>
      </div>

      <div class="content">
        <div class="choose_icon" @click="toggle">
          <img src="@/assets/images/shopcart/choose.png" alt="" v-if="this.itemInfo.isChoosed">
          <div v-else class="not-choose"></div>
        </div>
        <div class="image">
          <img :src="itemInfo.image" alt="">
        </div>
        <div class="info">
          <div class="tilte">{{itemInfo.title}}</div>
          <div class="style"> <span>{{itemInfo.style.color}}；{{itemInfo.style.size}}</span></div>
          <div class="price-count">
            <div class="price">￥{{itemInfo.price}}</div>
            <div class="count">
              <div class="submit-btn" @click="submitCount">-</div>
              <div class="value">{{itemInfo.count}}</div>
              <div class="add-btn" @click="addCount">+</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'ItemCard',
  props: {
    itemInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      isChoose: true
    }
  },
  methods: {
    //“选择”的点击事件监听
    toggle(){
      this.$store.commit('toggle', this.itemInfo)
    },
    submitCount(){
      //如果当前商品数量>1，则发送给Vuex修改数量
      if(this.itemInfo.count > 1){
        this.$store.commit('submitCount',this.itemInfo)
      }
    },
    addCount(){
      //发送给Vuex增加商品数量
      // this.$store.commit('addCount', this.itemInfo.iid)
      this.$store.commit('addCount', this.itemInfo)
    }
  }
}
</script>

<style scoped>
  .item-card {
    width: 100vw;
  }
  .box-card {
    margin: 15px 10px 10px 10px;
    border-radius: 10px;
  }
  .shopName {
    font-size: 15px;
    color: #555;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .shopName .icon {
    width: 7%;
    margin-top: 3px;
    margin-left: 27px;
  }
  .icon img {
    width: 100%;
  }
  .shopName .text {
    width: inherit;
  }
  .shopName .right_icon {
    flex: 1;
  }
  .right_icon img {
    margin-top: 3px;
    width: 30px;
  }


  .content {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .choose_icon {
    width: 6%;
    margin-right: 10px;
  }
  .choose_icon img {
    width: 100%;
  }
  .not-choose {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: solid 1.5px #999;
    border-radius: 50%;
  }
  .image {
    flex: 1;
    margin-right: 10px;
  }
  .image img {
    width: 100%;
  }
  .info {
    width: 60%;
  }
  .info .tilte {
    font-size: 14px;
    color: #222222;
    line-height: 1.5;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .info .style span{
    font-size: 13.5px;
    color: #999;
    padding: 2px 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .price-count {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .price {
    width: 60%;
    font-size: 15px;
    color: #fe4601;
  }
  .count {
    flex: 1;
    border: solid 1px #aaa;
    border-radius: 5px;
  }
  .count div {
    display: inline-block;
    text-align: center;
    /* border: solid 1px #aaa; */
    color: #888;
  }
  .submit-btn, .add-btn {
    width: 7px;
    padding: 0 6px;
    font-size: 16px;
  }
  .value {
    width: 30px;
    font-size: 14px;
    padding: 1px 0;
    border-left: solid 1px #aaa;
    border-right: solid 1px #aaa;
  }
</style>