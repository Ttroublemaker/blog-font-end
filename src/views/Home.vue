<template>
  <div class="home-container">
    <div class="scroll-container">
      <div class="home-title">Study,Share and Life</div>
      <div class="content-container">
        <div class="content-item">
          <span class="title">
            <Icon iconClass="icon-bokeblogger3" class="icon" />Blog
          </span>
          <span class="summary" style="display:inline">
            个人DIY博客系统，用于知识分享、学习笔记及美好
            <i style="text-decoration:line-through;color:red;">苦逼</i> 生活记录
          </span>
          <!-- <span class="detail">查看详情</span> -->
          <router-link class="detail" to="/blog">查看详情</router-link>
        </div>
        <div class="content-item">
          <span class="title">
            <Icon iconClass="icon-lvyou" class="icon" />Life
          </span>
          <span class="summary">
            去见你想见的人吧。趁阳光正好。趁微风不噪。趁繁花还未开至荼蘼。趁现在还年轻，还可以走很长很长的路，还能诉说很深很深的思念。
            趁世界还不那么拥挤。 趁飞机现在还没有起飞。趁现在时光还没有吞噬你们的留念。 趁现在自己的双手还能拥抱彼此。趁我们还有呼吸。 去见你想见的人吧。
          </span>
          <router-link class="detail" to="/life">查看详情</router-link>
        </div>

        <div class="content-item">
          <span class="title">
            <Icon iconClass="icon-person_alt_circle_fill" class="icon" />Me
          </span>
          <span class="summary">
            <table class="table-me">
              <tr>
                <td>Author：</td>
                <td>钟跃</td>
              </tr>
              <tr>
                <td>Pen Name：</td>
                <td>Ttroublemaker</td>
              </tr>
              <tr>
                <td>Dev Time：</td>
                <td>1 year</td>
              </tr>
            </table>
          </span>
          <router-link class="detail" to="/personal">查看详情</router-link>
        </div>
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
  overflow: scroll;
  background-color: #ddd;
  background: url("../assets/images/bg1.gif");
  background-size: 100%;
  position: relative;

  .scroll-container {
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .home-title {
      color: #ddd;
      font-size: 46px;
      margin: 50px 0 30px 0;
      font-weight: 600;
    }
    .content-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      .content-item {
        width: 355px;
        border-radius: 6px;
        height: 200px;
        padding: 10px 0;
        margin: 20px 30px;
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
          padding: 5px;
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
          font-weight: 400 !important;
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
}
@media screen and (max-width: 1000px) {
  .scroll-container {
    .home-title {
      font-size: 26px !important;
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
