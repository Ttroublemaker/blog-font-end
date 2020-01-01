<template>
  <div class="container">
    <div class="radio">
      blog时间轴
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>

    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        <routerLink to="#" class="title">{{activity.content}}</routerLink>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "2019",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核通过审核通过审核通过审核通过审核通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.el-timeline {
  padding: 10px;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  // -webkit- browser 隐藏scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  .title {
    display: inline-block;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media screen and (max-width: 1200px) {
  .el-timeline {
    max-height: 40vh !important;
  }
}
.radio {
  font-weight: 600;
  .el-radio-group {
    margin-bottom: 20px;
    margin-top: 30px;
    width: 100%;
    .el-radio {
      font-weight: 600;
    }
  }
}
</style>