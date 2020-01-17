<template>
  <div class="blog">
    <!-- <el-upload class="upload-demo" action="http://localhost:3000/file/uploadFile/multiple" multiple :limit="3" ref="elupload">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-button size="small" type="primary" @click="download" style="margin:10px 0">点击下载</el-button>
    <el-button size="small" type="primary" @click="del">点击删除</el-button> -->
    <div class="search-list">
      <searchResult @searching=closeSearch />
    </div>
    <div class="blog-list" v-if="!searching">
      <blogList />
    </div>
    <div class="recommend-list" v-if="!searching">
      <recommendItem />
    </div>
    <!-- <div class="blog-list-timeline" v-if="!searching">
      <blogListTimeline />
    </div> -->
  </div>
</template>

<script>
import blogList from "./components/blog-list";
import recommendItem from "./components/recommend-item";
import searchResult from "./components/search-result";
import blogListTimeline from "./components/blog-list-timeline";

const fs = require('fs')
export default {
  components: {
    recommendItem,
    searchResult,
    blogList,
    blogListTimeline
  },
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      searching: false,
    };
  },
  methods: {
    closeSearch (val) {
      this.searching = val
    },
    downloadUrl (url) {
      let iframe = document.createElement('iframe');
      iframe.style.display = 'none'
      iframe.src = url
      iframe.onload = function () {
        document.body.removeChild(iframe)
      }
      document.body.appendChild(iframe)
    },
    download () {
      const oldname = '1578541601676-add.png'
      const filename = '312'
      this.downloadUrl(`http://localhost:3000/file/downloadFile?filename='${filename}'&oldname=${oldname}`);
    },
    del () {

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
  .search-list,
  .blog-list,
  .recommend-list {
    box-sizing: border-box;
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 20px;
    width: 70%;
    margin-bottom: 20px;
  }
  .search-list {
    border: 1px solid transparent;
    padding: 0;
    margin-bottom: 0;
  }
  .blog-list-timeline {
    position: absolute;
    text-align: left;
    right: 0;
    width: 30%;
  }
}
@media screen and (max-width: 1200px) {
  .search-list,
  .blog-list,
  .recommend-list {
    width: 100% !important;
  }
  .blog-list-timeline {
    position: relative !important;
    width: 100% !important;
  }
}
</style>
