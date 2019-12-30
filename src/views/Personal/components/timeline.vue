<template>
  <div>
    <el-timeline>
      <el-timeline-item
        :timestamp="item.time"
        placement="top"
        v-for="(item,index) in dataList"
        :key="index"
      >
        <el-card>
          <h4>{{item.title}}</h4>
          <p>{{item.content}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          time: "2012/09 ~ 2016/07",
          title: "重庆大学动力工程学院-热能与动力工程-学士学位",
          content: "巴拉巴拉，瞎几把吹吧"
        },
        {
          time: "2016/07 ~ 2019/07",
          title: "重庆大学动力工程学院-热能与动力工程-学士学位",
          content: "巴拉巴拉，瞎几把吹吧"
        },
        {
          time: "2019/07 ~ 至今",
          title: "重庆大学动力工程学院-热能与动力工程-学士学位",
          content: "巴拉巴拉，瞎几把吹吧"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
// 迫使左边距为0
.el-timeline {
  padding-inline-start: 0 !important;
  width: 100% !important;
}
</style>