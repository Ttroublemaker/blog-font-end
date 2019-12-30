<template>
  <div id="aplayer" ref="aplayer" v-show="showOrHide!=='hide'">
    <!-- <aplayer autoplay :music="music" :list="list" /> -->
    <aplayer :music="music" :list="list" />
  </div>
</template>
<script>
// APlayer 音乐播放器
import Aplayer from "vue-aplayer";
export default {
  props: {
    showOrHide: {
      type: String,
      default: "hide"
    }
  },
  components: {
    Aplayer
  },
  data() {
    return {
      music: {
        title: "secret base~君がくれたもの~",
        artist: "Silent Siren",
        src: "http://music.163.com/song/media/outer/url?id=557581285.mp3",
        pic:
          "http://img.zcool.cn/community/010e585663ec8232f8754573023113.jpg@900w_1l_2o_100sh.jpg"
      },
      list: [
        {
          title: "secret base~君がくれたもの~",
          artist: "Silent Siren",
          src: "http://music.163.com/song/media/outer/url?id=557581285.mp3",
          pic:
            "http://img.zcool.cn/community/010e585663ec8232f8754573023113.jpg@900w_1l_2o_100sh.jpg"
        },
        {
          title: "淘汰",
          artist: "陈奕迅",
          src: "http://music.163.com/song/media/outer/url?id=557581285.mp3",
          pic:
            "http://img.zcool.cn/community/010e585663ec8232f8754573023113.jpg@900w_1l_2o_100sh.jpg"
        },
        {
          title: "晚安",
          artist: "这是我的晚安",
          src: "http://music.163.com/song/media/outer/url?id=557581288.mp3",
          pic:
            "http://img.zcool.cn/community/01a5575792e77e0000012e7e9e89c3.gif"
        }
      ]
    };
  }

  //
};
</script>
<style lang="scss">
// 修复布局bug
.aplayer-list {
  li {
    text-align: left;
  }
}
</style>