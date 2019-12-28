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
  width: 96%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  min-height: 400px;
  i {
    font-size: 28px;
  }
}
</style>