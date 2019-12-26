<template>
  <div class="home-container">
    <h2>Study,Share and Life</h2>
    <div class="content-container">
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-bokeblogger3" class="icon" />Blog
        </span>
        <span class="summary">今年一共写了10篇博客</span>
        <span class="detail">查看详情</span>
      </div>
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-lvyou" class="icon" />Life
        </span>
        <span class="summary">今年一共10篇游记</span>
        <span class="detail">查看详情</span>
      </div>
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-xuexi" class="icon" />Learn
        </span>
        <span class="summary">今年一共10篇学习笔记</span>
        <span class="detail">查看详情</span>
      </div>
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-person_alt_circle_fill" class="icon" />Me
        </span>
        <span class="summary">今年一共10篇学习笔记</span>
        <span class="detail">查看详情</span>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index.js";
import Icon from "../components/icon";
export default {
  components: {
    Icon
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  $HEIGHT: 81px;
  margin-bottom: 20px;
  // 切记留出空格,否则不起作用
  height: calc(100vh - #{$HEIGHT} - 30px);
  display: flex;
  justify-content: center;
  font-size: 30px;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577982506&di=8a8c456c5eb637a378ba9b76718a9f9b&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F583558731cde4.jpg")
    center top no-repeat;
  background-size: 100% 100%;
  position: relative;
  h2 {
    height: 60px;
    color: #ddd;
  }
  .content-container {
    position: absolute;
    width: 100%;
    bottom: 40%;
    transform: translateY(50%);
    display: flex;
    justify-content: space-around;
    .content-item {
      width: 20%;
      border-radius: 6px;
      height: 200px;
      padding: 10px 0;
      background-color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      transition: all 0.5s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      .el-divider--horizontal {
        margin: 0;
      }
      .title,
      .summary,
      .detail {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
      }
      .title {
        display: inline-flex;
        font-size: 20px;
        justify-content: center;
        font-weight: 600;
        > * {
          margin-right: 10px;
        }
      }
      .detail {
        padding: 15px;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #fff;
      }
      .detail:hover {
        color: #fff;
        background-color: #409eff;
        cursor: pointer;
      }
    }
    .content-item:hover {
      transform: translateY(-20px) scale(1.1);
      .title > .icon {
        color: #ffa500;
        animation: Waver 1s linear infinite;
      }
    }
  }
}
// 摇摆
@keyframes Waver {
  from {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.6);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
