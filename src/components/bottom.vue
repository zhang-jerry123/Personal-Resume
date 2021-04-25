<template>
    <div class="bottom">
        <div class="container">
            <span class="tip">Contact Me!</span>
            <h1 class="title">{{$t('m.Contacttitle')}}</h1>
            <span class="border"></span>
            <div class="content">
                <img src="../assets/head.jpg">
                <dl id='1'>
                    <dt>{{$t('m.emailtip')}}</dt>
                    <dd>Mail:<a href="***@gmail.com">***</a></dd>
                    <dd>Wechat number:{{$t('m.wechatnumber')}}</dd>
                </dl>
                <p id="cnzz_box"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'bottom',
    data(){
        return{
            title:"Contact Me",
        }
    },
    mounted(){
        // document.querySelector("#cnzz_box").append(document.querySelector("#cnzz_stat_icon_1279741297"));
    }
}
</script>
<style scoped>
.bottom{height: auto;width: 100%;margin:0 auto;background-color: #333333;background: url('../assets/page2.jpg') no-repeat center top;background-size: cover;padding: 4% 0;}
.container{max-width: 1200px;margin: 0 auto;text-align: center;}
.tip{display: inline-block;padding: 6px 20px;position: relative;margin: 0 auto 10px;font-size: 20px;background-color: #03a9f4;color: #fff;}
.tip:after{position: absolute;width: 0;height: 0;left: 42%;bottom: -10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
.title{padding: 6px 0 10px;font-family: 'Overlock',cursive;color: #fff;font-size: 36px;}
.border{display: block;width: 20%;height: 1px;position: relative;margin: 0 auto 30px;background: #8c8989}
.border:after{position: absolute;top:0;left: 30%;width: 40%;content: '';height: 5px;margin-top: -2px;background: #03a9f4;}

.content{width: 45%;margin: 0 auto;background: #f5f5f5;border-radius: 10px;box-shadow:0 8px 17px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);}
.content img{width: 30%;height: auto;margin: 30px 0;border-radius: 50%;}
.content dl{border-top: 1px solid rgb(214, 212, 212);position: relative;padding-bottom: 20px;}
.content dl:after{position: absolute;top: 8%;left: 48%;content: "";width: 16px;height: 16px;background: url('../assets/email.png') no-repeat;background-size: 100% auto;}
.content dt{font-size: 16px;margin: 30px 0 10px;}
.content dd{font-size: 18px;color: #999;margin-top: 10px;}
.content dd a{font-size: 16px;color: #00a78e;}

</style>