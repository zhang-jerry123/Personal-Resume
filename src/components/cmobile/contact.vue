<template>
    <div class="contact">
        <h1>{{$t('m.Contacttitle')}}</h1>
        <div class="info">
            <img src="../m_icon/head.jpg">
            <dl>
                <dt>{{$t('m.emailtip')}}</dt>
                <dd>{{$t('m.emailname')}}:<a href="mailto:***@gmail.com">***@gmail.com</a></dd>
                <dd>Wechat number:{{$t('m.wechatnumber')}}</dd>
            </dl>
            <p id='cnzz_box'></p>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        // document.querySelector("#cnzz_box").append(document.querySelector("#cnzz_stat_icon_1279741297"));
    }
    
}
</script>

<style scoped>
.info{padding-top: 30px;}
dl{padding-top: 20px;}
img{width: 100px;height: 100px;border-radius: 50%;border: solid  rgb(204, 203, 203) 1px;}
.contact{width: 100%;height: auto;background-color: rgb(238, 237, 237);text-align: center;padding: 15px 0 65px;margin: 0 auto;}
h1{width: 50%;font-family: Georgia, 'Times New Roman', Times, serif;font-size: 21;padding: 50px 5px 5px ;border-bottom: solid 2px #fff;margin: 0 auto;}
</style>