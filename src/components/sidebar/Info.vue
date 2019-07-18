<template>
  <div class="info-sidebar">
    <i class="fas fa-exclamation-triangle" />Input username first
  </div>
</template>

<script>
export default {
  name: "InfoSidebar"
};
</script>

<style scoped>
.info-sidebar {
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-top: 200px;
  font-size: 1em;
  border: 1px solid blueviolet;
  border-radius: 5px;
  background-color: white;
}
</style>
