<template>
  <div class="home-container">
    <el-button @click.native="toLogin">登陆</el-button>
    <el-button @click.native="toTest">校验登陆</el-button>
    <div class="scroll-container">
      <div class="home-title">Study,Share and Life</div>
      <div class="content-container">
        <div class="content-item">
          <span class="title">
            <Icon iconClass="icon-bokeblogger3" class="icon" />My 博客
          </span>
          <span class="summary">每天坚持三件事，看脸、看秤、看余额。如果脸不够美，秤不够低，余额不够多。那么，请继续奋斗！</span>
          <router-link class="detail" to="/blog">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getBlogList, getBlogDetail, createNewBlog, updateBlog, delBlog } from "../api/index.js";
import Icon from "../components/icon";
export default {
  components: {
    Icon
  },
  data () {
    return {};
  },
  methods: {
    toLogin () {
      login('zhangsan', 123)
    },
    toTest () {
      delBlog(23);
    }
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  $HEIGHT: 81px;
  margin-bottom: 20px;
  // 切记留出空格,否则不起作用
  height: calc(100vh - #{$HEIGHT} - 30px);
  overflow-x: hidden;
  overflow-y: scroll;
  // -webkit- browser 隐藏scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  background: url("../assets/images/bg1.gif") no-repeat center;
  background-size: cover;

  .scroll-container {
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .home-title {
      color: #ddd;
      font-size: 46px;
      font-weight: 600;
      margin-bottom: 100px;
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
        height: 190px;
        padding: 10px 0;
        margin: 20px 30px;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        transition: all 0.5s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
          font-size: 22px;
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
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .detail {
          position: absolute;
          padding: 15px;
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
    transform: scale(1.5);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
