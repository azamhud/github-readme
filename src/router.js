import Vue from "vue";
import Router from "vue-router";
import ListRepo from "./components/sidebar/ListRepo";
import InfoSidebar from "./components/sidebar/Info.vue";
import Readme from "./components/readme";
import InfoReadme from "./components/readme/Info.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        sidebar: InfoSidebar,
        readme: InfoReadme
      }
    },
    {
      path: "/:user",
      components: {
        sidebar: ListRepo,
        readme: InfoReadme
      }
    },
    {
      path: "/:user/:project",
      components: {
        sidebar: ListRepo,
        readme: Readme
      }
    }
  ]
});
