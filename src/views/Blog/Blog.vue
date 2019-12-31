<template>
  <div class="blog">
    <div class="search-list">
      <div class="seacrh-title">
        <el-input placeholder="按关键字搜索blog" v-model="searchInput" @keyup.enter.native="search">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary" icon="el-icon-search" @click.native="search">搜索</el-button>
      </div>
      <searchResult :searchList="searchList" v-if="searching" />
    </div>
    <div class="blog-list" v-if="!searching">
      <header class="header">
        <i class="iconfont icon-liebiao2"></i>博客列表
      </header>
      <section class="blog-items-container">
        <el-tabs v-model="activeName">
          <el-tab-pane label="HTML" name="first">
            <blogItem />
          </el-tab-pane>
          <el-tab-pane label="CSS" name="second">
            <blogItem />
          </el-tab-pane>
          <el-tab-pane label="JavaScript" name="third">
            <blogItem />
          </el-tab-pane>
          <el-tab-pane label="Other" name="fourth">
            <blogItem />
          </el-tab-pane>
        </el-tabs>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          background
          :small="isSmall"
          :page-size="10"
          :pager-count="5"
          :total="1922"
          :layout="page_Layout"
        ></el-pagination>
      </section>
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
  </div>
</template>

<script>
import { login } from "../../api/index.js";
import blogItem from "./components/blog-item";
import recommendItem from "./components/recommend-item";
import searchResult from "./components/search-result";

export default {
  components: {
    blogItem,
    recommendItem,
    searchResult
  },
  data() {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      activeName: "first",
      isSmall: false,
      searchInput: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
    toLogin() {
      login("zhangsan", 123);
    },
    search() {
      this.searching = true;
      console.log("search");
    },
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
.blog {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  .search-list {
    .seacrh-title {
      margin-bottom: 20px;
      display: inline-flex;
      .el-input {
        margin-right: 10px;
      }
    }
  }
  .header {
    margin-bottom: 10px;
    padding: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
  }
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
  .el-pagination {
    margin-top: 20px;
    text-align: right;
  }
  .recommend-list {
    .recommend-items-container {
      padding: 20px 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .item {
        width: 45%;
        margin-bottom: 50px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .blog-list,
  .recommend-list {
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
