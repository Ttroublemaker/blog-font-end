<template>
  <div class="container">
    <span class="back" @click="goBack">
      <svg-icon iconClass="fanhui"></svg-icon>返回
    </span>
    <header class='title'>{{title}}</header>
    <div class='subtitle'>
      <span>作者：{{author}}</span>
      <span>创建时间：{{createtime}}</span>
      <span>分类：{{classify}}</span>
      <span>特别推荐：{{recommend=='0'?'否':'是'}}</span>
      <span>更新时间：{{updatetime}}</span>
    </div>
    <div class='introduction'>{{introduction}}</div>
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
      markdownValue: '',
      title: '',
      author:'',
      createtime: '',
      classify: '',
      recommend: '',
      updatetime: '',
      introduction: ''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getArticleDetail() {
      let id = this.$route.query.id;
      console.log(id,'id')
      getBlogDetail(id).then(res=>{
        console.log(res)
        this.markdownValue = res.data.content
        this.title = res.data.title
        this.author = res.data.author
        this.createtime = res.data.createtime
        this.classify = res.data.classify
        this.recommend = res.data.recommend
        this.updatetime = res.data.updatetime
        this.introduction = res.data.subtitle
        console.log(res)
      })
    }
  },
  created() {
    this.getArticleDetail();
  }
};
</script>
<style lang="scss" scoped>
.container {
  text-align: left;
  width: 100%;
  padding: 20px 80px 20px 40px;
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
    margin: 20px 0;
    font-size: 36px;
    font-weight: 600;
  }
  .subtitle{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
    span{
      display: inline-flex;
      margin: 10px 0;
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
    margin-top: 40px;
  }
}
</style>