<template>
  <div class="container">
    <span class="back" @click="goBack">
      <svg-icon iconClass="fanhui"></svg-icon>返回
    </span>
    <div class="blog-edit-add">
      <h4 class="title">{{blogType}}</h4>
      <div class="item">
        <span class="label">博客标题：</span>
        <el-input v-model="title" placeholder="请输入内容"></el-input>
      </div>
      <div class="item">
        <span class="label">博客类型：</span>
        <el-select v-model="value" clearable placeholder="请选择Blog类型">
          <el-option v-for="item in classifyList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>
      <div class="item">
        <span class="label">是否推荐：</span>
        <el-switch v-model="switch_value" active-color="#13ce66" inactive-color="#ff4949" :active-value="1" :inactive-value="0"></el-switch>
      </div>
      <div class="item">
        <span class="label">推荐图片：</span>
        <el-upload class="upload-demo" action="http://120.78.165.228/api/file/uploadFile/multiple" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="uploadSuccess" :file-list="fileList" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div class="item">
        <span class="label">文章说明：</span>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="subtitle">
        </el-input>
      </div>
      <mavon-editor v-model="markdownValue" ref=md @imgAdd="handleEditorImgAdd" @save="handleOnSave" />
      <el-button type="primary" class="save" @click.native="handleOnSave">保存</el-button>
    </div>
  </div>
</template>
<script>
import { getBlogDetail, createNewBlog, updateBlog, artClassify } from "../../api/index.js";
import axios from 'axios'

export default {
  data () {
    return {
      title: "",
      markdownValue: "", //markdown编辑器内容
      subtitle: '',
      classifyList: [],
      value: "",
      switch_value: "",
      fileList: [],
      recImg: ''
    };
  },
  created () {
    this.getArtClassifyList()
    this.initData()
  },
  computed: {
    blogType () {
      let type = this.$route.query.type;
      if (type === "add") {
        return "新增博客";
      } else if (type === "edit") {
        return "更新博客";
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    initData () {
      if (this.blogType !== '更新博客') return
      let id = this.$route.query.id;
      getBlogDetail(id).then(res => {
        this.markdownValue = res.data.content
        this.value = res.data.classify
        this.switch_value = res.data.recommend
        this.title = res.data.title
        this.fileList = [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}}]
        this.subtitle = res.data.subtitle
      })
    },
    // 保存文章
    handleOnSave () {
      if (!this.title) {
        this.$message.error('标题不能为空')
        return
      }
      if (!this.value) {
        this.$message.error('请选择文章类型')
        return
      }
      if (!this.subtitle) {
        this.$message.error('文章说明不能为空')
        return
      }
      if (this.blogType === '新增博客') {
        createNewBlog({
          title: this.title, content: this.markdownValue, recommend: this.switch_value, classify: this.value, recImg: this.recImg, subtitle: this.subtitle
        }).then(res => {
          this.$message.success('新建成功')
        })
      } else if (this.blogType === '更新博客') {
        let id = this.$route.query.id;
        updateBlog(id, {
          title: this.title, content: this.markdownValue, recommend: this.switch_value, classify: this.value, recImg: this.recImg, subtitle: this.subtitle
        }).then(res => {
          this.$message.success('更新成功')
        })
      }
    },
    // 文件上传
    handleEditorImgAdd (pos, $file) {
      let formdata = new FormData()
      formdata.append('file', $file)
      let instance = axios.create({
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      // instance.post('http://localhost:3000/file/uploadFile/multiple', formdata).then(res => {
      instance.post('http://120.78.165.228/api/file/uploadFile/multiple', formdata).then(res => {
        if (res.data.errno === 0) {
          this.$message.success('上传成功')
          let url = res.data.data.file[0]
          let name = $file.name
          if (name.includes('-')) {
            name = name.replace(/-/g, '')
          }
          let content = this.markdownValue
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)  这里是必须要有的
          if (content.includes(name)) {
            let oStr = `(${pos})` // 第几个图片
            let nStr = `(http://120.78.165.228/api/${url.destination}${url.filename})`
            let index = content.indexOf(oStr)
            console.log('index', index)
            let str = content.replace(oStr, '')
            let insertStr = (soure, start, newStr) => {
              return soure.slice(0, start) + newStr + soure.slice(start)
            }
            console.log('old', this.markdownValue)
            this.markdownValue = insertStr(str, index, nStr)
            console.log('new', this.markdownValue)
          }
        } else {
          this.$message.error(res.data.message)
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    uploadSuccess (response, file, fileList) {
      let url = response.data.file[0]
      this.recImg = `http://120.78.165.228/api/${url.destination}${url.filename}`
      // console.log(url, `http://120.78.165.228/api/${url.destination}${url.filename}`)
    },
    // 获取分类列表
    getArtClassifyList () {
      artClassify().then(res => {
        this.classifyList = res.data
      })
    },
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
  .blog-edit-add {
    position: relative;
    padding-bottom: 60px;
    margin-bottom: 20px;
    .title {
      text-align: center !important;
      margin-bottom: 40px;
    }
    .item {
      margin-bottom: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .label {
        display: inline-block;
        width: 90px;
        text-align: left;
        margin-right: 10px;
      }
      .upload-demo {
        display: inline-block;
      }
      /deep/.el-input {
        width: 200px;
      }
      .el-textarea {
        width: 300px;
      }
    }
    .save {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>