<template>
  <div class="tabbar-item" @click="itemClick">
    <!-- 图标、标签名、替换图标，所以设置三个插槽 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="active" class="text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      isActive: false
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed: {
    active(){
      if(this.$route.path.indexOf(this.path) !== -1){
        this.isActive = true
        return 'color: '+(this.activeColor)
      }
      this.isActive = false
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .tabbar-item img {
    width: 25px;
    height: 25px;
    margin-top: 3px;
  }
  .text {
    font-weight: 400;
  }
</style>

