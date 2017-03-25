<template>
    <div id="app">
        <div id="img">
            <img src="./assets/logo.png">
        </div>
        <input-text placeholder="请输入您的姓名" tag="glyphicon-user"></input-text>
        <input-text placeholder="请输入具体地址" tag="glyphicon-tags"></input-text>
        <input-text placeholder="请输入您的手机号" tag="glyphicon-phone"></input-text>
        <input-text placeholder="请输入6位验证码" tag="glyphicon-unchecked" data-button="获取"></input-text>
        <input-text placeholder="请选择送水站" tag="glyphicon-home" drop-down="true"></input-text>
        <button class="submit">确认</button>

    </div>
</template>

<script>
    import InputText from './components/InputText.vue'

    export default {
        name: 'app',
        components: {InputText}
    }
</script>

<style>
    body,html{
        margin: auto;
        width: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        position: relative;
        margin-top: 30px;
    }
    #img{
        width: 100px;
        height: 100px;
        margin: 35px auto;
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .submit{
        width: 60%;
        background-color: rgb(30,180,255);
        border: 0;
        border-radius: 3px;
        color: white;
        height: 32px;
        margin-top: 10px;
    }
    .submit:hover{
        cursor: pointer;
    }
</style>
