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
    <b-toast id="my-toast" variant="warning" solid>
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <b-img
          blank
          blank-color="#ff5555"
          class="mr-2"
          width="12"
          height="12"
        />
        <strong class="mr-auto">Error!</strong>
      </div>
      {{ toastText }}
    </b-toast>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "User",
  data() {
    return {
      inputUsername: ""
    };
  },
  computed: {
    ...mapGetters(["toastText"])
  },
  methods: {
    ...mapActions(["CHECK_USERNAME"]),
    doSearch() {
      this.CHECK_USERNAME(this.inputUsername).then(resp => {
        if (resp.status === 404) {
          this.$bvToast.show("my-toast");
        }
      });
      // .catch((err) =>{
      //     console.log('error lho')
      //     console.log(err);
      // });
    }
  }
};
</script>

<style scoped>
.user {
  margin: 10px;
}
</style>
