<template>
  <div class="choose-bar">
    <div class="title">
      <!-- 1.左边：默认商品图片 -->
      <!-- 1.1默认选择图片 -->
      <div class="default-image" v-if="defaultImage">
        <div v-for="(item, index) in chooseBarInfo.skus" :key="index" 
             v-show="index === 0">
          <img :src="item.img">
        </div>
      </div>
      <!-- 1.2当点击颜色选择时，不再显示默认图片 -->
      <!-- 注意：满足styleId的item不止一个，在v-show中使用find找到满足选项的第一个item -->
      <div class="currenr-style-image" v-else>
        <div v-for="(item, index) in chooseBarInfo.skus" :key="index" 
             v-show="item === chooseBarInfo.skus.find(item => item.styleId == currentStyleId)">
          <img :src="item.img">
        </div>
      </div>
      <!-- 2.右边：默认价格、库存 -->
      <div class="right-info">
        <div class="default-price">
          ￥{{itemInfo.lowPrice}}
        </div>
        <div class="total-stock">
          总库存：{{chooseBarInfo.totalStock}}件
        </div>
        <!-- 显示已选的style -->
        <div class="show-message">
          {{showMessage}}
        </div>
      </div>
      <!-- 3.取消按钮 -->
      <div class="cancel" @click="cancelShowChoose">
        <img src="@/assets/images/cancel.png" alt="">
      </div>
    </div>

    <!-- 尺码、颜色、数量选择 -->
    <div class="content">
      <scroll class="s-scroll">
        <div v-for="(item, index) in chooseBarInfo.props" :key="index">
          <!-- 颜色选择 -->
          <div class="first-row" v-show="index === 0">
            <div class="label">{{item.label}}</div>
            <div class="options">
              <div class="options-item" 
                   v-for="(item, index) in item.list" :key="index" 
                   @click="colorChoosed(index, item.styleId, item)"
                   :class="{active: currentStyleIndex === index}" >
                {{item.name}}
              </div>
            </div>
          </div>
          <!-- 尺寸选择 -->
          <div class="second-row" v-show="index > 0">
            <div class="label">{{item.label}}</div>
            <div class="options">
              <div class="options-item" 
                   v-for="(item, index) in item.list" :key="index" 
                   @click="sizeChoosed(index, item)"
                   :class="{active: currentSizeIndex === index}">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>

        <!-- 购买数量 -->
        <div class="count">
          <div class="left-text">购买数量</div>
          <div class="right-choose">
            <div class="item submit">-</div>
            <div class="item text">1</div>
            <div class="item add">+</div>
          </div>
        </div>
      </scroll>
    </div>
    
    <!-- “确定”按钮 -->
    <div class="sure" @click="isAddTo">确 定</div>

  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'ChooseBar',
  components: {
    Scroll
  },
  props: {
    chooseBarInfo: {
      type: Object,
      default(){
        return {}
      }
    },
    itemInfo: {
      type: Object,
      default(){
        return {}
      }
    },
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      currentStyleIndex: '',
      currentStyleId: 0,
      currentSizeIndex: '',
      defaultImage: true,
      show: true,
      showChooseStyle: {color: '', size: ''}
    }
  },
  computed: {
    findFirst(arry){
      arry.find(item => {
        item.styleId === this.currentStyleId
      })
    },
    showMessage(){
      if(this.showChooseStyle.color && this.showChooseStyle.size){
        return '已选："'+ this.showChooseStyle.color + '""'+  this.showChooseStyle.size + '"'
      } else if (!this.showChooseStyle.color && !this.showChooseStyle.size){
        return '选择 颜色、尺码'
      } else if(!this.showChooseStyle.color){
        return '选择 颜色'
      }else {
        return '选择 尺码'
      }
    }
  },
  methods: {

    //1.颜色选项的点击监听
    colorChoosed(index, id, item){
      this.currentStyleIndex = index
      this.currentStyleId = id
      this.defaultImage = false
      this.showChooseStyle.color = item.name
    },

    //2.尺码选项的点击监听
    sizeChoosed(index, item){
      this.currentSizeIndex = index
      this.showChooseStyle.size = item.name
    },

    //3.“确定”按钮的点击监听
    isAddTo(){
      //3.1 判断是选择了商品的style
      if(!this.showChooseStyle.color || !this.showChooseStyle.size){
        this.$toast.show('还没有选择商品的样式哦！', 2000)
        return 
      }
      //3.2 创建一个保存当前商品的基本信息的product对象-->用于购物车界面显示
      const product = {}
      product.iid = this.itemInfo.iid
      product.image = this.chooseBarInfo.skus[0].img
      product.title = this.chooseBarInfo.title
      product.price = this.itemInfo.lowPrice
      product.style = this.showChooseStyle
      product.shopName = this.shopInfo.name
      product.isChoosed = false
      //3.3 传递“确定"的点击事件 --> detail页面
      this.$emit('addToCart')
      this.$store.commit('addToCart', product)
      //3.4 显示toast --> "加入购物车成功"
      this.$toast.show('加入购物车成功！', 1500)
    },

    //4.“取消”按钮的点击监听
    cancelShowChoose(){
      this.$emit('cancelShowChoose')
    }
  }
}
</script>

<style scoped>
  .choose-bar {
    width: 100vw;
    height: 500px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 39;
  }
  .title {
    display: flex;
    margin-bottom:  10px;
  }
  .default-image,
  .currenr-style-image {
    margin-top: 15px;
    width: 40%;
    margin-left: 10px;
  }
  img {
    width: 90%;
    height: 150px;
    border-radius: 5px;
  }
  .right-info {
    flex: 1;
    margin-top: 50px;
    text-align: left;
  }
  .cancel {
    width: 5%;
    margin-right: 10px;
    margin-top: 15px;
  }
  .cancel img {
    width: 20px;
    height: 20px;
  }
  .default-price {
    color: #fe4601;
    font-size: 18px;
  }
  .total-stock {
    color: #aaa;
    font-size: 13px;
    margin: 10px 0;
  }
  .show-message {
    font-size: 13px;
    color: #555;
  }
  .content {
    height: calc(100% - 150px - 20px);
  }
  .s-scroll {
    height: 100%;
    overflow: hidden;
  }
  .first-row,
  .second-row {
    margin: 0 10px 15px 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #f0f0f0;
  }
  .label {
    margin: 10px 0 10px 0;
    font-size: 14.5px;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
  }
  .options-item {
    /* width: 16%; */
    padding: 10px 15px;
    margin: 0 10px 5px 0;
    font-size: 13px;
    text-align: center;
    background-color: #f0f0f0;
    /* border: solid 1px #ddd; */
    border-radius: 5px;
  }
  .active {
    border: solid 1px #fe4601;
    color: #fe4601;
  }
  .count {
    margin: 5px 10px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: solid 1px #f0f0f0;
  }
  .count .left-text {
    width: 70%;
    font-size: 14.5px;
  }
  .count .right-choose  {
    flex: 1;
    display: flex;
  }
  .right-choose .item {
    flex: 1;
    width: 35px;
    height: 30px;
    line-height: 30px;
    background-color: #f0f0f0;
    margin-left: 3px;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
  }
  .right-choose .submit, .right-choose .add {
    font-size: 17px;
    color: #888;
    
  }
  .sure {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fe4601;
    text-align: center;
    font-weight: 600;
    color: #fff;
    border-radius:  5px;
  }
</style>
