<template>
  <div id="message">
    <message-nav-bar class="nav-bar" />
    <back-card :info="0"/>
    <message-content :messageLists="messageLists"/>
  </div>
</template>

<script>
import MessageNavBar from './childCpns/MessageNavBar';
import BackCard from './childCpns/BackCard'
import MessageContent from './childCpns/MessageContent'

export default {
  name: 'Message',
  components: {
    MessageNavBar,
    BackCard,
    MessageContent
  },
  data(){
    return {
      messageLists: [
        {
          icon: '//s5.mogucdn.com/mlcdn/c45406/170728_56f10kb298accf93kb3ichdb8flgj_320x320.jpg',
          title: '彩娉服饰',
          text: '您的包裹已发出',
          time: '昨天',
        },
        {
          icon: '//s11.mogucdn.com/p1/151121/21f7dr_ie4tmzrrhazdkmbqguzdambqgqyde_80x78.png',
          title: '淑女帝国',
          text: '[专属客服为您服务]',
          time: '星期四',
        },
        {
          icon: '//s11.mogucdn.com/mlcdn/c45406/180305_2g6da24ff04e6j5f75i1glek8g351_200x200.jpg',
          title: '昕雪惜悦旗舰店',
          text: '[亲，请您核对订单信息]',
          time: '星期二',
        },
      ]
    }
  }
}
</script>

<style scoped>
  #message {
    width: 100vw;
    height: 100vh;
  }
</style>