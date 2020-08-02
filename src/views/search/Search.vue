<template>
  <div id="search">
    <nav-bar class="wrapper">
      <div slot="left" class="back-icon" @click="back">
        <img src="@/assets/images/back.png" alt="">
      </div>
      <div slot="center" class="search-input">
        <input type="search" ref="search" placeholder="2020新款女装">
      </div>
      <div slot="right" class="btn" @click="search">
        <button type="submit">搜索</button>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'Search',
  components: {
    NavBar
  },
  mounted(){
    this.$refs.search.focus()
  },
  methods: {
    back(){
      this.$router.back()
    },
    search(){
      
    }
  }
}
</script>

<style scoped>
  #search {
    width: 100vw;
    height: 100vh;
  }
  .wrapper {
    /* display: flex; */
    width: 100%;
    align-items: center;
  }
  .back-icon {
    width: 50%;
    margin-left: 10px;
  }
  .back-icon img {
    width: 100%;
  }
  .search-input {
    margin-right: 15px;
  }
  .search-input input {
    width: 220px;
    height: 30px;
    border-radius: 15px;
    outline: none;
    border: solid 1px #aaa;
    padding-left: 10px;
    font-size: 14.5px;
  }
  .btn {
    margin-left: 5px;
    margin-right: 10px;
    font-size: 13.5px;
  }
  .btn button {
    padding: 5px 15px;
    background-color: #fe4601;
    color: #fff;
    border-radius: 15px;
    border: none;
  }
</style>