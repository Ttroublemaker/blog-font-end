<template>
  <div class="container">
    <span class="back" @click="goBack">
      <svg-icon iconClass="fanhui"></svg-icon>返回
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
      <mavon-editor v-model="markdownValue" @save="handleOnSave" />
      <el-button type="primary" class="save" @click.native="handleOnSave">保存</el-button>
      <!-- <el-button type="primary" class="save" @click.native="handle">test</el-button> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      markdownValue: "", //markdown编辑器内容
      uploadFile: "",
      temp: "",
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
    },
    handleOnSave() {
      console.log(this.markdownValue);
      this.temp = this.markdownValue;
    },
    handle() {
      this.markdownValue = this.temp;
    }
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
  .blog-edit-add {
    position: relative;
    padding-bottom: 60px;
    margin-bottom: 20px;
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
        text-align: left;
        margin-right: 10px;
      }
    }
    .save {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>