<template>
  <div class="home-container">
    <h2>Study,Share and Life</h2>
    <div class="content-container">
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-bokeblogger3" class="icon" />Blog
        </span>
        <span class="summary" style="display:inline">
          个人DIY博客系统，用于知识分享、学习笔记及美好
          <i style="text-decoration:line-through;color:red;">苦逼</i> 生活记录
        </span>
        <span class="detail">查看详情</span>
      </div>
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-lvyou" class="icon" />Life
        </span>
        <span class="summary">
          去见你想见的人吧。趁阳光正好。趁微风不噪。趁繁花还未开至荼蘼。趁现在还年轻，还可以走很长很长的路，还能诉说很深很深的思念。
          趁世界还不那么拥挤。 趁飞机现在还没有起飞。趁现在时光还没有吞噬你们的留念。 趁现在自己的双手还能拥抱彼此。趁我们还有呼吸。 去见你想见的人吧。
        </span>
        <span class="detail">查看详情</span>
      </div>
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-xuexi" class="icon" />Learn
        </span>
        <span class="summary">
          虽然在学习的过程中会遇到许多不顺心的事，但古人说得好--吃一堑，长一智。多了一次失败，
          就多了一次教训；多了一次挫折，就多了一次经验。没有失败和挫折的人，是永远不会成功的。
        </span>
        <span class="detail">查看详情</span>
      </div>
      <div class="content-item">
        <span class="title">
          <Icon iconClass="icon-person_alt_circle_fill" class="icon" />Me
        </span>
        <span class="summary">
          <table class="table-me">
            <tr>
              <td>Name：</td>
              <td>钟跃</td>
            </tr>
            <tr>
              <td>Pen Name：</td>
              <td>TroubleMaker</td>
            </tr>
            <tr>
              <td>Age：</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Dev Time：</td>
              <td>1 year</td>
            </tr>
          </table>
        </span>
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
  background: url("../assets/images/bg1.gif") center bottom no-repeat;
  background-size: 100% 150%;
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
      height: 230px;
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
        line-height: 1.5em;
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
      .summary {
        overflow: hidden;
        padding-bottom: 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        .table-me {
          border-collapse: collapse;
          td {
            padding-bottom: 6px;
          }
          td:nth-child(odd) {
            text-align: right;
            font-weight: 600;
          }
          td:nth-child(even) {
            text-align: left;
          }
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
