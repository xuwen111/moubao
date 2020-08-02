<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <div slot="right" class="right">
        <div class="right-item">
            <img src="@/assets/images/message/friends.png" alt="">
          </div>
          <div class="right-item">
            <img src="@/assets/images/message/add.png" alt="">
          </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'ProfileNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .profile-nav-bar {
    background-color: #fe4601;
    width: 100vw;
  }
  .right {
    width: 100px;
    margin-left: 280px;
  }
  .right img {
    width: 25px;
    height: 25px;
  }
  .right div {
    display: inline-block;
    margin-left: 15px;
  } 
</style>