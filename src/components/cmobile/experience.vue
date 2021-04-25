<template>
    <div class="experience">
        <h1>{{$t('m.Experiencetitle')}}</h1>
        <div class="exp1">
            <span class="pic"><img src="../m_icon/u1.png"></span>
            <h2>2015-2019</h2>
            <h3>{{$t('m.bachalar')}}</h3>
            <h4>{{$t('m.majorname')}}:{{$t('m.bachalarmajor')}}</h4>
        </div>
        <div class="exp2">
            <span class="pic"><img src="../m_icon/u2.png"></span>
            <h2>2020-2022</h2>
            <h3>{{$t('m.master')}}</h3>
            <h4>{{$t('m.majorname')}}: {{$t('m.mastermajor')}}</h4>
        </div>
    </div>
</template>

<style scoped>
/* .exp2{padding: 10px 10px;}
.exp1{padding: 10px 10px;} */
/* .left1{width: 20%;float: left;height:50px;border: solid;} */
.exp1{padding-top: 20px;}
.exp2{padding-top: 10px;}
.exp2 img{width: 130px;height:70px;}
.exp1 img{width: 80px;height: 80px;}
h1{width: 50%;font-family: Georgia, 'Times New Roman', Times, serif;font-size: 21;padding: 50px 5px 5px ;border-bottom: solid 2px #fff;margin: 0 auto;}
.experience{padding:15px 0 65px;margin: 0 auto;width: 100%;height: auto;text-align: center;background-color: rgb(231, 229, 229);}
</style>