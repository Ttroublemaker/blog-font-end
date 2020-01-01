<template>
  <div class="container">
    <header class="header">
      <i class="iconfont icon-liebiao2"></i>博客列表
    </header>
    <section class="blog-items-container">
      <el-tabs v-model="activeName" @tab-click="tabSwitch">
        <el-tab-pane
          v-for="(item,index) in initData"
          :key="index"
          :label="item.name"
          :name="item.name"
        >
          <blogItem :blogList="item.data" v-if="item.data.length" />
          <span class="notice" v-else>暂无相关内容</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            :small="isSmall"
            :page-size="10"
            :pager-count="5"
            :total="200"
            :layout="page_Layout"
          ></el-pagination>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>
<script>
import blogItem from "./blog-item";
export default {
  components: {
    blogItem
  },
  data() {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      isSmall: false,
      activeName: "HTML",
      initData: [
        {
          name: "HTML",
          data: [
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
            }
          ]
        },
        {
          name: "CSS",
          data: [
            {
              name: "01",
              title: "如何做一个美男子1",
              time: "2019-12-30",
              content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
            }
          ]
        },
        {
          name: "JavaScript",
          data: [
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
              name: "02",
              title: "如何做一个美男子2",
              time: "2019-12-30",
              content: `简化流程：设计简洁直观的操作流程；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：
          根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；`
            }
          ]
        },
        {
          name: "Other",
          data: []
        }
      ]
    };
  },
  computed: {
    // 移动端适配
    page_Layout() {
      if (this.screenWidth > 800) {
        this.isSmall = false;
        return "prev, pager, next, jumper";
      } else {
        this.isSmall = true;
        return "prev, pager, next";
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    tabSwitch($event) {
      console.log(2);
      console.log($event.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 20px;
  .header {
    margin-bottom: 10px;
    padding: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
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