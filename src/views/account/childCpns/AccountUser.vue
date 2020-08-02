<template>
  <div class="user-card">
    <el-card class="box-card">
      <div class="wrapper">
        <div class="info">
          <div class="user-name">用户xxx</div>
          <div class="address">用户请输入地址*********************</div>
        </div>
        <div class="icon">
          <img src="@/assets/images/detail/right.png" alt="">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AccountUser'
}
</script>

<style scoped>
  .user-card {
    width: 100vw;
  }
  .box-card {
    height: 100px;
    margin: 15px 10px 10px 10px;
    border-radius: 10px;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .info {
    width: 90%;
  }
  .address {
    margin-top: 15px;
    font-size: 13.5px;
    color: #555;
  }
  .icon {
    flex: 1;
  }
  .icon img {
    width: 100%;
    margin-left: 20px;
    margin-right: 10px;
  }

</style>