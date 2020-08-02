<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-nav-bar-active :class="{active: navActive}" 
                           :navGuides="navGuides" ref="nav" 
                           @changeBarItem="changeBarItem" />
    <scroll class="content" 
            :probe-type="3" 
            :pull-up-load="true"
            @scroll="scroll" 
            ref="scroll">
      <detail-swiper :topImages="topImages" 
                     @topImageLoad="topImageLoad"/>
      <item-info :itemInfo="detailData.itemInfo" 
                 :columns="detailData.columns" 
                 :goodsOption="detailData.skuInfo"
                 @toChooseStyle="addCart"
                 @shareIt="shareIt"/>
      <comment :commentInfo="detailData.rate" 
               ref="comment"/>
      <shop-info :shopInfo="detailData.shopInfo" />
      <goods-params :itemParams="detailData.itemParams" 
                    ref="params"/>
      <item-detail-images :itemDetailImages="detailData.detailInfo" 
                          @detailImageLoad="detailImageLoad"/>
      <detail-recommend ref="recommend" 
                        :recommendData="recommendData" />

    </scroll>
    <back-top v-show="isShowBack" 
              @click.native="backTop"/>
    <detail-bottom-bar class="detail-bottom-bar" 
                       @addCart="addCart" 
                       @buyIt="buyIt" />
    <choose-bar :chooseBarInfo="detailData.skuInfo" 
                v-show="chooseStyle"
                :itemInfo="detailData.itemInfo"
                :shopInfo="detailData.shopInfo"
                @cancelShowChoose="cancelShowChoose"
                @addToCart="addToCart" />
    <share-bar v-if="isShare" @cancelShare="cancelShare" />
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar'
import DetailNavBarActive from "./childCpns/DetailNavBarActive";
import DetailBottomBar from './childCpns/DetailBottomBar'
import DetailSwiper from './childCpns/DetailSwiper'
import ItemInfo from './childCpns/ItemInfo'
import Comment from './childCpns/Comment'
import ShopInfo from './childCpns/ShopInfo'
import GoodsParams from './childCpns/GoodsParams'
import ItemDetailImages from './childCpns/ItemDetailImages'
import DetailRecommend from './childCpns/DetailRecommend'
import ChooseBar from './childCpns/ChooseBar'
import ShareBar from "./childCpns/ShareBar";

import Scroll from '@/components/common/scroll/Scroll';
import BackTop from '@/components/common/backTop/BackTop'

import { getDetailData, getRecommendData } from '@/network/detail';
import { debounce } from '@/common/utils'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailNavBarActive,
    Scroll,
    DetailBottomBar,
    DetailSwiper,
    ItemInfo,
    Comment,
    ShopInfo,
    GoodsParams,
    ItemDetailImages,
    BackTop,
    DetailRecommend,
    ChooseBar,
    ShareBar
  },
  data(){
    return {
      iid: '',
      detailData: {},
      recommendData: {},
      topImages: [],
      navGuides: ['宝贝', '评价', '详情', '推荐'],
      isShowBack: false,
      navActive: false,
      getBarMoveList: null,
      barMoveList: [],
      scrollY: 0,
      chooseStyle: false,
      isBuy: false,
      isShare: false
    }
  },
  created(){
    //1.获取当前商品的iid
    this.iid = this.$route.params.iid
    // this.iid = '1m769vs'

    //2.调用根据商品的iid获取详情页数据的方法
    this.getDetailData(this.iid)

    //3.调用获取推荐商品数据方法
    this.getRecommendData()

    //3.定义获取组件的offsetTop函数,并防抖处理
    this.getBarMoveList = debounce(() => {
      this.barMoveList = []
      this.barMoveList.push(0)
      this.barMoveList.push(this.$refs.comment.$el.offsetTop - 50)
      this.barMoveList.push(this.$refs.params.$el.offsetTop - 50)
      this.barMoveList.push(this.$refs.recommend.$el.offsetTop - 50)
      this.barMoveList.push(Number.MAX_VALUE)
      // console.log(this.barMoveList); 
    }, 200)
     
  },
  methods: {
    //---------------------------------- 1.请求数据---------------------------------------------
    //1.1根据商品的iid获取详情页数据
    getDetailData(iid){
      getDetailData(iid).then(res => {
        this.detailData = res.result
        this.topImages = this.detailData.itemInfo.topImages
        console.log(this.detailData);
      })
    },
    //1.2获取推荐商品数据
    getRecommendData(){
      getRecommendData().then(res => {
        this.recommendData = res.data
        
      })
    },
    // -----------------------------------2.事件监听-------------------------------------------
    //2.1.监听详情页navbar的点击
    changeBarItem(index){
      //页面滚动至指定位置
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, -this.barMoveList[index], 1000)
    },
    //2.2.监听滚动
    scroll(position){
      this.scrollY = -position.y
      //1.1 NavBar组件的样式变化
      this.navActive = this.scrollY > 200
      //1.2 BackTop组件的显示/隐藏
      this.isShowBack = this.scrollY > 1500
      //1.3 判断navbarActive的item显示是否有颜色
      for(let i in this.barMoveList){
        i  = parseInt(i)
        if( (this.scrollY >= this.barMoveList[i] && this.scrollY < this.barMoveList[i+1])){
          //减少刷新次数
          this.$refs.nav.currentIndex = i
        }
      }
  
    },
    //2.3监听BackTop组件的点击
    backTop(){
      this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    //2.4监听详情页top轮播图的加载
    topImageLoad(){
      this.$refs.scroll.refresh()
      //调用获取组件offsetTop的函数
      this.getBarMoveList()
    },
    //2.5监听详情页详情部分的img的加载
    detailImageLoad(){
      this.$refs.scroll.refresh()
      //调用获取组件offsetTop的函数
      this.getBarMoveList()
    },
    //2.6监听“加入购物车”的点击
    addCart(){
      //显示商品的ChooseBar
      this.chooseStyle = true
    },
    //2.6.1 监听“加入购物车”的取消操作
    cancelShowChoose(){
      //取消显示商品的ChooseBar
      this.chooseStyle = false
    },
    //2.6.2 监听ChooseBar的“确定”的点击操作
    addToCart(){
      //取消显示商品的ChooseBar
      this.chooseStyle = false
      if(this.isBuy){
        console.log("跳转至结算页面");
        this.$router.push('/account')
      }
    },
    //2.7 监听“立即购买”的点击事件
    buyIt(){
      this.isBuy = true
      //显示商品的ChooseBar
      this.chooseStyle = true
    },
    //2.8 监听“分享”的点击
    shareIt(){
      this.isShare = true
    },
    //2.9 "取消分享"的点击
    cancelShare(){
      this.isShare = false
    }
  }
}
</script>

<style scoped>
  #detail {
    width: 100vw;
    height: 100vh;
  }
  .content {
    height: calc(100% - 49px);
  }
  .navActive {
    background: #fff;
  }
  .active {
    z-index: 39;
  }
</style>