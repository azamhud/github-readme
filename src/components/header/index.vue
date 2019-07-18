<template>
  <div class="header">
    <p>GITHUB README</p>
    <p>See readme for each repo from any user in github</p>
    <Input />
  </div>
</template>

<script>
import Input from "./Input.vue";
export default {
  name: "Header",
  components: {
    Input
  }
};
</script>

<style scoped>
.header {
  border: 1px solid blueviolet;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
}
</style>
