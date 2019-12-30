<template>
  <div class="personal">
    <div class="name-card">
      <nameCard />
    </div>
    <div class="curriculum-vitae">
      <div class="curriculum-vitae-title">个人履历</div>
      <timeline />
    </div>
  </div>
</template>

<script>
import timeline from "./components/timeline";
import nameCard from "./components/name-card";
export default {
  components: {
    timeline,
    nameCard
  }
};
</script>
<style lang="scss" scoped>
.curriculum-vitae {
  text-align: left;
  width: 60%;
  .curriculum-vitae-title {
    margin: 40px 0 20px 0;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
}
@media screen and (max-width: 700px) {
  .curriculum-vitae {
    text-align: left;
    width: 100%;
  }
}
</style>
