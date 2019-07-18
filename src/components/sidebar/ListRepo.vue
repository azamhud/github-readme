<template>
  <div class="listrepo">
    <p class="title">List Repo</p>
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
      @click="onSelect(repo.name, $event)"
    >
      <RepoItem :name="repo.name" :desc="repo.desc" />
    </div>
  </div>
</template>

<script>
import RepoItem from "./RepoItem.vue";
import { mapGetters, mapActions } from "vuex";
import store from "../../store";

export default {
  name: "ListRepo",
  components: {
    RepoItem
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      textToast: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("checkUsername", to.params.user).then(resp => {
      if (resp.status === 404) {
        next({ path: "/" });
      } else {
        next();
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch("checkUsername", to.params.user).then(resp => {
      if (resp.status === 404) {
        next({ path: "/" });
        this.$bvToast.show("warningToast");
      } else {
        next();
      }
    });
  },
  computed: {
    ...mapGetters(["allRepos", "username"]),
    rows() {
      return this.allRepos.length;
    },
    limitRepos() {
      const startIndex = (this.currentPage - 1) * 5;
      return this.allRepos.slice(startIndex, startIndex + 5);
    }
  },
  methods: {
    ...mapActions(["getReadme"]),
    onSelect: function(name) {
      this.$router.push({ path: `/${this.username}/${name}` });
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 1.5em;
}

.listrepo {
  display: flex;
  flex-direction: column;
  width: 20%;
  font-size: 1em;
  border: 1px solid blueviolet;
  border-radius: 5px;
  background-color: white;
  max-height: fit-content !important;
}
</style>
