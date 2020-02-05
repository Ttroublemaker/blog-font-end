<template>
  <div class="wraper">
    <el-button type="primary" @click="toAdd_edit('add',id=2)">新建Blog</el-button>
    <div class="search-list">
      <searchResult @searching="closeSearch" />
    </div>
    <div class="blog-list" v-if="!searching">
      <blogList />
    </div>
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
      searchList: []
    };
  },
  methods: {
    closeSearch (val) {
      this.searching = val
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