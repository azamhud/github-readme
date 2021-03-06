import Vuex from "vuex";
import Vue from "vue";
import content from "./modules/content";

//Load vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
  modules: {
    content
  }
});
