<template>
  <div class="container">
    <span class="back" @click="goBack">
      <svg-icon iconClass="fanhui"></svg-icon>返回
    </span>
    <mavon-editor
      v-model="markdownValue"
      :subfield="false"
      :boxShadow="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      markdownValue: `![img.jpg](1)`
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getArticleDetail() {
      let id = this.$route.query.id;
      console.log(id);
    }
  },
  created() {
    this.getArticleDetail();
  }
};
</script>
<style lang="scss" scoped>
.container {
  text-align: left;
  width: 100%;
  padding: 20px 80px 20px 40px;
  .back {
    height: 40px;
    padding: 4px;
    cursor: pointer;
    .svg-icon {
      margin-right: 6px;
    }
  }
  .markdown-body {
    margin-top: 40px;
  }
}
</style>