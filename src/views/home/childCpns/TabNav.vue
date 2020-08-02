<template>
  <div class="tab-nav">
    <div class="left">
      <div class="item" v-for="(item, index) in list" :key="index" 
           @click="change(index)">
        <!-- <span :style="index===currentIndex ? 'borderBottom: solid 2px #fff': '' ">{{item}}</span> -->
        <span :class="index===currentIndex ? 'active': '' ">{{item}}</span>
      </div>
    </div>

    <div class="right">
      <el-button size="small" round class="btn" @click="toCategory">= 分类</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabNav',
  data(){
    return {
      list: ['首页','家装','女装','美妆','百货','食品','医药'],
      currentIndex: 0
    }
  },
  methods: {
    //更换tab标签的点击监听
    change(index){
      this.currentIndex = index
    },
    //“分类”按钮的点击监听
    toCategory(){
      this.$router.push('/category')
    }
  },
  computed: {
    tochange(index){
      if(index === this.currentIndex){
        return 'color: "red"'
      }
    }
  }
}
</script>

<style scoped>
  .tab-nav {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 31px;
    background-color: #fe4601;
  }
  .left {
    width: 75%;
    margin-top: 5px;
    margin-left: 10px;
    word-break:keep-all;    
    white-space:nowrap;      
    overflow-x: hidden;
  }
  .left .item {
    width: 15%;
    display: inline-block;
    font-size: 14px;
    color: #fff;
  }
  .active {
    font-weight: 600;
    padding: 2px;
    border-bottom: solid 2px #fff;
  }
  .right{
    flex: 1;
  }
  .btn {
    margin-top: 8px;
    margin-left: 15px;
    background-color: rgba(247, 130, 88, 0.8);
    color: #fff;
    font-size: 14px;
    border: none;
    padding: 3px 10px;
  }
  li {
    background-color: #fe4601;
  }
</style>