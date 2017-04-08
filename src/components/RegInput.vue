<template>
    <div class="reg-text" :style="code?'borderBottom:0':''">
        <div class="reg-line reg-label">{{regLabel}}</div>
        <input type="text" class="reg-line reg-cont" :placeholder="regCont">
        <div class="reg-line reg-code" v-if="code">获取验证码</div>
    </div>
</template>
<script>
    export default {
        props:['reg-label','reg-cont','code']
    }
</script>
<style lang="scss">
    .reg-line{
        display: inline-block;
        vertical-align: middle;
        padding-top: 10px;
    }
    .reg-text{
        padding: 10px 20px;
        display: flex;
        border-bottom: 1px solid lightgray;
    }
    .reg-label{
        flex:1
    }
    .reg-cont{
        flex: 3;
        text-indent: 2rem;
    }
    .reg-code{
        right: 1rem;
        position: absolute;
        padding-left: .5rem ;
        color: green;
        border-left: 1px solid lightgray;
        padding-bottom: 10px;
    }
</style>