<template>
  <div class="content">
    <router-view name="sidebar"></router-view>
    <router-view name="readme"></router-view>
    <!-- <Sidebar class="sidebar" />
    <Readme class="readme"></Readme> -->
  </div>
</template>

<script>
//import Readme from "./readme";
// import Sidebar from "./sidebar";

export default {
  name: "Content",
  components: {
    //Readme
    // Sidebar
  }
};
</script>

<style scoped>
.content {
  display: flex;
  margin: 10px;
  width: auto;
  border-radius: 5px;
  min-height: 500px;
}

.sidebar {
  width: 20%;
  max-height: none;
  background-color: white;
}

.readme {
  width: 80%;
  text-align: left;
  background-color: white;
}

.info {
  width: 80%;
  text-align: left;
  background-color: white;
}
</style>
