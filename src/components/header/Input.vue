<template>
  <div class="user">
    <b-input-group prepend="Username" class="mt-3">
      <b-form-input v-model="inputUsername" />
      <b-input-group-append>
        <b-button @click="doSearch">
          Search
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Input",
  data() {
    return {
      inputUsername: ""
    };
  },
  computed: {
    ...mapGetters(["username"])
  },
  mounted: function() {
    this.inputUsername = this.username;
  },
  methods: {
    doSearch() {
      this.$router.push({ path: `/${this.inputUsername}` });
    }
  }
};
</script>

<style scoped>
.user {
  margin: 10px;
}
</style>
