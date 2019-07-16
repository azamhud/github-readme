<template>
    <div class="info">
        <article class="info-username"><i class="fas fa-arrow-up"></i>Input github username there</article>
        <article class="info-repos"><i class="fas fa-arrow-left"></i>  Choose repo from the list there</article>
    </div>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style scoped>
.info{
    margin-left: 5px;
    border: 1px solid blueviolet;
    border-radius: 5px;
}

.info-username{
    display: flex;
    flex-direction: column;
    font-size: 2em;
    margin-top: 10px;
}

.info-repos{
    text-align: left;
    margin-top:10%;
    margin-left: 10px;
    font-size: 2em;
}
</style>
