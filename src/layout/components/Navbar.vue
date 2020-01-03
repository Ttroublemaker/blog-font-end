<template>
  <div class="navbar">
    <!-- 控制侧标题栏收缩或展开 -->
    <hamburger :isActive="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- 显示当前页面路径 -->
    <breadcrumb v-if="navBarType==='Breadcrumb'" class="breadcrumb-container" />
    <tabs v-else class="tabs-container" />
    <!-- 用户区域 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar class="user-avatar" size="medium">
            <img :src="avatar" alt />
          </el-avatar>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">注销</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Breadcrumb from "@/components/Breadcrumb"
import Hamburger from "@/components/Hamburger"
import Tabs from "@/components/Tabs"

export default {
  data() {
    return { navBarType: "Tabs" }
  },
  components: {
    Breadcrumb,
    Tabs,
    Hamburger
  },
  mounted() {
    this.getNavBarType()
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    getNavBarType() {
      this.$eventBus.$on("navBarType", v => {
        this.navBarType = v
      })
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar")
    },
    async logout() {
      await this.$store.dispatch("user/logout")
      // 去往登录页面，并将当前路由作为参数传过去
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      this.$router.push("/login")
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container,
  .tabs-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 40px;

      .avatar-wrapper {
        margin-top: 5px;
        margin-right: 10px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
