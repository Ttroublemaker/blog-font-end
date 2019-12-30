<template>
  <div class="main-container">
    <headerBar />
    <router-view :key="$route.fullPath" />
    <el-backtop :visibility-height="400" :bottom="60">
      <i class="iconfont icon-Touchgesturescrolltop"></i>
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
  width: 100%;
  box-sizing: border-box;
  padding: 0 15%;
  position: absolute;
  min-height: 400px;
  i {
    font-size: 28px;
  }
}
@media screen and (max-width: 1400px) {
  .main-container {
    padding: 0 5%;
  }
}
</style>