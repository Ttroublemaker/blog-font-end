<template>
  <div class="home-container" ref='container'>
    <div class="carousel">
      <el-carousel trigger="click" :height="carouselHeight">
        <el-carousel-item>
          <img class="icon" src="./images/web-logo1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img class="icon" src="./images/web-logo2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img class="icon" src="./images/web-logo3.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content-container">
      <span class='title'>常用分类</span>
      <table>
        <tr v-for="(item,index) in hostList" :key="index">
          <td v-for="(list,ind) in item" :key="ind">
            <router-link :to="{path:'/blog',query:{classify:list.classify}}">
              <img class="icon" :src="list.icon" alt=""><br>
              <span>{{list.title}}</span>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      hostList: [
        [
          { title: '全部', icon: './images/all.jpg', classify: '全部' },
          { title: 'JS', icon: './images/js.png', classify: 'js' },
          { title: 'CSS', icon: './images/css.png', classify: 'css' }
        ],
        [
          { title: 'HTML', icon: './images/html.png', classify: 'html' },
          { title: 'VUE', icon: './images/vue.png', classify: 'vue' },
          { title: 'Node', icon: './images/nodejs.png', classify: 'node' },
        ]
      ]
    };
  },
  computed: {
    // 移动端适配
    carouselHeight () {
      if (this.screenWidth > 800) {
        return "300px";
      } else {
        return "200px";
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  // $HEIGHT: 81px;
  // margin-bottom: 20px;
  // // 切记留出空格,否则不起作用
  // height: calc(100vh - #{$HEIGHT} - 30px);
  .carousel {
    .el-carousel {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .content-container {
    margin: 15px 0;
    .title {
      display: inline-block;
      width: 100%;
      font-weight: bold;
      margin: 5px 0;
      text-align: left;
      border-left: 4px solid #ffa500;
      padding-left: 4px;
      line-height: 20px;
      height: 20px;
    }
    table {
      width: 100%;
      table-layout: fixed;
      border-spacing: 0;
      border-collapse: collapse;
      td {
        border: 1px solid #ddd;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          padding: 18px 20px;
          box-sizing: border-box;
          font-weight: 400;
        }
        .icon {
          width: 100%;
          border-radius: 5px;
        }
        &.list-item:hover {
          cursor: pointer !important;
        }
      }
    }
  }
}
@media screen and (min-width: 900px) {
  .home-container {
    margin: 0 20%;
  }
}
</style>
