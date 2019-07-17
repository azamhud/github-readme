<template>
  <div class="content">
    <Sidebar class="sidebar" />
    <Readme class="readme"></Readme>
  </div>
</template>

<script>
import Readme from "./readme/Readme.vue";
import Sidebar from "./sidebar/Sidebar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Content",
  components: {
    Readme,
    Sidebar
  },
  computed: {
    ...mapGetters(["found", "select"]),
    readme: function() {
      return this.select === true;
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  margin: 10px;
  width: auto;
  border-radius: 5px;
  min-height: 500px;
}

.sidebar {
  width: 20%;
  max-height: none;
  background-color: white;
}

.readme {
  width: 80%;
  text-align: left;
  background-color: white;
}
</style>
