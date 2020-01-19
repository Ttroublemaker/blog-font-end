<template>
  <div class="wraper">
    <el-button type="primary" @click.native='toLogin'>登录</el-button>
    <el-button type="primary">更新Blog</el-button>
    <el-button type="primary">删除Blog</el-button>
  </div>
</template>
<script>
import {login} from '@/api/index'
export default {
  data() {
    return {};
  },
  methods:{
    toLogin(){
      login('zhangsan',123)
    }
  }
};
</script>
<style scoped>
.wraper {
  overflow-x: hidden;
}
</style>