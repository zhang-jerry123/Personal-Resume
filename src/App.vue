<template>
  <div id="app">
    <!-- <div class="nav_bar">
    <navbar></navbar>
    </div> -->
    <router-view></router-view>
    <!-- <span class="top-btn" @click="scrollToTop" v-show="topBtn"></span> -->
  </div>
</template>


<script>
// import {logEvent} from "./view";
export default {
  name:'App',
  data(){
    return{
      // topBtn:false
    }
  },
  components:{
    // navbar
  },
  // methods:{
  //   initCNZZ(){
  //     const script = document.createElement('script');
  //     script.src = 'https://v1.cnzz.com/z_stat.php?id=1279741297&web_id=1279741297';
  //     script.language='JavaScript';
  //     script.id='cnzz';
  //     document.body.appendChild(script);
  //   }
  // },
  mounted(){
    const script = document.createElement('script')  
    script.src = `https://s95.cnzz.com/z_stat.php?id=1279741297&web_id=1279741297`  
    script.language = 'JavaScript'  
    document.body.appendChild(script) 
  },
  watch: {  
    '$route' () {
      if (window._czc) {
        let location = window.location
        let contentUrl = location.pathname + location.hash
        let refererUrl = '/'
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
      }82
    }
  }
}
</script>

<style>
#app{
  width: 100%;
  height: auto;
}
/* #app .top-btn{
  width: 30px;
  height: 54px;
  position: fixed;
  bottom: 15%;
  right: 6px;
  content: '';
  background: url('./assets/top.png') no-repeat;
  background-position: 0 0;
  background-size: 100%;
  cursor: pointer; 
}
#app .top-btn:hover{
  background-size: 0 100%;
} */
.nav_bar{width: 100%;height: 60px;}
</style>
