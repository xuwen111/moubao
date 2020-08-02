<template>
  <div id="app">
    <main-tab-bar/>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/contact/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
  @import './assets/css/main.css';
  #app {
    overflow: hidden;
  }
</style>
