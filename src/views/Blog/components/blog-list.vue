<template>
  <div class="container">
    <header class="header">
      <i class="iconfont icon-liebiao2"></i>博客列表
    </header>
    <section class='classify'>
      <span class="label">分类</span>
      <el-radio-group v-model="radio" @change='classifySwitch'>
        <el-radio :label="item" v-for="(item,index) in classifyList" :key='index'>{{item}}</el-radio>
      </el-radio-group>
    </section>
    <section class="blog-items-container">
      <blogItem :blogList="blogList" v-if="blogList&&blogList.length" />
      <span class="notice" v-else>暂无相关内容</span>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :small="isSmall" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="page_size" :pager-count='5' :layout="page_Layout" :total="total"></el-pagination>
    </section>
  </div>
</template>
<script>
import blogItem from "./blog-item";
import { login, getBlogList, getBlogDetail, createNewBlog, updateBlog, switchrecommend, delBlog, artClassify } from "../../../api/index.js";
import { Loading } from 'element-ui';
export default {
  components: {
    blogItem
  },
  props:{
    classify:{
      type:String,
      default:'全部'
    }
  },
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      isSmall: false,
      blogList: [],
      total: 0,
      currentPage: 1,
      page_size:10,
      radio: '全部',
      classifyList:[]
    };
  },
  created () {
    this.radio = this.classify
    this.initData()
    this.getArtClassifyList()
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
      let loadingInstance = Loading.service({ fullscreen: 'true', text: '拼命加载中', spinner: "el-icon-loading" })
      let params = {
        page_size: this.page_size, 
        classify:this.radio,
        currentPage:this.currentPage,
      }
      getBlogList(params).then(res => {
        this.blogList = res.data.data.data
        this.total = res.data.data.pagination.total
        loadingInstance.close()
      })
    },
    // 获取分类列表
    getArtClassifyList(){
      artClassify().then(res=>{
        this.classifyList= ['全部',...res.data.data]
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
    classifySwitch(radio){
      this.initData()
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
  .classify {
    padding: 10px 0;
    display: flex;
    .label {
      display: inline-block;
      width: 50px;
      line-height: 26px;
    }
    .el-radio-group{
      padding-left: 10px;
      overflow: scroll;
      display: flex;
      &::-webkit-scrollbar{
        display:none
      }
    }
    .el-radio{
      margin:5px 10px 5px 0;
    }
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