<template>
  <!--动态组件：a或者router-link-->
  <component v-bind="linkProps(to)" @click.native="setNavBarList(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from "@/utils/modules/validate"

export default {
  props: {
    to: {
      type: String,
      required: true
    },
    linkInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    setNavBarList(url) {
      let obj = { ...this.linkInfo, path: url }
      isExternal(url) ? "" : this.$store.dispatch("app/setNavBarList", obj)
    },
    linkProps(url) {
      // 如果是外部链接，如https/mail/tel
      if (isExternal(url)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener"
        }
      }

      return {
        is: "router-link",
        to: url
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
