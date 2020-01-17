<template>
  <div class="container">
    <header class="header">
      <i class="iconfont icon-tuijian1"></i> 特别推荐
    </header>
    <div class="item" v-for="(item,index) in recommendList" :key="index">
      <div class="img">
        <img src="../../../assets/images/bg1.gif" alt />
      </div>
      <div class="title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题</div>
      <div class="content">
        我是内容自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的自从入了这行，很多人跟我说可以做网络教程，
        我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的
      </div>
      <div class="go-detail">
        <el-button type="text">
          <i class="iconfont icon-yuedu"></i> 阅读文章
        </el-button>
      </div>
    </div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :small="isSmall" :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="4" :pager-count='5' :layout="page_Layout" :total="total"></el-pagination>
  </div>
</template>
<script>
import { getBlogList } from "../../../api/index.js";

export default {
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      recommendList: [],
      total: 0,
      isSmall: false,
      page_size: 4,
      currentPage: 1
    }
  },
  created () {
    this.getRecommendList()
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
    getRecommendList () {
      getBlogList({ page_size: this.page_size}).then(res => {
        this.recommendList = res.data.data.data
        this.total = res.data.data.pagination.total
      })
    },
    handleSizeChange (val) {
      getBlogList({ page_size: val}).then(res => {
        this.recommendList = res.data.data.data
      })
    },
    handleCurrentChange (val) {
      getBlogList({ page_size: this.page_size, page_count: val }).then(res => {
        this.recommendList = res.data.data.data
      })
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
    margin-bottom: 10px;
    padding: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .item {
    width: 45%;
    margin: 20px 0;
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
      padding-bottom: 60%; /* 让div的高等于宽的0.618黄金比 */
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
      width: 90% !important;
    }
  }
}
</style>