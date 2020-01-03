<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <!--默认项-->
      <el-breadcrumb-item key="default">
        <!-- <router-link :to="{path:'/'}">Home</router-link> -->
        <!-- 解决url不变时的刷新问题 -->
        <a @click.prevent="handleLink({path:'/'})">Home</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  created() {
      this.getBreadcrumb()
    },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      // $route.matched数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.levelList)
      // console.log(matched)
    },

    // 填充 url 字符串的参数值,见 https://www.jianshu.com/p/7d2dbfdd1b0f
    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },

    handleLink(item) {
      const { redirect, path} = item
      // 方案1：保证每次点击路由的query项都是不一样的，确保会重新刷新view,
      // 方案2，重写路由的push方法，
      if (redirect) {
        this.$router.push({
          path:redirect,
          // query:{t: +new Date()}
        })
        return
      }
      this.$router.push({
        path:this.pathCompile(path),
        // query:{t: +new Date()}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
