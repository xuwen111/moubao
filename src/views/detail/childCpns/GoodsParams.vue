<template>
  <div class="goods-params">
    <div class="introduction">
      ———— 宝贝详情 ————
    </div>
    
    <div class="params">
      <!-- 1.商品参数信息 -->
      <div class="params-key">*{{itemParams.info.key}}：</div>
      <div class="params-table">
        <!-- data绑定的数据是array类型，ui内部会遍历 -->
        <!-- <el-table :data="itemParams.info.set" stripe 
                   style="width: 100% height: 10%" 
                   class="e-table">
          <el-table-column prop="key" width="50%" ></el-table-column>
          <el-table-column prop="value"></el-table-column>
        </el-table> -->
        <table class="table e-table" >
          <tr v-for="(item, index) in itemParams.info.set" :key="index">
            <td>{{item.key}}</td>
            <td>{{item.value}}</td>
          </tr>
        </table>
      </div>
      <hr />

      <!-- 2.商品尺码信息 -->
      <div class="params-key">*{{itemParams.rule.key}}：</div>
      <div class="params-table">
        <table class="table e-table" v-for="(item, index) in itemParams.rule.tables" :key="index">
          <tr v-for="(item, index) in item" :key="index">
            <td v-for="(item, index) in item" :key="index">
              {{item}}
            </td>
          </tr>
        </table>
      </div>
    </div>

    
    <div class='text'>
      {{itemParams.rule.disclaimer}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsParams',
  props: {
    itemParams: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-params {
    width: 100vw;
    border-bottom: solid 10px #f0f0f0;
    padding-bottom: 15px;
  }
  .introduction {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f0f0f0;
    font-size: 14px;
    color: #777;
  }
  .params-table .e-table {
    /* margin: 10px ; */
    font-size: 13px;
    color: #999;
    margin-bottom: 20px;
  }
  .params {
    padding-top: 10px;
    padding-left: 10px;
  }
  .text {
    font-size: 13px;
    color: #fe4601;
    margin-left: 10px;
    line-height: 1.5;
  }
  .params-key {
    color: #777;
    font-size: 14px;
    margin-bottom: 15px;
  }
</style>