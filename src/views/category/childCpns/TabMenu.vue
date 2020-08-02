<template>
  <scroll id="menu-content" :data="categories">
      <div class="menu">
        <div class="menu-item" 
             v-for="(item, index) in categories" :key="index"
             @click="itemClick(index)"
             :class="{active: index === currentIndex}">
          {{item.title}}
        </div>
      </div>
    </scroll>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll';

	export default {
    name: "TabMenu",
    props: {
      categories: {}
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
	}
</script>

<style scoped>
  #menu-content {
    height: 100%;
    overflow: hidden;
    background-color: #ffffff;
  }

  .menu {
    font-size: 13.5px;
    text-align: center;
  }

  .menu-item {
    padding: 20px 0;
  }

  .menu-item.active {
    background-color: #f0f0f0;
    color: #fe4601;
    font-weight: 600;
    border-left: solid 2px #fe4601;
  }
</style>