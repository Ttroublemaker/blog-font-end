<template>
  <div class="container">
    <div class="seacrh-title">
      <el-input placeholder="按关键字搜索blog" v-model="searchInput" @keyup.enter.native="search" width='200px'>
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click.native="search">搜索</el-button>
    </div>
    <div class="search-list" v-if="searching">
      <span class="close" @click="closeSearchResult" v-if="searching">
        <i class="iconfont icon-shanchuguanbicha"></i>
      </span>
      <header class="header">
        <i class="iconfont icon-sousuo2"></i> 搜索结果
      </header>
      <blogItem :blogList="searchList" v-if="searchList.length" />
      <el-pagination v-if="searchList.length" @size-change="handleSizeChange" @current-change="handleCurrentChange" background :small="isSmall" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="page_size" :pager-count='5' :layout="page_Layout" :total="total"></el-pagination>
      <span v-else class="notice">对不起, 未搜索到相关内容</span>
    </div>
  </div>
</template>
<script>
import blogItem from "./blog-item";
import { getBlogList } from "../../../api/index.js";
import { Loading } from 'element-ui';

export default {
  components: {
    blogItem
  },
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      isSmall: false,
      searchInput: "",
      searchList: [],
      searching: false,
      total: 0,
      currentPage: 1,
      page_size: 10
    };
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
    // 搜索
    search () {
      this.searching = true;
      this.initData()
      this.$emit('searching', true)
    },
    // 关闭搜索内容
    closeSearchResult () {
      this.searching = false;
      this.$emit('searching', false)
    },
    initData () {
      let loadingInstance = Loading.service({ fullscreen: 'true', text: '拼命加载中', spinner: "el-icon-loading" })
      let params = {
        keyword: this.searchInput,
        page_size: this.page_size, 
        currentPage:this.currentPage,
      }
      getBlogList(params).then(res => {
        this.searchList = res.data.data.data
        this.total = res.data.data.pagination.total
        loadingInstance.close()
      })
    },
    handleSizeChange (val) {
      this.page_size = val
      this.initData()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.initData()
    },
  }
};
</script>
<style lang="scss" scoped>
.container {
  border-radius: 2px;
  .seacrh-title {
    margin-bottom: 20px;
    display: inline-flex;
    .el-input {
      margin-right: 10px;
    }
  }

  .search-list {
    border: 1px solid #ddd;
    position: relative;
    padding: 20px;
    margin-bottom: 0;
    .close {
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      right: 20px;
      top: 25px;
      i {
        font-size: 20px;
      }
    }
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
}
</style>