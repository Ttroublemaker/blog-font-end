<template>
  <div class="about">
    <h1>欢迎访问我的博客</h1>
    <el-button @click="toLogin">默认按钮</el-button>
  </div>
</template>

<script>
import { login } from "../api/index.js";
export default {
  data() {
    return {};
  },
  methods: {
    toLogin() {
      login("zhangsan", 123);
    }
  }
};
</script>
