<template>
  <div class="app-wrapper">
    <sidebar :class="siderbarContainer"/>
    <div :class="mainContainer">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    siderbarContainer(){
      return {'sidebar-container':true,'sidebar-container-collapse':this.isCollapse}
    },
    mainContainer(){
      return {'main-container':true,'main-container-collapse':this.isCollapse}
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
