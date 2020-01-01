<template>
  <div class="blog">
    <div class="search-list">
      <div class="seacrh-title">
        <el-input placeholder="按关键字搜索blog" v-model="searchInput" @keyup.enter.native="search">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click.native="search">搜索</el-button>
      </div>
      <span class="close" @click="closeSearchResult" v-if="searching">
        <i class="iconfont icon-shanchuguanbicha"></i>
      </span>
      <searchResult :searchList="searchList" v-if="searching" />
    </div>
    <div class="blog-list" v-if="!searching">
      <blogList />
    </div>
    <div class="recommend-list" v-if="!searching">
      <header class="header">
        <i class="iconfont icon-tuijian1"></i> 特别推荐
      </header>
      <section class="recommend-items-container">
        <div class="item" v-for="(item,index) in recommendList" :key="index">
          <recommendItem />
        </div>
      </section>
    </div>
    <div class="blog-list-timeline" v-if="!searching">
      <blogListTimeline />
    </div>
  </div>
</template>

<script>
import { login } from "../../api/index.js";
import blogList from "./components/blog-list";
import recommendItem from "./components/recommend-item";
import searchResult from "./components/search-result";
import blogListTimeline from "./components/blog-list-timeline";

export default {
  components: {
    recommendItem,
    searchResult,
    blogList,
    blogListTimeline
  },
  data() {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      activeName: "first",
      searchInput: "",
      recommendList: [{}, {}, {}, {}],
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
    toLogin() {
      login("zhangsan", 123);
    },
    search() {
      this.searching = true;
      console.log("search");
    },
    closeSearchResult() {
      console.log("close");
      this.searching = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.blog {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .search-list,
  .blog-list,
  .recommend-list {
    box-sizing: border-box;
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 10px;
    width: 70%;
    margin-bottom: 20px;
  }
  .search-list {
    border: 1px solid transparent;
    position: relative;
    padding: 0;
    margin-bottom: 0;
    .seacrh-title {
      margin-bottom: 20px;
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
      i {
        font-size: 24px;
      }
    }
  }

  .recommend-list {
    .header {
      margin-bottom: 10px;
      padding: 10px 0;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .recommend-items-container {
      padding: 20px 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .item {
        width: 45%;
        margin: 20px 0;
      }
    }
  }
  .blog-list-timeline {
    position: absolute;
    text-align: left;
    right: 0;
    width: 30%;
  }
}
@media screen and (max-width: 1200px) {
  .search-list,
  .blog-list,
  .recommend-list {
    width: 100% !important;
  }
  .blog-list-timeline {
    position: relative !important;
    width: 100% !important;
  }
}
@media screen and (max-width: 900px) {
  .recommend-list {
    .recommend-items-container {
      .item {
        width: 90% !important;
        margin-bottom: 30px !important;
      }
    }
  }
}
</style>
