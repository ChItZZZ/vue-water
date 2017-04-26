<template>
    <div id="home-container">
        <div id="img">
            <img src="../assets/logo.png">
        </div>
        <div v-if="createdSuccess" class="alert alert-success success-div" role="alert">
            成功创建订单!
        </div>
        <div v-if="!createdSuccess">
            <div class="home-location">
                <div class="home-label">配送至：</div>
                <div class="home-text">{{apartment}}</div>
            </div>
            <div class="home-location">
                <div class="home-label"></div>
                <div class="home-text">{{location}}</div>
            </div>
            <div><button class="home-btn" @click = "orderWater">一键订水</button></div>
        </div>
        <router-link to="/Register" class="home-to">编辑默认地址</router-link>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                apartment:'',
                location:'',
                createdSuccess:false,
            }
        },
        created:function(){
            var info = global.Info
            this.apartment = info.apart
            this.location = info.location
        },
        methods:{
            orderWater:function(){
                var info = global.Info
                var obj={
                    userid:info.userid,
                    apartment:info.apart,
                    location:info.location
                }
                var url="http://localhost:18080/tongji/order/OrderCreation";
                this.$http.post(url, obj ,{method:'post'}).then((response) => {
                    var body = response.body
                    if(body.key === 'success'){
                        this.createdSuccess = true;
                    }else{
                        console.log(body.errMsg)
                    }
                },(response)=>{
                    this.$router.push({path:'/home',params:{a:111}})
                    console.log('erron msg: '+response)
                })
            }
        }
    }
</script>
<style>
    #home-container{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        position: relative;
    }
    #img{
        width: 100px;
        height: 100px;
        margin: 4rem auto;
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .success-div{
        margin-left:2rem;
        margin-right:2rem;
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
        position:absolute;
        bottom:20px;
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