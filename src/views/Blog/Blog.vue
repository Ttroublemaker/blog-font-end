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
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="12"
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
      activeName: "first",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      recommendList: [{}, {}, {}, {}]
    };
  },
  methods: {
    toLogin() {
      login("zhangsan", 123);
    },
    toCreateNewBlog() {
      this.$router.push("/blog-create");
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 10px;
    width: 60%;
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
        margin-bottom: 20px;
      }
    }
  }
}
</style>
