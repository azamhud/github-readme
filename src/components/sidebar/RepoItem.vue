<template>
  <div class="box">
    <div class="name">
      {{ name }}
    </div>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoItem",
  props: {
    name: {
      type: String,
      default: "",
      required: true
    },
    desc: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>

<style scoped>
.box {
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  background-color: bisque;
  margin: 5px;
  cursor: default;
}

.name {
  font-size: 1.25em;
}

.desc {
  font-size: 0.85em;
}
</style>
