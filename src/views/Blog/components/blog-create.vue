<template>
  <div class="container">
    <span class="back" @click="goBack">
      <i class="iconfont icon-fanhui">返回</i>
    </span>
    <div class="blog-edit-add">
      <h4 class="title">{{blogType}}</h4>
      <div class="item">
        <span class="label">博客类型：</span>
        <el-select v-model="value" clearable placeholder="请选择Blog类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="item">
        <span class="label">是否推荐：</span>
        <el-switch v-model="switch_value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "html",
          label: "  HTML"
        },
        {
          value: "css",
          label: "CSS"
        },
        {
          value: "js",
          label: "JavaScript"
        },
        {
          value: "other",
          label: "Other"
        }
      ],
      value: "",
      switch_value: ""
    };
  },
  computed: {
    blogType() {
      let type = this.$route.query.type;
      if (type === "add") {
        return "新增博客";
      } else if (type === "edit") {
        return "更新博客";
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  text-align: left;
  .back {
    padding: 4px;
    cursor: pointer;
  }
  .blog-edit-add {
    .title {
      text-align: center !important;
      margin-bottom: 40px;
    }
    .item {
      margin-bottom: 20px;
      width: 360px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .label {
        display: inline-block;
        width: 100px;
        text-align: right;
        margin-right: 10px;
      }
    }
  }
}
</style>