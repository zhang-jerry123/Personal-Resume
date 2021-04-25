<template>
    <div class="Ptwo">
       <h2>{{$t('m.ProjectnameTwo')}}</h2>
       <div class="content">
        <div class="first">
        <h4>{{$t('m.ProjectIntro')}}</h4>
        <h3>{{$t('m.ProjectTwoContent')}}</h3>
        </div>
        <div class="first" id="two">
        <h4>{{$t('m.ProjectTech')}}</h4>
        <h3 >Python3, Numpy, Pandas, Sklearn, Collabrative filtering</h3>
        </div>
        <div class="first">
        <h4>{{$t('m.ProjectComment')}}</h4>
        <div class="more">
        <h3>{{$t('m.ProjectTwoAchieve')}}</h3>
        <h3>{{$t('m.ProjectTwoAchievesec')}}</h3>
        </div>
        </div>
       </div>
    </div>
</template>

<style scoped>
.Ptwo{width: 100%;height:auto;display: flex;}
h2{width: 30%;text-align: center;margin-left: 30px;border-left: steelblue solid 3px;border-top: steelblue solid 1px;color:rgba(33, 95, 211, 0.836)}
.content{width:70%;text-align: left;}
.first{display: flex;}
h4{text-align: left;padding:0 30px 20px 30px;width: 80px;color: rgb(79, 144, 218);}
h3{text-align: left;color: rgb(94, 92, 92);}
#two{padding-top: 20px;}
/* #over{padding-left: 17px;padding-right: 50px;} */
</style>