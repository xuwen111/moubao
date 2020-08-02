<template>
  <div class="message-item">
    <div class="icon">
      <img :src="messageItem.icon" alt="">
    </div>

    <div class="content">
      <div class="title-time">
        <div class="title">{{messageItem.title}}</div>
        <div class="time">{{messageItem.time}}</div>
      </div>
      <div class="text">{{messageItem.text}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  props: {
    messageItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .message-item {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ddd;
  }
  .icon {
    width: 15%;
    margin: 0 10px;
  }
  .icon img {
    width: 100%;
  }
  .content {
    flex: 1;
    color: #999999;
  }
  .title-time {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .title-time .title {
    flex: 1;
    color: #7e3116;
    font-weight: 600;
  }
  .title-time .time {
    width: 20%;
    font-size: 12px;
    margin-right: 10px;
    text-align: right;
  }
  .text {
    font-size: 13.5px;
  }
</style>