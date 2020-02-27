<template>
  <div class="container">
    <header class="header">
      <i class="iconfont icon-tuijian1"></i> 特别推荐
    </header>
    <div class="item" v-for="(item,index) in recommendList" :key="index">
      <div class="img">
        <img src="../../../../public/images/all.jpg" />
      </div>
      <div class="title">{{item.title}}</div>
      <div class="content">
        {{item.subtitle}}
      </div>
      <div class="go-detail">
        <el-button type="text" @click.native='toDetail(item.id)'>
          <i class="iconfont icon-yuedu"></i> 阅读文章
        </el-button>
      </div>
    </div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :small="isSmall" :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="page_size" :pager-count='5' :layout="page_Layout" :total="total"></el-pagination>
  </div>
</template>
<script>
import { getBlogList } from "../../../api/index.js";
import { Loading } from 'element-ui';
export default {
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      recommendList: [],
      total: 0,
      isSmall: false,
      page_size: 4,
      currentPage: 1,
      loading: false
    }
  },
  created () {
    this.initData()
  },
  computed: {
    // 移动端适配
    page_Layout () {
      if (this.screenWidth > 800) {
        this.isSmall = false;
        return "total,sizes, prev, pager, next, jumper";
      } else {
        this.isSmall = true;
        return "prev, pager, next";
      }

    }
  },
  methods: {
    // 获取推荐列表
    initData () {
      let loadingInstance = Loading.service({ fullscreen: 'true', text: '拼命加载中', spinner: "el-icon-loading" })
      let params = {
        page_size: this.page_size,
        currentPage: this.currentPage,
        recommend: 1
      }
      getBlogList(params).then(res => {
        this.recommendList = res.data.data.data
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
    toDetail (id) {
      this.$router.push({ path: '/blog-detail', query: { id } })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .header {
    padding: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .item {
    width: 45%;
    margin-top: 20px;
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    flex-direction: column;
    align-items: space-around;
    font-size: 14px;
    line-height: 1.5em;
    padding: 10px;
    border: 1px solid #ddd;
    transition: all 0.5s;
    .img {
      width: 100%;
      height: 0; // 设置高为0，让padding撑起高
      padding-bottom: 60%;
      overflow: hidden;
      img {
        width: 100%;
        transition: all 0.5s;
      }
    }
    .title {
      font-weight: bold;
      padding-right: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 8px 0;
    }
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .el-pagination {
    width: 100%;
    margin-top: 20px;
    text-align: right;
  }
}

.item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  img {
    transform: scale(1.2);
  }
}

@media screen and (max-width: 900px) {
  .container {
    .item {
      width: 100% !important;
    }
  }
}
</style>