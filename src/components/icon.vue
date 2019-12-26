<template>
  <div>
    <i :class="iconType"></i>
  </div>
</template>
<script>
export default {
  name: "Icon",
  props: {
    iconClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconType() {
      if (!this.iconClass) {
        return "iconfont icon-blog";
      } else {
        return "iconfont" + " " + this.iconClass;
      }
    }
  }
};
</script>