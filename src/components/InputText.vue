<template>
    <div class="name" style="position: relative">
        <input type="text" :placeholder="placeholder">
        <button class="code" v-if="dataButton">{{dataButton}}</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        props: ['placeholder', 'data-button'],
    }

</script>
<style scoped>
    .name {
        width: 65%;
        margin: 20px auto;
        height: 30px;
    }
    i{
        display: inline-block;
    }
    input {
        width: 100%;
        display:inline-block;
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
</style>