<template>
  <div class="container">
    <el-tabs
      class="app-tabs"
      v-model="editableTabsValue"
      @tab-click="handleClick"
      type="card"
      closable
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        v-for="(item,index) in navBarList.lists"
        :key="index"
        :label="item && item.meta && item.meta.title"
        :name="'tab'+index"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { objEqual } from "@/utils/modules/common"
export default {
  name: "Tabs",

  data() {
    return {
      editableTabsValue: "tab0"
    }
  },
  computed: {
    ...mapGetters(["navBarList"]),
    // vue使用computed属性计算某些值时，在页面上使用v-model去改变计算属性时，报错Computed property "xxxx" was assigned to but it has no setter
    computedActiveName() {
      return "tab" + this.navBarList.currentNavBarInd
    }
  },
  watch: {
    computedActiveName(val) {
      this.editableTabsValue = val
    }
  },

  methods: {
    handleClick(tab) {
      const index = tab.index
      this.$store.commit("app/SET_CURRENT_NAVBAR_IND", index)
      const { redirect, path } = this.navBarList.lists[index]
      if (redirect) {
        this.$router.push({
          path: redirect
        })
        return
      }
      this.$router.push({
        path: path
      })
    },

    handleTabsEdit(targetName, action) {
      if (action === "remove") {
        let tabs = this.navBarList.lists
        let activeInd = Number(this.navBarList.currentNavBarInd)
        let targetInd = Number(targetName.slice(3))
        let nextActiveInd = 0

        if (!targetInd) return
        // console.log(activeInd === targetInd)
        if (targetInd === activeInd) {
          if (tabs[activeInd + 1]) {
            nextActiveInd = activeInd
          } else if (tabs[activeInd - 1]) {
            nextActiveInd = activeInd - 1
          } else {
            nextActiveInd = 0
          }
          this.$store.commit("app/SET_CURRENT_NAVBAR_IND", nextActiveInd)
        } else if (targetInd < activeInd) {
          this.$store.commit("app/SET_CURRENT_NAVBAR_IND", activeInd - 1)
        }

        this.$store.commit("app/REMOVE_NAVBAR_ITEM", targetInd)
      }
    }
  }
}
</script>

<style lang="scss">
// 去掉默认页的删除按钮
#tab-tab0 {
  .el-icon-close,
  .el-icon-close::before {
    display: none !important;
  }
}
// 解决在删除激活tab前一个tab时，引发的外边框问题
.el-tabs__item.is-focus {
  box-shadow: 0 0 0 0 !important;
}
</style>
<style lang="scss" scoped>
.container {
  height: 50px;
  width: calc(100% - 150px);
  display: flex;
  align-items: center;
}
.app-tabs {
  height: 40px;
}
</style>
