<template>
    <div class="title">
        <h1>{{$t('m.Abilitytitle')}}</h1>
        <div class="wrapper">
        <div class="circle" v-for="(item,index) in skill" :key="index">
            <Circlecom :skill="item"></Circlecom>
        </div>
        <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Circlecom from './circle.vue'
export default {
    name:'ability',
    components:{
        Circlecom
    },
    data(){
        return{
            skill:[
                {"type":"HTTP5","percent":"80"},
                {"type":"CSS3","percent":"70"},
                {"type":"ES6","percent":"70"},
                {"type":"webpack","percent":"60"},
                {"type":"VUE","percent":"60"},
                {"type":"Less","percent":"60"},
                {"type":"Sass","percent":"70"},
                {"type":"Python","percent":"60"}
            ]
        }
    }
}
</script>
<style scoped>
.circle{width: 50%;float: left;height: auto;box-sizing: border-box;margin-top: 8px;margin-bottom: -20px;}
.title{padding:15px 0 65px;margin: 0 auto;width: 100%;height: auto;text-align: center;background-color: rgb(238, 237, 237);}
h1{width: 50%;font-family: Georgia, 'Times New Roman', Times, serif;font-size: 21;padding: 50px 5px 5px ;border-bottom: solid 2px #fff;margin: 0 auto;}
</style>