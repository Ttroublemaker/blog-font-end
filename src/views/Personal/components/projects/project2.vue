<template>
  <div class="container">
    <div class="item title">OA办公系统</div>
    <div class="item">
      <p><span class="sub-title">项目描述：</span><br> 此项目面向公司所有员工，主要包含人事管理、行政管理、资产管理、权限中心、系统管理等模块。协作开发，独立负责行政管理、系统管理模块，涵盖新闻/公
        告/it发版中心，我的消息，聚合首页等各板块以及所对应的编辑或配置功能。</p>
      <p><span class="sub-title">项目实施：</span><br>前端采用vue全家桶，配合使用viewUI、axios、eslint、less、TinymceEditor富文本编辑器、 vuedraggable拖拽插件等，实现了通过拖拽进行模块布局自定义配置、动态路由加载、用户权限控制、子系统切换、文章编辑，pc/移动端适配等功能点。</p>
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
