<template>
  <div class="personal">
    <!-- swiper -->
    <swiper :options="swiperOptionv" class="swiper-container">
      <swiper-slide>
        <perInfo />
      </swiper-slide>
      <swiper-slide>
        <education />
      </swiper-slide>
      <swiper-slide>
        <swiper :options="swiperOptionh">
          <swiper-slide>
            <project1 />
          </swiper-slide>
          <swiper-slide>
            <project2 />
          </swiper-slide>
          <swiper-slide>
            <project3 />
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <swiper-slide>
        <skills />
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import perInfo from "./components/per-info";
import education from "./components/education"
import skills from "./components/skills"
import project1 from "./components/projects/project1"
import project2 from "./components/projects/project2"
import project3 from "./components/projects/project3"
export default {
  components: {
    perInfo,
    education,
    skills,
    project1,
    project2,
    project3,
  },
  data () {
    return {
      swiperOptionh: {
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true
        }
      },
      swiperOptionv: {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true
        }
      }
    }
  }
};
</script>
<style lang="scss">
$HEIGHT: 81px;
// // 切记留出空格,否则不起作用
.personal {
  height: calc(100vh - #{$HEIGHT} - 30px);
  .swiper-container {
    height: 100%;
  }
  .swiper-slide-active {
    .container {
      .item {
        opacity: 1 !important;
      }
    }
  }
}
</style>
