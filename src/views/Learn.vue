<template>
  <div class="about doudong">Learn</div>
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
<style lang="scss" scoped>
</style>
