<template>
<div class="container">
    <div class="top">
        <transition>
            <div class="head">
                <div class="avator"><img src="../m_icon/head.jpg"></div>
            </div>
        </transition>
        <div class="info">
            <h1 class="name">{{$t('m.name')}}</h1>
            <h6 class="school">{{$t('m.school')}}</h6>
            <h6 class="major">{{$t('m.major')}}</h6>
        </div>
        <div class="down" @click="scroll"><img src="../m_icon/down.png"></div>
        <div class="text"><h2>{{$t('m.tip')}}</h2></div>
    </div>
</div>
</template>

<script>

export default {
    name:'top',
    methods:{
        scroll(){
            document.documentElement.scrollTop=560
        }
    }
}
</script>

<style scoped>
.container{width: 100%;height: 612px;}
.top{padding: 0 0;width: 100%;height: 210px;margin: 0 auto}
.head{padding: 0 0;margin: 0 auto;width: 100%;height: auto;}
.avator{width: 100%;height: 100px;position: absolute;top: 200px;}
.avator img{border:solid 1px rgb(204, 203, 203);width: 100px;height: 100px;border-radius: 50%;margin: 0 auto;display: flex;}

.info{padding: 0 0;margin: 0 auto;width: 100%;height: auto;color: rgb(122, 120, 120);align-items: center;position: absolute;top: 320px;}
.name{text-align: center;}
.school{text-align: center;}
.major{text-align: center;}
.down{top: 450px;position: absolute;width: 100%;}
.down img{width: 50px;height: 70px;margin: 0 auto;display: flex;}
.text{position: absolute;top:520px;width: 100%;}
h2{text-align: center;color: rgb(175, 169, 169);font-size: 15px;font-family: Verdana, Geneva, Tahoma, sans-serif, sans-serif;padding: 5px 15px;}
</style>