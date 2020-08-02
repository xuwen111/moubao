<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted(){
    //1.创建BScroll对象
    this.scroll = new BSroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })

    //2.监听滚动 --> 获取滚动位置position
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })

    //3.监听上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('loadMore')
    })
  },
  methods: {
    //1.封装滚动函数
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //2.封装“结束加载"函数————因为每次上拉加载只会执行一次
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //3.封装“refresh”刷新获取新的scrollHeight————新的可滚动区域
    refresh(){
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  }
}
</script>

<style>

</style>