<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from "../components/header";
import Content from "../components/Content.vue";
export default {
  name: "Home",
  components: {
    Header,
    Content
  }
};
</script>

<style></style>
