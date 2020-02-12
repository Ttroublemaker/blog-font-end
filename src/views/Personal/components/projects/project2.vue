<template>
  <div class="container">
    <div class="item title">WMS仓储系统</div>
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
    opacity: 0;
    &.title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>>
