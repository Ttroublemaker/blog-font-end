<template>
  <div class="bolg-item-container">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(item,index) in blogList" :key="index" :name="item.name">
        <template slot="title">
          <span class="index">{{item.name}}</span>
          <span class="title">{{item.title}}</span>
          <span class="time">{{item.time}}</span>
        </template>
        <div class="detail">
          {{item.content}}
          <br />
          <span class="handle">
            <el-button type="text">阅读全文</el-button>
          </span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: "blogItem",
  props: {
    blogList: {
      type: Array,
      default: function() {
        return this.initList;
      }
    }
  },
  data() {
    return {
      activeName: "1",
      initList: [
        {
          name: "01",
          title: "如何做一个美男子1",
          time: "2019-12-30",
          content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
        },
        {
          name: "02",
          title: "如何做一个美男子2",
          time: "2019-12-30",
          content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
        },
        {
          name: "03",
          title: "如何做一个美男子3",
          time: "2019-12-30",
          content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
        }
      ]
    };
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