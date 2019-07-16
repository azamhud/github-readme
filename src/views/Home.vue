<template>
    <div>
        <Header v-bind:title="headerText"></Header>
        <Content></Content>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Content from '../components/Content.vue'
export default {
    name: 'Home',
    components:{
        Header,
        Content
    },
    data(){
        return {
            headerText: 'HEADER'
        };
    }
}
</script>

<style>

</style>
