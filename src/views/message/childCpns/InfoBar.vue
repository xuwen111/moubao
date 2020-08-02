<template>
  <div class="info-bar">
    <el-card class="box-card">
      <div class="wrapper">
        <div v-for="(item, index) in this.lists" :key="index" class="item">
          <div class="icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="text">
            {{item.text}}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',
  data(){
    return {
      lists: [
        {icon: require('@/assets/images/message/trans.png'), text: '交易物流'},
        {icon: require('@/assets/images/message/inform.png'), text: '通知消息'},
        {icon: require('@/assets/images/message/mes.png'), text: '互动消息'},
      ]
    }
  }
}
</script>

<style scoped>
  .info-bar {
    width: 100vw;
  }
  .box-card {
    margin: 0 15px;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .item {
    flex: 1;
    text-align: center;
  }
  .item .icon {
    width: 30px;
    height: 30px;
    margin-bottom: 8px;
  }
  .item img {
    width: 100%;
    margin-left: 32px;
  }
  .text {
    font-size: 13.5px;
    color: #666666;
  }
</style>