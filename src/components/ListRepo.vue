<template>
  <div>
    <p class="title">List Repo</p>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="fill"
      size="sm"
      limit="3"
      hide-goto-end-buttons="true"
    ></b-pagination>
    <div v-for="repo in limitRepos" :key="repo.id" v-on:click="onSelect(repo.id, $event)">
      <Repo v-bind:repo="repo"></Repo>
    </div> 
  </div>
</template>

<script>
import Repo from "./Repo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListRepo",
  data() {
    return {
      perPage: 5,
      currentPage: 1,
        textToast: ''
    };
  },
  components: {
    Repo
  },
  computed: {
    ...mapGetters(["allRepos"]),
    rows() {
      return this.allRepos.length;
    },
    limitRepos() {
      const startIndex = (this.currentPage - 1) * 5;
      console.log(startIndex);
      return this.allRepos.slice(startIndex, startIndex + 5);
    }
  },
  methods: {
    ...mapActions(["GET_README"]),
    onSelect: function(id, event) {
      this.GET_README(id)
      .then((resp) => {
            if(resp.status === 404){
                this.textToast = 'Username not found !!!'
                this.$bvToast.show('my-toast')
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
