<template>
    <div id="reg-container">
        <div id="reg-img"></div>
        <form id="reg-form">
            <reg-input regLabel="学校/小区" regCont="请输入地址"></reg-input>
            <reg-input regLabel="详细地址" regCont="楼宇门派/寝室号"></reg-input>
            <reg-input regLabel="手机号" regCont="请输入手机号"></reg-input>
            <reg-input regLabel="验证码" regCont="6位验证码"></reg-input>
        </form>
    </div>
</template>
<script>
    import RegInput from '../components/RegInput.vue'
    export default {
        components:{RegInput},
        data(){

        }
    }
</script>
<style lang="scss">
    #reg-container{
        display: flex;
        flex-direction: column;
        #reg-img{
            flex:1
        }
        #reg-form{
            flex: 4;
        }
    }


</style>