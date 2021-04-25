<template>
<div class="project">
    <h1>{{$t('m.Projecttitle')}}</h1>
    <div class="content">
    <h2>{{$t('m.ProjectnameOne')}}</h2>
    <div class="done">
    <h4>{{$t('m.ProjectIntro')}}</h4>
    <h3>{{$t('m.ProjectIntroContent')}}</h3>
    <br>
    <h4>{{$t('m.ProjectTech')}}</h4>
    <h3>ES6, CSS3, HTML5, VueI18n, Vue2.0</h3>
    <br>
    <h4>{{$t('m.ProjectComment')}}</h4>
    <h3>{{$t('m.ProjectOne')}}</h3>
    <h3>{{$t('m.ProjectTwo')}}</h3>
    <h3>{{$t('m.ProjectThree')}}</h3>
    <h3>{{$t('m.ProjectFour')}}</h3>
    </div>
    <h2>{{$t('m.ProjectnameTwo')}}</h2>
    <div class="done">
    <h4>{{$t('m.ProjectIntro')}}</h4>
    <h3>{{$t('m.ProjectTwoContent')}}</h3>
    <br>
    <h4>{{$t('m.ProjectTech')}}</h4>
    <h3>Python3, Numpy, Pandas, Sklearn, Collabrative filtering</h3>
    <br>
    <h4>{{$t('m.ProjectComment')}}</h4>
    <h3>{{$t('m.ProjectTwoAchieve')}}</h3>
    <h3>{{$t('m.ProjectTwoAchievesec')}}</h3>
    </div>
    </div>
</div>
</template>

<style scoped>
h4{border-left: 3px solid rgb(52, 177, 235);padding-left: 10px;}
h2{font-size: 17px;font-family: 'Courier New', Courier, monospace;color: rgb(100, 98, 98);}
.done{padding: 15px 10px 15px 20px;text-align: left;color:  rgb(100, 98, 98);}
.content{padding: 30px 2px 30px;}
.project{width: 100%;height: auto;text-align: center;background-color:rgb(231, 229, 229);}
h1{width: 50%;font-family: Georgia, 'Times New Roman', Times, serif;font-size: 21;padding: 50px 5px 5px ;border-bottom: solid 2px #fff;margin: 0 auto;}
</style>