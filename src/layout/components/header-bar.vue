<template>
  <div class="container">
    <h3 class="welcome">
      Welcome to
      <i style="color:#ffa500" class="author">TroubleMaker</i> 's Blog
    </h3>
    <div class="sort-container">
      <div class="item" v-for="(item,index) in list " :key="index">
        <div @click="goToLink(item)">
          <span class="icon">
            <Icon :iconClass="item.icon" />
          </span>
          <span class="content">{{item.title}}</span>
        </div>
        <span class="border-bottom"></span>
      </div>
    </div>
    <div class="audio-container">
      <audioPlayer :showOrHide="showOrHide" />
    </div>
  </div>
</template>
<script>
import Icon from "../../components/icon";
import audioPlayer from "./audio-player";
export default {
  components: {
    Icon,
    audioPlayer
  },
  data() {
    return {
      showOrHide: "show",
      list: [
        { title: "Home", id: "home", icon: "icon-home", routerLink: "/home" },
        {
          title: "Blog",
          id: "blod",
          icon: "icon-bokeblogger3",
          routerLink: "/blog"
        },
        {
          title: "Music",
          id: "personal",
          icon: "icon-person_alt_circle_fill",
          routerLink: ""
        },
        {
          title: "About me",
          id: "personal",
          icon: "icon-person_alt_circle_fill",
          routerLink: "/personal"
        }
      ]
    };
  },
  methods: {
    goToLink(item) {
      if (item.title === "Music") {
        if (this.showOrHide === "show") {
          this.showOrHide = "hide";
          return;
        }
        this.showOrHide = "show";
        return
      }
      this.showOrHide = "hide";
      if (item.routerLink) {
        this.$router.push(item.routerLink);
        return;
      } else {
        // do nothing
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 60px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  align-items: center;
  position: relative;
  //   去掉下划线
  a {
    text-decoration: none;
  }
  .welcome {
    .author {
      display: inline-block;
    }
  }
  .sort-container {
    display: inline-flex;
    align-items: center;
    .item {
      display: inline-block;
      margin: 0 10px;
      padding: 10px 1px;
      position: relative;
      .icon {
        display: inline-block;
        margin-right: 5px;
        color: #4a4a4a;
        transition: color 1s;
      }
      .content {
        color: #4a4a4a;
        transition: color 1s;
      }
      .border-bottom {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        border-bottom: 2px solid transparent;
        transition: all 1s;
      }
    }
    .item:hover {
      cursor: pointer;
      .icon {
        color: #ffa500;
        animation: Waver 1s linear infinite;
      }
      .content {
        color: #ffa500;
      }
      .border-bottom {
        width: 100%;
        border-bottom: 2px solid #ffa500;
      }
    }
  }
  .audio-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    top: 60px;
    right: 120px;
  }
}
.welcome:hover {
  .author {
    color: #ddd;
    animation: uk-flicker 2s cubic-bezier(1, -2.91, 0, 3.79) 0s infinite normal;
  }
}
// 摇摆
@keyframes Waver {
  from {
    transform: rotate(0deg) scale(1.1);
  }
  25% {
    transform: rotate(45deg) scale(1.2);
  }
  50% {
    transform: rotate(0deg) scale(1.4);
  }
  75% {
    transform: rotate(-45deg) scale(1.2);
  }
  to {
    transform: rotate(0deg) scale(1.1);
  }
}

@keyframes uk-flicker {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: scale(0.8);
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
    transform: scale(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>