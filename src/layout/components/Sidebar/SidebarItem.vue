<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <!-- 如果路径下没有需要展示的子路径或仅有一个，即最后一级目录-->
    <template
      v-if="hasNoShowingChild(item.children,item) && (!currentMenu.children||currentMenu.noShowingChildren)"
    >
      <app-link v-if="currentMenu.meta" :to="resolvePath(currentMenu.path)" :linkInfo="currentMenu">
        <el-menu-item :index="resolvePath(currentMenu.path)">
          <svg-icon v-if="currentMenu.meta.icon" :iconClass="currentMenu.meta.icon"></svg-icon>
          <span v-if="currentMenu.meta.title" slot="title">{{currentMenu.meta.title}}</span>
          <!-- {{resolvePath(currentMenu.path)}} -->
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <svg-icon v-if="item.meta.icon" :iconClass="item.meta.icon"></svg-icon>
        <!-- 由于组件额外包裹了一层menu-wrapper，导致组件title栏在收缩时不正常消失 -->
        <span v-if="item.meta.title&&!(isCollapse&& !isNest)" slot="title">{{item.meta.title}}</span>
        <!-- {{resolvePath(item.path)}} -->
      </template>
      <!-- 组件递归，递归渲染 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :isNest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/modules/validate";
import AppLink from "./Link";
import { mapGetters } from "vuex";

export default {
  name: "SidebarItem",
  components: { AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.currentMenu = null; //当前菜单
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  methods: {
    // 判断是否有需要展示的子标题（路径）
    hasNoShowingChild(children = [], parent) {
      // 将需要展示的子路径放在showingChildren对象中
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.currentMenu = item;
          return true;
        }
      });
      if (showingChildren.length === 0) {
        // 如果数组为空，则把外层路由作为item显示
        this.currentMenu = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      // 如果数组只有一个，则将这项作为item显示
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
    // 处理路径
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      // path.resolve() 方法把一个路径或路径片段的序列解析为一个绝对路径
      // 见：https://blog.csdn.net/kikyou_csdn/article/details/83150538
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
