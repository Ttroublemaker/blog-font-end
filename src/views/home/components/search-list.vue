<template>
  <div class="container">
    <header class="header">
      <svg-icon iconClass="liebiao2" />搜索结果
    </header>
    <blogItem :blogList="searchList" v-if="searchList.length" />
    <el-pagination
      v-if="searchList.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :small="isSmall"
      :page-size="10"
      :pager-count="5"
      :total="1922"
      :layout="page_Layout"
    ></el-pagination>
    <span v-else class="notice">对不起, 未搜索到相关内容</span>
  </div>
</template>
<script>
import blogItem from "./blog-item";
export default {
  props: {
    searchList: {
      type: Array,
      required: true
    }
  },
  components: {
    blogItem
  },
  data() {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      isSmall: false,
      searchInput: ""
    };
  },
  computed: {
    // 移动端适配
    page_Layout() {
      if (this.screenWidth > 800) {
        this.isSmall = false;
        return "prev, pager, next, jumper";
      } else {
        this.isSmall = true;
        return "prev, pager, next";
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 20px;
  .header {
    text-align: left;
    margin-bottom: 10px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    .svg-icon {
      margin-right: 6px;
      position: relative;
      top: 2px;
    }
  }
  .notice {
    display: inline-block;
    margin: 20px 0;
  }
  .el-pagination {
    margin-top: 20px;
    text-align: right;
  }
}
</style>