<template>
  <div class="container">
    <div class="item title">仓储管理系统</div>
    <div class="item">
      <p><span class="sub-title">项目描述：</span><br> 面向公司仓储作业人员，主要功能点包含用户权限控制、表格数据显示、表单打印、数据导出、扫描枪及称重秤对接、数据可视化，语音提示等功能。</p>
      <p><span class="sub-title">项目实施：</span><br> 前端部分采用vue+ElementUI框架，vue-cli脚手架构建项目，使用axios请求数据并自定义拦截器、Stylus作为css预处理器、eslint进行代码风格检查、echart实现数据可视化，webpack打包等，构建了一套易用、便捷的仓库作业系统。根据项目情况，实现了根据用户权限菜单自动生成，addRouter路由动态加载，图标引入优化等较为复杂的功能</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item {
    max-width: 800px;
    transition: all 1s;
    margin-bottom: 10px;
    opacity: 0;
    text-align: center;
    line-height: 1.5em;
    &.title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .sub-title {
      font-size: 16px;
      font-weight: bold;
      line-height: 2em;
    }
  }
}
</style>>
