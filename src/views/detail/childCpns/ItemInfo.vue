<template>
  <div class="item-info">
    <!-- 1.商品基本信息 -->
    <div class="base-info">
      <!-- 1.1商品price -->
      <div class="price-info">
        <div class="price">￥{{itemInfo.lowPrice}}</div>
        <div class="old-price">价格￥<div class="old-price-value">{{itemInfo.highPrice}}</div></div>
      </div>
      <!-- 1.2.折扣信息 -->
      <div class="discount-outer">
        <span class="discount" :style="discountBg" v-show="itemInfo.discountDesc ? true : false">
          {{itemInfo.discountDesc}}
        </span>
      </div>
      <!-- 1.3.商品title及“分享” -->
      <div class="title-info">
        <div class="title">
          {{itemInfo.title}}
        </div>
        <div class="share" @click="shareIt">
          <img src="@/assets/images/detail/share.png" alt="">
          <div class="text">分享</div>
        </div>
      </div>
    </div>

    <!-- 2.“发货”信息 -->
    <div class="send-info space">
      <line-info>
        <div slot="left">发货</div>
        <div slot="center">快递：{{columns[2]}}</div>
        <div slot="right">{{columns[0]}}</div>
      </line-info>
    </div>

    <!-- 3.“服务”信息 -->
    <div class="serve-info space">
      <line-info>
        <div slot="left">保障</div>
        <div slot="center">72小时内发货</div>
      </line-info>
    </div>

    <!-- 4.“选择”信息 -->
    <div class="choose-info space" @click="toChooseStyle">
      <line-info>
        <div slot="left">选择</div>
        <div slot="center">选择 {{goodsOption.sizeKey}}、{{goodsOption.styleKey}}</div>
      </line-info>
    </div>

  </div>
</template>

<script>
import LineInfo from '@/components/contact/lineInfo/LineInfo'

export default {
  name: 'ItemInfo',
  components: {
    LineInfo
  },
  props: {
    itemInfo: {
      type: Object,
      default(){
        return {}
      }
    },
    columns: {
      type: Array,
      default(){
        return []
      }
    },
    goodsOption: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    discountBg(){
      return this.itemInfo.discountBgColor ? "backgroundColor: "+ this.itemInfo.discountBgColor : ''
    }
  },
  methods: {
    //1.“分享”的点击监听
    shareIt(){
      this.$emit("shareIt")
    },
    //2.“样式选择”的点击监听
    toChooseStyle(){
      //发送事件给detail页面，显示ChooseBar组件
      this.$emit("toChooseStyle")
    }
  }
}
</script>

<style scoped>
  .item-info {
    width: 100vw;
  }
  .base-info {
    width: 100%;
    padding: 0 0 0 10px;
    border-bottom: solid 10px #f0f0f0;
  }
  .price-info {
    margin: 5px 0 10px 0;
  }
  .price, .old-price, .old-price-value {
    display: inline-block;
  }
  .price {
    color: #fe4601;
    font-size: 20px;
    margin-right: 8px;
  }
  .old-price {
    color: #aaa;
    font-size: 12px;
  }
  .old-price-value {
    text-decoration-line: line-through;
  }
  .discount {
    padding: 2px 8px 3px 8px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
  }
  .discount-outer {
    margin-bottom: 10px;
  }
  .title-info {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }
  .title {
    width: 81%;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 520;
  }
  .share {
    height: 25px;
    flex: 1;
    background-color: #f0f0f0;
    margin-top: 15px;
    margin-left: 5px;
    font-size: 13px;
    color: #aaa;
    display: flex;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .share img {
    width: 30%;
    padding-left: 5px;
  }
  .share .text {
    display: inline-block;
  }
  .space {
    border-bottom: solid 10px #f0f0f0;
  }
</style>