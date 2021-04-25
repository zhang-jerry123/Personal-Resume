<template>
    <div class="project">
        <div class="container">
            <span class="tip">What I Have Done</span>
            <h1 class="title">{{$t('m.Projecttitle')}}</h1>
            <span class="border"></span>
            <!-- <ul v-show="p1==true">
                <li @click="btnp1">
                    <div><h2>{{$t('m.ProjectnameOne')}}</h2></div>
                </li>
                <li @click="btnp2"><h2>{{$t('m.ProjectnameTwo')}}</h2></li>
                <div class="clearfix"></div>
            </ul> -->
            <div class="a_info">
                <div>
                <swiper :options="swiperOption" ref="mySwiper"> 
                  <swiper-slide> 
                      <p class="abc"> {{$t('m.ProjectnameOne')}}</p>
                  </swiper-slide>
                  <swiper-slide>
                      <p> {{$t('m.ProjectnameTwo')}}</p>
                  </swiper-slide>
                <template v-slot:pagination>
                <div class="swiper-pagination"></div>
                </template>
                <template v-slot:button-prev>
                <div class="swiper-button-prev"></div>
                </template>
                <template v-slot:button-next>
                <div class="swiper-button-next"></div>
                </template>
                </swiper>
                </div>
                <div class="content">
                    <Pone ></Pone>
                    <br>
                    <Ptwo ></Ptwo>
                </div>
                <!-- <ul v-show="abc==true">
                    <li>
                    <h2>{{$t('m.ProjectnameOne')}}</h2>
                    <div class="done">
                    <div class="pone">
                    <h4>{{$t('m.ProjectIntro')}}</h4>
                    <h3>{{$t('m.ProjectIntroContent')}}</h3>
                    </div>
                    <div class="ptwo">
                    <h4>{{$t('m.ProjectTech')}}</h4>
                    <h3>ES6, CSS3, HTML5, VueI18n, Vue2.0</h3>
                    </div>
                    <br>
                    <h4>{{$t('m.ProjectComment')}}</h4>
                    <h3>{{$t('m.ProjectOne')}}</h3>
                    <h3>{{$t('m.ProjectTwo')}}</h3>
                    <h3>{{$t('m.ProjectThree')}}</h3>
                    <h3>{{$t('m.ProjectFour')}}</h3>
                    </div>
                    </li> -->
                    <!-- <li>
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
                    </li> -->

                <!-- </ul> -->
            </div>
        </div>
    </div>
</template>

<script>
import Ptwo from './ptwo.vue'
import Pone from './pone.vue'
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:"project",
    data(){
        return{
            show:false,
            swiperOption:{
              spaceBetween:30,
              centeredSlide:true,
              autoplay:{
                  delay:5000,
                  disableOnIntercation:false
              },
              pagination:{
                  el:'.swiper-pagination',
                  clickable:true
              },
              navigation:{
                  nextEl:'.swiper-button-next',
                  prevEl:'.swiper-button-prev'
              }
          },
        }
    },
    methods:{
        menuChange(){
            if (this.show=='false'){
                this.show='true'
            }else{
                this.show='false'
            }
            console.log('sdsk')
        }
    },
    components:{
      swiper,
      swiperSlide,
      Pone,
      Ptwo
  },
}
</script>
<style scoped>

h4{border-left: 3px solid  rgb(157, 207, 248);padding: 0 0 0 5px;}
.done{display: block;padding: 15px 10px 15px 20px;color:  rgb(100, 98, 98);}
h2{font-size: 20px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;color: rgb(27, 173, 231);text-align: center;}
.project{height: auto;width: 100%;margin:0 auto;background-color: #fff;text-align: center;}
.container{height: auto;max-width: 1200px;margin: 0 auto;padding: 4% 0;}
.tip{display: inline-block;position: relative;padding: 6px 20px;margin: 0 auto 10px;font-size: 20px;background: #03a9f4;color: #fff;}
.tip:after{position:absolute;width: 0;height: 0;left: 42%;bottom: -10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color:#03a9f4 transparent;}
.title{padding: 6px 0 10px;font-family: 'Overlock',cursive;color: #2f2c06;font-size: 36px;}
.border{display: block;width: 20%;height: 1px;position: relative;margin: 0 auto 30px;background: #8c8989;}
.border:after{position: absolute;top:0;left: 30%;content: '';width: 40%;height: 5px;margin-top: -2px;background:#03a9f4;}

ul{width: 100%;padding: 4% 0;}
ul li{display: inline-block;width: 80%;margin-right: 5%;height: 80%;box-sizing: border-box;transition: transform 0.25s ease;text-align: left;vertical-align: top;}
/* ul li img{width: 100%; display: block;} */
/* ul li:hover{z-index: 100;transform: scale(1.1);box-shadow: 0 8px 17px 0 rgba(0,0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);} */

.swiper-container{width: 100%;height: 300px;line-height: 300px;overflow: hidden;text-align: center;}
.swiper-pagination{top:40%;}
p{color: rgb(14, 112, 224);font-size: 25px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;cursor: pointer;}
</style>