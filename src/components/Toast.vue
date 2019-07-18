<template>
  <b-toast id="warningToast" variant="warning" solid>
    <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
      <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12" />
      <strong class="mr-auto">Error!</strong>
    </div>
    {{ toastText }}
  </b-toast>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Toast",
  computed: {
    ...mapGetters(["toastText"])
  }
};
</script>

<style></style>
