<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
        <!-- <sidebar-item v-for="route in constantRoutes" :key="route.path" :item="route" :base-path="route.path" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import Layout from "@/layout";
import { constantRoutes } from "@/router";

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      showLogo: true
    };
  },
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    constantRoutes() {
      return constantRoutes;
    },
    // 之所以要加这个属性，是为了浏览器刷新后，仍然可以定位到之前选中的路由
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
<style lang="scss">
.scrollbar-wrapper {
  text-align: left; //el-menu的对齐方式是继承，这里覆盖app的居中设置
}
</style>