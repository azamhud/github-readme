<template>
    <article class="readme" v-html="readmeHTML"></article>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Readme',
    computed: {
        ...mapGetters(['readme']),
        readmeHTML: function() {
            var MarkdownIt = require('markdown-it'),
            md = new MarkdownIt();
            return (md.render(this.readme));
        }
    },
    methods:{
    }
}
</script>

<style>
img{
    max-width: 100%;
}

.readme{
    margin-left: 5px;
    padding: 5px;
    border: 1px solid blueviolet;
    border-radius: 5px;
}
</style>
