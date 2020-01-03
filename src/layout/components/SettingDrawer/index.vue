<template>
  <section class="setting-container">
    <svg-icon iconClass="icon_setting" key="icon" class="iconSetting" @click.native="drawer = true"></svg-icon>
    <el-drawer title="个人自定义中心" :visible.sync="drawer" :direction="direction">
      <div class="navBarSelect selectItem">
        <h4 class="item-title">导航栏</h4>
        <el-radio v-model="radio" label="Breadcrumb">面包屑</el-radio>
        <el-radio v-model="radio" label="Tabs">标签</el-radio>
      </div>
    </el-drawer>
  </section>
</template>

<script>
import svgIcon from "@/components/SvgIcon";
export default {
  name: "SettingDrawer",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      radio: "Breadcrumb"
    };
  },
  components: {
    svgIcon
  },
  watch: {
    radio(val) {
      this.$eventBus.$emit("navBarType", this.radio);
    }
  }
};
</script>

<style  lang="scss">
.setting-container {
  .iconSetting {
    position: absolute;
    top: 45%;
    right: 30px;
    font-size: 24px;
    z-index: 999;
  }
}
.el-drawer {
  .el-drawer__header {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
  .el-drawer__body {
    padding-left: 40px;
  }
}
</style>

