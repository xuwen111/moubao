<template>
  <div class="detail-bottom-bar"> 
    <tab-bar class="tab-bar">
      <div class="left">
        <div v-for="(item, index) in barLists" :key="index" 
             class="bar-item" @click="barClick(index)">
          <img :src="item.icon" alt="" >
          <div class="text" 
               :style="index === 0 || (index === 2 && isLike) ? 'color: #fe4601': ''">
            {{item.text}}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="add-cart" @click="addCart"><div class="text">加入购物车</div ></div>
        <div class="buy-it" @click="buyIt"><div class="text">立即购买</div></div>
      </div>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar/TabBar'
import TabBarItem from '@/components/common/TabBar/TabBarItem'

export default {
  name: 'DetailBottomBar',
  components: {
    TabBar,
    TabBarItem
  },
  data(){
    return {
      barLists: [
        {
          icon: require('@/assets/images/detail/tabbar/shop_active.png'),
          text: '店铺',
        },
        {
          icon: require('@/assets/images/detail/tabbar/server.png'),
          text: '客服',
        },
        {
          icon: require('@/assets/images/detail/tabbar/collect.png'),
          text: '收藏',
        }
      ],
      isLike: false,
      active: ''
    }
  },
  methods: {
    barClick(index){
      index === 2 ? this.isLike = !this.isLike : ''
      if(index === 2 && this.isLike ){
        this.barLists[2].icon = require('@/assets/images/detail/tabbar/collect_active.png')
        //弹出toast，提示：“收藏成功”
        this.$toast.show('收藏成功！', 2000)
      }else if(index === 2 && !this.isLike ){
        this.barLists[2].icon = require('@/assets/images/detail/tabbar/collect.png')
        //弹出toast，提示：“取消收藏
        this.$toast.show('取消收藏！', 2000)
      }else {
        this.barLists[2].icon = require('@/assets/images/detail/tabbar/collect.png')
      }
    },
    //监听“加入购物车”的点击
    addCart(){
      this.$emit("addCart")
    },
    //监听“立即购买”的点击
    buyIt(){
      this.$emit("buyIt")
    }
  }
}
</script>

<style scoped>
  .detail-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 29;
  }
  .tab-bar {
    width: 100vw;
    display: flex;
    text-align: center;
    height: 49px;
  }
  .tab-bar .left {
    width: 35%;
    display: flex;
  }
  .left .bar-item {
    flex: 1;
  }
  .left .bar-item img {
    width: 22px;
    height: 22px;
    margin-top: 3px;
  }
  .left .bar-item .text {
    color: #777;
    font-size: 12px;
  }

  .right {
    flex: 1;
    font-size: 13.5px;
    font-weight: 700;
  }
  .right div {
    display: inline-block;
    width: 110px;
    height: 40px;
    margin-top: 5px;
    color: #fff;
    border: none
  }
  .add-cart {
    background-color: #ffc500;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .buy-it {
    background-color: #fe560a;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .right .text {
    margin-top: 10px;
  }
  .active {
    color: #fe4601;
  }
</style>