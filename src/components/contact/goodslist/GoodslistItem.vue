<template>
  <el-card :body-style="{ padding: '0px' }" class="goodslist-item" @click.native="goodsItemClick">
    <img :src="goodsItem.show ? goodsItem.show.img : goodsItem.image" 
         class="image" @load="imageLoad">
    <div style="padding: 14px;">
      <div class="title-box"><div class="title">{{goodsItem.title}}</div></div>
      <div class="bottom clearfix">
        <!-- <time class="time">更爱内容</time> -->
        <div class="left">
          <div class="price">{{price}}</div>
          <div class="sales">{{sales}}人付款</div>
        </div>
        <el-button type="text" class="button">...</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'GoodslistItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
  computed: {
    price(){
      return '￥'+parseInt(this.goodsItem.price || this.goodsItem.discountPrice)
    },
    sales(){
      let sales = parseInt(this.goodsItem.cfav || this.goodsItem.itemSale)
      if(sales > 10000){
        sales = (sales/10000)
        sales = sales.toFixed(2) + '万'
      }
      return sales
    }
  },
  methods: {
    //1.监听图片加载完成
    imageLoad(){
      this.$bus.$emit('imageLoad')
    },
    //2.监听商品点击
    goodsItemClick(){
      this.$router.push('/detail/'+ (this.goodsItem.iid ? this.goodsItem.iid : this.goodsItem.item_id))
    }
  }
}
</script>

<style scoped>
  .goodslist-item {
    position: relative;
    width: 47%;
    /* padding: 0 2px; */
    margin: 5px 2px 5px 3px;
    border-radius: 10px;
    height: inherit;
  }
  .bottom {
    margin-left: 0;
    margin-top: 5px;
    line-height: 12px;
  }
  .left {
    margin-top: 10px;
    float: left;
  }
  .price, .sales {
    display: inline-block;
  }
  .price {
    color: #fe4601;
    margin-right: 5px;
  }
  .sales {
    color: #999;
    font-size: 11.5px;
  }
  .button {
    padding: 0;
    float: right;
    color: #999;
    font-size: 21px;
  }
  .image {
    width: 100%;
  }
  /* .title-box {
    height: 50px;
    width: 100%;
  } */
  .title {
    font-size: 13px;
    line-height: 1.5;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>