<template>
  <div class="name-card-container">
    <div class="card-title">我的名片</div>
    <div class="item" v-for="(item,index) in infoList" :key="index">
      <span class="title">{{item.title}}：</span>
      <span class="content">{{item.content}}</span>
    </div>
    <div class="contact">
      <a href="javaScript:void(0)" class="qq">
        <i class="iconfont icon-qq1"></i>
      </a>
      <a href="javaScript:void(0)" class="wechat">
        <i class="iconfont icon-weixin"></i>
      </a>
      <a href="https://github.com/Ttroublemaker">
        <i class="iconfont icon-github"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoList: [
        {
          title: "姓名",
          content: "钟跃"
        },
        {
          title: "笔名",
          content: "Ttroublemaker"
        },
        {
          title: "职业",
          content: "Web前端开发工程师"
        },
        {
          title: "现居",
          content: "深圳/龙华"
        },
        {
          title: "Email",
          content: "1614922765@qq.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.name-card-container {
  box-sizing: border-box;
  width: 400px;
  height: 260px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px 20px 20px 40px;
  background-color: #ddd;
  .card-title {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
  .item {
    text-align: left;
    padding-top: 10px;
    .title {
      display: inline-block;
      text-align: left;
      padding-right: 10px;
      width: 50px;
    }
    .content {
      display: inline-block;
      text-align: left;
    }
  }
  .contact {
    text-align: left;
    a {
      display: inline-block;
      margin: 20px 20px 0 20px;
      position: relative;
      i {
        font-size: 30px;
        color: #409eff;
      }
    }
    a:hover {
      i {
        color: #e6a23c;
      }
      &.wechat:after,
      &.qq:after {
        content: "";
        position: absolute;
        top: -70px;
        right: -6px;
        width: 60px;
        height: 60px;
        background: url("../../../assets/images/weixin.jpg") no-repeat center;
        border-radius: 6px;
        overflow: hidden;
        background-size: cover;
      }
      &.qq:after {
        right: -18px;
        background: url("../../../assets/images/qq.jpg") no-repeat center;
        background-size: cover;
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .name-card-container {
    width: 100%;
    height: 260px;
  }
}
</style>