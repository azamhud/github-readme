<template>
  <article v-if="show" class="readme" v-html="readmeHTML"></article>
  <Info v-else class="info" />
</template>

<script>
import { mapGetters } from "vuex";
import Info from "./Info.vue";
export default {
  name: "Readme",
  components: {
    Info
  },
  computed: {
    ...mapGetters(["readme", "select"]),
    readmeHTML: function() {
      var MarkdownIt = require("markdown-it"),
        md = new MarkdownIt();
      return md.render(this.readme);
    },
    show: function() {
      return this.select === true;
    }
  }
};
</script>

<style>
img {
  max-width: 100%;
}

.readme {
  margin-left: 5px;
  padding: 5px;
  border: 1px solid blueviolet;
  border-radius: 5px;
}
</style>
