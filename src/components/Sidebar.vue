<template>
  <div class="sidebar" :class="listRepo">
    <InfoSidebar v-if="info" />
    <ListRepo v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InfoSidebar from "./InfoSidebar.vue";
import ListRepo from "./ListRepo.vue";

export default {
  name: "Sidebar",
  components: {
    InfoSidebar,
    ListRepo
  },
  computed: {
    ...mapGetters(["found"]),
    info: function() {
      return this.found === false;
    },
    listRepo: function() {
      return {
        listrepo: this.found === true
      };
    }
  }
};
</script>

<style scoped>
.sidebar {
  border: 1px solid blueviolet;
  border-radius: 5px;
}

.listrepo {
  max-height: fit-content !important;
}
</style>
