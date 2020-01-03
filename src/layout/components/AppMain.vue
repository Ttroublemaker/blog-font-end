<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <settingDrawer />
    <el-backtop :visibility-height="400" :bottom="60">
      <svg-icon iconClass="top1"></svg-icon>
    </el-backtop>
  </section>
</template>

<script>
import settingDrawer from "@/layout/components/SettingDrawer";
export default {
  name: "AppMain",
  computed: {
    key() {
      //解决同一组件路由跳转，数据不刷新问题
      return this.$route.name !== undefined
        ? this.$route.name + new Date().getTime()
        : this.$route + new Date().getTime();
    }
  },
  components: {
    settingDrawer
  }
};
</script>

<style scoped lang="scss">
.app-main {
  /*navbar高为50px  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .svg-icon {
    width: 1.5em !important;
    height: 1.5em !important;
  }
}
</style>

