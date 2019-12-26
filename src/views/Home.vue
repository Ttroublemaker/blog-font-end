<template>
  <div class="home-container">
    <h2>Study,Share and Life</h2>
    <div class="content-container">
      <div class="content-item">
        <span class="title">Blog</span>
        <span class="summary">今年一共写了10篇博客</span>
        <span class="detail">去往详情</span>
      </div>
      <div class="content-item">
        <span class="title">Life</span>
        <span class="summary">今年一共10篇游记</span>
        <span class="detail">去往详情</span>
      </div>
      <div class="content-item">
        <span class="title">Learn</span>
        <span class="summary">今年一共10篇学习笔记</span>
        <span class="detail">去往详情</span>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index.js";
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 66vw;
  display: flex;
  justify-content: center;
  font-size: 30px;
  background: url("../assets/images/bg.jpg") center top no-repeat;
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
      border-radius: 5px;
      height: 200px;
      padding: 10px;
      background-color: #ddd;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title,
      .summary,
      .detail {
        margin: 5px 0;
      }
      .title {
        font-weight: 600;
      }
    }
  }
}
</style>
