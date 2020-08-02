<template>
  <div id="profile">
    <fixed-nav-bar v-show="isFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="scroll"
            :class="{content_active: isFixed}">
      <profile-nav-bar />
      <back-card />
      <profile-content />
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';

import ProfileNavBar from './childCpns/ProfileNavBar'
import BackCard from './childCpns/BackCard'
import ProfileContent from './childCpns/ProfileContent'
import FixedNavBar from './childCpns/FixedNavBar'

export default {
  name: 'Profile',
  components: {
    FixedNavBar,
    Scroll,
    ProfileNavBar,
    BackCard,
    ProfileContent
  },
  data(){
    return {
      isFixed: false
    }
  },
  methods: {
    scroll(position){
      this.isFixed = -position.y > 50
    }
  }
}
</script>

<style scoped>
  #profile {
    height: 100vh;
  }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .content_active {
    height: calc(100% - 49px - 50px);
  }
</style>