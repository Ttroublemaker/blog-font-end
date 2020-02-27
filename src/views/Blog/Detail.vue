<template>
  <div class="container">
    <span class="back" @click="goBack">
     <i class="iconfont icon-fanhui" style='font-size:18px'></i> 返回
    </span>
    <header class='title'>{{title}}</header>
    <div class='subtitle'>
      <span>{{author}}</span>
      <span>{{createtime}}</span>
      <span v-if="size==='large'">分类：{{classify}}</span>
      <span v-if="size==='large'">特别推荐：{{recommend=='0'?'否':'是'}}</span>
      <span v-if="size==='large'">更新时间：{{updatetime}}</span>
    </div>
    <div class='introduction' v-if="size==='large'">{{introduction}}</div>
    <mavon-editor
      v-model="markdownValue"
      :subfield="false"
      :boxShadow="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
    />
  </div>
</template>
<script>
import { getBlogDetail } from "../../api/index.js";
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      markdownValue: '',
      title: '',
      author:'',
      createtime: '',
      classify: '',
      recommend: '',
      updatetime: '',
      introduction: '',
      listType: 'list' // list 是显示列表，recommend显示是推荐
    };
  },
  computed: {
    // 移动端适配
    size() {
      if (this.screenWidth > 800) {
        return "large";
      } else {
        return "small";
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({path:'/blog',query:{listType:this.listType}})
    },
    getArticleDetail() {
      let id = this.$route.query.id;
      getBlogDetail(id).then(res=>{
        res = res.data
        this.markdownValue = res.data.content
        this.title = res.data.title
        this.author = res.data.author
        this.createtime = res.data.createtime
        this.classify = res.data.classify
        this.recommend = res.data.recommend
        this.updatetime = res.data.updatetime
        this.introduction = res.data.subtitle
      })
    }
  },
  created() {
    this.getArticleDetail();
    this.listType = this.$route.query.listType
  }
};
</script>
<style lang="scss" scoped>
.container {
  text-align: left;
  .back {
    height: 40px;
    padding: 4px;
    cursor: pointer;
    .svg-icon {
      margin-right: 6px;
    }
  }
  header.title{
    display: flex;
    justify-content: center;
    margin: 10px 0;
    font-size: 32px;
    font-weight: 600;
  }
  .subtitle{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
    span{
      display: inline-flex;
      padding: 0 10px;
      border-right: 1px solid #ccc;
      &:last-child{
        border-right: none;
      }
    }
  }
  .introduction{
    width: 100%;
    text-align: center;
  }
  .markdown-body {
    margin-top: 20px;
  }
}
@media screen and (max-width: 900px) {
  header.title{
    font-size: 24px!important;
  }
}
</style>