<template>
<div class="header">
    <p>GITHUB README</p>
    <p>See readme for each repo from any user in github</p>
    <User></User>
    </div>
</template>

<script>
import User from './User.vue';
export default {
    name: 'Header',
    props: ['title'],
    components:{
        User
    }
}
</script>

<style scoped>
.header{
    border: 1px solid blueviolet;
    margin: 10px;
    border-radius: 5px;
    background-color: white;
}

</style>
