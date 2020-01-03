<template>
  <!-- listeners
场景:子组件需要调用父组件的方法
  解决:父组件的方法可以通过 v-on="listeners" 传入内部组件——在创建更高层次的组件时非常有用-->
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <!-- <use xlink:href="#icon-xxx"></use> -->
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    // 自定义的类名
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  svg {
    width: 14px;
    height: 14px;
  }
}
</style>
