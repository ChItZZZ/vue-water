<template>
    <div id="home-container">
        <div id="home-img"></div>
        <div class="home-location">
            <div class="home-label">配送至：</div>
            <div class="home-text">同济大学（四平路校区）</div>
        </div>
        <div class="home-location">
            <div class="home-label"></div>
            <div class="home-text">西南八555</div>
        </div>

        <div><button class="home-btn">一键订水</button></div>
        <router-link to="/" class="home-to">编辑默认地址</router-link>
    </div>
</template>
<script>
    export default {
        data(){

        }
    }
</script>
<style>
    #home-container{

    }
    #home-img{
        min-height: 14rem;
    }
    .home-btn{
        width: 80%;
        height: 2rem;
        background-color: rgb(74,171,75);
        border-radius: 4px;
        border:0;
        color: white;
        font-size: .7rem;
        margin-top: 2.2rem;
    }
    .home-to{
        display: inline-block;
        margin-top: 1rem;
    }
    .home-location{
        display: flex;
        padding: .4rem 1.8rem;
    }
    .home-text{
        flex:3;
        text-align: left;
        text-indent: .5rem;

    }
    .home-label{
        flex: 1;
    }

</style>