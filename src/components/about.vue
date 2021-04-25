<template>
    <div class="about">
        <div class="container">
            <span class="tip">Who am I?</span>
            <h1 class="title">{{title}}</h1>
            <span class="border one"></span>
            <div class="a_info">
                <swiper :options="swiperOption" ref="mySwiper"> 
                  <swiper-slide>
                      <p> master in data science</p>
                  </swiper-slide>
                  <swiper-slide>
                      <p> master in data science</p>
                  </swiper-slide>
                  <swiper-slide>
                      <p> master in data science</p>
                  </swiper-slide>
                  <swiper-slide>
                      <p> master in data science</p>
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
        </div>
    </div>
</template>
<script>
// const redirectPath = /Android|webOS|iPhone|BlackBerry|iPad/i.test(navigator.userAgent)?'/m_index':'/p_index';
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
// if (redirectPath==='/m_index'){
//     // require('../pCSS/about.css')
//     console.log('mobile')
// }else{
//     console.log('pc')
//     require('../pCSS/about.css')
// }
export default {
  name:'about',
  data(){
      return{
          title: 'profile',
          swiperOption:{
              spaceBetween:30,
              centeredSlide:true,
              autoplay:{
                  delay:2500,
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
          }
      }
  },
  components:{
      swiper,
      swiperSlide
  }
}
</script>

<style scoped>
.about{height: auto;width: 100%;margin: 0 auto;background-color: #f5f5f5;text-align: center;}
  .container{height: auto;max-width: 1200px;margin: 0 auto;padding:4% 0;}
  .tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
  .title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #2F2C06;font-size: 36px;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}
  .a_info{font-size: 20px;}
  .swiper-container{width: 100%;height: 300px;line-height: 300px;overflow: hidden;text-align: center;}
  .swiper-pagination{top:46%;}
</style>