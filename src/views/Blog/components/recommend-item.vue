<template>
  <div class="container">
    <div class="img">
      <img src="../../../assets/images/bg1.gif" alt />
    </div>
    <div class="title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题</div>
    <div class="content">
      我是内容自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的自从入了这行，很多人跟我说可以做网络教程，
      我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的
    </div>
    <div class="go-detail">
      <el-button type="text">
        <i class="iconfont icon-yuedu"></i> 阅读文章
      </el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  height: 300px;
  flex-direction: column;
  align-items: space-around;
  font-size: 14px;
  line-height: 1.5em;
  padding: 10px;
  border: 1px solid #ddd;
  transition: all 0.5s;
  .img {
    width: 100%;
    height: 160px;
    overflow: hidden;
    img {
      width: 100%;
      transition: all 0.5s;
    }
  }
  .title {
    font-weight: bold;
    padding-right: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 8px 0;
  }
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
.container:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transform: scale(1.1);
  img {
    transform: scale(1.2);
  }
}
</style>