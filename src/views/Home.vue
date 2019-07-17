<template>
  <div>
    <Header :title="headerText" />
    <Content />
  </div>
</template>

<script>
import Header from "../components/header/Header.vue";
import Content from "../components/Content.vue";
export default {
  name: "Home",
  components: {
    Header,
    Content
  },
  data() {
    return {
      headerText: "HEADER"
    };
  }
};
</script>

<style></style>
