<template>
  <div id="category">
    <category-nav-bar />
    <div class="main-content">
      <tab-menu class="tab-menu" 
                :categories="categories" 
                @itemClick="itemClick"/>
                
      <scroll id="s-content" :data="[categoryData]">
        <tab-content-category :subcategories="showSubcategory" />
      </scroll>
    </div>
  </div>
</template>

<script>
import {getCategory, getSubcategory} from '@/network/category'
import Scroll from '@/components/common/scroll/Scroll';

import CategoryNavBar from './childCpns/CategoryNavBar'
import TabMenu from './childCpns/TabMenu'
import TabContentCategory from './childCpns/TabContentCategory'

export default {
  name: "Category",
  components: {
    CategoryNavBar,
    TabMenu,
    Scroll,
    TabContentCategory
  },
  data(){
    return {
      categories: null,
      categoryData: {},
      currentIndex: -1,
    }
  },
  created(){
    this._getCategory()
  },
  computed: {
    showSubcategory(){
      if(this.currentIndex === -1){
        return {}
      } else{
        return this.categoryData[this.currentIndex].subcategories
      }
    }
  },
  methods: {
    _getCategory(){
      //1.1 获取categories
      getCategory().then(res => {
        this.categories = res.data.category.list
        // console.log(this.categories);

        //1.2 遍历所有的主题，给每一个主题加一个subcategory的属性
        for(let i=0; i<this.categories.length; i++){
          this.categoryData[i] = {
            subcategories: {}
          }
        }

        //1.3 获取subcategory数据
        this._getSubcategory(0)
      })
    },
    _getSubcategory(index){
      this.currentIndex = index
      const maitKey = this.categories[this.currentIndex].maitKey
      getSubcategory(maitKey).then(res => {
        // console.log(res.data);
        this.categoryData[this.currentIndex].subcategories = res.data
        this.categoryData = {...this.categoryData}
      }) 
    },
    itemClick(index){
      this.currentIndex = index
      this._getSubcategory(index)
    }
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .main-content {
    height: calc(100% - 49px);
    position: absolute;
    top: 44px;
    bottom: 494px;
    left: 0;
    right:0;
    display: flex;
    background-color: #f0f0f0;
    z-index: 30;
  }
  .tab-menu {
    width: 20%;
  }
  #s-content {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
</style>