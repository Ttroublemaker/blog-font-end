<template>
  <div>
    <el-page-header @back="goBack" content="新建博客"></el-page-header>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>