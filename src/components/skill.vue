<template>
    <div class="skill">
        <div class="container">
            <span class="tip">WHAT CAN I DO?</span>
            <h1 class="title">{{$t('m.Abilitytitle')}}</h1>
            <span class="border"></span>
            <div class="s_wrapper">
                <div class="progress-bar" v-for="(item,index) in skill" :key="index">
                    <progress-bar :skill="item"></progress-bar>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
import progressBar from '../components/progress-bar'
export default {
   name:'skill',
   data(){
       return{
           title:'My ability',
           skill:[
               {"type":"Html5","percent":"80%"},
               {"type":"ES6","percent":"70%"},
               {"type":"Less","percent":"70%"},
               {"type":"CSS3","percent":"70%"},
               {"type":"Sass","percent":"70%"},
               {"type":"VUE","percent":"60%"},
               {"type":"Python","percent":"60%"},
               {"type":"Webpack","percent":"60%"}
           ]
       }
   },
   components:{
       progressBar
   } 
}
</script>

<style scoped>
.skill{height: auto;width: 100%;margin: 0 auto;background-color: #f5f5f5;text-align: center;}
.container{height: auto;max-width: 1200px;margin: 0 auto;padding: 4% 0;}
.tip{display: inline-block;position: relative;padding: 6px 20px;margin: 0 auto 10px;font-size: 20px;background: #03a9f4;color: #fff;}
.tip:after{position: absolute;width: 0;height: 0;left: 42%;bottom: -10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
.title{padding: 6px 0 10px;font-family: 'Overlock',cursive;color: #2f2c06;font-size: 36px;}
.border{display: block;width: 20%;height: 1px;position: relative;margin: 0 auto 30px;background: #8c898c;}
.border:after{position: absolute;top: 0;left: 30%;content: '';width: 40%;height: 5px;margin-top: -2px;background: #03a9f4;}
.progress-bar{float: left;width: 50%;height: auto;padding: 0 40px;box-sizing: border-box;margin-top: 10px;}
</style>