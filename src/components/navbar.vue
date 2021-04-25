<template>
    <div class="navbar">
        <h1 @click="changelanguage">EN/CN</h1>
        <ul>
            <!-- <li class="nav"><h2 @click="scrollToabout">About</h2></li> -->
            <li class="nav" ><h2 @click="scrollToexperience">{{$t('m.menuExperience')}}</h2></li>
            <li class="nav"><h2 @click="scrollToability">{{$t('m.menuAbility')}}</h2></li>
            <li class="nav"><h2 @click="scrollToproject">{{$t('m.menuProject')}}</h2></li>
            <li class="nav"><h2 @click="scrollTocontact">{{$t('m.menuContact')}}</h2></li>
            <div class="clearfix"></div>
        </ul>
    </div>
</template>

<script>
export default {
    name:'navbar',
    methods:{
        // scrollToabout(){
        //     document.documentElement.scrollTop=700;
        // },
        scrollToexperience(){
            document.documentElement.scrollTop=550;
        },
        scrollToability(){
            document.documentElement.scrollTop=1000;
        },
        scrollToproject(){
            document.documentElement.scrollTop=1500;
        },
        scrollTocontact(){
            document.documentElement.scrollTop=3000;
        },
        changelanguage(){
            if(this.$i18n.locale=='en-US'){
                this.$i18n.locale='zh-CN'
            }else{
                this.$i18n.locale='en-US'
            }
        }
    }
}
</script>

<style scoped>
h1{float: right;cursor: pointer;font-size: 10px;border-radius: 20px;background-color:rgb(222, 223, 219) ;border:solid #fff;margin: 8px 0;}
.navbar{z-index:999;left:0;top:0;width: 100%; height:55px;text-align: center;background-color:rgb(228, 226, 226);}
ul{display: inline-block;} 
li{float: left;border: solid 1px #fff;border-radius: 10px;margin: 0 10px;width: 100px;background-color: rgb(222, 223, 219);}
li h2{ display: block;color:rgb(105, 104, 104);text-align: center;padding: 14px 13px;}
li h2:hover{color: #fff ;background-color: rgb(56, 55, 55);border: 5px;border-color: transparent;border-radius: 10px;}

</style>