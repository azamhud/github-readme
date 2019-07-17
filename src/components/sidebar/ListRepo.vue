<template>
  <div>
    <p class="title">
      List Repo
    </p>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="fill"
      size="sm"
      limit="3"
      :hide-goto-end-buttons="true"
    />
    <div
      v-for="repo in limitRepos"
      :key="repo.id"
      @click="onSelect(repo.id, $event)"
    >
      <Repo :repo="repo" />
    </div>
  </div>
</template>

<script>
import Repo from "./Repo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListRepo",
  components: {
    Repo
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      textToast: ""
    };
  },
  computed: {
    ...mapGetters(["allRepos"]),
    rows() {
      return this.allRepos.length;
    },
    limitRepos() {
      const startIndex = (this.currentPage - 1) * 5;
      return this.allRepos.slice(startIndex, startIndex + 5);
    }
  },
  methods: {
    ...mapActions(["GET_README"]),
    onSelect: function(id) {
      this.GET_README(id).then(resp => {
        if (resp.status === 404) {
          this.textToast = "Username not found !!!";
          this.$bvToast.show("my-toast");
        }
      });
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 1.5em;
}
</style>
