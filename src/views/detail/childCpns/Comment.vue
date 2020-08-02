<template>
  <div class="comment">
    <!-- 1.评价部分的top-bar -->
    <div class="top-bar">
      <div class="left">宝贝评价({{commentInfo.cRate}})</div>
      <div class="right"> 
        <div class="text">查看全部</div>
        <img src="@/assets/images/detail/right_colorful.png" alt="">
      </div>
    </div>

    <!-- 2.评价内容 -->
    <div class="content">
      <div class="content-item" v-for="(item, index) in commentInfo.list" :key="index">
        <!-- 2.1用户信息 -->
        <div class="client-info">
          <div class="img"><img :src="item.user.avatar" alt=""></div>
          <div class="name">{{item.user.uname}}</div>
        </div>
        <!-- 2.2 评价内容 -->
        <div class="main">
          <div class="goods-style">
            {{item.created|timeFilter}} [{{item.style}}]
          </div>
          <div class="text">{{item.content}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {formatDate} from '@/common/utils'
// import {formatDate} from "@/common/utils"

export default {
  name: 'Comment',
  props: {
    commentInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      list: []
    }
  },
  filters: {
    timeFilter(time){
      const date = new Date(time * 1000)
      return formatDate(date, 'yyyy-mm-dd')
    }
  }
}
</script>

<style scoped>
  .comment {
    width: 100vw;
    border-bottom: solid 10px #f0f0f0;
  }
  .top-bar {
    width: 100%;
    height: 50px;
    margin-left: 10px;
    display: flex;
    /* items居中 */
    align-items: center;
    font-size: 14px;
  }
  .top-bar .left {
    width: 70%;
  }
  .top-bar .right {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 18px;
  }
  .right .text {
    display: inline-block;
    font-size: 13.5px;
    color: #fe4601;
  }
  .right img {
    width: 25%;
    margin-top: 1px;
  }
  .client-info {
    width: 100vw;
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .client-info .img {
    width: 10%;
  }
  .client-info img {
    width: 80%;
    border-radius: 50%;
  }
  .client-info .name {
    display: inline-block;
    color: #999;
    font-size: 13px;
  }
  .main {
    margin-left: 10px;
  }
  .goods-style {
    color: #aaa;
    font-size: 12px;
    margin: 10px 0;
  }
  .main .text {
    font-size: 13px;
    padding-bottom: 20px;
  }
</style>