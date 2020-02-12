<template>
  <div class="container">
    <div class="item icon">
      <img src="./images/icon.jpg" alt="">
    </div>
    <div class="item pen-name">Troublemaker1993</div>
    <div class="item job">前端工程师 <span style="font-size:18px"><i class="iconfont icon-location1" style="font-size:24px;color:#777;"></i>深圳</span></div>
    <div class="item contact">
      <a href="javaScript:void(0)" class="qq">
        <i class="iconfont icon-qq1"></i>
      </a>
      <a href="javaScript:void(0)" class="wechat">
        <i class="iconfont icon-weixin"></i>
      </a>
      <a href="https://github.com/Ttroublemaker">
        <i class="iconfont icon-github"></i>
      </a>
      <a href="mailto:1614922765@qq.com" target="_blank" style="color: rgb(102, 102, 102);">
        <i class="iconfont icon-email"></i>
      </a>
    </div>
    <div class="item">
      <p class="one-say">人生天地之间，若白驹过隙，忽然而已</p>
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
    &.icon {
      width: 200px;
      height: 200px;
      margin-bottom: 30px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    &.pen-name {
      font-weight: bold;
      font-size: 18px;
      color: #777;
    }
    &.job {
      font-weight: bold;
      font-size: 22px;
    }
    p.one-say {
      font-size: 1rem;
      margin-top: 60px;
      letter-spacing: 0.3em;
      text-shadow: 3px 4px 2px #aaa;
      white-space: nowrap;
    }
  }
  .contact {
    text-align: left;
    a {
      display: inline-block;
      margin: 4px 20px 0 20px;
      position: relative;
      i {
        font-size: 30px;
        color: #777;
      }
    }
    a:hover {
      i {
        color: #e6a23c;
      }
      &.wechat:after,
      &.qq:after {
        content: "";
        position: absolute;
        top: 40px;
        right: -6px;
        width: 60px;
        height: 60px;
        background: url("../../../assets/images/weixin.jpg") no-repeat center;
        border-radius: 6px;
        overflow: hidden;
        background-size: cover;
      }
      &.qq:after {
        right: -18px;
        background: url("../../../assets/images/qq.jpg") no-repeat center;
        background-size: cover;
      }
    }
  }
}
</style>>