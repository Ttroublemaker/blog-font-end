<template>
  <div class="markdown">
    <MarkdownPro :value="data1" />
  </div>
</template>

<script>
import { MarkdownPro } from "vue-meditor";

export default {
  name: "markdown",
  components: {
    MarkdownPro
  },
  data() {
    return {
      data1: "123123"
    };
  }
};
</script>