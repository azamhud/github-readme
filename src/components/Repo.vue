<template>
  <div class="box">
    <div class="name">
      {{ repo.name }}
    </div>
    <div class="desc">
      {{ repo.desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Repo",
  props: {
    repo: {
      type: Object,
      default() {
        return { name: "", desc: "" };
      },
      required: true
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
