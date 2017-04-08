<template>
    <div class="name" style="position: relative">
        <i class="tag glyphicon" :class="tag"></i>
        <select @change="selectChange" v-model='selected'><option v-for="opt in options" v-bind:value="opt.value">{{opt.text}}</option></select>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                selected:''
            }
        },
        props: ['tag','placeholder','options'],
        methods:{
            selectChange:function(){
                 this.$emit('child-tell-me-something',this.selected)
            }
        }
    }

</script>
<style scoped>
    .name {
        width: 65%;
        margin: 20px auto;
        height: 30px;
    }
    i {
        display: inline-block;
    }
    select {
        text-indent: 2em;
        width: 100%;
        display: inline-block;
        height: 100%;
        border-bottom: 2px solid black;
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }
    .tag{
        position: absolute;
        top: 4px;
    }
</style>