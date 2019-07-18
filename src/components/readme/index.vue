<template>
  <article class="readme" v-html="readmeHTML"></article>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../../store";

export default {
  name: "Readme",
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteUpdate(to, from, next) {
    const payload = {
      user: to.params.user,
      project: to.params.project
    };
    store.dispatch("getReadme", payload).then(resp => {
      if (resp.status === 404) {
        next({ path: `/${to.params.user}` });
        this.$bvToast.show("warningToast");
      } else {
        next();
      }
    });
  },
  computed: {
    ...mapGetters(["readme"]),
    readmeHTML: function() {
      var MarkdownIt = require("markdown-it"),
        md = new MarkdownIt();
      return md.render(this.readme);
    }
  },
  mounted() {
    this.mymethod();
  },
  methods: {
    ...mapActions(["getReadme", "getRepos"]),
    mymethod() {
      const payload = {
        user: this.$route.params.user,
        project: this.$route.params.project
      };
      return this.getRepos().then(() => {
        this.getReadme(payload).then(resp => {
          if (resp.status === 404) {
            this.$bvToast.show("warningToast");
          }
        });
      });
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
