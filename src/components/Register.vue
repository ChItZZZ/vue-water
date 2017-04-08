<template>
    <div id="reg-container">
        <div id="reg-img"></div>
        <form id="reg-form">
            <reg-input regLabel="学校/小区" regCont="请输入地址"></reg-input>
            <reg-input regLabel="详细地址" regCont="楼宇门派/寝室号"></reg-input>
            <reg-input regLabel="手机号" regCont="请输入手机号"></reg-input>
            <reg-input regLabel="验证码" regCont="6位验证码" code="true"></reg-input>
        </form>
        <button id="reg-btn">注册</button>
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
        flex-direction: column;
        justify-content: center;
        text-align: center;
        #reg-img{
            min-height: 8rem;
        }
        #reg-form{
            padding: 0 .7rem;
            border-top: 1px solid lightgray;
            border-bottom: 1px solid lightgray;
        }
        #reg-btn{
            width: 80%;
            height: 2rem;
            background-color: rgb(74,171,75);
            border-radius: 4px;
            border:0;
            color: white;
            font-size: .7rem;
            margin-top: 2.2rem;

        }
    }


</style>