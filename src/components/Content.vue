<template>
  <div class="content">
    <Sidebar class="sidebar"/>
    <Readme class="readme" v-if="readme">B</Readme>
    <Info class="info" v-else></Info>
  </div>
</template>

<script>
import Readme from "./Readme.vue";
import Info from "./Info.vue";
import Sidebar from "./Sidebar.vue";
import {mapGetters} from 'vuex'

export default {
  name: "Content",
  props: ["content"],
  components: {
      Info,
      Readme,
      Sidebar
  },
  computed: {
      ...mapGetters(["found","select"]),
      readme: function(){return this.select === true;}
      }
};
</script>

<style scoped>
.content{
  display: flex;
  margin: 10px;
  width: auto;
  border-radius: 5px;
  min-height: 500px;
}

.sidebar{
  width: 20%;
  max-height: none;
  background-color: white;
}

.readme{
  width: 80%;
  text-align: left;
  background-color: white;
}

.info{
  width: 80%;
  background-color: white;

}
</style>
