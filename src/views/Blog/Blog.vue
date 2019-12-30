<template>
  <div class="blog">
    <div class="blog-list">
      <header class="header">
        <i class="iconfont icon-liebiao2"></i>博客列表
        <el-button type="text" icon="el-icon-edit" @click="toCreateNewBlog">新建</el-button>
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
    <div class="recommend-list">
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

export default {
  components: {
    blogItem,
    recommendItem
  },
  data() {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      activeName: "first",
      isSmall: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      recommendList: [{}, {}, {}, {}]
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
    toCreateNewBlog() {
      this.$router.push({
        path: "/blog-create",
        query: {
          type: "add"
        }
      });
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
  position: relative;
  .header {
    margin-bottom: 10px;
    padding: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    .el-button {
      padding: 0 10px;
    }
  }
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
