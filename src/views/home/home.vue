<template>
  <div class="wraper">
    <el-button type="primary" @click="toAdd_edit('add',id=2)">新建Blog</el-button>
    <div class="search-list">
      <div class="seacrh-title">
        <el-input placeholder="按关键字搜索blog" v-model="searchInput" @keyup.enter.native="search">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click.native="search">搜索</el-button>
      </div>
      <span class="close" @click="closeSearchResult" v-if="searching">
        <i class="iconfont icon-shanchuguanbicha"></i>
        <svg-icon iconClass="shanchuguanbicha"></svg-icon>
      </span>
      <searchResult :searchList="searchList" v-if="searching" />
    </div>
    <blogList v-if="!searching" />
  </div>
</template>
<script>
import blogList from "./components/blog-list";
import searchResult from "./components/search-list";
export default {
  components: {
    blogList,
    searchResult
  },
  data() {
    return {
      searchInput: "",
      searching: false,
      searchList: [
        {
          name: "01",
          title: "如何做一个美男子search",
          time: "2019-12-30",
          content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
        },
        {
          name: "02",
          title: "如何做一个美男子",
          time: "2019-12-30",
          content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
        },
        {
          name: "03",
          title: "如何做一个美男子",
          time: "2019-12-30",
          content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
        }
      ]
    };
  },
  methods: {
    search() {
      this.searching = true;
    },
    closeSearchResult() {
      this.searching = false;
    },
    toAdd_edit(type, id) {
      this.$router.push({ path: "/create", query: { type, id } });
    }
  }
};
</script>
<style  lang='scss' scoped>
.wraper {
  text-align: left;
  padding: 20px 80px 20px 40px;
  .el-button {
    margin-bottom: 10px;
  }
  .search-list {
    position: relative;
    padding: 0;
    margin-bottom: 0;
    .seacrh-title {
      margin-bottom: 10px;
      display: inline-flex;
      .el-input {
        margin-right: 10px;
      }
    }
    .close {
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      right: -10px;
      top: 47px;
      font-size: 24px;
    }
  }
}
</style>