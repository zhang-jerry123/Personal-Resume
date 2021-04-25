<template>
    <div class="navbar">
        <div class="dropdown">
        <span class="menu" @click="Menulist"></span>
        <Menulist v-show="list" @pagechange="hiddenbar"></Menulist>
        </div>
        <h2>{{$t('m.title')}}</h2>
        <h3 @click="changeLanguage">CN/EN</h3>
    </div>
</template>
<script>
import Menulist from "./menu-list.vue"
export default {
    name:'Header',
    data(){
        return{
            list:false,
        }
    },
    methods:{
        Menulist(){
            this.list = this.list == false ? true:false
            console.log('click')
        },
        hiddenbar(n){
            this.list=n
        },
        changeLanguage(){
            if(this.$i18n.locale=='en-US'){
                this.$i18n.locale='zh-CN'
            }else{
                this.$i18n.locale='en-US'
            }
        }
    },
    components:{
        Menulist
    }
    
}
</script>

<style scoped>
h3{float: right;position: absolute;top:29px;right: 20px;font-size: 10px;color: rgb(235, 232, 232);border:solid transparent;background-color: rgb(58, 59, 59);border-radius: 10px;}
p{border-bottom: solid rgb(168, 166, 166) 1px;padding: 5px 6px;text-align: center;}
/* .dropdown:hover .dropdown_content{display: block;} */
.dropdown {position: relative;display: inline-block;}
.navbar{z-index: 999;position:fixed;display: fixed;left:0;top:0;width: 100%;height: 55px;background-color: rgb(173, 223, 224);}
.menu{float:left; position: absolute;top:10px; left:20px;width:36px;height: 36px; background: url('../m_icon/xiala.png') no-repeat;background-size: 50%;cursor: pointer;}
h2{flex: 1;display: flex;justify-content: center;align-items: center;text-align: center;font-family: 'Times New Roman', Times, serif;font-size: 21px;}
</style>