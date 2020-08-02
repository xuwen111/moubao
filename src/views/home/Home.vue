<template>
  <div id="home">
    <home-nav-bar/>
    <tab-control @changeIndex="changeIndex" 
                 class="tab-control2" 
                 v-show="tabFixed" 
                 ref="tabControl2"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            :pull-up-load="true" 
            @scroll="scroll" 
            @loadMore="loadMore">
      <tab-nav />
      <home-swiper />
      <!-- <div class="space"></div> -->
      <home-preview />
      <tab-control @changeIndex="changeIndex" ref="tabControl1"/>
      <goodslist :goods="goods[currentType]"/>
      <!-- <el-backtop :bottom=100 :right=50 ></el-backtop> -->
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
import HomeNavBar from './childCpns/HomeNavBar';
import TabNav from './childCpns/TabNav';
import HomeSwiper from './childCpns/HomeSwiper';
import HomePreview from './childCpns/HomePreview';
import TabControl from './childCpns/TabControl';

import Scroll from '@/components/common/scroll/Scroll';
import Goodslist from '@/components/contact/goodslist/Goodslist'
import BackTop from '@/components/common/backTop/BackTop'

import { getHomeGoods } from '@/network/home.js';
import { debounce } from '@/common/utils'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    Scroll,
    TabNav,
    HomeSwiper,
    HomePreview,
    TabControl,
    Goodslist,
    BackTop
  },
  data(){
    return {
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      currentType: 'pop',
      isShow: false,
      tabControlOffsetTop: 0, 
      tabFixed: false,
      fresh: null,
      saveY: 0,
    }
  },
  created(){
    //1.获取首页数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted(){
    //1.监听事件总线$bus传递的"图片加载" --> 刷新滚动区域的高度
    const fresh = debounce(this.$refs.scroll.refresh, 100)

    this.$bus.$on('imageLoad', () => {fresh()})

    //2.获取TabControl组件的offsetTop属性值(组件没有该属性，通过$el获取)
    setTimeout(() => {
      this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
      // console.log(this.tabControlOffsetTop);
    }, 1000)
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    //--------------------------------请求数据--------------------------------
    //1.获取商品展示列表数据
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
      //page需要+1并更新
      this.goods[type].page += 1
    },

    //--------------------------------事件监听--------------------------------
    //1.监听TabControl的点击
    changeIndex(index){
      switch(index){
        case 0: {
          this.currentType = 'pop'
          break
        };
        case 1: {
          this.currentType = 'sell'
          break
        };
        case 3: {
          this.currentType = 'new'
          break
        };
        default: break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    //2.监听“BackTop”的点击
    backTop(){
      //2.1点击回到顶部(500ms内)
      this.$refs.scroll.scrollTo(0, 0, 1500)
    },

    //3.监听滚动位置
    scroll(position){
      //3.1 设置backTop的显示/隐藏
      this.isShow = -position.y > 1500
      //3.2 设置TabControl2的显示/隐藏————注意要剪掉navbar的高度
      this.tabFixed = (-position.y) > (this.tabControlOffsetTop - 50)
    },
    //4.监听上拉加载
    loadMore(){
      console.log("jiazai");
      //4.1加载当前类型currentType的商品数据
      this.getHomeGoods(this.currentType)
      //4.2结束加载————“上拉加载”只会执行一次
      this.$refs.scroll.finishPullUp()
    }
  },
}
</script>

<style scoped>
  #home {
    height: 100vh;
    background-color: #f0f0f0;
  }
  .content {
    height: calc(100% - 50px - 49px);
    overflow: hidden;
  }
  .space {
    height: 30px;
  }
  .tab-control2 {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fcfcfc;
    z-index: 9;
  }
</style>