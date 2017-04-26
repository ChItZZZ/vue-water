<template>
    <div id="app-container">
      <div v-show="createSuccess">
        <div id="img">
            <img src="./assets/logo.png">
        </div>
        <div class="alert alert-success" role="alert">订单提交成功</div>
      </div>
      <div v-show="!createSuccess">

        <div id="img">
            <img src="./assets/logo.png">
        </div>
        <input-text placeholder="请输入您的姓名" tag="glyphicon-user" ref="name" ></input-text>

        <select-text placeholder="学校/校区/写字楼" tag="glyphicon-home" v-bind:options="options_apart" ref="apartment" v-on:child-tell-me-something='listenToMyBoy_apart'></select-text>

        <input-text placeholder="详细地址" tag="glyphicon-tags" ref="location" ></input-text>
        <input-text placeholder="请输入您的手机号" tag="glyphicon-phone"  data-button="获取" ref="phone" ></input-text>
        <input-text placeholder="请输入6位验证码" tag="glyphicon-unchecked" ref="codes" ></input-text>

        <!--<select-text placeholder="请选择送水站" tag="glyphicon-oil" v-bind:options="options_station" v-on:child-tell-me-something='listenToMyBoy_station' ref="station"></select-text>-->

        <button class="submit" @click = "getValidation">确认</button>
      </div>
    </div>
</template>


<script>
    import InputText from './components/InputText.vue'
    import SelectText from './components/SelectText.vue'

    export default {
        name: 'app',
        components: {InputText,SelectText},
        data:function(){
            return {
                createSuccess:false,
                select_apart:'',
                options_apart:[
                    { text: '同济（本部）', value: '同济本部' },
                    { text: '同济22（本部）', value: '同济本部22' }
                ],
                select_station:'',
                options_station:[
                    { text:'同济本部送水站', value:'1'}
                ]
            }
        },
        methods:{
            listenToMyBoy_apart:function(selected){
                this.select_apart = selected
            },
            listenToMyBoy_station:function(selected){
                this.select_station = selected
            },
            isNull:function( str ){
                if ( str == "" ) return true;
                var regu = "^[ ]+$";
                var re = new RegExp(regu);
                return re.test(str);
            },
            isPhone:function( phone ){
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(myreg.test(phone) && phone.length==11)
                {
                    return true;
                }
                return false;
            },
            validateBeforeSubmit:function(){
                var name,apartment,location,phone,codes,station;
                name = this.$refs.name.inputVal;
                apartment = this.select_apart;
                location = this.$refs.location.inputVal;
                phone = this.$refs.phone.inputVal;
                station = this.select_station;
                if(this.isNull(name)){
                    alert('请输入您的姓名')
                    return false;
                }
                if(this.isNull(apartment)){
                    alert('请选择地址')
                    return false;
                }
                if(this.isNull(location)){
                    alert('请输入详细地址')
                    return false;
                }
                if(!this.isPhone(phone)){
                    alert('请输入正确的手机号并验证')
                    return false;
                }
                if(this.isNull(station)){
                    alert('请选择送水站')
                    return false;
                }
                if(this.isNull(location)){
                    alert('请输入详细地址')
                    return false;
                }

                return true;
            },
            getValidation:function(event){
                var validation = this.validateBeforeSubmit();
                if(validation){
                    var name,apartment,location,phone,codes,station,obj = {};
                    name = this.$refs.name.inputVal;
                    apartment = this.select_apart;
                    location = this.$refs.location.inputVal;
                    phone = this.$refs.phone.inputVal;
                    station = this.select_station;
                    obj = {
                        username:name,
                        apartment:apartment,
                        location:location,
                        tel:phone,
                        station:station
                    }
                    var url="http://localhost:3000/user/order/new";
                    this.$http.post(url, obj).then((response) => {
                        var body = response.body
                        if(body.key === 'success'){
                            this.createSuccess = true;
                            console.log(body.key)
                        }else{
                            console.log(body.errMsg)
                        }
                    },(response)=>{
                        console.log('erron msg: '+response)
                    })
                }
            }
        }
    }
</script>

<style scoped>
    body,html{
        margin: auto;
        width: 100%;
    }
    #app-container {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        position: relative;
    }
    option {
       width: 50%;
       display:block;
    }
    #img{
        width: 100px;
        height: 100px;
        margin: 0px auto;
        padding: 10px 0;
        box-sizing: border-box;
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .submit{
        width: 60%;
        background-color: rgb(74,171,75);
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
