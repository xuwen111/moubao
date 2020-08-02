<template>
  <div class="profile-content">
    <!-- 我的订单 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>我的订单</span>
        <el-button class="co-btn" type="text">查看全部订单></el-button>
      </div>
      <!-- 1.订单查看操作以及物流信息展示 -->
      <div class="about-order">
        <!-- 1.1订单查看操作 -->
        <div class="tab-title">
          <div class="item" v-for="(item, index) in tabLists" :key="index"> 
            <el-badge :value="item.unreadCount" class="badge-item" :hidden="item.unreadCount == 0 ? true : false">
              <img :src="item.icon" alt="">
            </el-badge>
            <div class="text">{{item.text}}</div>
          </div>
        </div>
        <!-- 待收货物流信息show -->
        <div class="show-order-item">
          <div class="info-title">
            <div class="text">最新物流</div>
            <div class="time">07-09</div>
          </div>
          <div>我是物流信息</div>
        </div>
      </div>
    </el-card>

    <!-- 必备工具 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>必备工具</span>
        <el-button class="co-btn" type="text">查看全部工具></el-button>
      </div>
      <div class="picture">
        <img src="@/assets/images/picture.png" alt="">
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ProfileContent',
  data(){
    return {
      tabLists: [
        {
          icon: require('@/assets/images/profile/pay_for.png'),
          text: '待付款',
          unreadCount: 0
        },
        {
          icon: require('@/assets/images/profile/send_goods.png'),
          text: '待发货',
          unreadCount: 1
        },
        {
          icon: require('@/assets/images/profile/delivery_goods.png'),
          text: '待收货',
          unreadCount: 2
        },
        {
          icon: require('@/assets/images/profile/appraise_goods.png'),
          text: '评价',
          unreadCount: 3
        },
        {
          icon: require('@/assets/images/profile/after_sale.png'),
          text: '退款/售后',
          unreadCount: 0
        },
      ],
      lists: [

      ]
    }
  }
}
</script>

<style scoped>
  .profile-content {
    width: 100vw;
  }
  .text {
    font-size: 13px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: calc(100% - 20px);
    margin: 15px 8px;
    border-radius: 15px;
  }
  .co-btn {
    float: right;
    padding: 3px 0;
    color: #777;
  }
  .header {
    padding: 10px;
  } 

  .tab-title {
    width: 100%;
    display: flex;
    font-size: 13px;
    color: #555;
  }
  .tab-title .item {
    flex: 1;
    text-align: center;
  }
  .tab-title img {
    width: 30px;
    height: 30px;
  } 
  .tab-title .text {
    margin-top: 5px;
  }
  .show-order-item {
    height: 80px;
    background-color: #f0f0f0;
    border-radius: 8px;
    padding-top: 8px;
    padding-left: 10px;
  }
  .info-title  {
    font-size: 13px;
    color: #777;
    margin-bottom: 5px;
  }
  .info-title .text, .info-title .time {
    display: inline-block;
  }
  .info-title .text {
    /* margin-left: 10px; */
    margin-right: 63%;
  }
  .picture {
    width: 100%;
  }
  .picture img {
    width: 100%;
  }
</style>