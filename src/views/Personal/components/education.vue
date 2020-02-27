<template>
  <div class="container">
    <div class="item title">教育背景</div>
    <div class="item school"><a href="http://www.cqu.edu.cn/"><img src="./images/tsg1.jpg" alt=""></a> </div>
    <div class="item school"><img src="./images/logo.png" alt=""></div>
    <div class="item disciplines">能源与动力工程学院</div>
    <div class="item time">2012.09 ~ 2016.07</div>
    <div class="item">
      <p class="one-say">耐劳苦、尚俭朴、勤学业、爱国家</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item {
    transition: all 1s;
    margin-bottom: 10px;
    &.title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    &.school {
      font-size: 26px;
      img {
        width: 70%;
        border-radius: 4px;
      }
    }
    &.time,
    &.disciplines {
      font-size: 20px;
      font-weight: normal;
    }
    p.one-say {
      font-size: 1rem;
      margin-top: 40px;
      letter-spacing: 0.3em;
      text-shadow: 3px 4px 2px #aaa;
      white-space: nowrap;
    }
  }
}
</style>>
