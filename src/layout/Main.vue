<template>
  <div class="main-container">
    <headerBar />
    <router-view :key="$route.fullPath" />
    <el-backtop :visibility-height="400" :bottom="40">
      <i class="iconfont icon-fanhuidingbu"></i>
    </el-backtop>
  </div>
</template>
<script>
import headerBar from "./components/header-bar";
export default {
  components: {
    headerBar
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  margin: 0 15%;
  min-height: 400px;
  .el-backtop {
    i {
      font-size: 32px;
    }
  }
}
@media screen and (max-width: 1400px) {
  .main-container {
    margin: 0 5%;
  }
}
</style>