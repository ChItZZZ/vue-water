<template>
    <div class="name" style="position: relative">
        <i class="tag glyphicon" :class="tag"></i>
        <input type="text" :placeholder="placeholder">
        <button class="code" v-if="dataButton">{{dataButton}}</button>
        <i class="dropdown glyphicon glyphicon-menu-down" v-if="dropDown"></i>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        props: ['placeholder', 'data-button', 'tag','drop-down'],
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

    input {
        text-indent: 2em;
        width: 100%;
        display: inline-block;
        height: 100%;
        border-bottom: 2px solid black;
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }

    .code {
        background-color: rgb(30, 180, 255);
        border: 0;
        border-radius: 2px;
        color: white;
        position: absolute;
        right: 0;
        bottom: 5px;
        right: 4px;
        height: 28px;
        font-size: 12px;
        width: 24%;
        cursor: pointer;
    }
    .tag{
        position: absolute;
        top: 4px;
    }
    .dropdown{
        position: absolute;
        right: 1.5em;
        font-weight: bold;
        bottom: 5px;
    }
</style>