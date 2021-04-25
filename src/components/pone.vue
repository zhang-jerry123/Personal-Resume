<template>
    <div class="pone">
       <h2>{{$t('m.ProjectnameOne')}}</h2>
       <div class="content">
        <div class="first">
        <h4>{{$t('m.ProjectIntro')}}</h4>
        <h3>{{$t('m.ProjectIntroContent')}}</h3>
        </div>
        <div class="first">
        <h4>{{$t('m.ProjectTech')}}</h4>
        <h3>ES6, CSS3, HTML5, VueI18n, Vue2.0</h3>
        </div>
        <div class="first">
        <h4>{{$t('m.ProjectComment')}}</h4>
        <div class="more">
        <h3>{{$t('m.ProjectOne')}}</h3>
        <h3>{{$t('m.ProjectTwo')}}</h3>
        <h3>{{$t('m.ProjectThree')}}</h3>
        <h3>{{$t('m.ProjectFour')}}</h3>
        </div>
        </div>
       </div>
    </div>
</template>

<style scoped>

.pone{width: 100%;height:auto;display: flex;}
h2{width: 30%;text-align: center;margin-left: 30px;border-left: steelblue solid 3px;border-top: steelblue solid 1px;color:rgba(33, 95, 211, 0.836)}
.content{width:70%;text-align: center;}
.first{display: flex;}
h4{text-align: left;padding:0 30px 20px 30px;width: 80px;color: rgb(79, 144, 218);}
h3{text-align: left;color: rgb(94, 92, 92);}

</style>
