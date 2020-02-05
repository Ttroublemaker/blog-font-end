<template>
  <div class="bolg-item-container">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(item,index) in blogList" :key="index" :name="item.name">
        <template slot="title">
          <span class="index">{{index+1}}</span>
          <span class="title">{{item.title}}</span>
          <span class="time">{{item.createtime.slice(0,10)}}</span>
        </template>
        <div class="detail">
          {{item.subtitle}}
          <br />
          <span class="handle">
            <el-button type="text" @click="goToDetail(item.id)">阅读全文</el-button>
            <el-button type="text" @click.native="toAdd_edit('edit',id=item.id)">更新</el-button>
            <el-button type="text" @click.native="del(item.id)"style="color:#F56C6C">删除</el-button>
          </span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import { delBlog } from "../../../api/index.js";

export default {
  name: "blogItem",
  props: {
    blogList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      activeName: "1",
      initList: []
    };
  },
  methods: {
    toAdd_edit(type, id) {
      this.$router.push({ path: "/create", query: { type, id } });
    },
    goToDetail(id) {
      this.$router.push({ path: "/article-detail", query: { id } });
    },
    del(id){
      this.$confirm('是否删除该文章?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          delBlog(id).then(res=>{
            this.$message.success('删除成功')
            this.$emit('update')
          })
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.bolg-item-container {
  position: relative; //控制time定位
  .el-collapse-item__header {
    .index {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      width: 30px;
      padding: 0 2px;
      text-align: center;
      color: white;
      border-radius: 2px;
      background-color: #909399;
      margin-right: 20px;
    }
    .title {
      font-weight: 600;
    }
    .time {
      position: absolute;
      right: 30px;
    }
    &.is-active {
      .index {
        background-color: #f56c6c;
      }
    }
  }
  .el-collapse-item__content {
    .detail {
      text-align: left;
      .handle {
        display: inline-block;
        width: 100%;
        position: relative;
        text-align: right;
        white-space: nowrap;
        right: 0;
        bottom: 0;
        .el-button {
          padding: 0 4px;
        }
      }
    }
  }
}
</style>