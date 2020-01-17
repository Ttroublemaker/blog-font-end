<template>
  <div class="container">
    <header class="header">
      <i class="iconfont icon-liebiao2"></i>博客列表
    </header>
    <section class="blog-items-container">
      <blogItem :blogList="blogList" v-if="blogList.length" />
      <span class="notice" v-else>暂无相关内容</span>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :small="isSmall" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" :pager-count='5' :layout="page_Layout" :total="total"></el-pagination>
    </section>
  </div>
</template>
<script>
import blogItem from "./blog-item";
import { login, getBlogList, getBlogDetail, createNewBlog, updateBlog, switchrecommend, delBlog } from "../../../api/index.js";

export default {
  components: {
    blogItem
  },
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      isSmall: false,
      blogList: [],
      total: 0,
      currentPage:1
    };
  },
  created () {
    this.initData()
  },
  computed: {
    // 移动端适配
    page_Layout () {
      if (this.screenWidth > 800) {
        this.isSmall = false;
        return "total, sizes, prev, pager, next, jumper";
      } else {
        this.isSmall = true;
        return "prev, pager, next";
      }
    }
  },
  methods: {
    // 获取初始数据
    initData () {
      getBlogList().then(res => {
        console.log(res.data.data.data)
        this.blogList = res.data.data.data
        this.total = res.data.data.pagination.total
      })
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
      getBlogList({ page_size: val }).then(res => {
        this.blogList = res.data.data.data
      })
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`);
      getBlogList({ page_count: val }).then(res => {
        this.blogList = res.data.data.data
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-bottom: 20px;
  .header {
    margin-bottom: 10px;
    padding: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
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