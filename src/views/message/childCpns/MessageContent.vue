<template>
  <div class="message-content">
    <message-item v-for="(item, index) in messageLists" :key="index" :messageItem="item"/>
  </div>
</template>

<script>
import MessageItem from './MessageItem'

export default {
  name: 'MessageContent',
  components: {
    MessageItem
  },
  props: {
    messageLists: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .message-content {
    margin-top: 160px;
  }
</style>