<template>
  <div class="tab-control">
    <div class="item" v-for="(item, index) in lists" :key="index" 
        @click="changeIndex(index)">
      <!-- <div class="name" :style="index===currentIndex? 'color: red': ''">{{item.name}}</div> -->
      <div :class="index===currentIndex? 'name active': 'name'">{{item.name}}</div>
      <div class="describe">
        <span :style="index===currentIndex? 'color: #fff;background: #f00;padding: 2px 7px; borderRadius: 10px': ''">
          {{item.describe}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data(){
    return {
      lists: [
        {name: '全部', describe: '猜你喜欢'},
        {name: '狂暑季', describe: '立即抢购'},
        {name: '直播', describe: '新品搭配购'},
        {name: '便宜好货', describe: '低价抢购'},
        {name: '买家秀', describe: '真实晒单'}
      ],
      currentIndex: 0,
      isActive: false
    }
  },
  methods: {
    changeIndex(index){
      this.currentIndex = index
      this.$emit('changeIndex', index)
    }
  },
  computed: {
    desChange(index){
      if(index === this.currentIndex){
        return isActive = true
      }
    }
  }
}
</script>

<style scoped>
  .tab-control {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    border-right: solid 1px #ccc;
  }
  .name {
    margin-bottom: 5px;
  }
  .describe {
    font-size: 12px;
    color: #777;
  }
  .active{
    color: #f00;
  }
</style>