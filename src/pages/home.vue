<template>
    <div class="home">
      <div class="content">
        <navbar></navbar>
        <top>
            <vue-particles
            color="#ffffff"
            :particlyOpacity="0.7"
            linesColor="#ffffff"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="5"
            :linesWidth="2"
            :linesLinked="true"
            :lineOpacity="0.4"
            :linesDistance="2"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            >
            </vue-particles>
        </top>
        <span class="top-btn" @click="scrollToTop" v-show="topBtn"></span>
        <!-- <about/> -->
        <experience/>
        <skill/>
        <project/>
        <bottom/>
      </div>
    </div>
</template>

<script>
import top from '../components/top'
import bottom from '../components/bottom'
// import about from '@/components/about'
import experience from '../components/experience'
import skill from '../components/skill'
import project from '../components/project'
import Navbar from '../components/navbar.vue'
export default {
    name:'home',
    data(){
        return{
            topBtn:false
        }
    },
    components:{
        top,
        bottom,
        // about,
        experience,
        skill,
        project,
        Navbar
    },
    mounted(){
    setTimeout(()=>{
      this.scrollToTop()
      window.addEventListener('scroll',this.scroll)
    },20)
    },
  methods:{
    scrollToTop(){
      document.documentElement.scrollTop=0//当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0
    },
    scroll(){
      this.topBtn = document.documentElement.scrollTop>document.documentElement.clientHeight? true:false
    }
  }
   
}
</script>

<style scoped>
.home{
    min-width: 1200px;
    height: auto;
    background-color: rgb(226, 226, 218);
}
.content{
  width: 80%;
  margin: 0 auto;
  scroll-behavior: smooth;
}
.top-btn{
  width: 30px;
  height: 54px;
  position: fixed;
  bottom: 15%;
  right: 6px;
  content: '';
  background: url('../assets/top.png') no-repeat;
  background-position: 0 0;
  background-size: 100%;
  cursor: pointer; 
}
.top-btn:hover{
  background-size: 0 100%;
}
</style>